// 故事引擎 - 处理所有风格的故事逻辑
class StoryEngine {
    constructor() {
        this.currentStory = null;
        this.currentChapter = null;
        this.userChoices = [];
    }
    
    // 加载故事
    loadStory(style, version) {
        switch(style) {
            case 'ancient':
                this.currentStory = ancientStory;
                break;
            case 'scifi':
                this.currentStory = scifiStory;
                break;
            case 'modern':
                this.currentStory = modernStory;
                break;
            case 'fruit':
                this.currentStory = fruitStory;
                break;
            case 'animal':
                this.currentStory = animalStory;
                break;
            default:
                this.currentStory = modernStory;
        }
        
        return this.currentStory.getQuestions(version);
    }
    
    // 获取当前故事信息
    getStoryInfo() {
        return {
            title: this.currentStory?.title,
            introduction: this.currentStory?.introduction
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
    
    // 计算最终人格结果
    calculateResult() {
        const scoreSums = {};
        
        // 汇总所有选择的分数
        this.userChoices.forEach(choice => {
            Object.keys(choice.scores).forEach(styleType => {
                scoreSums[styleType] = (scoreSums[styleType] || 0) + choice.scores[styleType];
            });
        });
        
        // 找到最高分的人格类型
        let maxScore = 0;
        let resultStyleType = Object.keys(scoreSums)[0];
        
        Object.keys(scoreSums).forEach(styleType => {
            if (scoreSums[styleType] > maxScore) {
                maxScore = scoreSums[styleType];
                resultStyleType = styleType;
            }
        });
        
        // 映射到通用人格类型
        const generalType = this.currentStory.personalityMapping[resultStyleType];
        
        return {
            styleType: resultStyleType,
            generalType: generalType,
            scores: scoreSums
        };
    }
    
    // 生成故事结局
    generateEnding(resultType, generalType) {
        const generalResult = resultTypes[generalType];
        const styleName = generalResult.styles[selectedStyle];
        
        return {
            title: styleName,
            storyEnding: this.createStoryEnding(resultType),
            description: generalResult.descriptions[selectedStyle],
            richPotential: generalResult.richPotential
        };
    }
    
    // 创建故事特定结局
    createStoryEnding(resultType) {
        // 根据故事类型和结果类型生成特定结局
        if (this.currentStory === ancientStory) {
            return this.createAncientEnding(resultType);
        } else if (this.currentStory === animalStory) {
            return this.createAnimalEnding(resultType);
        }
        // 其他故事的结局生成逻辑...
        
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
    
    createAnimalEnding(resultType) {
        const endings = {
            detailed: "🔍 你的细致观察最终破解了谜案！森林恢复了往日的和谐，大家都称赞你是最可靠的侦探。",
            strategic: "🦅 你的全局分析找到了真凶！原来这一切背后有着复杂的动机，你的智慧拯救了森林。",
            social: "🐝 通过广泛调查，你收集到了关键证据！团结协作让你成功破案。", 
            intuitive: "🦊 你的直觉带你找到了真相！有时候，最不可能的解释恰恰就是正确答案。"
        };
        
        return endings[resultType] || "谜案终于破解，森林重归和平！";
    }
}

// 创建全局故事引擎实例
const storyEngine = new StoryEngine();