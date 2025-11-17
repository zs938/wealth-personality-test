// utils/story-engine.js - 故事引擎
class StoryEngine {
    constructor() {
        this.currentStory = null;
        this.currentChapter = null;
        this.userChoices = [];
    }
    
    // 加载故事
    loadStory(style, version) {
        console.log(`加载故事: ${style}, 版本: ${version}`);
        
        let story;
        switch(style) {
            case 'ancient':
                story = ancientStory;
                break;
            case 'scifi':
                story = scifiStory;
                break;
            case 'modern':
                story = modernStory;
                break;
            case 'fruit':
                story = fruitStory;
                break;
            case 'animal':
                story = animalStory;
                break;
            default:
                story = modernStory;
        }
        
        this.currentStory = story;
        
        if (!story || typeof story.getQuestions !== 'function') {
            console.error('故事加载失败或getQuestions方法不存在', story);
            return [];
        }
        
        const questions = story.getQuestions(version);
        console.log(`成功加载 ${questions.length} 个问题`);
        return questions;
    }
    
    // 获取当前故事信息
    getStoryInfo() {
        if (!this.currentStory) {
            return {
                title: "默认故事",
                introduction: "开始你的财富冒险..."
            };
        }
        return {
            title: this.currentStory.title,
            introduction: this.currentStory.introduction
        };
    }
    
    // 记录用户选择
    recordChoice(questionIndex, choiceIndex, scores) {
        this.userChoices.push({
            questionIndex,
            choiceIndex,
            scores,
            timestamp: new Date().toISOString()
        });
    }
    
    // 计算结果
    // 在 StoryEngine 类中修改 calculateResult 方法
calculateResult() {
    const scoreSums = {};
    
    console.log('开始计算结果，用户选择记录:', this.userChoices);

    // 汇总所有选择的分数
    this.userChoices.forEach(choice => {
        Object.keys(choice.scores).forEach(styleType => {
            scoreSums[styleType] = (scoreSums[styleType] || 0) + choice.scores[styleType];
        });
    });

    console.log('分数汇总:', scoreSums);

    // 找到最高分的人格类型
    let maxScore = 0;
    let resultStyleType = '';
    
    Object.keys(scoreSums).forEach(styleType => {
        if (scoreSums[styleType] > maxScore) {
            maxScore = scoreSums[styleType];
            resultStyleType = styleType;
        }
    });

    console.log('最高分人格类型:', resultStyleType, '分数:', maxScore);

    // 使用全局映射表映射到通用人格类型
    const generalType = globalPersonalityMapping[resultStyleType] || 'digitalHoarder';
    
    console.log('映射到通用人格类型:', generalType);

    return {
        styleType: resultStyleType,
        generalType: generalType,
        scores: scoreSums
    };
}
    // 生成故事结局
    generateEnding(resultType, generalType) {
        const generalResult = resultTypes[generalType];
        const styleName = generalResult.styles[selectedStyle] || generalResult.name;
        
        return {
            title: styleName,
            storyEnding: this.createStoryEnding(resultType),
            description: generalResult.descriptions[selectedStyle] || generalResult.descriptions.modern,
            richPotential: generalResult.richPotential || 50
        };
    }
    
    // 创建故事特定结局
    createStoryEnding(resultType) {
        if (!this.currentStory) {
            return "恭喜你完成了测试！你的财富人格已经揭晓。";
        }
        
        // 根据不同的故事类型返回不同的结局
        const storyType = this.currentStory.title;
        if (storyType.includes('江湖')) {
            return this.createAncientEnding(resultType);
        } else if (storyType.includes('时空')) {
            return this.createScifiEnding(resultType);
        } else if (storyType.includes('都市')) {
            return this.createModernEnding(resultType);
        } else if (storyType.includes('果蔬')) {
            return this.createFruitEnding(resultType);
        } else if (storyType.includes('森林')) {
            return this.createAnimalEnding(resultType);
        }
        
        return "这是一个精彩的冒险！你的选择塑造了独特的结局。";
    }
    
    createAncientEnding(resultType) {
        const endings = {
            merchant: "🎊 你最终成为江南首富，但更令人称道的是你的侠义之心。富而有德，这才是真正的财富之道。",
            warrior: "⚔️ 你继承了将门风范，在江湖中建立了自己的势力。重信守诺让你赢得了所有人的尊重。",
            farmer: "🌾 你选择回归田园，过着朴实而充实的生活。知足常乐，这才是人生真谛。",
            wanderer: "🎭 你继续游历四方，在冒险中寻找生命的真意。自由无价，经历就是最大的财富。"
        };
        return endings[resultType] || "你的江湖传奇还在继续...";
    }
    
    createScifiEnding(resultType) {
        const endings = {
            scientist: "🔬 你的科学精神最终解开了宇宙财富的奥秘，为多元宇宙带来了新的经济秩序。",
            entrepreneur: "🚀 你建立了跨宇宙的商业帝国，用创新思维改变了无数世界的经济格局。",
            analyst: "📊 你的数据分析能力让你成为宇宙金融市场的先知，预见了每一次经济变革。"
        };
        return endings[resultType] || "你的星际冒险才刚刚开始...";
    }
    
    createModernEnding(resultType) {
        const endings = {
            opportunist: "💸 你抓住了数字时代的每一个机会，成为了科技金融领域的传奇人物。",
            innovator: "💡 你的创新算法改变了整个金融行业，让投资变得更加智能和公平。",
            ethical: "⚖️ 你坚持道德底线，在商业成功的同时也赢得了所有人的尊重。"
        };
        return endings[resultType] || "在现代都市的财富战场上，你找到了属于自己的成功之路。";
    }
    
    createFruitEnding(resultType) {
        const endings = {
            confident: "👑 你赢得了选举，成为果蔬王国最年轻的财富大臣，带领王国走向繁荣。",
            reformer: "🔄 你改革了王国的经济体系，让每个果蔬都能分享到发展的成果。",
            diplomat: "🌍 你建立了跨王国的贸易联盟，让果蔬王国在国际舞台上大放异彩。"
        };
        return endings[resultType] || "在果蔬王国的选举中，你展现了非凡的财富智慧，赢得了大家的信任。";
    }
    
    createAnimalEnding(resultType) {
        const endings = {
            meticulous: "🔍 你的细致调查最终破解了谜案，找回了所有被盗的金橡果。",
            strategist: "🎯 你的智慧让你看穿了影子组织的阴谋，保护了森林的经济安全。",
            leader: "🐘 你团结了所有动物，共同对抗威胁，维护了森林的和谐与繁荣。"
        };
        return endings[resultType] || "你成功破解了森林谜案，维护了动物世界的经济秩序。";
    }
}

// 创建全局故事引擎实例
const storyEngine = new StoryEngine();