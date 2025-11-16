// script.js - 主要逻辑

// 全局变量
let currentVersion = null;
let selectedStyle = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userScores = {};
let testStartTime = null;
let userAnswers = [];

// 初始化函数
function initApp() {
    // 事件监听
    document.getElementById('confirm-style').addEventListener('click', startQuiz);
    document.getElementById('restart-btn').addEventListener('click', restartTest);
    document.getElementById('share-btn').addEventListener('click', shareResult);
    
    // 风格选择事件
    document.querySelectorAll('.style-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.style-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedStyle = this.dataset.style;
        });
    });
}

// 版本选择
function selectVersion(version) {
    currentVersion = version;
    
    // 记录测试开始
    if (complianceManager) {
        complianceManager.recordTestStart(version);
    }
    
    testStartTime = Date.now();
    
    // 隐藏首页，显示风格选择
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('style-page').classList.add('active');
}

// 开始测试
function startQuiz() {
    if (!selectedStyle) {
        alert('请选择一种展现风格！');
        return;
    }
    
    // 应用风格化背景
    document.body.className = `${selectedStyle}-style`;
    
    // 加载对应风格的故事题目
    selectedQuestions = storyEngine.loadStory(selectedStyle, currentVersion);
    userScores = {};
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // 显示故事引言
    const storyInfo = storyEngine.getStoryInfo();
    showStoryIntroduction(storyInfo);
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
    
    // 开始故事按钮事件
    document.getElementById('begin-story').addEventListener('click', () => {
        storyPage.classList.remove('active');
        document.getElementById('quiz-page').classList.add('active');
        showQuestion();
    });
}

// 显示题目
function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult();
        return;
    }
    
    const questionData = selectedQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    
    // 更新进度和章节信息
    document.getElementById('progress-text').textContent = 
        `${currentQuestionIndex + 1}/${selectedQuestions.length}`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('version-indicator').textContent = 
        versionConfig[currentVersion]?.emoji + ' ' + versionConfig[currentVersion]?.name;
    
    // 显示章节故事
    const chapterInfo = document.getElementById('chapter-info');
    if (chapterInfo) {
        chapterInfo.innerHTML = `
            <div class="chapter-title">${questionData.chapter}</div>
            <div class="chapter-story">${questionData.story}</div>
        `;
    }
    
    // 显示题目
    document.getElementById('question-text').textContent = questionData.question;
    
    // 显示选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = option.text;
        optionElement.addEventListener('click', () => selectOption(option, index));
        optionsContainer.appendChild(optionElement);
    });
}

// 选择选项
function selectOption(option, optionIndex) {
    // 记录到故事引擎
    storyEngine.recordChoice(currentQuestionIndex, optionIndex, option.scores);
    
    // 记录答案
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        scores: option.scores,
        timestamp: new Date().toISOString()
    });
    
    // 更新分数
    Object.keys(option.scores).forEach(type => {
        userScores[type] = (userScores[type] || 0) + option.scores[type];
    });
    
    // 显示选项响应（如果有）
    if (option.response) {
        showOptionResponse(option.response);
    } else {
        continueToNextQuestion();
    }
}

// 显示选项响应
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

// 继续到下一题
function continueToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
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