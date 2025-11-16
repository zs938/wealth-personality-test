// 动物世界财富故事线
const animalStory = {
    title: "森林财富谜案",
    introduction: "🔍 森林银行发生了一起离奇的'金橡果失踪案'！作为动物侦探社的新晋侦探，你被委以重任，要在月圆之夜前破解这个谜团...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20,
            deep: 45
        };
        
        const allChapters = [
            // 第一章：案发现场
            {
                chapter: "第一章：案发现场",
                story: "🌳 你来到森林银行，看到焦急的松鼠行长和乱成一团的现场。金橡果在重重守卫下不翼而飞，这简直不可思议！",
                questions: [
                    {
                        question: "作为侦探，你的破案风格是？",
                        options: [
                            {
                                text: "🐿️ 仔细检查每个细节，不放过任何线索",
                                scores: { detailed: 3, hoarder: 1 },
                                response: "你像松鼠检查松果一样仔细，相信细节中藏着真相。"
                            },
                            {
                                text: "🦅 高空俯瞰，从大局分析作案动机",
                                scores: { strategic: 3, investor: 1 },
                                response: "你像老鹰般高瞻远瞩，善于从宏观角度思考问题。"
                            },
                            {
                                text: "🐝 询问所有目击者，收集多方信息",
                                scores: { social: 3, networker: 1 },
                                response: "你像蜜蜂采蜜般勤奋，相信群众的眼睛是雪亮的。"
                            },
                            {
                                text: "🦊 依靠直觉，寻找不合理的蛛丝马迹", 
                                scores: { intuitive: 3, creative: 1 },
                                response: "你像狐狸般机智，直觉往往能带你找到关键线索。"
                            }
                        ]
                    }
                ]
            },
            
            // 第二章：嫌疑人排查
            {
                chapter: "第二章：嫌疑人排查",
                story: "🎭 经过初步调查，你锁定了几个嫌疑人：爱炫耀的孔雀先生、神秘的猫头鹰教授、勤劳的蚂蚁家族、还有行踪不定的流浪猫...",
                questions: [
                    {
                        question: "你首先想要调查哪个嫌疑人？",
                        options: [
                            {
                                text: "🦚 孔雀先生 - 最近突然变得很阔绰",
                                scores: { analytical: 2, investor: 1 },
                                response: "你认为财务异常往往与案件有关，从金钱流向入手。"
                            },
                            {
                                text: "🦉 猫头鹰教授 - 知识渊博但行为古怪",
                                scores: { intellectual: 2, scholar: 1 },
                                response: "你相信智慧型犯罪需要高智商，教授值得重点关注。"
                            },
                            {
                                text: "🐜 蚂蚁家族 - 虽然勤劳但最近行为异常",
                                scores: { detailed: 2, practical: 1 },
                                response: "你觉得异常行为背后必有原因，蚂蚁家族需要排查。"
                            },
                            {
                                text: "🐈 流浪猫 - 行踪不定，难以捉摸",
                                scores: { adventurous: 2, wanderer: 1 },
                                response: "你认为最不可能的人往往最可疑，决定从难点突破。"
                            }
                        ]
                    },
                    {
                        question: "在调查过程中，你发现一个重要线索，你会？",
                        options: [
                            {
                                text: "🔒 立即保护现场，不让任何人靠近",
                                scores: { cautious: 2, detailed: 1 },
                                response: "你深知证据的重要性，第一时间保护现场不被破坏。"
                            },
                            {
                                text: "📢 召集所有动物，公布线索寻求帮助",
                                scores: { social: 2, networker: 1 },
                                response: "你相信集体智慧，希望通过大家的力量找到更多线索。"
                            },
                            {
                                text: "🤔 独自分析，不轻易相信他人",
                                scores: { independent: 2, analytical: 1 },
                                response: "你习惯独立思考，不轻易被外界意见影响判断。"
                            },
                            {
                                text: "🚀 立即追踪线索，争取时间优势",
                                scores: { adventurous: 2, intuitive: 1 },
                                response: "你行动迅速，相信时间就是破案的关键。"
                            }
                        ]
                    }
                ]
            },
            
            // 第三章：真相逼近
            {
                chapter: "第三章：真相逼近",
                story: "🌙 月圆之夜临近，你发现所有线索都指向一个意想不到的方向。原来金橡果失踪背后隐藏着更大的秘密...",
                questions: [
                    {
                        question: "面对复杂的线索网络，你的分析方法是？",
                        options: [
                            {
                                text: "📊 制作详细的线索关系图",
                                scores: { analytical: 3, detailed: 2 },
                                response: "你善于系统化思考，用图表理清复杂的关系网。"
                            },
                            {
                                text: "💡 跳出框架，从全新角度思考",
                                scores: { creative: 3, intuitive: 2 },
                                response: "你不被传统思维束缚，总能找到独特的分析角度。"
                            },
                            {
                                text: "👥 与其他侦探合作，头脑风暴",
                                scores: { social: 3, networker: 2 },
                                response: "你相信团队合作的力量，集思广益才能突破难关。"
                            },
                            {
                                text: "🎯 专注于最核心的几个线索",
                                scores: { strategic: 3, practical: 2 },
                                response: "你懂得抓大放小，不被次要信息干扰判断。"
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
    
    // 动物专属人格映射
    personalityMapping: {
        detailed: "digitalHoarder",      // 细致 -> 数字囤积者
        strategic: "starInvestor",       // 战略 -> 星际投资客
        social: "socialInvestor",        // 社交 -> 社交投资达人
        intuitive: "mysticInvestor",     // 直觉 -> 玄学理财师
        analytical: "knowledgeMonetizer",// 分析 -> 知识变现者
        intellectual: "timeMagician",    // 智慧 -> 时间复利魔法师
        practical: "minimalistWealth",   // 务实 -> 极简理财家
        adventurous: "adventureWealth",  // 冒险 -> 冒险财富家
        hoarder: "digitalHoarder",       // 囤积 -> 数字囤积者
        investor: "starInvestor",        // 投资 -> 星际投资客
        networker: "socialInvestor",     // 人脉 -> 社交投资达人
        scholar: "knowledgeMonetizer",   // 学者 -> 知识变现者
        wanderer: "adventureWealth",     // 流浪 -> 冒险财富家
        creative: "creativeWealth",      // 创意 -> 创意财富家
        cautious: "digitalHoarder",      // 谨慎 -> 数字囤积者
        independent: "minimalistWealth"  // 独立 -> 极简理财家
    }
};