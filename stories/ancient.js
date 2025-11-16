// 古风武侠财富故事线
const ancientStory = {
    title: "江湖财缘录",
    introduction: "🎎 大明嘉靖年间，天下财富流转，江湖风云再起。你，一个身世成谜的少年，即将踏入这纷扰的江湖，书写属于自己的财富传奇...",
    
    // 根据版本选择题目数量
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20, 
            deep: 45
        };
        
        const allChapters = [
            // 第一章：身世之谜
            {
                chapter: "第一章：身世之谜",
                story: "🌅 清晨的竹林间，一位白发老者将你唤至身边：'孩子，你已成年，是时候知晓自己的身世了。选择你的出身，将决定你未来的道路...'",
                questions: [
                    {
                        question: "你的出身是？",
                        options: [
                            { 
                                text: "🏮 江南富商之家 - 家财万贯，精通商道", 
                                scores: { merchant: 3 },
                                response: "你选择了商贾之路，自幼耳濡目染，对金银有着天生的敏感。"
                            },
                            { 
                                text: "⚔️ 将门之后 - 祖辈战功赫赫，重视信誉", 
                                scores: { warrior: 3 },
                                response: "将门虎子，你继承了祖辈的豪迈与担当，视信誉为生命。"
                            },
                            { 
                                text: "🌾 农家子弟 - 勤俭持家，脚踏实地", 
                                scores: { farmer: 3 },
                                response: "农家出身让你懂得一粥一饭来之不易，勤俭成为你的本能。"
                            },
                            { 
                                text: "🎭 江湖孤儿 - 被高人收养，学得奇技", 
                                scores: { wanderer: 3 },
                                response: "江湖漂泊让你灵活应变，总能找到别人看不到的机会。"
                            }
                        ]
                    }
                ]
            },
            
            // 第二章：初入江湖
            {
                chapter: "第二章：初入江湖", 
                story: "🏮 你带着简单的行囊来到繁华的苏州城。运河上千帆竞发，街市中人声鼎沸。如何在江湖中立足，是你面临的第一个考验...",
                questions: [
                    {
                        question: "在苏州城，你首先想要？",
                        options: [
                            {
                                text: "💰 拜访钱庄，了解银钱往来",
                                scores: { merchant: 2, planner: 1 },
                                response: "你深知'兵马未动，粮草先行'的道理，先摸清财务门路。"
                            },
                            {
                                text: "🤝 结交当地豪杰，建立人脉",
                                scores: { networker: 2, warrior: 1 },
                                response: "你相信'在家靠父母，出门靠朋友'，人脉就是财富。"
                            },
                            {
                                text: "🎯 寻找商机，准备小本经营", 
                                scores: { entrepreneur: 2, merchant: 1 },
                                response: "你眼光独到，总能发现别人忽略的商机。"
                            },
                            {
                                text: "📚 寻访名师，继续深造",
                                scores: { scholar: 2, planner: 1 },
                                response: "你认为'学无止境'，不断提升自己才是根本。"
                            }
                        ]
                    },
                    {
                        question: "遇到一位老艺人街头表演绝技，你会？",
                        options: [
                            {
                                text: "🎁 慷慨打赏，支持民间艺术",
                                scores: { generous: 2, warrior: 1 },
                                response: "路见才艺，慷慨解囊，你的大方令人敬佩。"
                            },
                            {
                                text: "💼 询问可否合作，开发商业价值",
                                scores: { practical: 2, merchant: 1 },
                                response: "你看到了艺术背后的商机，想要实现双赢。"
                            },
                            {
                                text: "📊 观察观众反应，评估市场潜力",
                                scores: { cautious: 2, planner: 1 },
                                response: "谨慎是你的天性，不轻易被表象所惑。"
                            },
                            {
                                text: "👥 帮忙宣传，吸引更多观众",
                                scores: { networker: 2, community: 1 },
                                response: "你懂得团结力量，集合众人之力帮助他人。"
                            }
                        ]
                    }
                ]
            },
            
            // 第三章：商海沉浮
            {
                chapter: "第三章：商海沉浮",
                story: "🌊 三年过去，你在江湖中已小有名气。此时，一个重大的机会摆在面前：有人邀请你参与海外贸易，利润丰厚但风险巨大...",
                questions: [
                    {
                        question: "面对海外贸易的机会，你的态度是？",
                        options: [
                            {
                                text: "🚢 立即参与，富贵险中求",
                                scores: { adventurer: 3, entrepreneur: 2 },
                                response: "你相信风险与收益并存，愿意为高回报承担风险。"
                            },
                            {
                                text: "📈 深入研究，谨慎投资",
                                scores: { analyst: 3, planner: 2 },
                                response: "你坚持'谋定而后动'，不做没有把握的事情。"
                            },
                            {
                                text: "🤝 联合其他商人，分摊风险",
                                scores: { networker: 3, community: 2 },
                                response: "独木难成林，你善于借助集体的力量。"
                            },
                            {
                                text: "🎯 专注现有生意，不贪多求大",
                                scores: { conservative: 3, farmer: 2 },
                                response: "你深知'贪多嚼不烂'，专注才能做得更好。"
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
    
    // 古风专属人格映射
    personalityMapping: {
        merchant: "digitalHoarder",      // 商贾 -> 数字囤积者
        warrior: "starInvestor",         // 将门 -> 星际投资客  
        farmer: "minimalistWealth",      // 农家 -> 极简理财家
        wanderer: "adventureWealth",     // 游侠 -> 冒险财富家
        planner: "timeMagician",         // 谋士 -> 时间复利魔法师
        networker: "socialInvestor",     // 交际 -> 社交投资达人
        entrepreneur: "creativeWealth",  // 创业 -> 创意财富家
        scholar: "knowledgeMonetizer",   // 学者 -> 知识变现者
        generous: "emotionSpender",      // 慷慨 -> 情绪消费家
        practical: "mysticInvestor",     // 务实 -> 玄学理财师
        cautious: "digitalHoarder",      // 谨慎 -> 数字囤积者
        community: "socialInvestor",     // 社群 -> 社交投资达人
        adventurer: "adventureWealth",   // 冒险 -> 冒险财富家
        analyst: "starInvestor",         // 分析 -> 星际投资客
        conservative: "minimalistWealth" // 保守 -> 极简理财家
    }
};