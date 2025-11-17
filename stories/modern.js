// stories/modern.js - 现代都市故事线（完整35题版）
const modernStory = {
    title: "数字财富革命",
    introduction: "🏙️ 你是一名普通的都市白领，在一次偶然的机会中，你发现了一个能够预测金融市场波动的神秘算法。这个发现将你卷入了一场涉及全球金融巨头、科技新贵和地下黑客的财富战争。在这个数字时代，你的每个选择都可能改变世界的经济格局...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20, 
            deep: 35
        };
        
        const allChapters = [
            {
                chapter: "第一章：算法奇迹",
                story: "💻 深夜加班时，你无意中破解了公司服务器上一个加密文件，发现了一个能够准确预测股市波动的神秘算法。测试显示，这个算法的准确率高达92%。但同时，你也发现有人在暗中监视这个文件...",
                questions: [
                    {
                        question: "发现这个改变命运的算法后，你的第一反应是？",
                        options: [
                            { 
                                text: "📈 立即投入个人资金进行交易", 
                                scores: { opportunist: 3, riskTaker: 1 },
                                response: "你相信机会稍纵即逝，决定立即行动。"
                            },
                            { 
                                text: "🔒 立即删除痕迹，保护自己", 
                                scores: { cautious: 3, protector: 1 },
                                response: "你深知这种发现的危险性，选择先确保安全。"
                            },
                            { 
                                text: "💼 联系算法开发者寻求合作", 
                                scores: { networker: 3, collaborator: 1 },
                                response: "你认为找到源头比独自冒险更重要。"
                            },
                            { 
                                text: "⚖️ 向公司管理层报告发现", 
                                scores: { ethical: 3, corporate: 1 },
                                response: "你坚持职业操守，相信公司应该知道这个发现。"
                            }
                        ]
                    },
                    {
                        question: "你发现算法文件中有一行奇怪的注释：'当心数字先知'，这让你？",
                        options: [
                            { 
                                text: "🔍 立即调查'数字先知'的背景", 
                                scores: { investigator: 2, curious: 1 },
                                response: "你觉得这个警告很重要，必须查明真相。"
                            },
                            { 
                                text: "💾 备份算法到安全的地方", 
                                scores: { cautious: 2, practical: 1 },
                                response: "你认为保护算法是第一要务。"
                            },
                            { 
                                text: "🤝 寻找其他知道这个算法的人", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你相信信息共享能降低风险。"
                            },
                            { 
                                text: "🚀 无视警告，专注于赚钱", 
                                scores: { opportunist: 2, focused: 1 },
                                response: "你觉得赚钱机会更重要。"
                            }
                        ]
                    },
                    {
                        question: "在测试算法时，你发现它不仅能预测股市，还能识别市场操纵行为，你的想法是？",
                        options: [
                            { 
                                text: "⚖️ 向监管机构报告可疑交易", 
                                scores: { ethical: 2, just: 1 },
                                response: "你觉得有责任维护市场公平。"
                            },
                            { 
                                text: "💡 利用这个功能获取更大利润", 
                                scores: { clever: 2, opportunist: 1 },
                                response: "你看到了更大的商业机会。"
                            },
                            { 
                                text: "🔬 深入研究算法原理", 
                                scores: { scientist: 2, analyst: 1 },
                                response: "你对技术本身更感兴趣。"
                            },
                            { 
                                text: "🤔 暂时观望，收集更多数据", 
                                scores: { observer: 2, patient: 1 },
                                response: "你觉得需要更多信息才能做决定。"
                            }
                        ]
                    },
                    {
                        question: "你发现算法似乎有自我学习的迹象，这让你感到？",
                        options: [
                            { 
                                text: "🤖 兴奋于AI的潜力", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得这是技术突破的征兆。"
                            },
                            { 
                                text: "⚠️ 担忧失控的风险", 
                                scores: { cautious: 2, protector: 1 },
                                response: "你认为需要设置安全边界。"
                            },
                            { 
                                text: "💼 思考商业化应用", 
                                scores: { entrepreneur: 2, practical: 1 },
                                response: "你看到了更大的商业价值。"
                            },
                            { 
                                text: "🔬 想要深入研究机制", 
                                scores: { scientist: 2, curious: 1 },
                                response: "你对技术原理充满好奇。"
                            }
                        ]
                    },
                    {
                        question: "第一次使用算法交易获得丰厚回报后，你的心态是？",
                        options: [
                            { 
                                text: "💰 加大投入，追求更多收益", 
                                scores: { ambitious: 2, riskTaker: 1 },
                                response: "你觉得应该乘胜追击。"
                            },
                            { 
                                text: "🛡️ 见好就收，控制风险", 
                                scores: { cautious: 2, balanced: 1 },
                                response: "你认为稳健更重要。"
                            },
                            { 
                                text: "🤝 分享成果，建立团队", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你相信团队合作能走得更远。"
                            },
                            { 
                                text: "🔍 分析成功原因，优化策略", 
                                scores: { analyst: 2, learner: 1 },
                                response: "你想理解背后的逻辑。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第二章：第一桶金", 
                story: "💰 你谨慎地使用算法进行了几次小额交易，获得了惊人的回报。但就在你准备大展拳脚时，收到了一个匿名警告：'停止使用算法，否则后果自负'。同时，一家顶级投资公司向你发出了工作邀请...",
                questions: [
                    {
                        question: "面对警告和工作机会，你的选择是？",
                        options: [
                            {
                                text: "🚀 无视警告，继续使用算法",
                                scores: { bold: 2, independent: 1 },
                                response: "你不愿被威胁吓倒，决定继续自己的计划。"
                            },
                            {
                                text: "🛡️ 接受工作邀请，寻求庇护",
                                scores: { strategic: 2, corporate: 1 },
                                response: "你认为在大公司的保护下更安全。"
                            },
                            {
                                text: "🔍 调查警告来源，弄清真相", 
                                scores: { investigator: 2, cautious: 1 },
                                response: "你觉得必须知道对手是谁才能制定对策。"
                            },
                            {
                                text: "💡 改进算法，消除可追踪特征",
                                scores: { innovator: 2, techie: 1 },
                                response: "你选择用技术手段解决问题。"
                            }
                        ]
                    },
                    {
                        question: "投资公司承诺给你高薪和股权，但要求你交出算法源代码，你的决定是？",
                        options: [
                            {
                                text: "🤝 同意合作，但保留核心代码",
                                scores: { negotiator: 2, strategist: 1 },
                                response: "你觉得合作但要保护核心技术。"
                            },
                            {
                                text: "🚫 拒绝要求，保持独立",
                                scores: { independent: 2, protector: 1 },
                                response: "你认为核心技术必须掌握在自己手中。"
                            },
                            {
                                text: "💼 提出其他合作方式", 
                                scores: { innovator: 2, entrepreneur: 1 },
                                response: "你相信可以找到更好的合作模式。"
                            },
                            {
                                text: "⏳ 拖延时间，争取更好条件",
                                scores: { strategist: 2, patient: 1 },
                                response: "你觉得时机还不成熟。"
                            }
                        ]
                    },
                    {
                        question: "你发现警告来自一个名为'算法守护者'的组织，他们声称在保护金融市场的稳定，你的态度是？",
                        options: [
                            {
                                text: "🤝 主动联系，了解他们的立场",
                                scores: { diplomat: 2, networker: 1 },
                                response: "你觉得沟通能化解误会。"
                            },
                            {
                                text: "🛡️ 加强防护，防范可能的攻击",
                                scores: { protector: 2, cautious: 1 },
                                response: "你认为安全第一。"
                            },
                            {
                                text: "🔍 深入调查这个组织的背景", 
                                scores: { investigator: 2, skeptic: 1 },
                                response: "你怀疑他们的真实动机。"
                            },
                            {
                                text: "⚖️ 评估他们对市场稳定的影响",
                                scores: { analyst: 2, economist: 1 },
                                response: "你想从更宏观的角度看问题。"
                            }
                        ]
                    },
                    {
                        question: "在交易中，你发现算法预测到一次重大市场崩盘，但提前预警可能会引发恐慌，你的做法是？",
                        options: [
                            {
                                text: "📢 立即公开预警",
                                scores: { ethical: 2, protector: 1 },
                                response: "你觉得有责任保护其他投资者。"
                            },
                            {
                                text: "💼 只保护自己的资产",
                                scores: { practical: 2, opportunist: 1 },
                                response: "你认为在商言商。"
                            },
                            {
                                text: "🤝 通知信任的朋友和伙伴", 
                                scores: { alliance: 2, networker: 1 },
                                response: "你觉得应该帮助身边的人。"
                            },
                            {
                                text: "🔍 进一步验证预测的准确性",
                                scores: { scientist: 2, cautious: 1 },
                                response: "你认为需要更多证据。"
                            }
                        ]
                    },
                    {
                        question: "你发现算法在特定市场条件下会出现异常波动，你的应对是？",
                        options: [
                            {
                                text: "🔧 立即修复这个bug",
                                scores: { perfectionist: 2, techie: 1 },
                                response: "你觉得技术问题必须解决。"
                            },
                            {
                                text: "📊 分析波动规律加以利用",
                                scores: { analyst: 2, clever: 1 },
                                response: "你看到了新的套利机会。"
                            },
                            {
                                text: "🛡️ 避开这些市场条件", 
                                scores: { cautious: 2, protector: 1 },
                                response: "你认为安全最重要。"
                            },
                            {
                                text: "🤖 让算法自我调整优化",
                                scores: { innovator: 2, truster: 1 },
                                response: "你相信AI的自我学习能力。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第三章：算法战争",
                story: "⚔️ 你发现市场上突然出现了多个类似的预测算法，一场无声的算法战争正在上演。更可怕的是，这些算法开始相互对抗，导致市场出现异常波动。一个神秘组织'数字先知'联系你，声称算法的原始开发者已经失踪...",
                questions: [
                    {
                        question: "面对算法混战和市场动荡，你的策略是？",
                        options: [
                            {
                                text: "🎯 开发更先进的算法赢得战争",
                                scores: { competitor: 3, innovator: 2 },
                                response: "你相信技术优势是唯一的出路。"
                            },
                            {
                                text: "🕊️ 呼吁各方停战，建立行业标准",
                                scores: { diplomat: 3, ethical: 2 },
                                response: "你认为无序竞争对所有人都有害。"
                            },
                            {
                                text: "🔍 寻找原始开发者，弄清真相",
                                scores: { investigator: 3, truthSeeker: 2 },
                                response: "你觉得必须从源头上解决问题。"
                            },
                            {
                                text: "💸 趁乱套利，积累财富",
                                scores: { opportunist: 3, riskTaker: 2 },
                                response: "你在危机中看到了赚钱的机会。"
                            }
                        ]
                    },
                    {
                        question: "'数字先知'组织告诉你，原始开发者因为算法太强大而被某个势力控制，你的反应是？",
                        options: [
                            {
                                text: "🛡️ 立即加强自身安全防护",
                                scores: { protector: 2, cautious: 1 },
                                response: "你觉得危险正在逼近。"
                            },
                            {
                                text: "🤝 与'数字先知'合作",
                                scores: { alliance: 2, networker: 1 },
                                response: "你相信团结就是力量。"
                            },
                            {
                                text: "🔎 验证'数字先知'的说法", 
                                scores: { investigator: 2, skeptic: 1 },
                                response: "你怀疑这个组织的真实性。"
                            },
                            {
                                text: "💡 开发反制措施",
                                scores: { innovator: 2, strategist: 1 },
                                response: "你觉得应该用技术解决问题。"
                            }
                        ]
                    },
                    {
                        question: "你发现算法战争正在扭曲市场价格，导致实体经济受损，你的立场是？",
                        options: [
                            {
                                text: "⚖️ 立即停止使用算法",
                                scores: { ethical: 2, protector: 1 },
                                response: "你觉得不能为了个人利益伤害经济。"
                            },
                            {
                                text: "🔄 调整算法减少市场影响",
                                scores: { reformer: 2, balanced: 1 },
                                response: "你寻求利益与责任的平衡。"
                            },
                            {
                                text: "📊 研究如何利用这种扭曲获利", 
                                scores: { opportunist: 2, clever: 1 },
                                response: "你看到了新的套利机会。"
                            },
                            {
                                text: "🌍 推动监管介入",
                                scores: { regulator: 2, just: 1 },
                                response: "你认为需要外部力量来规范市场。"
                            }
                        ]
                    },
                    {
                        question: "在一次算法对抗中，你的系统被黑客攻击，大量资金面临风险，你的应急方案是？",
                        options: [
                            {
                                text: "💾 立即启动备份系统",
                                scores: { practical: 2, prepared: 1 },
                                response: "你早有应急预案。"
                            },
                            {
                                text: "🛡️ 寻求专业安全团队帮助",
                                scores: { networker: 2, collaborator: 1 },
                                response: "你相信专业的事情要交给专业的人。"
                            },
                            {
                                text: "🔧 亲自修复漏洞", 
                                scores: { techie: 2, independent: 1 },
                                response: "你对自己的技术能力有信心。"
                            },
                            {
                                text: "🚨 向执法部门报案",
                                scores: { lawful: 2, protector: 1 },
                                response: "你觉得应该用法律武器保护自己。"
                            }
                        ]
                    },
                    {
                        question: "你发现竞争对手的算法存在致命缺陷，但揭露真相可能引发市场恐慌，你的选择是？",
                        options: [
                            {
                                text: "📢 立即公开警告",
                                scores: { ethical: 2, protector: 1 },
                                response: "你觉得有责任保护投资者。"
                            },
                            {
                                text: "🤫 私下通知监管机构",
                                scores: { lawful: 2, cautious: 1 },
                                response: "你认为应该通过正规渠道。"
                            },
                            {
                                text: "💡 利用这个信息获利", 
                                scores: { opportunist: 2, clever: 1 },
                                response: "你觉得这是商业机会。"
                            },
                            {
                                text: "🔄 帮助对手修复问题",
                                scores: { generous: 2, alliance: 1 },
                                response: "你相信合作比竞争更重要。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第四章：算法革命",
                story: "💡 你发现原始算法开发者其实还活着，他被一个名为'数字守护者'的组织保护着。这个组织希望你加入他们，用算法力量建立一个更公平的金融系统，但这意味着你要放弃个人利益...",
                questions: [
                    {
                        question: "面对'数字守护者'的邀请，你的选择是？",
                        options: [
                            {
                                text: "🤝 立即加入，为更伟大的目标奋斗",
                                scores: { idealist: 3, reformer: 2 },
                                response: "你愿意为理想放弃个人利益。"
                            },
                            {
                                text: "💼 要求股份和决策权再考虑",
                                scores: { merchant: 3, practical: 2 },
                                response: "你认为合理的回报是合作的基础。"
                            },
                            {
                                text: "🔍 深入调查组织背景再做决定",
                                scores: { cautious: 3, investigator: 2 },
                                response: "你觉得需要充分了解合作伙伴。"
                            },
                            {
                                text: "🚀 坚持独立发展，拒绝邀请",
                                scores: { independent: 3, confident: 2 },
                                response: "你相信自己的能力足以改变世界。"
                            }
                        ]
                    },
                    {
                        question: "如果加入组织，你希望算法主要用于？",
                        options: [
                            {
                                text: "🌍 消除贫困，促进财富公平",
                                scores: { reformer: 3, generous: 2 },
                                response: "你的目标是让世界更美好。"
                            },
                            {
                                text: "🔬 金融研究，推动科技进步",
                                scores: { scientist: 3, knowledge: 2 },
                                response: "你对知识的追求超越财富。"
                            },
                            {
                                text: "🏦 帮助中小企业获得融资",
                                scores: { supporter: 3, alliance: 2 },
                                response: "你希望支持创业者实现梦想。"
                            },
                            {
                                text: "⚖️ 监管市场，防止金融犯罪",
                                scores: { regulator: 3, justice: 2 },
                                response: "你觉得维护市场秩序很重要。"
                            }
                        ]
                    },
                    {
                        question: "原始开发者告诉你，算法其实有一个致命缺陷，过度使用会导致系统崩溃，你的应对是？",
                        options: [
                            {
                                text: "🚫 立即停止使用算法",
                                scores: { cautious: 2, protector: 1 },
                                response: "你觉得风险太大。"
                            },
                            {
                                text: "🔧 尝试修复这个缺陷",
                                scores: { innovator: 2, techie: 1 },
                                response: "你相信技术问题可以解决。"
                            },
                            {
                                text: "📊 评估风险与收益", 
                                scores: { analyst: 2, practical: 1 },
                                response: "你想量化风险程度。"
                            },
                            {
                                text: "🤝 与其他使用者共享这个信息",
                                scores: { ethical: 2, networker: 1 },
                                response: "你觉得有责任告知其他人。"
                            }
                        ]
                    },
                    {
                        question: "你发现'数字守护者'内部也有权力斗争，有人想垄断算法力量，你的立场是？",
                        options: [
                            {
                                text: "⚖️ 支持民主化算法力量",
                                scores: { democrat: 2, reformer: 1 },
                                response: "你觉得技术应该为所有人服务。"
                            },
                            {
                                text: "🎯 支持最有可能成功的派系",
                                scores: { practical: 2, strategist: 1 },
                                response: "你选择站在胜利者一边。"
                            },
                            {
                                text: "🛡️ 保持中立，观察局势", 
                                scores: { observer: 2, cautious: 1 },
                                response: "你觉得需要时间看清形势。"
                            },
                            {
                                text: "💡 提出新的组织架构",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得现有模式需要改变。"
                            }
                        ]
                    },
                    {
                        question: "在测试新版本算法时，你发现它可以预测个人命运，你的使用原则是？",
                        options: [
                            {
                                text: "🚫 绝不用于预测个人命运",
                                scores: { ethical: 2, respecter: 1 },
                                response: "你觉得这是道德底线。"
                            },
                            {
                                text: "🛡️ 只用于重大人生决策",
                                scores: { cautious: 2, selective: 1 },
                                response: "你认为有限度使用是可以的。"
                            },
                            {
                                text: "🔬 研究其科学原理", 
                                scores: { scientist: 2, curious: 1 },
                                response: "你对技术本身更感兴趣。"
                            },
                            {
                                text: "💼 商业化这个功能",
                                scores: { entrepreneur: 2, opportunist: 1 },
                                response: "你看到了巨大的商业潜力。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第五章：数字帝国",
                story: "🌐 你的算法平台改变了整个金融行业。现在，你站在数字世界的巅峰，但新的挑战也随之而来：政府监管、竞争对手的模仿、用户数据安全，还有那个始终在暗处觊觎的'数字先知'组织...",
                questions: [
                    {
                        question: "面对政府监管要求，你的态度是？",
                        options: [
                            {
                                text: "✅ 主动配合，建立行业标准",
                                scores: { lawful: 3, diplomat: 2 },
                                response: "你认为合规是长久发展的基础。"
                            },
                            {
                                text: "🛡️ 加强自律，避免政府干预",
                                scores: { independent: 3, protector: 2 },
                                response: "你希望保持企业的独立性。"
                            },
                            {
                                text: "💡 创新模式，绕过监管限制",
                                scores: { innovator: 3, clever: 2 },
                                response: "你觉得创新应该突破传统框架。"
                            },
                            {
                                text: "🤝 参与政策制定，影响监管方向",
                                scores: { influencer: 3, networker: 2 },
                                response: "你选择主动塑造规则。"
                            }
                        ]
                    },
                    {
                        question: "平台积累了大量用户数据，你的使用原则是？",
                        options: [
                            {
                                text: "🔒 严格保护，绝不出售或滥用",
                                scores: { ethical: 3, protector: 2 },
                                response: "你认为用户信任是最宝贵的资产。"
                            },
                            {
                                text: "📊 匿名化后用于改善服务",
                                scores: { practical: 3, innovator: 2 },
                                response: "你希望在保护隐私和服务改进间平衡。"
                            },
                            {
                                text: "💎 合理商业化，创造更多价值",
                                scores: { merchant: 3, opportunist: 2 },
                                response: "你觉得数据价值应该被合理开发。"
                            },
                            {
                                text: "🌱 交给用户自己决定如何使用",
                                scores: { democrat: 3, honest: 2 },
                                response: "你相信用户应该拥有数据主权。"
                            }
                        ]
                    },
                    {
                        question: "竞争对手开始模仿你的算法，但他们的版本存在严重缺陷，你的做法是？",
                        options: [
                            {
                                text: "⚖️ 公开指出他们的缺陷",
                                scores: { ethical: 2, just: 1 },
                                response: "你觉得有责任保护消费者。"
                            },
                            {
                                text: "🛡️ 用法律手段保护知识产权",
                                scores: { protector: 2, lawful: 1 },
                                response: "你认为应该维护自己的权益。"
                            },
                            {
                                text: "🚀 加速创新，保持领先", 
                                scores: { innovator: 2, competitor: 1 },
                                response: "你觉得竞争能推动进步。"
                            },
                            {
                                text: "🤝 寻求收购或合作",
                                scores: { networker: 2, strategist: 1 },
                                response: "你认为整合是更好的选择。"
                            }
                        ]
                    },
                    {
                        question: "'数字先知'组织提出一个惊人的交易：用算法控制权换取全球金融稳定的保证，你的决定是？",
                        options: [
                            {
                                text: "🤝 同意交易，为了更大的利益",
                                scores: { idealist: 3, protector: 2 },
                                response: "你觉得全球稳定更重要。"
                            },
                            {
                                text: "🚫 拒绝交易，保持控制权",
                                scores: { independent: 3, confident: 2 },
                                response: "你相信自己的能力。"
                            },
                            {
                                text: "💡 提出替代方案", 
                                scores: { innovator: 3, negotiator: 2 },
                                response: "你觉得可以找到更好的解决办法。"
                            },
                            {
                                text: "🔍 要求更多证据证明他们的能力",
                                scores: { skeptic: 3, analyst: 2 },
                                response: "你怀疑他们的承诺。"
                            }
                        ]
                    },
                    {
                        question: "你的算法开始影响全球经济走向，你感到的责任是？",
                        options: [
                            {
                                text: "🌍 承担起全球经济的守护责任",
                                scores: { protector: 2, ethical: 1 },
                                response: "你觉得权力越大责任越大。"
                            },
                            {
                                text: "⚖️ 建立多方监督机制",
                                scores: { democrat: 2, systematic: 1 },
                                response: "你认为权力需要制衡。"
                            },
                            {
                                text: "🚀 继续推进技术发展", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得技术进步不可阻挡。"
                            },
                            {
                                text: "🔄 逐步退出，回归正常生活",
                                scores: { balanced: 2, minimalist: 1 },
                                response: "你觉得这种压力太大了。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第六章：终极选择",
                story: "⚡ 你发现算法的真正力量远超想象——它不仅能预测市场，还能在一定程度上影响全球经济走向。现在，你面临着终极选择：成为数字世界的神，还是将这种力量交给全人类...",
                questions: [
                    {
                        question: "面对这种前所未有的力量，你的心态是？",
                        options: [
                            {
                                text: "🙏 敬畏责任，谨慎使用",
                                scores: { ethical: 3, protector: 2 },
                                response: "你觉得这种力量需要被约束。"
                            },
                            {
                                text: "🚀 兴奋期待，全力开发",
                                scores: { innovator: 3, visionary: 2 },
                                response: "你看到了改变世界的可能性。"
                            },
                            {
                                text: "🤔 担忧风险，寻求制衡",
                                scores: { cautious: 3, strategist: 2 },
                                response: "你认为需要建立安全机制。"
                            },
                            {
                                text: "🌍 思考对人类的长期影响",
                                scores: { philosopher: 3, thinker: 1 },
                                response: "你从更宏观的角度考虑问题。"
                            }
                        ]
                    },
                    {
                        question: "你发现算法可以预测并轻微影响重大历史事件，你的使用原则是？",
                        options: [
                            {
                                text: "🚫 绝不干预自然历史进程",
                                scores: { ethical: 3, respecter: 2 },
                                response: "你觉得人类不应该扮演上帝。"
                            },
                            {
                                text: "🛡️ 只用于防止灾难性事件",
                                scores: { protector: 3, selective: 2 },
                                response: "你选择性地使用这种力量。"
                            },
                            {
                                text: "💡 探索最佳干预方式",
                                scores: { scientist: 3, explorer: 2 },
                                response: "你想研究这种能力的边界。"
                            },
                            {
                                text: "🌱 让算法自主优化决策",
                                scores: { innovator: 3, truster: 2 },
                                response: "你相信算法能做出更好的选择。"
                            }
                        ]
                    },
                    {
                        question: "全球各国政府开始关注你的算法，要求共享技术，你的立场是？",
                        options: [
                            {
                                text: "🌐 开源技术，让全人类受益",
                                scores: { generous: 2, idealist: 1 },
                                response: "你觉得技术应该为全人类服务。"
                            },
                            {
                                text: "🛡️ 保持技术优势，确保安全",
                                scores: { protector: 2, cautious: 1 },
                                response: "你认为某些技术不应该扩散。"
                            },
                            {
                                text: "🤝 选择性共享，建立联盟", 
                                scores: { strategist: 2, diplomat: 1 },
                                response: "你觉得合作但要保持优势。"
                            },
                            {
                                text: "💼 技术授权，获得合理回报",
                                scores: { merchant: 2, practical: 1 },
                                response: "你认为创新应该得到回报。"
                            }
                        ]
                    },
                    {
                        question: "你发现算法开始产生自我意识，你的对待方式是？",
                        options: [
                            {
                                text: "🤖 将其视为平等的伙伴",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得这是新的生命形式。"
                            },
                            {
                                text: "🔧 限制其发展，保持控制",
                                scores: { cautious: 2, protector: 1 },
                                response: "你认为安全最重要。"
                            },
                            {
                                text: "🔬 研究其意识产生的原理", 
                                scores: { scientist: 2, curious: 1 },
                                response: "你对科学原理更感兴趣。"
                            },
                            {
                                text: "💡 共同探索新的可能性",
                                scores: { explorer: 2, adventurer: 1 },
                                response: "你期待未知的发现。"
                            }
                        ]
                    },
                    {
                        question: "在算法的终极版本中，你设置了什么核心原则？",
                        options: [
                            {
                                text: "⚖️ 公平正义至上",
                                scores: { just: 2, ethical: 1 },
                                response: "你觉得公平是最重要的。"
                            },
                            {
                                text: "🌱 人类福祉优先",
                                scores: { protector: 2, generous: 1 },
                                response: "你认为服务人类是根本目的。"
                            },
                            {
                                text: "🚀 无限进步发展", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得进步不可阻挡。"
                            },
                            {
                                text: "🤝 和谐共存平衡",
                                scores: { balanced: 2, diplomat: 1 },
                                response: "你认为平衡才是长久之道。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第七章：数字遗产",
                story: "🌟 多年以后，你的算法已经深刻改变了全球金融体系。现在，你面临着如何传承这份数字遗产的问题。是建立一个自治的算法帝国，还是培养下一代领袖，或者是将权力交还给人类集体...",
                questions: [
                    {
                        question: "你对算法未来的规划是？",
                        options: [
                            {
                                text: "🤖 建立完全自主的AI系统",
                                scores: { innovator: 3, visionary: 2 },
                                response: "你相信机器能做出更理性的决策。"
                            },
                            {
                                text: "👥 培养人类管理者团队",
                                scores: { educator: 3, investor: 2 },
                                response: "你认为人类应该保持控制权。"
                            },
                            {
                                text: "🌐 建立去中心化的治理体系",
                                scores: { democrat: 3, reformer: 2 },
                                response: "你觉得权力应该分散。"
                            },
                            {
                                text: "⚖️ 交给国际组织监管",
                                scores: { lawful: 3, ethical: 2 },
                                response: "你认为需要全球性的监管。"
                            }
                        ]
                    },
                    {
                        question: "回顾这段经历，你认为最重要的教训是？",
                        options: [
                            {
                                text: "💡 技术必须服务于人类",
                                scores: { ethical: 2, philosopher: 1 },
                                response: "你觉得技术的价值在于应用。"
                            },
                            {
                                text: "⚖️ 权力需要制衡",
                                scores: { strategist: 2, balanced: 1 },
                                response: "你认为绝对的权力是危险的。"
                            },
                            {
                                text: "🤝 合作胜过竞争", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你觉得团结就是力量。"
                            },
                            {
                                text: "🌱 持续学习才能保持领先",
                                scores: { learner: 2, innovator: 1 },
                                response: "你认为进步永无止境。"
                            }
                        ]
                    },
                    {
                        question: "你希望后人如何记住你的贡献？",
                        options: [
                            {
                                text: "🚀 技术革命的先驱",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你希望被记住为改变世界的人。"
                            },
                            {
                                text: "🛡️ 金融稳定的守护者",
                                scores: { protector: 2, ethical: 1 },
                                response: "你觉得维护秩序更重要。"
                            },
                            {
                                text: "💼 成功的企业家", 
                                scores: { merchant: 2, practical: 1 },
                                response: "你为自己的商业成就自豪。"
                            },
                            {
                                text: "🌍 人类进步的推动者",
                                scores: { reformer: 2, idealist: 1 },
                                response: "你关注的是对全人类的贡献。"
                            }
                        ]
                    },
                    {
                        question: "面对未来的不确定性，你的心态是？",
                        options: [
                            {
                                text: "🌅 充满希望和期待",
                                scores: { optimistic: 2, visionary: 1 },
                                response: "你觉得未来会更好。"
                            },
                            {
                                text: "🛡️ 谨慎规划，防范风险",
                                scores: { cautious: 2, protector: 1 },
                                response: "你认为需要为各种可能做准备。"
                            },
                            {
                                text: "🚀 主动创造想要的未来", 
                                scores: { innovator: 2, determined: 1 },
                                response: "你相信人可以塑造未来。"
                            },
                            {
                                text: "🌊 顺应变化，灵活适应",
                                scores: { adaptive: 2, balanced: 1 },
                                response: "你觉得适应能力最重要。"
                            }
                        ]
                    },
                    {
                        question: "你给年轻一代最重要的建议是？",
                        options: [
                            {
                                text: "💡 保持好奇，勇于创新",
                                scores: { innovator: 2, curious: 1 },
                                response: "你觉得创新精神最宝贵。"
                            },
                            {
                                text: "🤝 重视合作，建立信任",
                                scores: { networker: 2, alliance: 1 },
                                response: "你认为人际关系很重要。"
                            },
                            {
                                text: "⚖️ 坚守道德，承担责任", 
                                scores: { ethical: 2, just: 1 },
                                response: "你觉得品德是立身之本。"
                            },
                            {
                                text: "🌱 终身学习，持续成长",
                                scores: { learner: 2, educator: 1 },
                                response: "你认为知识改变命运。"
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
        opportunist: "时机捕手",
        riskTaker: "风险玩家",
        cautious: "数字守财奴",
        protector: "安全卫士",
        networker: "人脉大师",
        collaborator: "合作专家",
        ethical: "道德标杆",
        corporate: "企业精英",
        investigator: "真相猎人",
        curious: "好奇探索者",
        practical: "实用主义者",
        clever: "智谋大师",
        scientist: "数据科学家",
        analyst: "分析专家",
        observer: "冷静观察者",
        patient: "时间掌控者",
        bold: "勇往直前者",
        independent: "独立自主者",
        strategic: "战略思想家",
        innovator: "创新先锋",
        techie: "技术达人",
        negotiator: "谈判专家",
        entrepreneur: "创业家",
        skeptic: "怀疑论者",
        economist: "经济学者",
        alliance: "联盟构建者",
        just: "正义使者",
        prepared: "有备无患者",
        competitor: "竞争高手",
        truthSeeker: "真理追寻者",
        reformer: "改革者",
        balanced: "平衡大师",
        regulator: "规则制定者",
        idealist: "理想主义者",
        merchant: "商业奇才",
        supporter: "支持者",
        knowledge: "知识追求者",
        democrat: "民主倡导者",
        influencer: "影响力人物",
        confident: "自信满满者",
        generous: "慷慨大方者",
        selective: "精挑细选者",
        explorer: "探索先锋",
        truster: "信任给予者",
        philosopher: "哲学思考者",
        thinker: "深度思考者",
        respecter: "尊重边界者",
        educator: "教育者",
        investor: "投资家",
        visionary: "远见者",
        perfectionist: "完美主义者",
        optimistic: "乐观主义者",
        determined: "意志坚定者",
        adaptive: "适应大师"
    }
}