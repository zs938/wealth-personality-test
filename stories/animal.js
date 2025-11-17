// stories/animal.js - 动物世界故事线（完整35题版）
const animalStory = {
    title: "森林财富谜案",
    introduction: "🔍 在神秘的动物森林，一桩离奇的'金橡果失踪案'震惊了整个森林王国！你作为动物侦探社的新晋侦探，被委以重任。但这起案件背后隐藏着更大的阴谋——一个企图控制森林经济的神秘组织正在暗中活动...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20, 
            deep: 35
        };
        
        const allChapters = [
            {
                chapter: "第一章：金橡果谜案",
                story: "🌳 森林银行的金橡果储备在一夜之间不翼而飞！现场只留下一根神秘的羽毛和一组奇怪的脚印。松鼠行长焦急万分，因为这批金橡果关系到整个森林冬季的粮食储备。更令人不安的是，这已经是三个月来的第三起类似案件...",
                questions: [
                    {
                        question: "作为新任侦探，你的调查方法是？",
                        options: [
                            { 
                                text: "🔍 仔细勘查现场，不放过任何细节", 
                                scores: { meticulous: 3, analyst: 1 },
                                response: "你像蚂蚁般细致，相信真相藏在细节中。"
                            },
                            { 
                                text: "🦅 高空俯瞰，分析案件全貌", 
                                scores: { strategist: 3, overview: 1 },
                                response: "你像老鹰般高瞻远瞩，从大局入手。"
                            },
                            { 
                                text: "🐝 询问所有目击者，收集情报", 
                                scores: { social: 3, networker: 1 },
                                response: "你像蜜蜂般勤劳，相信群众的眼睛是雪亮的。"
                            },
                            { 
                                text: "🦊 依靠直觉，寻找不合理之处", 
                                scores: { intuitive: 3, creative: 1 },
                                response: "你像狐狸般机智，直觉往往最准确。"
                            }
                        ]
                    },
                    {
                        question: "在现场发现的羽毛经过鉴定是孔雀的，但孔雀商人坚称自己无辜，你会？",
                        options: [
                            { 
                                text: "🎭 深入调查孔雀商人的背景", 
                                scores: { investigator: 2, meticulous: 1 },
                                response: "你觉得证据指向明确，需要深入调查。"
                            },
                            { 
                                text: "🤔 怀疑有人栽赃陷害", 
                                scores: { strategist: 2, observer: 1 },
                                response: "你认为事情没有那么简单。"
                            },
                            { 
                                text: "🕵️ 同时调查其他嫌疑人", 
                                scores: { analyst: 2, balanced: 1 },
                                response: "你觉得不应该只盯着一个方向。"
                            },
                            { 
                                text: "🔎 重新检查现场，寻找更多证据", 
                                scores: { meticulous: 2, patient: 1 },
                                response: "你认为现有证据还不够充分。"
                            }
                        ]
                    },
                    {
                        question: "你发现银行内部有监控系统，但关键时段的录像被删除了，你会？",
                        options: [
                            { 
                                text: "💻 寻找技术专家恢复数据", 
                                scores: { innovator: 2, practical: 1 },
                                response: "你相信技术能解决问题。"
                            },
                            { 
                                text: "🔍 调查有权限接触监控的员工", 
                                scores: { investigator: 2, focused: 1 },
                                response: "你觉得内鬼的可能性很大。"
                            },
                            { 
                                text: "🦉 寻找其他监控角度", 
                                scores: { creative: 2, resourceful: 1 },
                                response: "你善于从不同角度思考问题。"
                            },
                            { 
                                text: "📝 从其他线索入手", 
                                scores: { flexible: 2, adaptive: 1 },
                                response: "你觉得不应该在一条路上死磕。"
                            }
                        ]
                    },
                    {
                        question: "你发现现场脚印有刻意伪装的痕迹，这说明什么？",
                        options: [
                            { 
                                text: "🎭 作案者是反侦察高手", 
                                scores: { strategist: 2, clever: 1 },
                                response: "你觉得对手很专业。"
                            },
                            { 
                                text: "🤔 可能有多个作案者", 
                                scores: { analyst: 2, observer: 1 },
                                response: "你认为情况比表面更复杂。"
                            },
                            { 
                                text: "🔍 需要更专业的痕迹分析", 
                                scores: { meticulous: 2, scientist: 1 },
                                response: "你觉得需要专家协助。"
                            },
                            { 
                                text: "💡 伪装本身也是线索", 
                                scores: { intuitive: 2, creative: 1 },
                                response: "你认为伪装方式能透露信息。"
                            }
                        ]
                    },
                    {
                        question: "松鼠行长告诉你，这已经是第三次失窃，前两次都没有破案，你的态度是？",
                        options: [
                            { 
                                text: "💪 决心要破获系列案件", 
                                scores: { determined: 2, confident: 1 },
                                response: "你觉得这是证明自己的机会。"
                            },
                            { 
                                text: "🔗 将三起案件联系起来分析", 
                                scores: { analyst: 2, systematic: 1 },
                                response: "你认为应该整体看待。"
                            },
                            { 
                                text: "🤝 寻找前两次的调查记录", 
                                scores: { learner: 2, networker: 1 },
                                response: "你觉得可以从历史中学习。"
                            },
                            { 
                                text: "🔄 采用全新的调查思路", 
                                scores: { innovator: 2, creative: 1 },
                                response: "你认为传统方法可能无效。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第二章：神秘嫌疑人", 
                story: "🎭 你锁定了几个关键嫌疑人：爱炫耀的孔雀商人、行踪诡秘的猫头鹰教授、勤劳但最近行为异常的蚂蚁家族，还有那个总是出现在案发现场附近的流浪猫。更奇怪的是，每个嫌疑人似乎都掌握着部分真相...",
                questions: [
                    {
                        question: "你决定首先重点调查哪个嫌疑人？",
                        options: [
                            {
                                text: "🦚 孔雀商人 - 最近突然变得异常富有",
                                scores: { wealthFocused: 2, practical: 1 },
                                response: "你认为金钱动机往往是最直接的。"
                            },
                            {
                                text: "🦉 猫头鹰教授 - 知识渊博但行为可疑",
                                scores: { intellectual: 2, curious: 1 },
                                response: "你觉得智慧型犯罪需要重点关注。"
                            },
                            {
                                text: "🐜 蚂蚁家族 - 勤劳但最近行为反常", 
                                scores: { community: 2, observant: 1 },
                                response: "你认为异常行为背后必有原因。"
                            },
                            {
                                text: "🐈 流浪猫 - 行踪不定，难以捉摸",
                                scores: { adventurous: 2, riskTaker: 1 },
                                response: "你觉得最不可能的人往往最可疑。"
                            }
                        ]
                    },
                    {
                        question: "在调查孔雀商人时，你发现他的财富来源不明，你的做法是？",
                        options: [
                            {
                                text: "💼 查清他的所有商业往来",
                                scores: { meticulous: 2, analyst: 1 },
                                response: "你认为财务线索很重要。"
                            },
                            {
                                text: "🤝 假装合作，套取信息",
                                scores: { strategist: 2, clever: 1 },
                                response: "你觉得智取比强攻更有效。"
                            },
                            {
                                text: "🔍 监视他的一举一动", 
                                scores: { observer: 2, patient: 1 },
                                response: "你相信时间会揭露真相。"
                            },
                            {
                                text: "⚡ 直接质问，观察反应",
                                scores: { confront: 2, brave: 1 },
                                response: "你喜欢直截了当的方式。"
                            }
                        ]
                    },
                    {
                        question: "猫头鹰教授声称在研究'森林经济学'，但拒绝透露细节，你会？",
                        options: [
                            {
                                text: "📚 研究他的学术背景和论文",
                                scores: { intellectual: 2, scholar: 1 },
                                response: "你觉得学术研究可能藏有线索。"
                            },
                            {
                                text: "🔬 潜入实验室寻找证据",
                                scores: { adventurer: 2, riskTaker: 1 },
                                response: "你认为实际行动比空谈更有效。"
                            },
                            {
                                text: "🤔 寻找他的研究助手了解情况", 
                                scores: { networker: 2, social: 1 },
                                response: "你觉得助手可能知道内情。"
                            },
                            {
                                text: "💡 从其他角度验证他的说法",
                                scores: { analyst: 2, skeptic: 1 },
                                response: "你习惯用事实检验言论。"
                            }
                        ]
                    },
                    {
                        question: "蚂蚁家族最近大量囤积食物，但拒绝解释原因，你的判断是？",
                        options: [
                            {
                                text: "🔄 他们可能知道冬季会异常寒冷",
                                scores: { observer: 2, practical: 1 },
                                response: "你觉得这是合理的预防措施。"
                            },
                            {
                                text: "🤨 行为反常，必有隐情",
                                scores: { suspicious: 2, investigator: 1 },
                                response: "你认为这可能是重要线索。"
                            },
                            {
                                text: "🌰 可能与金橡果失踪有关", 
                                scores: { intuitive: 2, creative: 1 },
                                response: "你的直觉告诉你两者有关联。"
                            },
                            {
                                text: "📊 需要更多证据才能判断",
                                scores: { cautious: 2, analyst: 1 },
                                response: "你觉得不能轻易下结论。"
                            }
                        ]
                    },
                    {
                        question: "流浪猫总是出现在案发现场附近，但拒绝配合调查，你的策略是？",
                        options: [
                            {
                                text: "🐟 用食物和善意赢得信任",
                                scores: { diplomat: 2, patient: 1 },
                                response: "你觉得建立关系很重要。"
                            },
                            {
                                text: "🔍 暗中跟踪观察他的行踪",
                                scores: { observer: 2, strategist: 1 },
                                response: "你认为行动比言语更有说服力。"
                            },
                            {
                                text: "🤝 寻找其他动物了解他的背景", 
                                scores: { networker: 2, social: 1 },
                                response: "你觉得应该从侧面了解。"
                            },
                            {
                                text: "💡 设下陷阱测试他的反应",
                                scores: { clever: 2, innovator: 1 },
                                response: "你善于用计谋获取信息。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第三章：影子组织",
                story: "🌑 你发现所有线索都指向一个神秘的'影子组织'，他们正在暗中操控森林的经济命脉。更可怕的是，这个组织的下一个目标是控制冬季粮食供应，让所有动物都依赖他们生存...",
                questions: [
                    {
                        question: "面对这个庞大的阴谋，你的应对策略是？",
                        options: [
                            {
                                text: "🦁 正面挑战，揭露组织真面目",
                                scores: { brave: 3, confront: 2 },
                                response: "你像狮子般勇敢，不畏强权。"
                            },
                            {
                                text: "🐺 潜入组织内部收集证据",
                                scores: { stealthy: 3, patient: 2 },
                                response: "你像狼般耐心，善于潜伏。"
                            },
                            {
                                text: "🐘 联合其他动物共同对抗",
                                scores: { leader: 3, unifier: 2 },
                                response: "你像大象般稳重，相信团结的力量。"
                            },
                            {
                                text: "🦉 智取而非力敌，寻找弱点",
                                scores: { wise: 3, strategist: 2 },
                                response: "你像猫头鹰般智慧，善于寻找破绽。"
                            }
                        ]
                    },
                    {
                        question: "你发现影子组织的成员遍布森林各处，包括一些你信任的动物，你会？",
                        options: [
                            {
                                text: "💔 立即切断与所有可疑对象的联系",
                                scores: { cautious: 2, protector: 1 },
                                response: "你觉得安全第一。"
                            },
                            {
                                text: "🎭 假装不知，继续观察",
                                scores: { strategist: 2, observer: 1 },
                                response: "你选择放长线钓大鱼。"
                            },
                            {
                                text: "🤝 试探性地接触，获取信息", 
                                scores: { networker: 2, clever: 1 },
                                response: "你觉得可以利用这个机会。"
                            },
                            {
                                text: "🔍 重点调查核心成员",
                                scores: { focused: 2, analyst: 1 },
                                response: "你认为应该集中精力。"
                            }
                        ]
                    },
                    {
                        question: "影子组织的经济控制手段十分高明，他们的下一个目标是什么？",
                        options: [
                            {
                                text: "🌰 垄断坚果市场",
                                scores: { merchant: 2, practical: 1 },
                                response: "你觉得这是最直接的财富来源。"
                            },
                            {
                                text: "💧 控制水源供应",
                                scores: { strategist: 2, powerful: 1 },
                                response: "你认为生命之源才是真正的控制手段。"
                            },
                            {
                                text: "🌳 掌握土地所有权", 
                                scores: { traditional: 2, lawful: 1 },
                                response: "你觉得土地是最基础的资源。"
                            },
                            {
                                text: "📊 建立新的货币体系",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你认为金融控制才是最高明的手段。"
                            }
                        ]
                    },
                    {
                        question: "你发现影子组织的首领可能是森林中的某个德高望重的长者，你的反应是？",
                        options: [
                            {
                                text: "😲 难以置信，需要更多证据",
                                scores: { cautious: 2, skeptic: 1 },
                                response: "你觉得这个结论太惊人。"
                            },
                            {
                                text: "🔍 立即深入调查这位长者",
                                scores: { investigator: 2, focused: 1 },
                                response: "你认为必须尽快查明真相。"
                            },
                            {
                                text: "🤔 重新审视所有线索", 
                                scores: { analyst: 2, meticulous: 1 },
                                response: "你觉得需要重新梳理案情。"
                            },
                            {
                                text: "💡 这可能是个烟雾弹",
                                scores: { strategist: 2, clever: 1 },
                                response: "你认为可能是有人故意误导。"
                            }
                        ]
                    },
                    {
                        question: "你获得了影子组织下一次行动的情报，你的应对是？",
                        options: [
                            {
                                text: "🚨 立即通知所有动物防范",
                                scores: { protector: 2, honest: 1 },
                                response: "你觉得有责任保护大家。"
                            },
                            {
                                text: "🎯 设下陷阱等待他们行动",
                                scores: { strategist: 2, clever: 1 },
                                response: "你想人赃俱获。"
                            },
                            {
                                text: "🤝 联合警方共同行动", 
                                scores: { lawful: 2, alliance: 1 },
                                response: "你认为需要官方力量。"
                            },
                            {
                                text: "🔍 继续监视收集更多证据",
                                scores: { patient: 2, observer: 1 },
                                response: "你觉得时机还不成熟。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第四章：森林议会",
                story: "🌳 动物们召开紧急森林议会，讨论如何应对影子组织的威胁。你在会议上提出了关键证据，但影子组织的代表也在现场，试图混淆视听。更糟糕的是，一些动物因为害怕而选择沉默...",
                questions: [
                    {
                        question: "在议会上，你的发言策略是？",
                        options: [
                            {
                                text: "🎯 直接出示证据，正面交锋",
                                scores: { brave: 3, confront: 2 },
                                response: "你选择光明正大地揭露真相。"
                            },
                            {
                                text: "🎭 设下语言陷阱，让对方自相矛盾",
                                scores: { clever: 3, strategist: 2 },
                                response: "你用智慧让对手露出破绽。"
                            },
                            {
                                text: "🤝 争取中间派的支持，孤立对手",
                                scores: { diplomat: 3, networker: 2 },
                                response: "你相信团结就是力量。"
                            },
                            {
                                text: "📊 用数据说话，让事实胜于雄辩",
                                scores: { analyst: 3, meticulous: 2 },
                                response: "你认为客观证据最有说服力。"
                            }
                        ]
                    },
                    {
                        question: "面对害怕的动物们，你的安抚方式是？",
                        options: [
                            {
                                text: "🛡️ 承诺保护他们的安全",
                                scores: { protector: 2, leader: 1 },
                                response: "你愿意承担保护大家的责任。"
                            },
                            {
                                text: "💎 用利益说服，展示合作的好处",
                                scores: { practical: 2, merchant: 1 },
                                response: "你认为实际的利益最能打动人心。"
                            },
                            {
                                text: "📚 教育大家团结的重要性",
                                scores: { educator: 2, wise: 1 },
                                response: "你希望通过知识消除恐惧。"
                            },
                            {
                                text: "🎪 举办活动提振士气",
                                scores: { stimulator: 2, creative: 1 },
                                response: "你觉得欢乐的氛围能驱散恐惧。"
                            }
                        ]
                    },
                    {
                        question: "影子组织在议会上提出看似合理的'经济改革方案'，企图获得支持，你的应对是？",
                        options: [
                            {
                                text: "⚡ 立即指出方案的漏洞",
                                scores: { confront: 2, brave: 1 },
                                response: "你觉得必须立即反驳。"
                            },
                            {
                                text: "📝 提出更好的替代方案",
                                scores: { innovator: 2, reformer: 1 },
                                response: "你认为建设比批判更重要。"
                            },
                            {
                                text: "🔍 要求对方提供详细数据", 
                                scores: { analyst: 2, skeptic: 1 },
                                response: "你觉得需要用事实检验。"
                            },
                            {
                                text: "🤝 寻求其他专家的意见",
                                scores: { networker: 2, diplomat: 1 },
                                response: "你相信集体智慧的力量。"
                            }
                        ]
                    },
                    {
                        question: "议会陷入僵局，双方势均力敌，你的破局策略是？",
                        options: [
                            {
                                text: "💡 提出折中方案",
                                scores: { diplomat: 2, negotiator: 1 },
                                response: "你觉得妥协是智慧的表现。"
                            },
                            {
                                text: "🎯 争取关键人物的支持",
                                scores: { networker: 2, focused: 1 },
                                response: "你认为少数关键人物能改变局势。"
                            },
                            {
                                text: "🔄 暂时休会，私下沟通", 
                                scores: { strategist: 2, patient: 1 },
                                response: "你觉得需要时间化解矛盾。"
                            },
                            {
                                text: "⚖️ 诉诸投票，尊重多数意见",
                                scores: { democrat: 2, lawful: 1 },
                                response: "你相信民主程序的力量。"
                            }
                        ]
                    },
                    {
                        question: "在议会辩论中，你发现一个重要证据被篡改了，你的做法是？",
                        options: [
                            {
                                text: "📢 立即公开揭露篡改行为",
                                scores: { honest: 2, confront: 1 },
                                response: "你觉得必须维护真相。"
                            },
                            {
                                text: "🔍 暗中调查谁篡改了证据",
                                scores: { investigator: 2, strategist: 1 },
                                response: "你想找出幕后黑手。"
                            },
                            {
                                text: "💡 用其他证据弥补", 
                                scores: { resourceful: 2, clever: 1 },
                                response: "你觉得应该灵活应对。"
                            },
                            {
                                text: "🤝 寻求技术专家恢复原证据",
                                scores: { practical: 2, innovator: 1 },
                                response: "你相信技术能解决问题。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第五章：最终对决",
                story: "⚡ 影子组织的真面目终于揭晓——原来是伪装成善良商人的狐狸家族！他们企图控制整个森林的经济命脉。在最终对决中，你需要制定策略，既要击败对手，又要保护森林的和平...",
                questions: [
                    {
                        question: "你的决战策略是？",
                        options: [
                            {
                                text: "⚔️ 正面决战，用实力说话",
                                scores: { warrior: 3, brave: 2 },
                                response: "你相信正义的力量终将获胜。"
                            },
                            {
                                text: "🎯 擒贼先擒王，直取首领",
                                scores: { strategist: 3, focused: 2 },
                                response: "你认为解决核心人物是关键。"
                            },
                            {
                                text: "🕸️ 层层设防，逐步瓦解",
                                scores: { planner: 3, systematic: 2 },
                                response: "你选择稳扎稳打的战术。"
                            },
                            {
                                text: "💡 用经济手段让其自行崩溃",
                                scores: { economist: 3, clever: 2 },
                                response: "你觉得商业问题要用商业方法解决。"
                            }
                        ]
                    },
                    {
                        question: "击败对手后，你对狐狸家族的处理方式是？",
                        options: [
                            {
                                text: "⚖️ 交给森林法庭公正审判",
                                scores: { justice: 3, lawful: 2 },
                                response: "你相信法律的公正。"
                            },
                            {
                                text: "🔄 给予改过自新的机会",
                                scores: { generous: 3, reformer: 2 },
                                response: "你认为每个人都有改过的权利。"
                            },
                            {
                                text: "🚫 驱逐出森林，永不得返回",
                                scores: { protector: 3, cautious: 2 },
                                response: "你觉得必须确保森林的安全。"
                            },
                            {
                                text: "🤝 将其纳入监管，限制行为",
                                scores: { regulator: 3, practical: 2 },
                                response: "你选择既防范又给予出路。"
                            }
                        ]
                    },
                    {
                        question: "你发现狐狸家族其实也是被更大的势力操控，你的态度是？",
                        options: [
                            {
                                text: "🔍 继续追查幕后黑手",
                                scores: { investigator: 2, determined: 1 },
                                response: "你觉得必须彻底解决问题。"
                            },
                            {
                                text: "💼 先解决眼前的问题",
                                scores: { practical: 2, focused: 1 },
                                response: "你认为应该分清主次。"
                            },
                            {
                                text: "🤝 争取狐狸家族的合作", 
                                scores: { networker: 2, clever: 1 },
                                response: "你觉得可以利用他们的信息。"
                            },
                            {
                                text: "🛡️ 加强森林的防御体系",
                                scores: { protector: 2, planner: 1 },
                                response: "你认为预防比追查更重要。"
                            }
                        ]
                    },
                    {
                        question: "在追查过程中，你发现森林的经济体系存在根本性问题，你的改革思路是？",
                        options: [
                            {
                                text: "🏦 建立森林中央银行",
                                scores: { systematic: 2, reformer: 1 },
                                response: "你觉得需要统一的金融管理。"
                            },
                            {
                                text: "🤝 促进各物种间的贸易合作",
                                scores: { diplomat: 2, alliance: 1 },
                                response: "你认为合作能创造更多价值。"
                            },
                            {
                                text: "🌱 发展多元化经济", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得单一经济模式太危险。"
                            },
                            {
                                text: "📚 加强经济教育",
                                scores: { educator: 2, scholar: 1 },
                                response: "你认为知识是防范风险的最好武器。"
                            }
                        ]
                    },
                    {
                        question: "在最终对决中，你发现对手也有苦衷，你的态度是？",
                        options: [
                            {
                                text: "❤️ 给予理解和同情",
                                scores: { generous: 2, emotional: 1 },
                                response: "你觉得每个人都有苦衷。"
                            },
                            {
                                text: "⚖️ 坚持原则，依法办事",
                                scores: { just: 2, lawful: 1 },
                                response: "你认为法律面前没有例外。"
                            },
                            {
                                text: "💡 寻找两全其美的解决方案", 
                                scores: { innovator: 2, reformer: 1 },
                                response: "你相信能找到更好的办法。"
                            },
                            {
                                text: "🎯 以牙还牙，以眼还眼",
                                scores: { warrior: 2, confront: 1 },
                                response: "你觉得血债必须血偿。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第六章：新的开始",
                story: "🌈 危机解除后，森林恢复了往日的和谐。但你意识到，要真正保护森林的经济安全，需要建立更完善的制度。动物们推举你为'森林经济顾问'，希望你带领大家建设更美好的未来...",
                questions: [
                    {
                        question: "你为森林设计的新经济制度的核心是？",
                        options: [
                            {
                                text: "⚖️ 公平公正的分配机制",
                                scores: { justice: 3, reformer: 2 },
                                response: "你认为公平是制度的基础。"
                            },
                            {
                                text: "🚀 鼓励创新的激励机制",
                                scores: { innovator: 3, stimulator: 2 },
                                response: "你觉得发展需要动力。"
                            },
                            {
                                text: "🤝 合作共赢的伙伴关系",
                                scores: { alliance: 3, networker: 2 },
                                response: "你相信团结就是力量。"
                            },
                            {
                                text: "🌳 可持续发展的生态经济",
                                scores: { protector: 3, visionary: 2 },
                                response: "你觉得长远发展更重要。"
                            }
                        ]
                    },
                    {
                        question: "面对不同物种的经济需求差异，你的协调原则是？",
                        options: [
                            {
                                text: "📊 用数据说话，科学决策",
                                scores: { analyst: 2, systematic: 1 },
                                response: "你相信客观分析的力量。"
                            },
                            {
                                text: "❤️ 关注弱势群体的需求",
                                scores: { generous: 2, protector: 1 },
                                response: "你觉得强者应该帮助弱者。"
                            },
                            {
                                text: "⚖️ 平衡各方利益", 
                                scores: { diplomat: 2, negotiator: 1 },
                                response: "你认为妥协是必要的智慧。"
                            },
                            {
                                text: "🎯 优先解决最紧迫的问题",
                                scores: { practical: 2, focused: 1 },
                                response: "你觉得应该分清轻重缓急。"
                            }
                        ]
                    },
                    {
                        question: "你希望留给森林后代最重要的财富智慧是什么？",
                        options: [
                            {
                                text: "💎 诚信经营的价值",
                                scores: { honest: 2, traditional: 1 },
                                response: "你觉得诚信是立身之本。"
                            },
                            {
                                text: "🌍 合作共赢的理念",
                                scores: { alliance: 2, networker: 1 },
                                response: "你认为团结比竞争更重要。"
                            },
                            {
                                text: "📚 持续学习的态度", 
                                scores: { scholar: 2, learner: 1 },
                                response: "你觉得知识是最宝贵的财富。"
                            },
                            {
                                text: "⚡ 适应变化的能力",
                                scores: { adaptive: 2, innovator: 1 },
                                response: "你认为灵活性是生存的关键。"
                            }
                        ]
                    },
                    {
                        question: "你如何确保新制度能够长久运行？",
                        options: [
                            {
                                text: "🏛️ 建立完善的监督机制",
                                scores: { systematic: 2, regulator: 1 },
                                response: "你觉得制度需要制衡。"
                            },
                            {
                                text: "👥 培养下一代的治理人才",
                                scores: { educator: 2, investor: 1 },
                                response: "你认为人才是关键。"
                            },
                            {
                                text: "🔄 设计自我完善的机制", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得制度需要与时俱进。"
                            },
                            {
                                text: "🤝 建立广泛的社会共识",
                                scores: { diplomat: 2, networker: 1 },
                                response: "你相信共识是制度的基础。"
                            }
                        ]
                    },
                    {
                        question: "回顾整个破案经历，你认为最重要的收获是？",
                        options: [
                            {
                                text: "🔍 真相永远值得追寻",
                                scores: { truthSeeker: 2, determined: 1 },
                                response: "你觉得追求真理最重要。"
                            },
                            {
                                text: "🤝 团结合作的力量",
                                scores: { alliance: 2, networker: 1 },
                                response: "你认为团队合作最宝贵。"
                            },
                            {
                                text: "💡 智慧胜过武力", 
                                scores: { wise: 2, strategist: 1 },
                                response: "你觉得智慧是最强大的武器。"
                            },
                            {
                                text: "❤️ 正义终将战胜邪恶",
                                scores: { just: 2, idealist: 1 },
                                response: "你相信正义的力量。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第七章：森林传承",
                story: "🌟 多年以后，你已经成为森林传奇侦探。新一代的年轻动物们向你请教侦探和经济管理的智慧。你开始思考如何将你的经验传承下去，让森林永远繁荣安定...",
                questions: [
                    {
                        question: "你希望年轻侦探们具备的最重要品质是？",
                        options: [
                            {
                                text: "🔍 敏锐的观察力",
                                scores: { observer: 2, meticulous: 1 },
                                response: "你觉得细节决定成败。"
                            },
                            {
                                text: "💡 创新的思维方式",
                                scores: { innovator: 2, creative: 1 },
                                response: "你认为创新能破解难题。"
                            },
                            {
                                text: "🤝 团队合作精神",
                                scores: { networker: 2, alliance: 1 },
                                response: "你觉得团结就是力量。"
                            },
                            {
                                text: "⚖️ 公正的判断力",
                                scores: { just: 2, balanced: 1 },
                                response: "你认为公正是侦探的灵魂。"
                            }
                        ]
                    },
                    {
                        question: "在传授经验时，你的教学方法是？",
                        options: [
                            {
                                text: "📚 系统化的理论知识",
                                scores: { systematic: 2, scholar: 1 },
                                response: "你觉得理论基础很重要。"
                            },
                            {
                                text: "🔬 实践案例分析",
                                scores: { practical: 2, analyst: 1 },
                                response: "你认为实践是最好的老师。"
                            },
                            {
                                text: "💡 启发式问题解决",
                                scores: { educator: 2, innovator: 1 },
                                response: "你希望培养独立思考能力。"
                            },
                            {
                                text: "🤝 师徒制传承",
                                scores: { traditional: 2, networker: 1 },
                                response: "你觉得亲身指导最有效。"
                            }
                        ]
                    },
                    {
                        question: "你认为森林经济最需要防范的风险是？",
                        options: [
                            {
                                text: "🌪️ 外部经济冲击",
                                scores: { protector: 2, cautious: 1 },
                                response: "你觉得外部风险最难控制。"
                            },
                            {
                                text: "💸 内部腐败问题",
                                scores: { regulator: 2, just: 1 },
                                response: "你认为内患比外敌更危险。"
                            },
                            {
                                text: "📉 经济结构单一",
                                scores: { economist: 2, reformer: 1 },
                                response: "你觉得多元化才能抗风险。"
                            },
                            {
                                text: "🌍 生态环境变化",
                                scores: { visionary: 2, protector: 1 },
                                response: "你认为生态是经济的基础。"
                            }
                        ]
                    },
                    {
                        question: "你留给森林最重要的制度遗产是？",
                        options: [
                            {
                                text: "⚖️ 完善的法律体系",
                                scores: { lawful: 2, systematic: 1 },
                                response: "你觉得法治是根本保障。"
                            },
                            {
                                text: "🏦 稳健的金融系统",
                                scores: { economist: 2, planner: 1 },
                                response: "你认为金融稳定最重要。"
                            },
                            {
                                text: "🤝 合作共赢的文化",
                                scores: { diplomat: 2, alliance: 1 },
                                response: "你觉得文化比制度更持久。"
                            },
                            {
                                text: "🎓 持续的教育体系",
                                scores: { educator: 2, investor: 1 },
                                response: "你认为教育投资回报最高。"
                            }
                        ]
                    },
                    {
                        question: "回顾一生，你最大的成就是？",
                        options: [
                            {
                                text: "🔍 破获重大案件",
                                scores: { investigator: 2, determined: 1 },
                                response: "你为维护正义而自豪。"
                            },
                            {
                                text: "🌳 建立繁荣经济",
                                scores: { reformer: 2, visionary: 1 },
                                response: "你为森林繁荣而欣慰。"
                            },
                            {
                                text: "🤝 促进物种团结",
                                scores: { unifier: 2, networker: 1 },
                                response: "你觉得和谐最重要。"
                            },
                            {
                                text: "💡 传承智慧火种",
                                scores: { educator: 2, scholar: 1 },
                                response: "你认为教育是永恒贡献。"
                            }
                        ]
                    }
                ]
            }
        ];
        
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
    
    personalityMapping: {
        meticulous: "蛛丝马迹侦探",
        analyst: "数据推理大师",
        strategist: "智谋布局师",
        overview: "高瞻远瞩者",
        social: "人脉情报家",
        networker: "关系网构建师",
        intuitive: "直觉洞察者",
        creative: "创意破局者",
        wealthFocused: "财富追踪者",
        practical: "务实行动派",
        intellectual: "智慧思考者",
        curious: "好奇探索家",
        community: "社群观察者",
        observant: "敏锐观察家",
        adventurous: "冒险侦查员",
        riskTaker: "风险承担者",
        brave: "勇敢直面者",
        confront: "正面交锋者",
        stealthy: "隐秘行动家",
        patient: "耐心等待者",
        leader: "团队领袖型",
        unifier: "团结凝聚者",
        wise: "智慧长者型",
        balanced: "平衡协调者",
        flexible: "灵活应变者",
        adaptive: "适应大师",
        resourceful: "资源整合师",
        focused: "专注目标型",
        suspicious: "疑点追踪者",
        skeptic: "怀疑求证者",
        powerful: "权力分析家",
        traditional: "传统守护者",
        visionary: "远见规划师",
        stimulator: "活力激发者",
        economist: "经济分析家",
        determined: "意志坚定者",
        systematic: "系统思维者",
        negotiator: "谈判专家型",
        democrat: "民主倡导者",
        reformer: "改革先锋型",
        educator: "知识传播者",
        scholar: "学术研究型",
        learner: "终身学习者",
        protector: "安全守护者",
        regulator: "规则制定师",
        warrior: "正义战士型",
        generous: "宽恕给予者",
        emotional: "情感共鸣者",
        just: "公正执法者",
        truthSeeker: "真相追寻者",
        idealist: "理想主义者"
    }
};
