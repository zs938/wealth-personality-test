// 科幻穿越财富故事线
const scifiStory = {
    title: "时空财富冒险",
    introduction: "🌌 你意外获得了一台能够穿越时空的装置！现在，你将在不同时空中展开冒险，探索财富的终极奥秘...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20,
            deep: 45
        };
        
        const allChapters = [
            // 第一章：时空初体验
            {
                chapter: "第一章：时空初体验",
                story: "⚡ 时空装置突然启动，你被传送到2080年的未来都市。这里的一切都让你惊叹不已，但首先要解决生存问题...",
                questions: [
                    {
                        question: "在未来都市，你首先想要了解什么？",
                        options: [
                            {
                                text: "💳 未来货币系统和金融规则",
                                scores: { analyst: 3, planner: 1 },
                                response: "你深知了解金融体系是在任何时代立足的基础。"
                            },
                            {
                                text: "🤖 AI理财助手和自动化投资",
                                scores: { tech: 3, efficient: 1 },
                                response: "你对科技充满兴趣，相信AI能带来更好的投资体验。"
                            },
                            {
                                text: "👥 未来社交网络和人脉资源",
                                scores: { networker: 3, social: 1 },
                                response: "你认为人脉在任何时代都是最重要的财富。"
                            },
                            {
                                text: "🚀 时空贸易和跨维度商机", 
                                scores: { adventurer: 3, entrepreneur: 1 },
                                response: "你被时空贸易的巨大潜力深深吸引。"
                            }
                        ]
                    }
                ]
            },
            
            // 第二章：古代智慧
            {
                chapter: "第二章：古代智慧",
                story: "⏳ 你穿越到宋朝，正值海上丝绸之路的黄金时期。古代的商人们有着独特的财富智慧...",
                questions: [
                    {
                        question: "在宋朝，你想要学习什么商道？",
                        options: [
                            {
                                text: "🏮 传统商号的经营之道",
                                scores: { traditional: 2, stable: 1 },
                                response: "你相信百年老店的经营智慧值得深入学习。"
                            },
                            {
                                text: "🌊 海上贸易的风险管理",
                                scores: { riskmanager: 2, adventurer: 1 },
                                response: "你对高风险高回报的贸易模式充满兴趣。"
                            },
                            {
                                text: "📜 古代契约和信誉体系",
                                scores: { honest: 2, planner: 1 },
                                response: "你认为信誉是经商之本，想要深入了解。"
                            },
                            {
                                text: "💎 珠宝古董的鉴定投资",
                                scores: { collector: 2, analyst: 1 },
                                response: "你对保值增值的实物投资很感兴趣。"
                            }
                        ]
                    }
                ]
            }
            
            // 可以继续添加更多章节...
        ];
        
        // 根据版本返回相应数量的题目
        const targetCount = questionCounts[version] || 10;
        let selectedQuestions = [];
        let currentCount = 0;
        
        for (let chapter of allChapters) {
            for (let q of chapter.questions) {
                if (currentCount < targetCount) {
                    selectedQuestions.push({
                        ...q,
                        chapter: chapter.chapter,
                        story: chapter.story
                    });
                    currentCount++;
                }
            }
            if (currentCount >= targetCount) break;
        }
        
        return selectedQuestions;
    },
    
    // 科幻专属人格映射
    personalityMapping: {
        analyst: "starInvestor",         // 分析 -> 星际投资客
        planner: "timeMagician",         // 规划 -> 时间复利魔法师
        tech: "digitalHoarder",          // 科技 -> 数字囤积者
        efficient: "minimalistWealth",   // 效率 -> 极简理财家
        networker: "socialInvestor",     // 网络 -> 社交投资达人
        social: "socialInvestor",        // 社交 -> 社交投资达人
        adventurer: "adventureWealth",   // 冒险 -> 冒险财富家
        entrepreneur: "creativeWealth",  // 创业 -> 创意财富家
        traditional: "digitalHoarder",   // 传统 -> 数字囤积者
        stable: "minimalistWealth",      // 稳定 -> 极简理财家
        riskmanager: "starInvestor",     // 风控 -> 星际投资客
        honest: "socialInvestor",        // 诚信 -> 社交投资达人
        collector: "emotionSpender",     // 收藏 -> 情绪消费家
        // 可以继续添加更多映射...
    }
};