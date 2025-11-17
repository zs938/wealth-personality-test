// stories/scifi.js - 科幻故事线（修正版，确保35题）
const scifiStory = {
    title: "时空财富革命",
    introduction: "🌌 公元2085年，你是一名年轻的量子物理学家。在一次实验中，你意外激活了远古外星文明留下的'时空共振器'，获得了穿越平行宇宙的能力。每个宇宙都有不同的经济规则和财富形态，你的选择将影响整个多元宇宙的金融秩序...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20, 
            deep: 35
        };
        
        const allChapters = [
            {
                chapter: "第一章：时空共振",
                story: "⚡ 实验室的量子对撞机突然超载，你被卷入一个时空漩涡。当你醒来时，发现自己能够感知到无数平行宇宙。更惊人的是，每个宇宙的财富都以不同形式存在：有的宇宙用记忆交易，有的用时间作为货币，有的甚至用情感能量...",
                questions: [
                    {
                        question: "面对这突如其来的能力，你的第一反应是？",
                        options: [
                            { 
                                text: "🔬 立即记录数据，进行科学研究", 
                                scores: { scientist: 3, analyst: 1 },
                                response: "科学家的本能让你优先考虑数据收集和分析。"
                            },
                            { 
                                text: "💼 探索商业机会，寻找套利空间", 
                                scores: { entrepreneur: 3, trader: 1 },
                                response: "你立即看到了跨宇宙贸易的巨大潜力。"
                            },
                            { 
                                text: "🛡️ 保守秘密，防止技术被滥用", 
                                scores: { cautious: 3, protector: 1 },
                                response: "你深知这种能力的危险性，选择谨慎行事。"
                            },
                            { 
                                text: "🌐 寻找其他能力者，建立联盟", 
                                scores: { networker: 3, diplomat: 1 },
                                response: "你相信这种能力不可能只有你一个人拥有。"
                            }
                        ]
                    },
                    {
                        question: "你发现共振器上刻着外星文字：'财富的真谛在于平衡'，这让你想到？",
                        options: [
                            { 
                                text: "⚖️ 不同宇宙的经济需要平衡", 
                                scores: { economist: 2, balanced: 1 },
                                response: "你觉得这是维持多元宇宙稳定的关键。"
                            },
                            { 
                                text: "🔍 需要研究每个宇宙的经济规律", 
                                scores: { scientist: 2, analyst: 1 },
                                response: "你认为理解是平衡的前提。"
                            },
                            { 
                                text: "💡 这可能暗示着某种危险", 
                                scores: { cautious: 2, strategist: 1 },
                                response: "你觉得警告背后必有原因。"
                            },
                            { 
                                text: "🚀 平衡意味着新的商业机会", 
                                scores: { entrepreneur: 2, opportunist: 1 },
                                response: "你在警告中看到了商机。"
                            }
                        ]
                    },
                    {
                        question: "你发现穿越会消耗'时空能量'，这种能量在不同宇宙的获取方式不同，你的策略是？",
                        options: [
                            { 
                                text: "📊 精确计算每次穿越的成本收益", 
                                scores: { analyst: 2, practical: 1 },
                                response: "你相信数据驱动的决策。"
                            },
                            { 
                                text: "💎 寻找高价值宇宙重点开发", 
                                scores: { focused: 2, trader: 1 },
                                response: "你觉得应该集中资源。"
                            },
                            { 
                                text: "🌍 广泛探索，建立宇宙地图", 
                                scores: { explorer: 2, visionary: 1 },
                                response: "你认为全面的了解更重要。"
                            },
                            { 
                                text: "🔄 建立能量循环利用系统", 
                                scores: { innovator: 2, sustainable: 1 },
                                response: "你着眼于长期可持续发展。"
                            }
                        ]
                    },
                    {
                        question: "第一次穿越时，你发现自己可以携带少量物品，你会选择带什么？",
                        options: [
                            { 
                                text: "📚 科学仪器和记录设备", 
                                scores: { scientist: 2, analyst: 1 },
                                response: "你觉得数据收集最重要。"
                            },
                            { 
                                text: "💎 贵重物品用于交易", 
                                scores: { trader: 2, opportunist: 1 },
                                response: "你认为启动资金很关键。"
                            },
                            { 
                                text: "🛡️ 自卫装备和保护装置", 
                                scores: { protector: 2, cautious: 1 },
                                response: "你觉得安全第一。"
                            },
                            { 
                                text: "🤝 礼物用于建立关系", 
                                scores: { diplomat: 2, networker: 1 },
                                response: "你认为人际关系是宝贵资产。"
                            }
                        ]
                    },
                    {
                        question: "共振器显示你的第一个目的地有三个选择，你会去哪个宇宙？",
                        options: [
                            { 
                                text: "🧠 记忆交易宇宙", 
                                scores: { curious: 2, explorer: 1 },
                                response: "你对这种独特的财富形式很好奇。"
                            },
                            { 
                                text: "⏰ 时间货币宇宙", 
                                scores: { economist: 2, analyst: 1 },
                                response: "你想研究时间作为货币的机制。"
                            },
                            { 
                                text: "💖 情感能量宇宙", 
                                scores: { idealist: 2, philosopher: 1 },
                                response: "你觉得情感作为货币很有深意。"
                            },
                            { 
                                text: "🔮 未知的新宇宙", 
                                scores: { adventurer: 2, riskTaker: 1 },
                                response: "你渴望探索完全未知的领域。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第二章：记忆交易市场", 
                story: "🌀 你第一次主动穿越到了一个以记忆为货币的宇宙。在这里，人们可以出售自己的记忆来换取生活所需，也可以购买他人的记忆来获得技能和知识。你发现这个宇宙正在经历'记忆通胀'危机...",
                questions: [
                    {
                        question: "在这个记忆交易市场，你会如何获取第一桶金？",
                        options: [
                            {
                                text: "🧠 出售一些不重要的记忆换取启动资金",
                                scores: { practical: 2, trader: 1 },
                                response: "你认为这是最快速的入门方式。"
                            },
                            {
                                text: "📊 分析记忆价格波动规律，低买高卖",
                                scores: { analyst: 2, investor: 1 },
                                response: "你相信市场规律在任何宇宙都适用。"
                            },
                            {
                                text: "💡 创造新的记忆交易模式", 
                                scores: { innovator: 2, entrepreneur: 1 },
                                response: "你看到了现有交易体系的缺陷和改进空间。"
                            },
                            {
                                text: "🤝 帮助解决记忆通胀危机",
                                scores: { reformer: 2, diplomat: 1 },
                                response: "你认为解决根本问题才能创造真正的价值。"
                            }
                        ]
                    },
                    {
                        question: "你发现有人正在大量收购珍贵记忆，导致市场价格扭曲，你的做法是？",
                        options: [
                            {
                                text: "🔍 调查收购者的身份和目的",
                                scores: { investigator: 2, curious: 1 },
                                response: "你觉得背后必有隐情。"
                            },
                            {
                                text: "💼 加入收购，分一杯羹",
                                scores: { opportunist: 2, trader: 1 },
                                response: "你认为应该顺势而为。"
                            },
                            {
                                text: "🛡️ 保护珍贵记忆不被垄断", 
                                scores: { protector: 2, ethical: 1 },
                                response: "你觉得文化遗产需要保护。"
                            },
                            {
                                text: "⚖️ 向市场管理机构报告",
                                scores: { lawful: 2, just: 1 },
                                response: "你相信制度的力量。"
                            }
                        ]
                    },
                    {
                        question: "一位老人愿意用毕生知识换取你的一段快乐记忆，你的决定是？",
                        options: [
                            {
                                text: "🤝 同意交换，获得宝贵知识",
                                scores: { learner: 2, practical: 1 },
                                response: "你觉得知识比记忆更有价值。"
                            },
                            {
                                text: "🚫 拒绝，保护自己的记忆完整性",
                                scores: { protector: 2, cautious: 1 },
                                response: "你认为记忆是身份的一部分。"
                            },
                            {
                                text: "💡 寻找其他交换方式", 
                                scores: { negotiator: 2, clever: 1 },
                                response: "你相信能找到双赢方案。"
                            },
                            {
                                text: "📚 先学习，再决定",
                                scores: { analyst: 2, patient: 1 },
                                response: "你觉得需要更多信息。"
                            }
                        ]
                    },
                    {
                        question: "你发现记忆通胀的根源是有人伪造记忆投入市场，你的应对策略是？",
                        options: [
                            {
                                text: "🔬 开发记忆真伪检测技术",
                                scores: { innovator: 2, scientist: 1 },
                                response: "你觉得技术问题要用技术解决。"
                            },
                            {
                                text: "📢 公开揭露造假行为",
                                scores: { ethical: 2, confront: 1 },
                                response: "你认为真相最重要。"
                            },
                            {
                                text: "🤝 联合正直商人建立新标准", 
                                scores: { alliance: 2, networker: 1 },
                                response: "你相信行业自律的力量。"
                            },
                            {
                                text: "💼 利用信息差获利",
                                scores: { opportunist: 2, clever: 1 },
                                response: "你在危机中看到了机会。"
                            }
                        ]
                    },
                    {
                        question: "你发现自己的记忆在这个宇宙中特别珍贵，因为来自其他宇宙的记忆很稀有，你的选择是？",
                        options: [
                            {
                                text: "💎 高价出售稀有记忆",
                                scores: { trader: 2, merchant: 1 },
                                response: "你觉得应该利用稀缺性获利。"
                            },
                            {
                                text: "🔒 保护记忆不轻易出售",
                                scores: { protector: 2, cautious: 1 },
                                response: "你认为稀有资源应该珍惜。"
                            },
                            {
                                text: "🤝 用记忆换取重要关系", 
                                scores: { networker: 2, diplomat: 1 },
                                response: "你觉得人际关系比财富更重要。"
                            },
                            {
                                text: "🔬 研究自己记忆的特殊性",
                                scores: { scientist: 2, analyst: 1 },
                                response: "你对科学原理很感兴趣。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第三章：时间货币宇宙",
                story: "⏳ 你来到了一个以时间为货币的宇宙。这里的人们可以借贷、存储、交易时间。但你很快发现，这个宇宙的'时间银行'系统存在严重漏洞，富人可以通过时间复利永远活下去，而穷人却在时间债务中挣扎...",
                questions: [
                    {
                        question: "面对这个不公平的时间经济体系，你的立场是？",
                        options: [
                            {
                                text: "💸 利用漏洞积累时间财富",
                                scores: { opportunist: 3, wealthy: 2 },
                                response: "你认为适者生存是宇宙的普遍法则。"
                            },
                            {
                                text: "⚙️ 帮助修复系统漏洞",
                                scores: { reformer: 3, scientist: 2 },
                                response: "你希望建立更公平的时间经济体系。"
                            },
                            {
                                text: "📚 教育民众时间理财知识",
                                scores: { educator: 3, sharer: 2 },
                                response: "你认为知识是打破不平等的最好武器。"
                            },
                            {
                                text: "🚀 寻找替代的时间经济模式",
                                scores: { innovator: 3, visionary: 2 },
                                response: "你觉得应该彻底改革这个有缺陷的体系。"
                            }
                        ]
                    },
                    {
                        question: "你遇到一个因时间债务即将'到期'的年轻人，他向您求助，你的选择是？",
                        options: [
                            {
                                text: "⏰ 赠送一些时间帮助他",
                                scores: { generous: 2, protector: 1 },
                                response: "你觉得生命比时间更重要。"
                            },
                            {
                                text: "💡 教他如何赚取更多时间",
                                scores: { educator: 2, practical: 1 },
                                response: "你认为授人以渔更重要。"
                            },
                            {
                                text: "🔍 调查他陷入债务的原因", 
                                scores: { investigator: 2, analyst: 1 },
                                response: "你觉得需要了解根本原因。"
                            },
                            {
                                text: "⚖️ 建议他向时间法庭申诉",
                                scores: { lawful: 2, just: 1 },
                                response: "你相信法律途径。"
                            }
                        ]
                    },
                    {
                        question: "你发现时间银行的总裁通过操纵利率获得永生，你的行动是？",
                        options: [
                            {
                                text: "📢 公开揭露这个阴谋",
                                scores: { ethical: 2, confront: 1 },
                                response: "你觉得必须让真相大白。"
                            },
                            {
                                text: "🎯 收集证据，准备法律诉讼",
                                scores: { lawful: 2, strategist: 1 },
                                response: "你认为应该依法办事。"
                            },
                            {
                                text: "🤝 寻求其他富豪的支持", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你相信团结就是力量。"
                            },
                            {
                                text: "💡 开发对抗时间复利的技术",
                                scores: { innovator: 2, scientist: 1 },
                                response: "你觉得技术突破是关键。"
                            }
                        ]
                    },
                    {
                        question: "你发现这个宇宙的时间流动速度与其他宇宙不同，这带来了套利机会，你的做法是？",
                        options: [
                            {
                                text: "💼 立即开始跨宇宙时间套利",
                                scores: { trader: 2, opportunist: 1 },
                                response: "你觉得商机稍纵即逝。"
                            },
                            {
                                text: "🔬 先研究时间流速差异的原理",
                                scores: { scientist: 2, analyst: 1 },
                                response: "你认为理解原理更重要。"
                            },
                            {
                                text: "⚖️ 评估套利对两个宇宙的影响", 
                                scores: { ethical: 2, balanced: 1 },
                                response: "你考虑的是整体平衡。"
                            },
                            {
                                text: "🛡️ 谨慎尝试，控制风险",
                                scores: { cautious: 2, strategist: 1 },
                                response: "你觉得安全第一。"
                            }
                        ]
                    },
                    {
                        question: "时间银行提供给你一个特殊账户，可以获得10倍时间利息，但条件是帮助维持现有体系，你的决定是？",
                        options: [
                            {
                                text: "🤝 接受，但暗中帮助穷人",
                                scores: { strategist: 2, clever: 1 },
                                response: "你觉得可以在体系内做好事。"
                            },
                            {
                                text: "🚫 拒绝，坚持原则",
                                scores: { ethical: 2, idealist: 1 },
                                response: "你认为不能与不公正体系合作。"
                            },
                            {
                                text: "💡 讨价还价争取更好条件", 
                                scores: { negotiator: 2, practical: 1 },
                                response: "你觉得可以争取更公平的合作。"
                            },
                            {
                                text: "🔍 假装接受，收集证据",
                                scores: { investigator: 2, patient: 1 },
                                response: "你认为这是深入调查的机会。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第四章：情感能量宇宙",
                story: "💖 你来到了一个用情感能量作为货币的宇宙。喜悦、爱、勇气等积极情感是硬通货，而恐惧、愤怒等消极情感会消耗财富。但这个宇宙正在经历'情感枯竭'，人们的情感变得越来越淡漠...",
                questions: [
                    {
                        question: "面对情感枯竭危机，你的解决方案是？",
                        options: [
                            {
                                text: "🎨 引入艺术和文化激发情感",
                                scores: { innovator: 3, stimulator: 2 },
                                response: "你觉得艺术是情感的源泉。"
                            },
                            {
                                text: "🤝 促进人际交往和社区建设",
                                scores: { networker: 3, alliance: 2 },
                                response: "你认为人际关系能产生情感。"
                            },
                            {
                                text: "🔬 研究情感产生的科学原理",
                                scores: { scientist: 3, analyst: 2 },
                                response: "你相信科学能找到答案。"
                            },
                            {
                                text: "🌱 从其他宇宙引入情感能量",
                                scores: { trader: 3, opportunist: 2 },
                                response: "你在危机中看到了商机。"
                            }
                        ]
                    },
                    {
                        question: "你发现有人开发了'情感成瘾'技术，让人们沉迷于廉价快乐，你的立场是？",
                        options: [
                            {
                                text: "🚫 坚决反对这种技术",
                                scores: { ethical: 2, protector: 1 },
                                response: "你觉得这是在伤害人们。"
                            },
                            {
                                text: "📜 推动立法监管情感技术",
                                scores: { lawful: 2, regulator: 1 },
                                response: "你认为需要法律约束。"
                            },
                            {
                                text: "💡 开发更健康的情感技术", 
                                scores: { innovator: 2, reformer: 1 },
                                response: "你觉得应该用技术造福人类。"
                            },
                            {
                                text: "🔍 深入研究成瘾机制",
                                scores: { scientist: 2, curious: 1 },
                                response: "你对技术原理很感兴趣。"
                            }
                        ]
                    },
                    {
                        question: "这个宇宙的领袖向你求助，希望用你的跨宇宙能力解决情感危机，你的要求是？",
                        options: [
                            {
                                text: "🤝 无条件提供帮助",
                                scores: { generous: 2, idealist: 1 },
                                response: "你觉得帮助他人是应该的。"
                            },
                            {
                                text: "💎 要求经济回报",
                                scores: { practical: 2, merchant: 1 },
                                response: "你认为付出应该得到回报。"
                            },
                            {
                                text: "🌐 建立长期合作关系", 
                                scores: { strategist: 2, networker: 1 },
                                response: "你着眼于长远利益。"
                            },
                            {
                                text: "📚 交换知识和科技",
                                scores: { learner: 2, scientist: 1 },
                                response: "你觉得知识比财富更重要。"
                            }
                        ]
                    },
                    {
                        question: "你发现自己的情感在这个宇宙中特别珍贵，因为来自其他宇宙的情感很稀有，你的选择是？",
                        options: [
                            {
                                text: "💖 慷慨分享自己的情感",
                                scores: { generous: 2, sharer: 1 },
                                response: "你觉得分享能带来更多快乐。"
                            },
                            {
                                text: "💎 谨慎使用，作为战略资源",
                                scores: { strategist: 2, cautious: 1 },
                                response: "你认为稀有资源应该珍惜。"
                            },
                            {
                                text: "🔬 研究自己情感的独特性", 
                                scores: { scientist: 2, analyst: 1 },
                                response: "你对科学原理更感兴趣。"
                            },
                            {
                                text: "🌍 建立情感贸易网络",
                                scores: { trader: 2, entrepreneur: 1 },
                                response: "你看到了商业机会。"
                            }
                        ]
                    },
                    {
                        question: "你发现情感枯竭的根源是人们过度追求积极情感，压抑负面情感，你的解决思路是？",
                        options: [
                            {
                                text: "⚖️ 倡导情感平衡的重要性",
                                scores: { balanced: 2, philosopher: 1 },
                                response: "你觉得各种情感都有价值。"
                            },
                            {
                                text: "💡 开发情感转化技术",
                                scores: { innovator: 2, scientist: 1 },
                                response: "你认为负面情感可以转化利用。"
                            },
                            {
                                text: "📚 教育人们接纳所有情感", 
                                scores: { educator: 2, reformer: 1 },
                                response: "你觉得需要改变观念。"
                            },
                            {
                                text: "🔄 建立情感循环经济",
                                scores: { economist: 2, systematic: 1 },
                                response: "你着眼于建立可持续系统。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第五章：时空管理局",
                story: "🕰️ 你被'时空管理局'发现，这是一个维护多元宇宙经济秩序的神秘组织。他们警告你，随意改变平行宇宙的经济规律可能导致灾难性后果。但同时，他们也希望借助你的能力解决一些宇宙级的经济危机...",
                questions: [
                    {
                        question: "面对时空管理局的警告，你的选择是？",
                        options: [
                            {
                                text: "🛡️ 立即停止穿越，遵守规则",
                                scores: { lawful: 3, cautious: 2 },
                                response: "你认为维护宇宙秩序更重要。"
                            },
                            {
                                text: "🔬 申请成为正式探员，合法行动",
                                scores: { scientist: 3, practical: 2 },
                                response: "你希望在规则框架内发挥能力。"
                            },
                            {
                                text: "🚀 继续独立探索，但要更谨慎",
                                scores: { independent: 3, adventurer: 2 },
                                response: "你觉得自由探索的权利很重要。"
                            },
                            {
                                text: "🤝 与管理局合作，但保持独立性",
                                scores: { diplomat: 3, strategist: 2 },
                                response: "你选择在合作中保持自主。"
                            }
                        ]
                    },
                    {
                        question: "如果接受任务，你希望解决哪种经济危机？",
                        options: [
                            {
                                text: "💔 情感能量枯竭的宇宙",
                                scores: { healer: 3, reformer: 2 },
                                response: "你觉得情感是宇宙最珍贵的资源。"
                            },
                            {
                                text: "⏳ 时间货币体系崩溃的宇宙",
                                scores: { economist: 3, systematic: 2 },
                                response: "你对复杂经济系统很感兴趣。"
                            },
                            {
                                text: "🧠 记忆交易失控的宇宙",
                                scores: { regulator: 3, justice: 2 },
                                response: "你认为需要恢复市场秩序。"
                            },
                            {
                                text: "🌌 原始物物交换的落后宇宙",
                                scores: { educator: 3, developer: 2 },
                                response: "你希望帮助落后文明进步。"
                            }
                        ]
                    },
                    {
                        question: "时空管理局告诉你，有些宇宙的经济崩溃会导致时空裂缝，威胁整个多元宇宙，你的态度是？",
                        options: [
                            {
                                text: "🛡️ 优先处理高危宇宙",
                                scores: { protector: 2, focused: 1 },
                                response: "你觉得安全是第一要务。"
                            },
                            {
                                text: "🔍 研究经济崩溃与时空裂缝的关系",
                                scores: { scientist: 2, analyst: 1 },
                                response: "你对因果关系很感兴趣。"
                            },
                            {
                                text: "🌐 建立宇宙经济预警系统", 
                                scores: { systematic: 2, planner: 1 },
                                response: "你觉得预防比治疗更重要。"
                            },
                            {
                                text: "🤝 组织跨宇宙救援团队",
                                scores: { alliance: 2, networker: 1 },
                                response: "你相信集体行动的力量。"
                            }
                        ]
                    },
                    {
                        question: "你发现时空管理局内部对如何处理经济危机存在分歧，你的立场是？",
                        options: [
                            {
                                text: "⚖️ 支持温和改革派",
                                scores: { reformer: 2, balanced: 1 },
                                response: "你觉得渐进改革更稳妥。"
                            },
                            {
                                text: "🚀 支持激进创新派",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你认为需要大胆变革。"
                            },
                            {
                                text: "🛡️ 支持保守保护派", 
                                scores: { protector: 2, cautious: 1 },
                                response: "你觉得稳定最重要。"
                            },
                            {
                                text: "💡 提出自己的第三方案",
                                scores: { independent: 2, thinker: 1 },
                                response: "你觉得现有方案都不完美。"
                            }
                        ]
                    },
                    {
                        question: "时空管理局提供给你先进的时空装备，但要求你签署严格的保密协议，你的决定是？",
                        options: [
                            {
                                text: "✍️ 立即签署，获得装备",
                                scores: { practical: 2, opportunist: 1 },
                                response: "你觉得装备带来的好处更重要。"
                            },
                            {
                                text: "🔍 仔细审查协议条款",
                                scores: { cautious: 2, analyst: 1 },
                                response: "你认为需要了解所有细节。"
                            },
                            {
                                text: "💡 要求修改某些条款", 
                                scores: { negotiator: 2, strategist: 1 },
                                response: "你觉得协议可以更公平。"
                            },
                            {
                                text: "🚫 拒绝签署，保持独立",
                                scores: { independent: 2, protector: 1 },
                                response: "你认为自由比装备更重要。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第六章：宇宙经济共同体",
                story: "🌟 你成功解决了多个宇宙的经济危机，声望达到顶峰。现在，各个宇宙的代表邀请你主持建立'宇宙经济共同体'，制定跨宇宙贸易和金融的基本规则。这是前所未有的创举...",
                questions: [
                    {
                        question: "你为共同体设计的基本规则是？",
                        options: [
                            {
                                text: "⚖️ 公平贸易，保护弱小宇宙",
                                scores: { justice: 3, protector: 2 },
                                response: "你认为公平是合作的基础。"
                            },
                            {
                                text: "🚀 自由竞争，优胜劣汰",
                                scores: { opportunist: 3, realist: 2 },
                                response: "你相信市场竞争能促进发展。"
                            },
                            {
                                text: "🤝 互助合作，共同繁荣",
                                scores: { alliance: 3, diplomat: 2 },
                                response: "你觉得团结才能应对更大挑战。"
                            },
                            {
                                text: "🔬 渐进改革，稳中求进",
                                scores: { planner: 3, cautious: 2 },
                                response: "你认为变革需要循序渐进。"
                            }
                        ]
                    },
                    {
                        question: "面对不同宇宙的文化差异，你的处理原则是？",
                        options: [
                            {
                                text: "🌍 尊重差异，求同存异",
                                scores: { diplomat: 3, tolerant: 2 },
                                response: "你觉得多样性是宇宙的财富。"
                            },
                            {
                                text: "💡 建立统一标准，提高效率",
                                scores: { systematic: 3, practical: 2 },
                                response: "你认为标准化能减少摩擦。"
                            },
                            {
                                text: "🎯 重点合作，不追求全面统一",
                                scores: { focused: 3, strategist: 2 },
                                response: "你觉得应该集中精力在关键领域。"
                            },
                            {
                                text: "🔄 相互学习，取长补短",
                                scores: { learner: 3, innovator: 2 },
                                response: "你相信交流能促进共同进步。"
                            }
                        ]
                    },
                    {
                        question: "有些宇宙担心共同体会削弱他们的经济主权，你的说服策略是？",
                        options: [
                            {
                                text: "📊 用数据展示合作的好处",
                                scores: { analyst: 2, scientist: 1 },
                                response: "你相信客观证据的力量。"
                            },
                            {
                                text: "💎 提供经济激励措施",
                                scores: { practical: 2, merchant: 1 },
                                response: "你觉得实际利益最能说服人。"
                            },
                            {
                                text: "🛡️ 承诺保护他们的核心利益", 
                                scores: { protector: 2, negotiator: 1 },
                                response: "你认为消除顾虑很重要。"
                            },
                            {
                                text: "🌐 展示不合作的潜在风险",
                                scores: { strategist: 2, warning: 1 },
                                response: "你觉得需要展示反面案例。"
                            }
                        ]
                    },
                    {
                        question: "你发现有些势力想利用共同体谋取私利，你的防范措施是？",
                        options: [
                            {
                                text: "⚖️ 建立严格的监督机制",
                                scores: { lawful: 2, regulator: 1 },
                                response: "你觉得制度是最好的防范。"
                            },
                            {
                                text: "🔍 加强情报收集和分析",
                                scores: { investigator: 2, analyst: 1 },
                                response: "你认为信息就是力量。"
                            },
                            {
                                text: "🤝 培养盟友，形成制衡", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你相信力量平衡的重要性。"
                            },
                            {
                                text: "💡 设计自平衡的经济机制",
                                scores: { innovator: 2, systematic: 1 },
                                response: "你觉得应该在系统中内置防护。"
                            }
                        ]
                    },
                    {
                        question: "共同体面临的第一重大决策是关于资源分配，你的投票倾向是？",
                        options: [
                            {
                                text: "🌱 优先发展落后宇宙",
                                scores: { reformer: 2, generous: 1 },
                                response: "你觉得应该帮助最需要帮助的。"
                            },
                            {
                                text: "🚀 投资最有潜力的宇宙",
                                scores: { investor: 2, practical: 1 },
                                response: "你认为效率最重要。"
                            },
                            {
                                text: "⚖️ 平均分配资源", 
                                scores: { balanced: 2, just: 1 },
                                response: "你觉得公平应该优先。"
                            },
                            {
                                text: "🔬 根据科学评估分配",
                                scores: { scientist: 2, analyst: 1 },
                                response: "你相信数据驱动的决策。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第七章：时空财富的真谛",
                story: "💫 在经历了无数宇宙的冒险后，你开始思考财富的真正意义。时空共振器突然显示出最终信息：'真正的财富不是拥有，而是创造；不是积累，而是流动；不是征服，而是和谐'...",
                questions: [
                    {
                        question: "面对这个终极启示，你的感悟是？",
                        options: [
                            {
                                text: "🌱 财富是创造价值的能力",
                                scores: { creator: 3, innovator: 2 },
                                response: "你觉得创造比占有更有意义。"
                            },
                            {
                                text: "🤝 财富是连接众生的桥梁",
                                scores: { connector: 3, networker: 2 },
                                response: "你认为关系比物质更重要。"
                            },
                            {
                                text: "⚖️ 财富是维持平衡的工具",
                                scores: { balancer: 3, reformer: 2 },
                                response: "你觉得平衡是最高境界。"
                            },
                            {
                                text: "🚀 财富是探索未知的动力",
                                scores: { explorer: 3, adventurer: 2 },
                                response: "你认为成长比成功更重要。"
                            }
                        ]
                    },
                    {
                        question: "你准备如何运用这些领悟来指导未来的行动？",
                        options: [
                            {
                                text: "🌍 致力于宇宙间的经济和谐",
                                scores: { diplomat: 2, reformer: 1 },
                                response: "你觉得促进和谐是使命。"
                            },
                            {
                                text: "🔬 继续探索财富的深层规律",
                                scores: { scientist: 2, explorer: 1 },
                                response: "你对未知充满好奇。"
                            },
                            {
                                text: "💡 创造新的财富形态", 
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得应该突破传统思维。"
                            },
                            {
                                text: "👥 培养下一代的财富智慧",
                                scores: { educator: 2, investor: 1 },
                                response: "你认为传承很重要。"
                            }
                        ]
                    },
                    {
                        question: "回顾整个旅程，你认为最重要的收获是？",
                        options: [
                            {
                                text: "💎 对财富本质的深刻理解",
                                scores: { philosopher: 2, thinker: 1 },
                                response: "你觉得理念比实物更珍贵。"
                            },
                            {
                                text: "🌐 建立的跨宇宙人际关系",
                                scores: { networker: 2, alliance: 1 },
                                response: "你认为朋友是最宝贵的财富。"
                            },
                            {
                                text: "🚀 获得的独特经验和技能", 
                                scores: { learner: 2, adventurer: 1 },
                                response: "你觉得经历塑造了现在的你。"
                            },
                            {
                                text: "⚡ 改变多个宇宙的经济格局",
                                scores: { influencer: 2, reformer: 1 },
                                response: "你为自己的影响力感到自豪。"
                            }
                        ]
                    },
                    {
                        question: "你现在对时空共振器的使用态度是？",
                        options: [
                            {
                                text: "🛡️ 谨慎使用，只在必要时",
                                scores: { protector: 2, cautious: 1 },
                                response: "你觉得这种力量需要节制。"
                            },
                            {
                                text: "🚀 积极使用，创造更多价值",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你认为应该充分发挥其潜力。"
                            },
                            {
                                text: "🤝 分享技术，让更多人受益", 
                                scores: { sharer: 2, generous: 1 },
                                response: "你觉得技术应该为所有人服务。"
                            },
                            {
                                text: "🔒 封存技术，防止被滥用",
                                scores: { lawful: 2, regulator: 1 },
                                response: "你认为这种技术太危险。"
                            }
                        ]
                    },
                    {
                        question: "你希望后人如何记住你在多元宇宙中的贡献？",
                        options: [
                            {
                                text: "🌍 宇宙和谐的缔造者",
                                scores: { diplomat: 2, reformer: 1 },
                                response: "你觉得促进和谐最重要。"
                            },
                            {
                                text: "💡 财富观念的革新者",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你为改变财富观念而自豪。"
                            },
                            {
                                text: "🤝 跨宇宙合作的推动者", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你认为合作是你的最大成就。"
                            },
                            {
                                text: "🔬 未知领域的探索者",
                                scores: { explorer: 2, adventurer: 1 },
                                response: "你觉得探索精神最可贵。"
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
        scientist: "量子财智师",
        analyst: "数据炼金士",
        entrepreneur: "星际创客",
        trader: "跨维交易商",
        cautious: "时空守财奴",
        protector: "宇宙守护者",
        networker: "星网连接者",
        diplomat: "维度外交官",
        economist: "时空经济学家",
        balanced: "平衡大师",
        focused: "专注探索者",
        explorer: "未知领域先锋",
        visionary: "未来预言家",
        sustainable: "永恒循环者",
        investigator: "真相追寻者",
        curious: "无限好奇者",
        ethical: "道德标杆",
        just: "星际法官",
        lawful: "规则守护者",
        learner: "知识汲取者",
        negotiator: "星际谈判家",
        clever: "智谋大师",
        wealthy: "财富积累者",
        reformer: "系统革新者",
        educator: "智慧传播者",
        sharer: "资源共享者",
        opportunist: "时机捕捉者",
        generous: "慷慨布施者",
        confront: "直面挑战者",
        alliance: "联盟构建者",
        regulator: "秩序维护者",
        strategist: "星际战略家",
        stimulator: "活力激发者",
        healer: "疗愈经济师",
        developer: "文明推进者",
        systematic: "系统思维者",
        planner: "长远规划师",
        independent: "自由意志者",
        adventurer: "冒险开拓者",
        tolerant: "包容接纳者",
        realist: "现实主义者",
        creator: "创世思维者",
        connector: "万物连接者",
        balancer: "和谐调节者",
        philosopher: "宇宙哲思者",
        thinker: "深度思考者",
        influencer: "星际影响者",
        idealist: "理想追寻者",
        merchant: "星际商人",
        investor: "未来投资者",
        warning: "危机预警者",
        patient: "时间掌控者",
        riskTaker: "风险偏好者",
        practical: "实用主义者"
    }
};