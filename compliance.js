// compliance.js - 数据收集和合规处理（完整正确版）

class DataComplianceManager {
    constructor() {
        console.log('🔐 数据合规管理器初始化');
        this.userConsent = {
            dataCollection: false,
            dataAnalysis: false,
            dataStorage: false
        };
        this.userData = this.loadUserData();
        this.initializeConsentManagement();
        this.loadConsentState();
    }

    // 加载同意状态
    loadConsentState() {
        try {
            const consentGiven = localStorage.getItem('wealth_test_consent');
            const consentDetails = localStorage.getItem('wealth_test_consent_details');
            
            if (consentGiven === 'true' && consentDetails) {
                this.userConsent = JSON.parse(consentDetails);
                console.log('✅ 已加载用户同意状态:', this.userConsent);
            }
        } catch (error) {
            console.error('❌ 加载同意状态失败:', error);
        }
    }

    // 初始化同意管理
    initializeConsentManagement() {
        console.log('🔐 初始化同意管理');
        
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
        const agreeButton = document.getElementById('consent-agree');
        if (agreeButton) {
            agreeButton.addEventListener('click', () => {
                this.giveConsent();
            });
        }

        // 暂不参与事件
        const declineButton = document.getElementById('consent-decline');
        if (declineButton) {
            declineButton.addEventListener('click', () => {
                this.declineConsent();
            });
        }

        // 延迟绑定数据管理事件（因为按钮可能还不存在）
        setTimeout(() => {
            this.bindDataManagementEvents();
        }, 1000);

        // 更新同意按钮初始状态
        this.updateConsentButton();
    }

    // 绑定数据管理事件
    bindDataManagementEvents() {
        console.log('🔐 绑定数据管理事件');
        
        // 数据管理按钮
        const dataManagementBtn = document.getElementById('data-management');
        if (dataManagementBtn) {
            dataManagementBtn.addEventListener('click', () => {
                this.showDataManagement();
            });
        }

        // 关闭通知按钮
        const closeNotificationBtn = document.getElementById('close-notification');
        if (closeNotificationBtn) {
            closeNotificationBtn.addEventListener('click', () => {
                document.getElementById('data-notification').classList.remove('active');
            });
        }
    }

    // 更新同意按钮状态
    updateConsentButton() {
        const consentData = document.getElementById('consent-data');
        const consentAnalysis = document.getElementById('consent-analysis');
        const consentStorage = document.getElementById('consent-storage');

        if (consentData && consentAnalysis && consentStorage) {
            const agreeButton = document.getElementById('consent-agree');
            agreeButton.disabled = !(consentData.checked && consentAnalysis.checked && consentStorage.checked);
        }
    }

    // 给予同意
    giveConsent() {
        console.log('✅ 用户给予数据收集同意');
        
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
        
        // 立即初始化数据收集器（如果存在）
        this.ensureDataCollector();
    }

    // 拒绝同意
    declineConsent() {
        console.log('❌ 用户拒绝数据收集同意');
        this.showNotification('您可以随时回来参与测试。我们尊重您的选择！');
        this.recordAnonymousEvent('consent_declined');
    }

    // 记录测试开始
    recordTestStart(version) {
        if (!this.userConsent.dataCollection) {
            console.log('🔐 用户未同意数据收集，跳过记录测试开始');
            return;
        }

        const testRecord = {
            timestamp: new Date().toISOString(),
            version: version,
            testId: this.generateTestId(),
            userAgent: navigator.userAgent,
            screenResolution: `${screen.width}x${screen.height}`
        };

        this.saveToHistory('test_start', testRecord);
        console.log('📝 记录测试开始:', testRecord);
    }

    // 记录测试完成
    recordTestCompletion(result, answers, duration) {
        if (!this.userConsent.dataCollection) {
            console.log('🔐 用户未同意数据收集，跳过记录测试完成');
            return;
        }

        const completionRecord = {
            timestamp: new Date().toISOString(),
            result: result,
            answers: answers,
            duration: duration,
            richPotential: resultTypes[result]?.richPotential || 0
        };

        this.saveToHistory('test_completion', completionRecord);
        this.recordAnonymousStats(result, duration);
        console.log('📝 记录测试完成:', completionRecord);
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
        console.log('📊 更新匿名统计，总测试数:', stats.totalTests);
    }

    // 数据收集器安全检查
    ensureDataCollector() {
        console.log('🔧 检查数据收集器状态...');
        
        // 如果全局数据收集器已经存在且功能正常
        if (window.dataCollector && typeof window.dataCollector.sendDataToServer === 'function') {
            console.log('✅ 数据收集器已就绪');
            return true;
        }
        
        console.warn('⚠️ 数据收集器未初始化或功能不完整');
        
        // 检查DataCollector类是否存在
        if (typeof DataCollector === 'undefined') {
            console.error('❌ DataCollector类未定义');
            this.showNotification('数据收集功能暂时不可用');
            return false;
        }
        
        try {
            console.log('🔧 尝试初始化数据收集器...');
            window.dataCollector = new DataCollector();
            console.log('✅ 数据收集器初始化成功');
            return true;
        } catch (error) {
            console.error('❌ 数据收集器初始化失败:', error);
            this.showNotification('数据收集功能初始化失败');
            return false;
        }
    }

    // 显示数据管理
    showDataManagement() {
        console.log('🔐 显示数据管理页面');
        
        document.getElementById('result-page').classList.remove('active');
        document.getElementById('data-page').classList.add('active');
        
        // 更新数据管理页面HTML
        const dataActionsHTML = `
            <div class="data-action">
                <h3>📊 测试历史</h3>
                <p>查看您之前的测试结果</p>
                <button id="view-history" class="btn-secondary">查看历史</button>
            </div>
            <div class="data-action">
                <h3>📈 完整数据导出</h3>
                <p>导出所有测试数据和用户行为数据</p>
                <button id="export-all-data" class="btn-secondary">导出完整数据</button>
            </div>
            <div class="data-action">
                <h3>🗑️ 清除数据</h3>
                <p>删除所有测试数据</p>
                <button id="clear-data" class="btn-warning">清除数据</button>
            </div>
            <div class="data-action">
                <h3>📤 手动发送数据</h3>
                <p>立即将收集的数据发送到服务器</p>
                <button id="send-data-now" class="btn-secondary">立即发送</button>
            </div>
        `;
        
        // 确保容器存在
        const dataActionsContainer = document.querySelector('.data-actions');
        if (dataActionsContainer) {
            dataActionsContainer.innerHTML = dataActionsHTML;
            
            // 绑定新的事件
            document.getElementById('view-history').addEventListener('click', () => {
                this.showTestHistory();
            });
            
            document.getElementById('export-all-data').addEventListener('click', () => {
                this.exportAllData();
            });
            
            document.getElementById('clear-data').addEventListener('click', () => {
                this.clearUserData();
            });
            
            document.getElementById('send-data-now').addEventListener('click', () => {
                this.sendDataNow();
            });
        }

        // 绑定返回按钮
        const backButton = document.getElementById('back-to-result');
        if (backButton) {
            backButton.addEventListener('click', () => {
                this.hideDataManagement();
            });
        }

        this.showTestHistory();
    }

    // 手动发送数据
    sendDataNow() {
        console.log('📤 手动发送数据请求');
        if (this.ensureDataCollector()) {
            window.dataCollector.sendDataToServer();
            this.showNotification('数据发送请求已提交！');
        } else {
            this.showNotification('数据收集器未初始化，无法发送数据');
        }
    }

    // 隐藏数据管理
    hideDataManagement() {
        document.getElementById('data-page').classList.remove('active');
        document.getElementById('result-page').classList.add('active');
    }

    // 显示测试历史
    showTestHistory() {
        const historyContainer = document.getElementById('test-history');
        if (!historyContainer) return;

        const history = this.userData.history || [];

        if (history.length === 0) {
            historyContainer.innerHTML = '<p>暂无测试历史</p>';
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
            console.log('🗑️ 清除用户数据');
            
            // 保留同意状态，只清除测试数据
            const keysToKeep = ['wealth_test_consent', 'wealth_test_consent_details', 'wealth_test_anonymous_stats'];
            
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('wealth_test') && !keysToKeep.includes(key)) {
                    localStorage.removeItem(key);
                }
            });

            // 清除数据收集器的事件
            if (window.dataCollector) {
                window.dataCollector.events = [];
                window.dataCollector.saveToLocalStorage();
            }

            this.userData = { history: [] };
            this.showTestHistory();
            this.showNotification('数据已清除！');
        }
    }

    // 导出完整数据
    exportAllData() {
        console.log('📥 导出完整数据');
        
        if (!this.ensureDataCollector()) {
            this.showNotification('无法导出数据：数据收集器未就绪');
            return;
        }

        const allData = {
            exportTime: new Date().toISOString(),
            testHistory: this.userData.history || [],
            analyticsData: window.dataCollector.exportData(),
            anonymousStats: JSON.parse(localStorage.getItem('wealth_test_anonymous_stats') || '{}'),
            consentDetails: JSON.parse(localStorage.getItem('wealth_test_consent_details') || '{}'),
            localStorageData: this.exportLocalStorageData(),
            systemInfo: {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                screen: `${screen.width}x${screen.height}`,
                timestamp: new Date().toISOString()
            }
        };

        // 创建下载
        const dataStr = JSON.stringify(allData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `wealth_analytics_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        this.showNotification('完整数据已导出！');
    }

    // 导出localStorage数据
    exportLocalStorageData() {
        const data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('wealth_test') || key.startsWith('user_analytics')) {
                try {
                    data[key] = JSON.parse(localStorage.getItem(key));
                } catch (e) {
                    data[key] = localStorage.getItem(key);
                }
            }
        }
        return data;
    }

    // 加载用户数据
    loadUserData() {
        try {
            const data = JSON.parse(localStorage.getItem('wealth_test_user_data') || '{"history":[]}');
            console.log('📂 加载用户数据，历史记录数:', data.history?.length || 0);
            return data;
        } catch (e) {
            console.error('❌ 加载用户数据失败:', e);
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
        return navigator.userAgent + navigator.language + screen.width;
    }

    // 记录匿名事件
    recordAnonymousEvent(eventType) {
        let events = JSON.parse(localStorage.getItem('wealth_test_anonymous_events') || '[]');
        events.push({
            type: eventType,
            timestamp: new Date().toISOString()
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
        if (!notification) {
            console.warn('❌ 通知元素未找到');
            return;
        }
        
        const messageElement = notification.querySelector('span');
        if (messageElement) {
            messageElement.textContent = message;
        }
        
        notification.classList.add('active');

        setTimeout(() => {
            notification.classList.remove('active');
        }, 5000);
    }
}

// 初始化数据合规管理器
let complianceManager;

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM加载完成，初始化合规管理器');
    try {
        complianceManager = new DataComplianceManager();
        console.log('✅ 合规管理器初始化成功');
    } catch (error) {
        console.error('❌ 合规管理器初始化失败:', error);
    }
});