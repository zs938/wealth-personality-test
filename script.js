// script.js - 主要逻辑（完整修复版）

// 全局变量
let currentVersion = null;
let selectedStyle = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userScores = {};
let testStartTime = null;
let userAnswers = [];

// 初始化应用
function initApp() {
    console.log('🚀 应用初始化开始');
    
    // 绑定确认风格按钮
    const confirmBtn = document.getElementById('confirm-style');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', startQuiz);
        console.log('✅ 确认风格按钮绑定成功');
    } else {
        console.error('❌ 找不到确认风格按钮');
    }

    // 绑定版本选择按钮
    document.querySelectorAll('.btn-version').forEach(btn => {
        btn.addEventListener('click', function() {
            const version = this.closest('.version-card').dataset.version;
            selectVersion(version);
        });
    });

    // 绑定风格选择
    bindStyleSelection();
    
    console.log('✅ 应用初始化完成');
}

// 专门绑定风格选择的函数
function bindStyleSelection() {
    console.log('🎨 绑定风格选择事件');
    
    const styleOptions = document.querySelectorAll('.style-option');
    console.log('找到风格选项数量:', styleOptions.length);
    
    styleOptions.forEach(option => {
        // 移除旧的事件监听器
        option.replaceWith(option.cloneNode(true));
    });
    
    // 重新绑定事件
    document.querySelectorAll('.style-option').forEach(option => {
        option.addEventListener('click', function() {
            console.log('🎯 风格选项被点击:', this.dataset.style);
            
            // 移除其他选项的选中状态
            document.querySelectorAll('.style-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // 添加当前选项的选中状态
            this.classList.add('selected');
            
            // 设置选中的风格
            selectedStyle = this.dataset.style;
            console.log('✅ 设置selectedStyle为:', selectedStyle);
            
            // 验证设置
            console.log('验证 - selectedStyle:', window.selectedStyle);
        });
    });
}

// 版本选择函数
function selectVersion(version) {
    console.log('📋 选择版本:', version);
    currentVersion = version;
    
    // 记录测试开始
    testStartTime = Date.now();
    
    // 隐藏首页，显示风格选择
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('style-page').classList.add('active');
    
    // 重新绑定风格选择（确保事件存在）
    setTimeout(bindStyleSelection, 100);
}

// 开始测试 - 修复版本
function startQuiz() {
    console.log('=== 开始测试 ===');
    console.log('当前风格:', selectedStyle);
    console.log('当前版本:', currentVersion);
    
    // 详细检查风格选择状态
    const selectedOption = document.querySelector('.style-option.selected');
    console.log('DOM中选中的风格元素:', selectedOption);
    console.log('所有风格选项:', document.querySelectorAll('.style-option'));
    
    // 如果selectedStyle为空，尝试从DOM获取
    if (!selectedStyle && selectedOption) {
        selectedStyle = selectedOption.dataset.style;
        console.log('从DOM重新获取风格:', selectedStyle);
    }
    
    if (!selectedStyle) {
        alert('请选择一种展现风格！');
        
        // 显示调试信息
        console.error('❌ 风格选择失败:');
        console.error('- selectedStyle:', selectedStyle);
        console.error('- 选中的DOM元素:', selectedOption);
        console.error('- 所有风格选项的数据:', 
            Array.from(document.querySelectorAll('.style-option')).map(opt => ({
                dataset: opt.dataset.style,
                hasSelected: opt.classList.contains('selected')
            }))
        );
        return;
    }
    
    if (!currentVersion) {
        alert('请先选择测试版本！');
        return;
    }
    
    try {
        // 应用风格化背景
        document.body.className = `${selectedStyle}-style`;
        console.log('应用背景样式:', document.body.className);
        
        // 加载对应风格的故事题目
        selectedQuestions = storyEngine.loadStory(selectedStyle, currentVersion);
        console.log('加载题目数量:', selectedQuestions.length);
        
        if (!selectedQuestions || selectedQuestions.length === 0) {
            console.error('无法加载题目，使用备用题目');
            selectedQuestions = selectQuestionsForVersion(currentVersion);
        }
        
        userScores = {};
        currentQuestionIndex = 0;
        userAnswers = [];
        
        // 显示故事引言
        const storyInfo = storyEngine.getStoryInfo();
        console.log('故事信息:', storyInfo);
        showStoryIntroduction(storyInfo);
        
    } catch (error) {
        console.error('启动测试时出错:', error);
        alert('启动测试时出现错误，请刷新页面重试');
    }
}

// 显示故事引言
function showStoryIntroduction(storyInfo) {
    document.getElementById('style-page').classList.remove('active');
    
    const introHTML = `
    <div class="story-introduction">
        <h1>${storyInfo.title}</h1>
        <div class="story-content">
            <p>${storyInfo.introduction}</p >
            <div class="story-begin">
                <button id="begin-story" class="btn-primary">开始冒险</button>
            </div>
        </div>
    </div>
    `;
    
    // 创建故事引言页面
    let storyPage = document.getElementById('story-intro-page');
    if (!storyPage) {
        storyPage = document.createElement('div');
        storyPage.id = 'story-intro-page';
        storyPage.className = 'page active';
        storyPage.innerHTML = introHTML;
        document.getElementById('app').appendChild(storyPage);
    } else {
        storyPage.innerHTML = introHTML;
        storyPage.classList.add('active');
    }
    
    // 绑定开始故事按钮
    document.getElementById('begin-story').addEventListener('click', () => {
        storyPage.classList.remove('active');
        document.getElementById('quiz-page').classList.add('active');
        showQuestion();
    });
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM加载完成');
    initApp();
    
    // 备用初始化 - 3秒后再次检查
    setTimeout(() => {
        console.log('⏰ 备用初始化检查');
        const confirmBtn = document.getElementById('confirm-style');
        if (confirmBtn && !confirmBtn.onclick) {
            console.log('🔄 重新绑定确认按钮');
            confirmBtn.addEventListener('click', startQuiz);
        }
        
        // 重新绑定风格选择
        bindStyleSelection();
    }, 3000);
});
function showQuestion() {
    console.log('显示问题:', currentQuestionIndex, '总问题数:', selectedQuestions.length);
    
    // 首先检查是否已经完成所有题目
    if (currentQuestionIndex >= selectedQuestions.length) {
        console.log('所有题目完成，准备显示结果');
        showResult();
        return;
    }
    
    const questionData = selectedQuestions[currentQuestionIndex];
    console.log('当前问题数据:', questionData);
    
    if (!questionData) {
        console.error('问题数据为空，跳过此题');
        currentQuestionIndex++;
        setTimeout(showQuestion, 100); // 延迟一下避免递归过深
        return;
    }
    
    // 更新进度条
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    document.getElementById('progress-text').textContent = 
        `${currentQuestionIndex + 1}/${selectedQuestions.length}`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    
    // 更新版本指示器
    const versionInfo = versionConfig[currentVersion];
    document.getElementById('version-indicator').textContent = 
        (versionInfo?.emoji || '🎯') + ' ' + (versionInfo?.name || '测试版');
    
    // 显示章节信息
    const chapterInfo = document.getElementById('chapter-info');
    if (chapterInfo && questionData.chapter && questionData.story) {
        chapterInfo.innerHTML = `
            <div class="chapter-title">${questionData.chapter}</div>
            <div class="chapter-story">${questionData.story}</div>
        `;
    }
    
    // 显示题目
    const questionText = document.getElementById('question-text');
    questionText.textContent = questionData.question || "请做出你的选择...";
    
    // 显示选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = option.text || `选项 ${index + 1}`;
        optionElement.addEventListener('click', () => selectOption(option, index));
        optionsContainer.appendChild(optionElement);
    });
}
// 选择选项
// 在 script.js 中找到 selectOption 函数，替换为：
function selectOption(option, optionIndex) {
    console.log('选择选项:', optionIndex, '当前题目:', currentQuestionIndex);
    
    // 记录到故事引擎
    storyEngine.recordChoice(currentQuestionIndex, optionIndex, option.scores);
    
    // 记录答案
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        optionIndex: optionIndex,
        scores: option.scores,
        timestamp: new Date().toISOString()
    });
    
    // 更新分数
    Object.keys(option.scores).forEach(type => {
        userScores[type] = (userScores[type] || 0) + option.scores[type];
    });
    
    console.log('当前分数:', userScores);
    
    // 显示选项响应或继续下一题 - 这是关键修复
    if (option.response) {
        showOptionResponse(option.response);
    } else {
        // 如果没有响应文本，直接继续
        setTimeout(() => {
            continueToNextQuestion();
        }, 300);
    }
}

// 确保 showOptionResponse 函数存在且正确
function showOptionResponse(response) {
    const responseHTML = `
        <div class="option-response-overlay">
            <div class="response-content">
                <p>${response}</p >
                <button id="continue-btn" class="btn-primary">继续</button>
            </div>
        </div>
    `;

    const overlay = document.createElement('div');
    overlay.innerHTML = responseHTML;
    document.getElementById('quiz-page').appendChild(overlay);

    document.getElementById('continue-btn').addEventListener('click', () => {
        overlay.remove();
        continueToNextQuestion();
    });
}

// 确保 continueToNextQuestion 函数正确
function continueToNextQuestion() {
    console.log('继续到下一题，当前索引:', currentQuestionIndex);
    
    // 立即显示下一题或结果
    setTimeout(() => {
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            // 这是最后一题，完成测试
            console.log('最后一题完成，显示结果');
            showResult();
        }
    }, 100);
}
// 显示结果
function showResult() {
    const testDuration = Date.now() - testStartTime;
    
    // 使用故事引擎计算结果
    const storyResult = storyEngine.calculateResult();
    const ending = storyEngine.generateEnding(storyResult.styleType, storyResult.generalType);
    const generalResult = resultTypes[storyResult.generalType];
    
    // 记录测试完成
    if (complianceManager) {
        complianceManager.recordTestCompletion(storyResult.generalType, userAnswers, testDuration);
    }
    
    // 显示结果页面
    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');
    
    // 更新结果内容
    displayStoryResult(ending, generalResult, storyResult);
}

// 显示故事化结果
function displayStoryResult(ending, generalResult, storyResult) {
    document.getElementById('result-icon').textContent = generalResult.emoji;
    document.getElementById('result-title').textContent = ending.title;
    document.getElementById('style-badge').textContent = getStyleName(selectedStyle);
    
    // 根据版本显示不同详细程度的结果
    const resultDescElement = document.getElementById('result-desc');
    if (currentVersion === 'deep') {
        resultDescElement.innerHTML = `
            <div class="story-ending">
                <h3>🎊 故事结局</h3>
                <p>${ending.storyEnding}</p >
                <div class="personality-reveal">
                    <h4>✨ 你的财富人格深度解析</h4>
                    <p>${generalResult.deepAnalysis ? generalResult.deepAnalysis[selectedStyle] || generalResult.deepAnalysis.reality : ending.description}</p >
                    
                    <div class="strengths-weaknesses">
                        <div class="sw-column">
                            <h4>✅ 核心优势</h4>
                            <ul>
                                ${generalResult.strengths.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="sw-column">
                            <h4>⚠️ 成长空间</h4>
                            <ul>
                                ${generalResult.weaknesses.map(w => `<li>${w}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    ${generalResult.growthPath ? `
                    <div class="growth-path">
                        <h4>🌱 成长路径</h4>
                        ${generalResult.growthPath.map(stage => `
                            <div class="growth-stage">
                                <h5>${stage.stage} - ${stage.goal}</h5>
                                <ul>
                                    ${stage.actions.map(action => `<li>${action}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    } else if (currentVersion === 'standard') {
        resultDescElement.innerHTML = `
            <div class="story-ending">
                <h3>🎊 故事结局</h3>
                <p>${ending.storyEnding}</p >
                <div class="personality-reveal">
                    <h4>✨ 你的财富人格</h4>
                    <p>${ending.description}</p >
                    <div class="style-specific-tip">
                        <h4>🎯 风格专属建议</h4>
                        <p>${generalResult.styleSpecificTips ? generalResult.styleSpecificTips[selectedStyle] || generalResult.tips : generalResult.tips}</p >
                    </div>
                </div>
            </div>
        `;
    } else {
        // 快速版
        resultDescElement.innerHTML = `
            <div class="story-ending">
                <h3>🎊 故事结局</h3>
                <p>${ending.storyEnding}</p >
                <div class="personality-reveal">
                    <h4>✨ 你的财富人格</h4>
                    <p>${ending.description}</p >
                </div>
            </div>
        `;
    }
    
    // 大富之兆动画
    showRichPotentialAnimation(ending.richPotential);
    
    // 财富密码 - 根据版本显示不同详细程度
    const tipsElement = document.getElementById('result-tips');
    if (currentVersion === 'deep') {
        tipsElement.innerHTML = `
            <div class="detailed-tips">
                <p>${generalResult.tips}</p >
                ${generalResult.styleSpecificTips ? `
                <p><strong>风格智慧：</strong>${generalResult.styleSpecificTips[selectedStyle]}</p >
                ` : ''}
            </div>
        `;
    } else {
        tipsElement.textContent = generalResult.tips;
    }
    
    // 风格切换按钮
    createStyleSwitcher(generalResult, storyResult.generalType);
}

// 大富之兆动画
function showRichPotentialAnimation(percent) {
    const richElement = document.getElementById('rich-percent');
    const richBar = document.getElementById('rich-bar');
    const richDesc = document.getElementById('rich-desc');
    
    let currentPercent = 0;
    const interval = setInterval(() => {
        currentPercent++;
        richElement.textContent = currentPercent;
        richBar.style.width = `${currentPercent}%`;
        
        // 根据百分比改变颜色
        if (currentPercent < 30) {
            richBar.style.background = '#ff6b6b';
        } else if (currentPercent < 60) {
            richBar.style.background = '#ffa726';
        } else if (currentPercent < 80) {
            richBar.style.background = '#4ecdc4';
        } else {
            richBar.style.background = '#2ecc71';
        }
        
        if (currentPercent >= percent) {
            clearInterval(interval);
            
            // 显示富兆描述
            let desc = '';
            if (percent >= 80) {
                desc = '🌟 大富大贵之相！财运亨通，富贵可期！';
            } else if (percent >= 60) {
                desc = '💫 小富即安之态！稳中求进，财源稳定！';
            } else if (percent >= 40) {
                desc = '📈 财运上升之势！把握机会，有望突破！';
            } else {
                desc = '🌱 财运萌芽之期！勤恳积累，静待花开！';
            }
            richDesc.textContent = desc;
        }
    }, 30);
}

// 创建风格切换器
function createStyleSwitcher(resultData, resultType) {
    const styleButtons = document.getElementById('style-buttons');
    styleButtons.innerHTML = '';
    
    Object.keys(resultData.styles).forEach(style => {
        const button = document.createElement('button');
        button.className = `style-btn ${style === selectedStyle ? 'active' : ''}`;
        button.textContent = getStyleName(style);
        button.addEventListener('click', () => {
            selectedStyle = style;
            // 改变背景和整体风格
            document.body.className = `${style}-style`;
            // 重新显示结果
            const storyResult = storyEngine.calculateResult();
            const ending = storyEngine.generateEnding(storyResult.styleType, storyResult.generalType);
            displayStoryResult(ending, resultData, storyResult);
        });
        styleButtons.appendChild(button);
    });
}

// 获取风格名称
function getStyleName(style) {
    const styleNames = {
        ancient: '古风',
        scifi: '科幻', 
        modern: '现代',
        fruit: '果蔬',
        animal: '动物'
    };
    return styleNames[style] || style;
}

// 分享结果
function shareResult() {
    const resultTitle = document.getElementById('result-title').textContent;
    const richPercent = document.getElementById('rich-percent').textContent;
    
    const shareText = `我的财富人格测试结果：${resultTitle} 🎯\n大富之兆：${richPercent}%\n你也来测测吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '财富人格测试结果',
            text: shareText,
            url: window.location.href
        });
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            alert('结果已复制到剪贴板！快去分享给朋友吧～');
        });
    }
}

// 重新开始测试
function restartTest() {
    // 重置背景
    document.body.className = '';
    
    // 重置所有状态
    currentVersion = null;
    selectedStyle = null;
    selectedQuestions = [];
    currentQuestionIndex = 0;
    userScores = {};
    userAnswers = [];
    testStartTime = null;
    
    // 重置故事引擎
    storyEngine.currentStory = null;
    storyEngine.currentChapter = null;
    storyEngine.userChoices = [];
    
    // 回到首页
    document.getElementById('result-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
}

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});
// 在 script.js 最底部添加紧急修复
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，执行紧急修复');
    
    // 重新绑定所有关键事件
    setTimeout(function() {
        // 重新绑定确认风格按钮
        const confirmBtn = document.getElementById('confirm-style');
        if (confirmBtn) {
            confirmBtn.onclick = startQuiz;
            console.log('重新绑定确认风格按钮');
        }
        
        // 重新绑定版本选择按钮
        document.querySelectorAll('.btn-version').forEach(btn => {
            btn.onclick = function() {
                const version = this.closest('.version-card').dataset.version;
                selectVersion(version);
            };
        });
        
        console.log('紧急修复完成');
    }, 1000);
});
// 调试函数 - 在控制台运行这个来检查状态
window.debugStyleSelection = function() {
    console.log('=== 风格选择调试信息 ===');
    console.log('selectedStyle:', window.selectedStyle);
    console.log('currentVersion:', window.currentVersion);
    
    const selectedOption = document.querySelector('.style-option.selected');
    console.log('选中的DOM元素:', selectedOption);
    console.log('选中的风格值:', selectedOption ? selectedOption.dataset.style : '无');
    
    console.log('所有风格选项:');
    document.querySelectorAll('.style-option').forEach((opt, index) => {
        console.log(`选项 ${index}:`, {
            text: opt.textContent,
            dataStyle: opt.dataset.style,
            isSelected: opt.classList.contains('selected')
        });
    });
    
    console.log('确认按钮:', document.getElementById('confirm-style'));
    console.log('====================');
};

// 在控制台运行 debugStyleSelection() 来检查状态