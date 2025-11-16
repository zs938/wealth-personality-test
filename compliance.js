// compliance.js - 数据收集和合规处理

class DataComplianceManager {
    constructor() {
        this.userConsent = {
            dataCollection: false,
            dataAnalysis: false,
            dataStorage: false
        };
        this.userData = this.loadUserData();
        this.initializeConsentManagement();
    }

    // 初始化同意管理
    initializeConsentManagement() {
        // 检查同意书状态
        const consentGiven = localStorage.getItem('wealth_test_consent');
        if (consentGiven === 'true') {
            document.getElementById('consent-page').classList.remove('active');
            document.getElementById('home-page').classList.add('active');
        }

        // 同意书复选框事件
        const checkboxes = document.querySelectorAll('.consent-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', this.updateConsentButton.bind(this));
        });

        // 同意按钮事件
        document.getElementById('consent-agree').addEventListener('click', () => {
            this.giveConsent();
        });

        // 暂不参与事件
        document.getElementById('consent-decline').addEventListener('click', () => {
            this.declineConsent();
        });

        // 数据管理事件
        document.getElementById('data-management')?.addEventListener('click', () => {
            this.showDataManagement();
        });

        document.getElementById('clear-data')?.addEventListener('click', () => {
            this.clearUserData();
        });

        document.getElementById('export-data')?.addEventListener('click', () => {
            this.exportUserData();
        });

        document.getElementById('view-history')?.addEventListener('click', () => {
            this.showTestHistory();
        });

        document.getElementById('back-to-result')?.addEventListener('click', () => {
            this.hideDataManagement();
        });
    }

    // 更新同意按钮状态
    updateConsentButton() {
        const consentData = document.getElementById('consent-data').checked;
        const consentAnalysis = document.getElementById('consent-analysis').checked;
        const consentStorage = document.getElementById('consent-storage').checked;
        
        const agreeButton = document.getElementById('consent-agree');
        agreeButton.disabled = !(consentData && consentAnalysis && consentStorage);
    }

    // 给予同意
    giveConsent() {
        this.userConsent = {
            dataCollection: document.getElementById('consent-data').checked,
            dataAnalysis: document.getElementById('consent-analysis').checked,
            dataStorage: document.getElementById('consent-storage').checked
        };

        // 存储同意状态
        localStorage.setItem('wealth_test_consent', 'true');
        localStorage.setItem('wealth_test_consent_details', JSON.stringify(this.userConsent));
        
        // 记录同意时间
        const consentRecord = {
            timestamp: new Date().toISOString(),
            consent: this.userConsent,
            ipHash: this.hashData(this.getUserIP())
        };
        
        this.saveToHistory('consent', consentRecord);
        
        // 跳转到首页
        document.getElementById('consent-page').classList.remove('active');
        document.getElementById('home-page').classList.add('active');
        
        this.showNotification('感谢您的同意！我们将保护您的数据隐私。');
    }

    // 拒绝同意
    declineConsent() {
        this.showNotification('您可以随时回来参与测试。我们尊重您的选择！');
        // 可以在这里添加统计分析（匿名）
        this.recordAnonymousEvent('consent_declined');
    }

    // 记录测试开始
    recordTestStart(version) {
        if (!this.userConsent.dataCollection) return;

        const testRecord = {
            timestamp: new Date().toISOString(),
            version: version,
            testId: this.generateTestId(),
            userAgent: navigator.userAgent,
            screenResolution: `${screen.width}x${screen.height}`
        };

        this.saveToHistory('test_start', testRecord);
    }

    // 记录测试完成
    recordTestCompletion(result, answers, duration) {
        if (!this.userConsent.dataCollection) return;

        const completionRecord = {
            timestamp: new Date().toISOString(),
            result: result,
            answers: answers,
            duration: duration,
            richPotential: resultTypes[result]?.richPotential || 0
        };

        this.saveToHistory('test_completion', completionRecord);
        
        // 匿名汇总统计（不包含个人身份信息）
        this.recordAnonymousStats(result, duration);
    }

    // 记录匿名统计
    recordAnonymousStats(result, duration) {
        const stats = JSON.parse(localStorage.getItem('wealth_test_anonymous_stats') || '{}');
        
        if (!stats.totalTests) stats.totalTests = 0;
        if (!stats.results) stats.results = {};
        if (!stats.durations) stats.durations = [];
        
        stats.totalTests++;
        stats.results[result] = (stats.results[result] || 0) + 1;
        stats.durations.push(duration);
        
        // 只保留最近1000个测试数据
        if (stats.durations.length > 1000) {
            stats.durations = stats.durations.slice(-1000);
        }
        
        localStorage.setItem('wealth_test_anonymous_stats', JSON.stringify(stats));
    }

    // 显示数据管理
    showDataManagement() {
        document.getElementById('result-page').classList.remove('active');
        document.getElementById('data-page').classList.add('active');
        this.showTestHistory();
    }

    // 隐藏数据管理
    hideDataManagement() {
        document.getElementById('data-page').classList.remove('active');
        document.getElementById('result-page').classList.add('active');
    }

    // 显示测试历史
    showTestHistory() {
        const historyContainer = document.getElementById('test-history');
        const history = this.userData.history || [];
        
        if (history.length === 0) {
            historyContainer.innerHTML = '<p>暂无测试历史</p >';
            return;
        }

        const historyHTML = history
            .filter(record => record.type === 'test_completion')
            .map(record => `
                <div class="history-item">
                    <strong>${new Date(record.data.timestamp).toLocaleDateString()}</strong>
                    <br>结果: ${resultTypes[record.data.result]?.name || '未知'}
                    <br>大富之兆: ${record.data.richPotential}%
                    <br>用时: ${Math.round(record.data.duration / 60)}分钟
                </div>
            `).join('');
        
        historyContainer.innerHTML = historyHTML;
    }

    // 清除用户数据
    clearUserData() {
        if (confirm('确定要清除所有测试数据吗？此操作不可撤销。')) {
            // 保留同意状态，只清除测试数据
            const consent = localStorage.getItem('wealth_test_consent');
            const consentDetails = localStorage.getItem('wealth_test_consent_details');
            
            // 清除所有相关数据
            const keysToKeep = ['wealth_test_consent', 'wealth_test_consent_details', 'wealth_test_anonymous_stats'];
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('wealth_test') && !keysToKeep.includes(key)) {
                    localStorage.removeItem(key);
                }
            });
            
            this.userData = { history: [] };
            this.showTestHistory();
            this.showNotification('数据已清除！');
        }
    }

    // 导出用户数据
    exportUserData() {
        const data = {
            exportTime: new Date().toISOString(),
            userData: this.userData,
            anonymousStats: JSON.parse(localStorage.getItem('wealth_test_anonymous_stats') || '{}')
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `wealth_personality_data_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showNotification('数据已导出！');
    }

    // 加载用户数据
    loadUserData() {
        try {
            return JSON.parse(localStorage.getItem('wealth_test_user_data') || '{"history":[]}');
        } catch (e) {
            return { history: [] };
        }
    }

    // 保存到历史记录
    saveToHistory(type, data) {
        if (!this.userData.history) {
            this.userData.history = [];
        }
        
        this.userData.history.push({
            type: type,
            timestamp: new Date().toISOString(),
            data: data
        });
        
        // 只保留最近50条记录
        if (this.userData.history.length > 50) {
            this.userData.history = this.userData.history.slice(-50);
        }
        
        localStorage.setItem('wealth_test_user_data', JSON.stringify(this.userData));
    }

    // 生成测试ID
    generateTestId() {
        return 'test_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // 哈希处理敏感数据
    hashData(data) {
        // 简单的哈希函数，实际生产环境应该使用更安全的方法
        let hash = 0;
        for (let i = 0; i < data.length; i++) {
            const char = data.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(36);
    }

    // 获取用户IP（匿名化处理）
    getUserIP() {
        // 这里应该通过服务端获取，前端只能获取有限信息
        return navigator.userAgent + navigator.language + screen.width;
    }

    // 记录匿名事件
    recordAnonymousEvent(eventType) {
        const events = JSON.parse(localStorage.getItem('wealth_test_anonymous_events') || '[]');
        events.push({
            type: eventType,
            timestamp: new Date().toISOString(),
            // 不包含任何个人身份信息
        });
        
        // 只保留最近1000个事件
        if (events.length > 1000) {
            events = events.slice(-1000);
        }
        
        localStorage.setItem('wealth_test_anonymous_events', JSON.stringify(events));
    }

    // 显示通知
    showNotification(message) {
        const notification = document.getElementById('data-notification');
        const messageElement = notification.querySelector('span');
        messageElement.textContent = message;
        notification.classList.add('active');
        
        setTimeout(() => {
            notification.classList.remove('active');
        }, 5000);
    }
}

// 初始化数据合规管理器
let complianceManager;

document.addEventListener('DOMContentLoaded', function() {
    complianceManager = new DataComplianceManager();
    
    // 关闭通知事件
    document.getElementById('close-notification').addEventListener('click', function() {
        document.getElementById('data-notification').classList.remove('active');
    });
});