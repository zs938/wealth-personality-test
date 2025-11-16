// 现代都市财富故事线
const modernStory = {
    title: "都市财富传奇",
    introduction: "🏙️ 在这个充满机遇与挑战的现代都市，你将从职场新人开始，一步步打造属于自己的财富帝国...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20,
            deep: 45
        };
        
        const allChapters = [
            // 第一章：职场起步
            {
                chapter: "第一章：职场起步",
                story: "💼 你刚刚加入一家知名公司，面对全新的工作环境和同事，如何规划自己的职业和财务未来？",
                questions: [
                    {
                        question: "拿到第一份工资后，你的首要计划是？",
                        options: [
                            {
                                text: "💰 制定详细的储蓄和投资计划",
                                scores: { planner: 3, saver: 1 },
                                response: "你深知理财要趁早，从第一份收入就开始规划。"
                            },
                            {
                                text: "🎓 投资自己，报名技能提升课程",
                                scores: { selfinvestor: 3, learner: 1 },
                                response: "你认为投资大脑是最好的投资，持续学习最重要。"
                            },
                            {
                                text: "🏠 为未来的住房首付做准备",
                                scores: { goaloriented: 3, stable: 1 },
                                response: "你有明确的人生目标，早早为重大支出做准备。"
                            },
                            {
                                text: "🛍️ 适当奖励自己，保持工作动力", 
                                scores: { balancer: 3, enjoyer: 1 },
                                response: "你相信劳逸结合，适度的奖励能提升工作热情。"
                            }
                        ]
                    }
                ]
            },
            
            // 第二章：投资初体验
            {
                chapter: "第二章：投资初体验",
                story: "📈 工作一年后，你积累了一些储蓄。朋友们都在讨论股票、基金等投资方式，你要如何开始？",
                questions: [
                    {
                        question: "你的第一笔投资会选择什么？",
                        options: [
                            {
                                text: "📊 指数基金，稳健起步",
                                scores: { cautious: 2, beginner: 1 },
                                response: "你选择相对安全的投资方式，先积累经验。"
                            },
                            {
                                text: "🚀 科技股，追求高增长",
                                scores: { growth: 2, risktaker: 1 },
                                response: "你愿意承担风险，追求更高的投资回报。"
                            },
                            {
                                text: "🏦 银行理财产品，保本为主",
                                scores: { secure: 2, conservative: 1 },
                                response: "安全性是你的首要考虑，宁愿收益低也要保本。"
                            },
                            {
                                text: "📚 先系统学习，不急于投资",
                                scores: { learner: 2, analyst: 1 },
                                response: "你认为知识就是力量，先学习再实践。"
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
    
    // 现代专属人格映射
    personalityMapping: {
        planner: "timeMagician",         // 规划 -> 时间复利魔法师
        saver: "digitalHoarder",         // 储蓄 -> 数字囤积者
        selfinvestor: "knowledgeMonetizer", // 自我投资 -> 知识变现者
        learner: "knowledgeMonetizer",   // 学习 -> 知识变现者
        goaloriented: "starInvestor",    // 目标导向 -> 星际投资客
        stable: "minimalistWealth",      // 稳定 -> 极简理财家
        balancer: "emotionSpender",      // 平衡 -> 情绪消费家
        enjoyer: "emotionSpender",       // 享受 -> 情绪消费家
        cautious: "digitalHoarder",      // 谨慎 -> 数字囤积者
        beginner: "minimalistWealth",    // 新手 -> 极简理财家
        growth: "starInvestor",          // 增长 -> 星际投资客
        risktaker: "adventureWealth",    // 风险承担 -> 冒险财富家
        secure: "digitalHoarder",        // 安全 -> 数字囤积者
        conservative: "minimalistWealth",// 保守 -> 极简理财家
        analyst: "starInvestor",         // 分析 -> 星际投资客
        // 可以继续添加更多映射...
    }
};