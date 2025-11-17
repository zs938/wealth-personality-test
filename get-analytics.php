<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// 简单的身份验证（生产环境应该更安全）
$valid_token = 'your_analytics_token_here';
if (!isset($_GET['token']) || $_GET['token'] !== $valid_token) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

function loadAnalyticsData() {
    $analyticsData = [];
    $files = glob('analytics/*.json');
    
    foreach ($files as $file) {
        $content = file_get_contents($file);
        $data = json_decode($content, true);
        if (is_array($data)) {
            $analyticsData = array_merge($analyticsData, $data);
        }
    }
    
    return $analyticsData;
}

function generateStats($data) {
    $totalViews = 0;
    $completedTests = 0;
    $personalityDistribution = [];
    $dailyActivity = [];
    $versionUsage = [];
    $totalDuration = 0;
    $completionCount = 0;
    $recentActivity = [];
    
    foreach ($data as $event) {
        // 统计页面浏览
        if ($event['type'] === 'page_view') {
            $totalViews++;
            
            // 按日期统计
            $date = date('Y-m-d', strtotime($event['timestamp']));
            if (!isset($dailyActivity[$date])) {
                $dailyActivity[$date] = ['views' => 0, 'completions' => 0];
            }
            $dailyActivity[$date]['views']++;
        }
        
        // 统计测试完成
        if ($event['type'] === 'test_completion') {
            $completedTests++;
            $completionCount++;
            
            // 人格类型分布
            $personality = $event['personalityType'] ?? 'unknown';
            $personalityDistribution[$personality] = ($personalityDistribution[$personality] ?? 0) + 1;
            
            // 版本使用情况
            $version = $event['version'] ?? 'unknown';
            $versionUsage[$version] = ($versionUsage[$version] ?? 0) + 1;
            
            // 测试时长
            if (isset($event['duration'])) {
                $totalDuration += $event['duration'];
            }
            
            // 按日期统计完成数
            $date = date('Y-m-d', strtotime($event['timestamp']));
            if (!isset($dailyActivity[$date])) {
                $dailyActivity[$date] = ['views' => 0, 'completions' => 0];
            }
            $dailyActivity[$date]['completions']++;
        }
        
        // 最近活动（最近50条）
        if (count($recentActivity) < 50) {
            $recentActivity[] = [
                'timestamp' => $event['timestamp'],
                'type' => $event['type'],
                'details' => $event
            ];
        }
    }
    
    // 按日期排序
    krsort($dailyActivity);
    
    // 计算完成率
    $completionRate = $totalViews > 0 ? round(($completedTests / $totalViews) * 100, 1) : 0;
    
    // 计算平均时长
    $avgDuration = $completionCount > 0 ? $totalDuration / $completionCount : 0;
    
    return [
        'totalViews' => $totalViews,
        'completedTests' => $completedTests,
        'completionRate' => $completionRate,
        'avgDuration' => $avgDuration,
        'personalityDistribution' => $personalityDistribution,
        'dailyActivity' => $dailyActivity,
        'versionUsage' => $versionUsage,
        'recentActivity' => $recentActivity
    ];
}

try {
    $analyticsData = loadAnalyticsData();
    $stats = generateStats($analyticsData);
    
    echo json_encode([
        'success' => true,
        'data' => $stats,
        'totalRecords' => count($analyticsData),
        'lastUpdated' => date('Y-m-d H:i:s')
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to generate analytics',
        'message' => $e->getMessage()
    ]);
}
?>