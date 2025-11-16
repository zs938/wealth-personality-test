// 蔬菜王国财富故事线
const fruitStory = {
    title: "果蔬王国财富选举",
    introduction: "👑 果蔬王国正在选举新的'财富大臣'！作为新晋的果蔬公民，你将参与这场有趣的选举，展现你的财富智慧...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20,
            deep: 45
        };
        
        const allChapters = [
            // 第一章：初入王国
            {
                chapter: "第一章：初入王国",
                story: "🌈 你来到了神奇的果蔬王国，这里有智慧的苹果长老、慷慨的西瓜先生、精明的葡萄姐妹...你要如何在这里建立自己的声誉？",
                questions: [
                    {
                        question: "你希望成为什么样的果蔬公民？",
                        options: [
                            {
                                text: "🥦 西兰花智者 - 知识渊博，善于规划",
                                scores: { wise: 3, planner: 1 },
                                response: "你选择了智慧之路，相信知识就是最大的财富。"
                            },
                            {
                                text: "🍉 西瓜大亨 - 慷慨大方，人脉广阔",
                                scores: { generous: 3, networker: 1 },
                                response: "你天生热情开朗，相信人脉就是财富。"
                            },
                            {
                                text: "🍇 葡萄商人 - 精打细算，善于经营", 
                                scores: { merchant: 3, calculator: 1 },
                                response: "你天生对数字敏感，善于发现商机。"
                            },
                            {
                                text: "🌶️ 辣椒冒险家 - 敢于尝试，不畏风险",
                                scores: { adventurer: 3, risktaker: 1 },
                                response: "你喜欢刺激，相信高风险带来高回报。"
                            }
                        ]
                    }
                ]
            },
            
            // 第二章：财富挑战
            {
                chapter: "第二章：财富挑战",
                story: "💼 王国面临经济危机！果蔬币贬值，市场混乱。作为候选人的你需要提出解决方案来赢得选民信任...",
                questions: [
                    {
                        question: "你的经济振兴计划重点是？",
                        options: [
                            {
                                text: "🏦 建立果蔬银行，稳定货币",
                                scores: { stable: 2, banker: 1 },
                                response: "你认为金融稳定是经济复苏的基础。"
                            },
                            {
                                text: "🚀 鼓励创新，发展新产业",
                                scores: { innovator: 2, growth: 1 },
                                response: "你相信创新是推动经济发展的核心动力。"
                            },
                            {
                                text: "🤝 加强贸易，拓展外部市场",
                                scores: { trader: 2, networker: 1 },
                                response: "你认为开放和合作才能带来真正的繁荣。"
                            },
                            {
                                text: "📚 投资教育，培养人才",
                                scores: { educator: 2, longterm: 1 },
                                response: "你坚信人才是国家最宝贵的财富。"
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
    
    // 果蔬专属人格映射
    personalityMapping: {
        wise: "knowledgeMonetizer",      // 智慧 -> 知识变现者
        planner: "timeMagician",         // 规划 -> 时间复利魔法师
        generous: "socialInvestor",      // 慷慨 -> 社交投资达人
        networker: "socialInvestor",     // 人脉 -> 社交投资达人
        merchant: "digitalHoarder",      // 商人 -> 数字囤积者
        calculator: "minimalistWealth",  // 计算 -> 极简理财家
        adventurer: "adventureWealth",   // 冒险 -> 冒险财富家
        risktaker: "starInvestor",       // 风险 -> 星际投资客
        stable: "digitalHoarder",        // 稳定 -> 数字囤积者
        banker: "minimalistWealth",      // 银行 -> 极简理财家
        innovator: "creativeWealth",     // 创新 -> 创意财富家
        growth: "starInvestor",          // 增长 -> 星际投资客
        trader: "socialInvestor",        // 贸易 -> 社交投资达人
        educator: "knowledgeMonetizer",  // 教育 -> 知识变现者
        longterm: "timeMagician",        // 长期 -> 时间复利魔法师
        // 可以继续添加更多映射...
    }
};