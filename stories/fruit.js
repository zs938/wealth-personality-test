// stories/fruit.js - 果蔬王国故事线（完整35题版）
const fruitStory = {
    title: "果蔬王国财富选举",
    introduction: "👑 在神奇的果蔬王国，一场决定王国未来的'财富大臣'选举正在进行！你作为新晋的果蔬公民，意外被选为候选人。在这个充满生机的世界里，每个果蔬都有独特的财富智慧，你的选择将决定王国的经济命运...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20, 
            deep: 35
        };
        
        const allChapters = [
            {
                chapter: "第一章：命运的召唤",
                story: "🌈 在果蔬王国年度丰收节上，年迈的西瓜国王突然宣布退位，并提名你为'财富大臣'候选人！原来，你是传说中的'黄金种子'继承者，拥有让果蔬繁荣的神秘力量。但其他三位候选人也各怀绝技：精明的葡萄商人、保守的坚果长老、创新的辣椒发明家...",
                questions: [
                    {
                        question: "面对这突如其来的提名，你的第一反应是？",
                        options: [
                            { 
                                text: "🎯 立即接受，相信自己能改变王国", 
                                scores: { confident: 3, leader: 1 },
                                response: "你相信这是命运的安排，决心承担重任。"
                            },
                            { 
                                text: "🤔 先了解其他候选人和王国现状", 
                                scores: { cautious: 3, analyst: 1 },
                                response: "你认为充分了解情况才能做出正确决定。"
                            },
                            { 
                                text: "🍇 寻求葡萄商人的商业建议", 
                                scores: { networker: 3, learner: 1 },
                                response: "你相信经验丰富的商人能提供宝贵见解。"
                            },
                            { 
                                text: "🌱 低调观察，等待合适时机", 
                                scores: { observer: 3, patient: 1 },
                                response: "你觉得在暗处能看得更清楚。"
                            }
                        ]
                    },
                    {
                        question: "西瓜国王告诉你'黄金种子'的秘密：它能在贫瘠土地上种出金色果实，但需要消耗种植者的精力，你会？",
                        options: [
                            { 
                                text: "💪 立即尝试使用这种力量", 
                                scores: { adventurer: 2, confident: 1 },
                                response: "你迫不及待想要验证这种神奇力量。"
                            },
                            { 
                                text: "📚 先研究原理和副作用", 
                                scores: { scientist: 2, cautious: 1 },
                                response: "你认为应该先充分了解再行动。"
                            },
                            { 
                                text: "🤝 与其他候选人分享这个秘密", 
                                scores: { honest: 2, alliance: 1 },
                                response: "你相信合作比竞争更重要。"
                            },
                            { 
                                text: "🔒 保守秘密，作为最后手段", 
                                scores: { strategist: 2, protector: 1 },
                                response: "你觉得这种力量应该谨慎使用。"
                            }
                        ]
                    },
                    {
                        question: "你发现其他三位候选人都想拉拢你加入他们的阵营，你的态度是？",
                        options: [
                            { 
                                text: "🤝 与理念最相近的结盟", 
                                scores: { alliance: 2, focused: 1 },
                                response: "你选择志同道合的伙伴。"
                            },
                            { 
                                text: "🔄 保持中立，独立发展", 
                                scores: { independent: 2, strategist: 1 },
                                response: "你觉得保持独立性更重要。"
                            },
                            { 
                                text: "🎭 与多方接触，灵活应对", 
                                scores: { diplomat: 2, networker: 1 },
                                response: "你善于在不同势力间周旋。"
                            },
                            { 
                                text: "💡 提出新的合作模式", 
                                scores: { innovator: 2, reformer: 1 },
                                response: "你觉得传统结盟方式需要改变。"
                            }
                        ]
                    },
                    {
                        question: "葡萄商人告诉你王国最大的问题是'贸易壁垒'，各个果蔬家族各自为政，你的想法是？",
                        options: [
                            { 
                                text: "🌐 推动建立统一市场", 
                                scores: { reformer: 2, visionary: 1 },
                                response: "你认为统一市场能创造更大价值。"
                            },
                            { 
                                text: "🤝 先促成小范围合作", 
                                scores: { practical: 2, diplomat: 1 },
                                response: "你觉得应该从容易的开始。"
                            },
                            { 
                                text: "💎 利用黄金种子打破壁垒", 
                                scores: { clever: 2, opportunist: 1 },
                                response: "你看到了特殊能力的用途。"
                            },
                            { 
                                text: "📊 先调研各家族的需求", 
                                scores: { analyst: 2, scientist: 1 },
                                response: "你认为数据是决策的基础。"
                            }
                        ]
                    },
                    {
                        question: "坚果长老警告你黄金种子可能破坏生态平衡，你的态度是？",
                        options: [
                            { 
                                text: "🌱 重视警告，谨慎使用", 
                                scores: { balanced: 2, protector: 1 },
                                response: "你觉得生态平衡很重要。"
                            },
                            { 
                                text: "🔬 研究种子的环境影响", 
                                scores: { scientist: 2, analyst: 1 },
                                response: "你想用科学方法验证。"
                            },
                            { 
                                text: "💡 寻找平衡发展的方法", 
                                scores: { innovator: 2, reformer: 1 },
                                response: "你相信能找到两全其美的方案。"
                            },
                            { 
                                text: "🚀 优先解决经济问题", 
                                scores: { practical: 2, focused: 1 },
                                response: "你觉得经济发展是当务之急。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第二章：第一次考验", 
                story: "🍎 王国面临'甜度危机'！由于气候异常，水果们的甜度大幅下降，导致出口受阻，经济衰退。四位候选人需要提出解决方案。同时，你发现有人在暗中破坏你的竞选活动...",
                questions: [
                    {
                        question: "面对甜度危机，你的解决方案是？",
                        options: [
                            {
                                text: "🔬 研发新型肥料提升甜度",
                                scores: { innovator: 2, scientist: 1 },
                                response: "你认为技术突破是解决问题的关键。"
                            },
                            {
                                text: "🤝 与其他果蔬王国建立贸易联盟",
                                scores: { diplomat: 2, networker: 1 },
                                response: "你相信合作能化解危机。"
                            },
                            {
                                text: "💎 开发低甜度产品的市场需求", 
                                scores: { marketer: 2, creative: 1 },
                                response: "你觉得应该适应变化而不是对抗变化。"
                            },
                            {
                                text: "🌧️ 改善灌溉系统应对气候变化",
                                scores: { planner: 2, practical: 1 },
                                response: "你认为应该从根本上解决问题。"
                            }
                        ]
                    },
                    {
                        question: "在实施解决方案时，你发现预算有限，必须做出取舍，你的优先选择是？",
                        options: [
                            {
                                text: "🎯 集中资源解决最紧迫的问题",
                                scores: { focused: 2, practical: 1 },
                                response: "你觉得应该先解决燃眉之急。"
                            },
                            {
                                text: "📊 投资长期见效的项目",
                                scores: { planner: 2, visionary: 1 },
                                response: "你着眼于未来的可持续发展。"
                            },
                            {
                                text: "🤝 寻求民间资本参与", 
                                scores: { networker: 2, entrepreneur: 1 },
                                response: "你认为应该调动社会力量。"
                            },
                            {
                                text: "💡 创新融资模式",
                                scores: { innovator: 2, clever: 1 },
                                response: "你觉得传统方法需要改变。"
                            }
                        ]
                    },
                    {
                        question: "你发现有人在暗中散布关于你的谣言，你的应对方式是？",
                        options: [
                            {
                                text: "📢 立即公开澄清事实",
                                scores: { honest: 2, confront: 1 },
                                response: "你觉得真相最重要。"
                            },
                            {
                                text: "🕵️ 暗中调查谣言来源",
                                scores: { investigator: 2, strategist: 1 },
                                response: "你认为应该先找到幕后黑手。"
                            },
                            {
                                text: "🤝 争取其他候选人的支持", 
                                scores: { diplomat: 2, networker: 1 },
                                response: "你相信团结就是力量。"
                            },
                            {
                                text: "💪 用实际成绩证明自己",
                                scores: { confident: 2, determined: 1 },
                                response: "你觉得行动比言语更有力。"
                            }
                        ]
                    },
                    {
                        question: "葡萄商人提出与你合作，但要求分享'黄金种子'的秘密，你的回应是？",
                        options: [
                            {
                                text: "🤝 同意合作，但保留核心秘密",
                                scores: { strategist: 2, cautious: 1 },
                                response: "你觉得合作但要保护自己。"
                            },
                            {
                                text: "🔒 拒绝分享秘密",
                                scores: { protector: 2, independent: 1 },
                                response: "你认为这是你的竞争优势。"
                            },
                            {
                                text: "💡 提出其他合作方式", 
                                scores: { innovator: 2, negotiator: 1 },
                                response: "你觉得可以找到双赢的方案。"
                            },
                            {
                                text: "📜 寻求国王的建议",
                                scores: { learner: 2, respectful: 1 },
                                response: "你认为应该请教有经验的人。"
                            }
                        ]
                    },
                    {
                        question: "在解决甜度危机的过程中，你发现了一个新的商机，你的做法是？",
                        options: [
                            {
                                text: "💼 立即投入开发新商机",
                                scores: { entrepreneur: 2, opportunist: 1 },
                                response: "你觉得商机稍纵即逝。"
                            },
                            {
                                text: "📊 先完善现有解决方案",
                                scores: { focused: 2, practical: 1 },
                                response: "你认为应该专注当前任务。"
                            },
                            {
                                text: "🤝 与他人合作开发", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你相信合作能做得更好。"
                            },
                            {
                                text: "💡 将新想法融入竞选纲领",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得这能增加竞选优势。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第三章：货币危机",
                story: "💰 王国货币'果蔬币'突然贬值！原来是因为坚果家族大量囤积货币，导致流通不足。更糟糕的是，外来的'糖果帝国'趁机入侵，用甜言蜜语诱惑年轻果蔬们消费过度...",
                questions: [
                    {
                        question: "面对货币危机和外来威胁，你的首要行动是？",
                        options: [
                            {
                                text: "🏦 建立王国中央银行稳定货币",
                                scores: { reformer: 3, systematic: 2 },
                                response: "你认为需要建立完善的金融体系。"
                            },
                            {
                                text: "🚫 限制坚果家族的货币囤积",
                                scores: { regulator: 3, just: 2 },
                                response: "你觉得必须制止破坏经济的行为。"
                            },
                            {
                                text: "🎪 举办丰收节刺激消费",
                                scores: { stimulator: 3, marketer: 2 },
                                response: "你认为提振信心比限制更重要。"
                            },
                            {
                                text: "🌐 寻求其他王国的经济援助",
                                scores: { alliance: 3, diplomat: 2 },
                                response: "你觉得单靠王国自身难以应对危机。"
                            }
                        ]
                    },
                    {
                        question: "糖果帝国用精美的包装和广告吸引年轻果蔬，你的应对策略是？",
                        options: [
                            {
                                text: "📚 加强财经教育，提高辨别能力",
                                scores: { educator: 2, reformer: 1 },
                                response: "你觉得知识是最好的防御。"
                            },
                            {
                                text: "🎨 推出更有吸引力的本土产品",
                                scores: { innovator: 2, creative: 1 },
                                response: "你认为应该用实力竞争。"
                            },
                            {
                                text: "🛡️ 限制外来商品的进入", 
                                scores: { protector: 2, regulator: 1 },
                                response: "你觉得需要保护本土产业。"
                            },
                            {
                                text: "🤝 与糖果帝国谈判合作",
                                scores: { diplomat: 2, negotiator: 1 },
                                response: "你相信合作比对抗更有效。"
                            }
                        ]
                    },
                    {
                        question: "你发现坚果家族囤积货币是因为担心未来的不确定性，你的处理方式是？",
                        options: [
                            {
                                text: "💬 与他们沟通，消除顾虑",
                                scores: { diplomat: 2, communicator: 1 },
                                response: "你觉得沟通能解决问题。"
                            },
                            {
                                text: "📈 提供更好的投资渠道",
                                scores: { innovator: 2, economist: 1 },
                                response: "你认为应该引导资金流向。"
                            },
                            {
                                text: "⚖️ 强制要求释放部分货币", 
                                scores: { regulator: 2, just: 1 },
                                response: "你觉得为了大局需要采取强硬措施。"
                            },
                            {
                                text: "🤝 寻求双赢的解决方案",
                                scores: { negotiator: 2, alliance: 1 },
                                response: "你相信能找到让各方都满意的方案。"
                            }
                        ]
                    },
                    {
                        question: "在危机中，你发现'黄金种子'的力量可以暂时稳定经济，但会消耗大量精力，你的选择是？",
                        options: [
                            {
                                text: "💪 不惜代价使用这种力量",
                                scores: { selfless: 2, protector: 1 },
                                response: "你觉得王国的利益高于个人。"
                            },
                            {
                                text: "⚖️ 有限度地使用",
                                scores: { balanced: 2, cautious: 1 },
                                response: "你认为需要权衡利弊。"
                            },
                            {
                                text: "🔍 寻找替代方案", 
                                scores: { innovator: 2, resourceful: 1 },
                                response: "你觉得应该探索其他可能性。"
                            },
                            {
                                text: "🤝 与其他候选人合作分担",
                                scores: { alliance: 2, networker: 1 },
                                response: "你相信团队合作的力量。"
                            }
                        ]
                    },
                    {
                        question: "糖果帝国提出用先进技术换取黄金种子的秘密，你的决定是？",
                        options: [
                            {
                                text: "🚫 坚决拒绝，保护王国机密",
                                scores: { protector: 2, cautious: 1 },
                                response: "你觉得核心技术不能外泄。"
                            },
                            {
                                text: "💡 有限度地交换非核心技术",
                                scores: { negotiator: 2, clever: 1 },
                                response: "你觉得可以有所选择地合作。"
                            },
                            {
                                text: "🔍 先了解他们的技术价值", 
                                scores: { analyst: 2, scientist: 1 },
                                response: "你认为需要评估交换条件。"
                            },
                            {
                                text: "🤝 争取更好的交换条件",
                                scores: { diplomat: 2, strategist: 1 },
                                response: "你觉得谈判空间还很大。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第四章：竞选高潮",
                story: "🎪 竞选进入白热化阶段！四位候选人在丰收广场进行最后辩论。突然，糖果帝国的间谍混入现场，企图破坏选举。你必须同时应对辩论和突发危机...",
                questions: [
                    {
                        question: "在辩论中，你的核心主张是？",
                        options: [
                            {
                                text: "🌱 可持续发展，保护生态环境",
                                scores: { reformer: 3, protector: 2 },
                                response: "你关注王国的长远未来。"
                            },
                            {
                                text: "💸 经济增长优先，提升生活水平",
                                scores: { merchant: 3, practical: 2 },
                                response: "你认为经济发展是当务之急。"
                            },
                            {
                                text: "🤝 团结合作，共建和谐王国",
                                scores: { diplomat: 3, alliance: 2 },
                                response: "你强调团结的重要性。"
                            },
                            {
                                text: "🚀 科技创新，引领时代变革",
                                scores: { innovator: 3, visionary: 2 },
                                response: "你相信技术能改变一切。"
                            }
                        ]
                    },
                    {
                        question: "面对糖果帝国的破坏，你的应对措施是？",
                        options: [
                            {
                                text: "🛡️ 加强安保，确保选举顺利进行",
                                scores: { protector: 2, leader: 1 },
                                response: "你优先考虑秩序和安全。"
                            },
                            {
                                text: "🎭 将计就计，揭露对方的阴谋",
                                scores: { clever: 2, strategist: 1 },
                                response: "你善于利用对手的计谋反制。"
                            },
                            {
                                text: "🤝 联合其他候选人共同对外",
                                scores: { alliance: 2, diplomat: 1 },
                                response: "你认为大敌当前应该团结一致。"
                            },
                            {
                                text: "📢 公开真相，争取民众支持",
                                scores: { honest: 2, networker: 1 },
                                response: "你相信民众的智慧。"
                            }
                        ]
                    },
                    {
                        question: "在辩论中，对手攻击你的政策过于理想化，你的回应是？",
                        options: [
                            {
                                text: "📊 用数据和事实反驳",
                                scores: { analyst: 2, scientist: 1 },
                                response: "你相信客观证据的力量。"
                            },
                            {
                                text: "❤️ 强调价值观和理想的重要性",
                                scores: { idealist: 2, visionary: 1 },
                                response: "你觉得理想指引方向。"
                            },
                            {
                                text: "💡 提出更具体的实施方案", 
                                scores: { practical: 2, planner: 1 },
                                response: "你认为应该把理想转化为行动。"
                            },
                            {
                                text: "🤝 承认需要调整，但坚持核心理念",
                                scores: { balanced: 2, negotiator: 1 },
                                response: "你觉得坚持与灵活都很重要。"
                            }
                        ]
                    },
                    {
                        question: "你发现糖果帝国的真正目的是获取'黄金种子'的秘密，你的应对策略是？",
                        options: [
                            {
                                text: "🔒 加强秘密的保护",
                                scores: { protector: 2, cautious: 1 },
                                response: "你觉得必须保护王国的核心资产。"
                            },
                            {
                                text: "🎯 主动出击，破坏对方的计划",
                                scores: { strategist: 2, confront: 1 },
                                response: "你认为最好的防御是进攻。"
                            },
                            {
                                text: "🌍 寻求国际社会的支持", 
                                scores: { diplomat: 2, networker: 1 },
                                response: "你觉得应该联合其他王国共同应对。"
                            },
                            {
                                text: "💡 研究反制技术",
                                scores: { innovator: 2, scientist: 1 },
                                response: "你认为技术问题要用技术解决。"
                            }
                        ]
                    },
                    {
                        question: "在辩论的关键时刻，你发现一个重要证据能证明对手与糖果帝国有染，你的做法是？",
                        options: [
                            {
                                text: "⚡ 立即公开证据",
                                scores: { confront: 2, just: 1 },
                                response: "你觉得必须揭露真相。"
                            },
                            {
                                text: "🤝 私下给对手改正机会",
                                scores: { diplomat: 2, generous: 1 },
                                response: "你相信给人改过的机会。"
                            },
                            {
                                text: "🎯 作为谈判筹码争取支持", 
                                scores: { strategist: 2, clever: 1 },
                                response: "你觉得应该最大化利用这个证据。"
                            },
                            {
                                text: "🔍 收集更多证据再行动",
                                scores: { cautious: 2, investigator: 1 },
                                response: "你认为证据还不够充分。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第五章：执政考验",
                story: "👑 你成功当选财富大臣！但真正的考验才刚刚开始。王国面临着百年一遇的'丰收过剩'危机，果蔬产量大增导致价格暴跌，农民们陷入困境...",
                questions: [
                    {
                        question: "你的经济刺激方案是？",
                        options: [
                            {
                                text: "🏭 发展果蔬加工业，提升附加值",
                                scores: { innovator: 3, economist: 2 },
                                response: "你着眼于产业升级。"
                            },
                            {
                                text: "🌐 开拓新的出口市场",
                                scores: { trader: 3, adventurer: 2 },
                                response: "你相信市场多元化是出路。"
                            },
                            {
                                text: "💰 政府收购过剩产品，稳定价格",
                                scores: { regulator: 3, protector: 2 },
                                response: "你觉得政府应该干预市场。"
                            },
                            {
                                text: "🔄 调整种植结构，减少供应",
                                scores: { planner: 3, systematic: 2 },
                                response: "你主张从源头上解决问题。"
                            }
                        ]
                    },
                    {
                        question: "面对反对派的质疑，你的态度是？",
                        options: [
                            {
                                text: "📊 用数据证明方案的可行性",
                                scores: { analyst: 3, scientist: 2 },
                                response: "你相信事实胜于雄辩。"
                            },
                            {
                                text: "🤝 吸纳合理建议，完善方案",
                                scores: { diplomat: 3, learner: 2 },
                                response: "你愿意听取不同意见。"
                            },
                            {
                                text: "🎯 坚持己见，用结果说话",
                                scores: { confident: 3, determined: 2 },
                                response: "你对自己的判断充满信心。"
                            },
                            {
                                text: "💡 提出折中方案，寻求共识",
                                scores: { negotiator: 3, practical: 2 },
                                response: "你觉得妥协也是智慧。"
                            }
                        ]
                    },
                    {
                        question: "你发现前任财富大臣留下了一个秘密基金，用途不明，你的处理方式是？",
                        options: [
                            {
                                text: "🔍 立即彻底调查",
                                scores: { investigator: 2, just: 1 },
                                response: "你觉得必须查明真相。"
                            },
                            {
                                text: "📜 向国王报告情况",
                                scores: { lawful: 2, respectful: 1 },
                                response: "你认为应该按程序办事。"
                            },
                            {
                                text: "💼 用于解决当前危机", 
                                scores: { practical: 2, merchant: 1 },
                                response: "你觉得应该物尽其用。"
                            },
                            {
                                text: "🤔 暂时封存，观察反应",
                                scores: { strategist: 2, observer: 1 },
                                response: "你认为需要谨慎处理。"
                            }
                        ]
                    },
                    {
                        question: "在实施政策时，你发现官僚体系效率低下，你的改革思路是？",
                        options: [
                            {
                                text: "⚡ 推行绩效考核制度",
                                scores: { systematic: 2, practical: 1 },
                                response: "你觉得需要建立激励机制。"
                            },
                            {
                                text: "🔄 重组部门结构",
                                scores: { reformer: 2, innovator: 1 },
                                response: "你认为组织结构需要优化。"
                            },
                            {
                                text: "📚 加强员工培训", 
                                scores: { educator: 2, investor: 1 },
                                response: "你觉得提升能力是关键。"
                            },
                            {
                                text: "🤝 引入外部专家",
                                scores: { networker: 2, openminded: 1 },
                                response: "你认为新鲜血液能带来改变。"
                            }
                        ]
                    },
                    {
                        question: "你发现黄金种子在解决危机中发挥了关键作用，但过度使用导致你精力衰竭，你的选择是？",
                        options: [
                            {
                                text: "💪 继续使用，个人牺牲值得",
                                scores: { selfless: 2, protector: 1 },
                                response: "你觉得为了王国值得付出。"
                            },
                            {
                                text: "⚖️ 限制使用频率",
                                scores: { balanced: 2, cautious: 1 },
                                response: "你认为可持续发展更重要。"
                            },
                            {
                                text: "🔬 研究如何降低消耗", 
                                scores: { scientist: 2, innovator: 1 },
                                response: "你觉得应该用技术解决问题。"
                            },
                            {
                                text: "🤝 培养助手分担负担",
                                scores: { networker: 2, alliance: 1 },
                                response: "你相信团队合作的力量。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第六章：黄金种子的真谛",
                story: "💫 在应对各种挑战的过程中，你逐渐领悟到'黄金种子'的真正含义。它不仅仅是创造财富的工具，更代表着责任、智慧和平衡。这时，西瓜国王告诉你一个惊人的秘密：黄金种子其实是一种考验...",
                questions: [
                    {
                        question: "国王告诉你，历届财富大臣都会面临黄金种子的考验，通过者才能真正领导王国，你的心态是？",
                        options: [
                            {
                                text: "💪 充满斗志，迎接挑战",
                                scores: { confident: 3, adventurer: 2 },
                                response: "你觉得这是证明自己的机会。"
                            },
                            {
                                text: "🤔 谨慎思考，制定策略",
                                scores: { strategist: 3, analyst: 2 },
                                response: "你认为需要充分准备。"
                            },
                            {
                                text: "❤️ 相信自己的初心和理念",
                                scores: { idealist: 3, honest: 2 },
                                response: "你觉得真诚最重要。"
                            },
                            {
                                text: "🤝 寻求他人的帮助和建议",
                                scores: { networker: 3, learner: 2 },
                                response: "你相信集体智慧的力量。"
                            }
                        ]
                    },
                    {
                        question: "考验的内容是：在个人利益与王国利益发生冲突时，你的选择是？",
                        options: [
                            {
                                text: "👑 毫不犹豫选择王国利益",
                                scores: { selfless: 3, protector: 2 },
                                response: "你觉得这是领袖的责任。"
                            },
                            {
                                text: "⚖️ 寻找双赢的解决方案",
                                scores: { negotiator: 3, clever: 2 },
                                response: "你相信可以兼顾两者。"
                            },
                            {
                                text: "💡 创造新的价值消除冲突",
                                scores: { innovator: 3, visionary: 2 },
                                response: "你觉得应该超越传统思维。"
                            },
                            {
                                text: "📜 遵循既有规则和传统",
                                scores: { lawful: 3, traditional: 2 },
                                response: "你认为规则很重要。"
                            }
                        ]
                    },
                    {
                        question: "通过考验后，你对财富的理解发生了怎样的变化？",
                        options: [
                            {
                                text: "🌱 财富是服务他人的工具",
                                scores: { generous: 2, reformer: 1 },
                                response: "你觉得财富的真正价值在于分享。"
                            },
                            {
                                text: "⚡ 财富是创造改变的力量",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你认为财富能推动进步。"
                            },
                            {
                                text: "🤝 财富是连接人心的桥梁", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你觉得财富能促进合作。"
                            },
                            {
                                text: "🎯 财富是实现目标的手段",
                                scores: { practical: 2, focused: 1 },
                                response: "你认为财富是达成目的的工具。"
                            }
                        ]
                    },
                    {
                        question: "黄金种子最终展现出它的完整形态，它其实是？",
                        options: [
                            {
                                text: "💖 团结合作的象征",
                                scores: { alliance: 2, networker: 1 },
                                response: "你觉得合作才是真正的财富。"
                            },
                            {
                                text: "🌍 生态平衡的守护者",
                                scores: { protector: 2, balanced: 1 },
                                response: "你认为可持续发展最重要。"
                            },
                            {
                                text: "🚀 创新进步的源泉", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得创新创造价值。"
                            },
                            {
                                text: "⚖️ 公平正义的天平",
                                scores: { just: 2, reformer: 1 },
                                response: "你认为公平是财富的基础。"
                            }
                        ]
                    },
                    {
                        question: "通过考验后，你获得的真正能力是？",
                        options: [
                            {
                                text: "🤝 凝聚人心的领导力",
                                scores: { leader: 2, networker: 1 },
                                response: "你觉得团结力量最重要。"
                            },
                            {
                                text: "💡 洞察本质的智慧",
                                scores: { wise: 2, analyst: 1 },
                                response: "你认为真知灼见最宝贵。"
                            },
                            {
                                text: "⚡ 果断决策的勇气", 
                                scores: { confident: 2, brave: 1 },
                                response: "你觉得行动力是关键。"
                            },
                            {
                                text: "🌱 持续成长的潜力",
                                scores: { learner: 2, visionary: 1 },
                                response: "你认为学习能力最重要。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第七章：王国的未来",
                story: "🌟 在你的领导下，果蔬王国迎来了前所未有的繁荣。但你深知，真正的挑战在于如何让这种繁荣持续下去。你开始规划王国的长远发展，培养下一代领袖，为王国打造坚实的未来...",
                questions: [
                    {
                        question: "你为王国设计的长期发展蓝图的核心是？",
                        options: [
                            {
                                text: "🔬 科技创新驱动发展",
                                scores: { innovator: 3, visionary: 2 },
                                response: "你觉得技术是未来的关键。"
                            },
                            {
                                text: "🌍 开放合作融入世界",
                                scores: { diplomat: 3, networker: 2 },
                                response: "你认为全球化是必然趋势。"
                            },
                            {
                                text: "🌳 生态平衡可持续发展",
                                scores: { protector: 3, reformer: 2 },
                                response: "你觉得环境保护最重要。"
                            },
                            {
                                text: "📚 人才培养奠定基础",
                                scores: { educator: 3, investor: 2 },
                                response: "你认为人才是根本。"
                            }
                        ]
                    },
                    {
                        question: "在培养接班人时，你最重要的教导是？",
                        options: [
                            {
                                text: "⚖️ 公平正义的价值观",
                                scores: { just: 2, reformer: 1 },
                                response: "你觉得品德比能力更重要。"
                            },
                            {
                                text: "💡 创新思维和解决问题的能力",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你认为适应变化的能力很关键。"
                            },
                            {
                                text: "🤝 团队合作和沟通技巧", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你觉得人际关系很重要。"
                            },
                            {
                                text: "📊 扎实的专业知识和分析能力",
                                scores: { analyst: 2, scientist: 1 },
                                response: "你认为专业是基础。"
                            }
                        ]
                    },
                    {
                        question: "回顾你的执政经历，你认为最重要的成就是？",
                        options: [
                            {
                                text: "💰 让王国变得更加富裕",
                                scores: { merchant: 2, practical: 1 },
                                response: "你觉得经济繁荣是硬道理。"
                            },
                            {
                                text: "🤝 促进了各族的团结合作",
                                scores: { alliance: 2, diplomat: 1 },
                                response: "你认为和谐的社会很重要。"
                            },
                            {
                                text: "🌱 建立了可持续发展模式", 
                                scores: { reformer: 2, protector: 1 },
                                response: "你觉得长远发展更重要。"
                            },
                            {
                                text: "💡 推动了制度和观念革新",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你认为改变思维模式最有价值。"
                            }
                        ]
                    },
                    {
                        question: "面对未来的挑战，你的心态是？",
                        options: [
                            {
                                text: "🌅 充满信心和期待",
                                scores: { confident: 2, optimistic: 1 },
                                response: "你觉得未来会更好。"
                            },
                            {
                                text: "🛡️ 谨慎规划防范风险",
                                scores: { cautious: 2, protector: 1 },
                                response: "你认为需要未雨绸缪。"
                            },
                            {
                                text: "🚀 主动创造想要的未来", 
                                scores: { innovator: 2, determined: 1 },
                                response: "你相信人可以塑造未来。"
                            },
                            {
                                text: "🌊 顺应变化灵活适应",
                                scores: { adaptive: 2, balanced: 1 },
                                response: "你觉得适应能力最重要。"
                            }
                        ]
                    },
                    {
                        question: "你希望果蔬后代记住什么样的财富智慧？",
                        options: [
                            {
                                text: "💎 诚信是最大的财富",
                                scores: { honest: 2, traditional: 1 },
                                response: "你觉得诚信立身最重要。"
                            },
                            {
                                text: "🌐 合作创造无限可能",
                                scores: { alliance: 2, networker: 1 },
                                response: "你认为团结就是力量。"
                            },
                            {
                                text: "🚀 创新驱动进步", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得创新改变世界。"
                            },
                            {
                                text: "⚖️ 平衡才能长久",
                                scores: { balanced: 2, protector: 1 },
                                response: "你认为可持续发展最关键。"
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
        confident: "果敢领袖型",
        leader: "王者风范型",
        cautious: "谨慎守成者",
        analyst: "数据分析师",
        networker: "人脉大师型",
        learner: "终身学习者",
        observer: "冷静观察者",
        patient: "耐心等待者",
        innovator: "创新突破型",
        scientist: "科学探索者",
        diplomat: "外交大师型",
        marketer: "市场开拓者",
        creative: "创意无限型",
        planner: "长远规划师",
        practical: "务实行动派",
        reformer: "改革先锋型",
        systematic: "系统思维者",
        regulator: "规则制定者",
        just: "公正无私型",
        stimulator: "活力激发者",
        alliance: "联盟构建师",
        adventurer: "冒险开拓者",
        honest: "诚信为本型",
        strategist: "战略大师型",
        protector: "守护卫士型",
        independent: "独立自主者",
        selfless: "无私奉献型",
        balanced: "平衡大师型",
        resourceful: "资源整合者",
        communicator: "沟通大师型",
        economist: "经济学者型",
        negotiator: "谈判专家型",
        focused: "专注目标型",
        determined: "意志坚定者",
        investigator: "真相探索者",
        lawful: "遵纪守法型",
        respectful: "尊师重道者",
        openminded: "开放思维者",
        idealist: "理想追求者",
        visionary: "远见卓识型",
        confront: "直面挑战者",
        clever: "智谋过人型",
        trader: "贸易大师型",
        investor: "投资智慧型",
        traditional: "传统守护者",
        generous: "慷慨大方型",
        brave: "勇敢无畏者",
        wise: "智慧长者型",
        optimistic: "乐观积极型",
        adaptive: "灵活适应者"
    }
};