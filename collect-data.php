<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    // 基础数据验证
    if (!isset($input['events']) || !is_array($input['events'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid data format']);
        exit;
    }
    
    // 匿名化处理 - 移除个人身份信息
    $anonymizedData = array_map(function($event) {
        unset($event['ip']); // 移除IP
        unset($event['userAgent']); // 移除详细用户代理
        if (isset($event['screen'])) {
            $event['screen'] = preg_replace('/\d+/', 'X', $event['screen']); // 模糊化屏幕尺寸
        }
        return $event;
    }, $input['events']);
    
    // 保存到文件（生产环境建议用数据库）
    $filename = 'analytics/' . date('Y-m-d') . '.json';
    if (!file_exists('analytics')) {
        mkdir('analytics', 0755, true);
    }
    
    $existingData = [];
    if (file_exists($filename)) {
        $existingData = json_decode(file_get_contents($filename), true) ?: [];
    }
    
    $existingData = array_merge($existingData, $anonymizedData);
    file_put_contents($filename, json_encode($existingData, JSON_PRETTY_PRINT));
    
    echo json_encode(['success' => true, 'received' => count($anonymizedData)]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>