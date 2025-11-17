// data.js - 基础配置和人格数据
// 在 data.js 开头添加完整的人格映射系统
const globalPersonalityMapping = {
    // 古风故事人格映射
    merchant: "starInvestor",
    warrior: "adventureWealth", 
    farmer: "steadyGrower",
    wanderer: "opportunitySeeker",
    planner: "minimalistWealth",
    networker: "socialInvestor",
    entrepreneur: "starInvestor",
    investigator: "knowledgeMonetizer",
    justice: "ethicalWealth",
    observer: "minimalistWealth",
    strategist: "starInvestor",
    generous: "socialInvestor",
    honest: "steadyGrower",
    practical: "opportunitySeeker",
    cautious: "digitalHoarder",
    diplomat: "socialInvestor",
    alliance: "socialInvestor",
    adventurer: "adventureWealth",
    confront: "adventureWealth",
    clever: "knowledgeMonetizer",
    ambitious: "starInvestor",
    independent: "opportunitySeeker",
    reformer: "creativeWealth",
    scholar: "knowledgeMonetizer",
    lawful: "steadyGrower",
    protector: "steadyGrower",
    visionary: "starInvestor",
    minimalist: "minimalistWealth",
    traditional: "steadyGrower",
    realist: "opportunitySeeker",
    educator: "knowledgeMonetizer",
    guide: "socialInvestor",
    determined: "adventureWealth",
    focused: "minimalistWealth",
    learner: "knowledgeMonetizer",
    emotional: "emotionSpender",
    skeptic: "digitalHoarder",
    balanced: "steadyGrower",
    philosopher: "knowledgeMonetizer",
    opportunist: "opportunitySeeker",
    riskTaker: "adventureWealth",
    leader: "starInvestor",
    confident: "starInvestor",
    investor: "starInvestor",
    systematic: "minimalistWealth",
    just: "steadyGrower",

    // 动物故事人格映射
    meticulous: "digitalHoarder",
    analyst: "knowledgeMonetizer",
    strategist: "starInvestor",
    overview: "starInvestor",
    social: "socialInvestor",
    networker: "socialInvestor",
    intuitive: "creativeWealth",
    creative: "creativeWealth",
    wealthFocused: "starInvestor",
    practical: "opportunitySeeker",
    intellectual: "knowledgeMonetizer",
    curious: "knowledgeMonetizer",
    community: "socialInvestor",
    observant: "minimalistWealth",
    adventurous: "adventureWealth",
    riskTaker: "adventureWealth",
    brave: "adventureWealth",
    confront: "adventureWealth",
    stealthy: "opportunitySeeker",
    patient: "steadyGrower",
    leader: "starInvestor",
    unifier: "socialInvestor",
    wise: "knowledgeMonetizer",
    balanced: "steadyGrower",
    flexible: "opportunitySeeker",
    adaptive: "opportunitySeeker",
    resourceful: "creativeWealth",
    focused: "minimalistWealth",
    suspicious: "digitalHoarder",
    skeptic: "digitalHoarder",
    powerful: "starInvestor",
    traditional: "steadyGrower",
    visionary: "starInvestor",
    stimulator: "creativeWealth",
    economist: "knowledgeMonetizer",
    determined: "adventureWealth",
    systematic: "minimalistWealth",
    negotiator: "socialInvestor",
    democrat: "socialInvestor",
    reformer: "creativeWealth",
    educator: "knowledgeMonetizer",
    scholar: "knowledgeMonetizer",
    learner: "knowledgeMonetizer",
    protector: "steadyGrower",
    regulator: "steadyGrower",
    warrior: "adventureWealth",
    generous: "socialInvestor",
    emotional: "emotionSpender",
    just: "steadyGrower",
    truthSeeker: "knowledgeMonetizer",
    idealist: "creativeWealth",

    // 果蔬故事人格映射
    confident: "starInvestor",
    leader: "starInvestor",
    cautious: "digitalHoarder",
    analyst: "knowledgeMonetizer",
    networker: "socialInvestor",
    learner: "knowledgeMonetizer",
    observer: "minimalistWealth",
    patient: "steadyGrower",
    innovator: "creativeWealth",
    scientist: "knowledgeMonetizer",
    diplomat: "socialInvestor",
    marketer: "starInvestor",
    creative: "creativeWealth",
    planner: "minimalistWealth",
    practical: "opportunitySeeker",
    reformer: "creativeWealth",
    systematic: "minimalistWealth",
    regulator: "steadyGrower",
    just: "steadyGrower",
    stimulator: "creativeWealth",
    alliance: "socialInvestor",
    adventurer: "adventureWealth",
    honest: "steadyGrower",
    strategist: "starInvestor",
    protector: "steadyGrower",
    independent: "opportunitySeeker",
    selfless: "socialInvestor",
    balanced: "steadyGrower",
    resourceful: "creativeWealth",
    communicator: "socialInvestor",
    economist: "knowledgeMonetizer",
    negotiator: "socialInvestor",
    focused: "minimalistWealth",
    determined: "adventureWealth",
    investigator: "knowledgeMonetizer",
    lawful: "steadyGrower",
    respectful: "steadyGrower",
    openminded: "creativeWealth",
    idealist: "creativeWealth",
    visionary: "starInvestor",
    confront: "adventureWealth",
    clever: "knowledgeMonetizer",
    trader: "starInvestor",
    investor: "starInvestor",
    traditional: "steadyGrower",
    generous: "socialInvestor",
    brave: "adventureWealth",
    wise: "knowledgeMonetizer",
    optimistic: "starInvestor",
    adaptive: "opportunitySeeker",

    // 现代故事人格映射
    opportunist: "opportunitySeeker",
    riskTaker: "adventureWealth",
    cautious: "digitalHoarder",
    protector: "steadyGrower",
    networker: "socialInvestor",
    collaborator: "socialInvestor",
    ethical: "steadyGrower",
    corporate: "starInvestor",
    investigator: "knowledgeMonetizer",
    curious: "knowledgeMonetizer",
    practical: "opportunitySeeker",
    clever: "knowledgeMonetizer",
    scientist: "knowledgeMonetizer",
    analyst: "knowledgeMonetizer",
    observer: "minimalistWealth",
    patient: "steadyGrower",
    bold: "adventureWealth",
    independent: "opportunitySeeker",
    strategic: "starInvestor",
    innovator: "creativeWealth",
    techie: "knowledgeMonetizer",
    negotiator: "socialInvestor",
    entrepreneur: "starInvestor",
    skeptic: "digitalHoarder",
    economist: "knowledgeMonetizer",
    alliance: "socialInvestor",
    just: "steadyGrower",
    prepared: "minimalistWealth",
    competitor: "starInvestor",
    truthSeeker: "knowledgeMonetizer",
    reformer: "creativeWealth",
    balanced: "steadyGrower",
    regulator: "steadyGrower",
    idealist: "creativeWealth",
    merchant: "starInvestor",
    supporter: "socialInvestor",
    knowledge: "knowledgeMonetizer",
    democrat: "socialInvestor",
    influencer: "starInvestor",
    confident: "starInvestor",
    generous: "socialInvestor",
    selective: "minimalistWealth",
    explorer: "adventureWealth",
    truster: "socialInvestor",
    philosopher: "knowledgeMonetizer",
    thinker: "knowledgeMonetizer",
    respecter: "steadyGrower",
    educator: "knowledgeMonetizer",
    investor: "starInvestor",
    visionary: "starInvestor",
    perfectionist: "minimalistWealth",
    optimistic: "starInvestor",
    determined: "adventureWealth",
    adaptive: "opportunitySeeker",

    // 科幻故事人格映射
    scientist: "knowledgeMonetizer",
    analyst: "knowledgeMonetizer",
    entrepreneur: "starInvestor",
    trader: "starInvestor",
    cautious: "digitalHoarder",
    protector: "steadyGrower",
    networker: "socialInvestor",
    diplomat: "socialInvestor",
    economist: "knowledgeMonetizer",
    balanced: "steadyGrower",
    focused: "minimalistWealth",
    explorer: "adventureWealth",
    visionary: "starInvestor",
    sustainable: "steadyGrower",
    investigator: "knowledgeMonetizer",
    curious: "knowledgeMonetizer",
    ethical: "steadyGrower",
    just: "steadyGrower",
    lawful: "steadyGrower",
    learner: "knowledgeMonetizer",
    negotiator: "socialInvestor",
    clever: "knowledgeMonetizer",
    wealthy: "starInvestor",
    reformer: "creativeWealth",
    educator: "knowledgeMonetizer",
    sharer: "socialInvestor",
    opportunist: "opportunitySeeker",
    generous: "socialInvestor",
    confront: "adventureWealth",
    alliance: "socialInvestor",
    regulator: "steadyGrower",
    strategist: "starInvestor",
    stimulator: "creativeWealth",
    healer: "socialInvestor",
    developer: "creativeWealth",
    systematic: "minimalistWealth",
    planner: "minimalistWealth",
    independent: "opportunitySeeker",
    adventurer: "adventureWealth",
    tolerant: "socialInvestor",
    realist: "opportunitySeeker",
    creator: "creativeWealth",
    connector: "socialInvestor",
    balancer: "steadyGrower",
    philosopher: "knowledgeMonetizer",
    thinker: "knowledgeMonetizer",
    influencer: "starInvestor",
    idealist: "creativeWealth",
    merchant: "starInvestor",
    investor: "starInvestor",
    warning: "digitalHoarder",
    patient: "steadyGrower",
    riskTaker: "adventureWealth",
    practical: "opportunitySeeker"
};

// 版本配置
const versionConfig = {
    quick: {
        name: "闪电探测",
        questionCount: 10,
        description: "10题快速定位",
        emoji: "⚡"
    },
    standard: {
        name: "精准扫描", 
        questionCount: 20,
        description: "20题全面分析",
        emoji: "🎯"
    },
    deep: {
        name: "深度挖掘",
        questionCount: 35, 
        description: "35题终极探索",
        emoji: "🔍"
    }
};

// 完整的12个财富人格
const resultTypes = {
    // 1. 数字囤积者
    digitalHoarder: {
        name: "数字守财奴",
        styles: {
            ancient: "💰 藏宝阁主",
            scifi: "🌌 数据黑洞", 
            modern: "📱 余额控",
            fruit: "🌰 坚果富翁",
            animal: "🐿️ 数字松鼠"
        },
        emoji: "💾💰🐿️",
        richPotential: 78,
        
        // 基础描述
        descriptions: {
            ancient: "金银入库，密不示人。你的宝库比皇陵还要隐秘，每个铜板都有专属的藏宝图！",
            scifi: "你的数字钱包是宇宙级黑洞，连光都无法逃逸！每个字节都在加密空间站里冬眠～",
            modern: "看到余额数字增长，比收到情书还心跳加速！你的安全感来源于小数点后面的零～",
            fruit: "像松鼠囤积坚果般，你的钱都在最安全的数字树洞里，等待复利的春天！",
            animal: "你的银行账户是豪华仓鼠别墅，每枚硬币都有专属小房间和24小时保安！"
        },
        
        // 深度分析
        deepAnalysis: {
            ancient: "【藏宝阁主深度解析】\n你秉承'财不露白'的古训，深谙藏富之道。但记住，真正的财富大师懂得在安全与收益间找到平衡。建议适当开放部分资金参与稳健投资，让沉睡的宝藏也能生出小宝藏。",
            scifi: "【数据黑洞终极报告】\n你的财务防御系统堪比星际堡垒，但过度防御可能错过宇宙级的投资机会。建议设立'探险基金'，用小部分资产探索未知领域。",
            modern: "【余额控专业分析】\n数字安全感是你的驱动力，但现金贬值是隐形威胁。建议学习通货膨胀知识，让储蓄真正保值增值。",
            fruit: "【坚果富翁成长指南】\n像松鼠为冬天储备，你的谨慎值得称赞。但春天来临时，也要记得播种。建议尝试定投基金，让坚果生根发芽。",
            animal: "【数字松鼠生态观察】\n你的存储本能强大，但自然界中松鼠也会忘记藏食地点。建议建立更系统的财务档案，让每颗'松果'都有迹可循。"
        },
        
        // 风格专属建议
        styleSpecificTips: {
            ancient: "💎 古风建议：学习范蠡'三聚三散'的智慧，懂得在适当时候让财富流动起来。",
            scifi: "🛸 科幻建议：建立'多维资产配置'，在不同风险维度的投资中分散布局。",
            modern: "📊 现代建议：设置'冒险预算'，每月拿出固定金额尝试新投资。",
            fruit: "🌰 果蔬建议：像嫁接果树一样，尝试将保守与进取的投资策略结合。",
            animal: "🐿️ 动物建议：学习松鼠的四季策略，不同经济周期采用不同存储方式。"
        },
        
        strengths: ["极强的储蓄能力", "风险意识强", "财务规划清晰"],
        weaknesses: ["可能错过投资机会", "过度保守", "生活品质可能受影响"],
        
        // 成长路径
        growthPath: [
            {
                stage: "萌芽期",
                goal: "建立安全垫",
                actions: ["建立应急基金", "学习基础理财", "记录收支"]
            },
            {
                stage: "成长期", 
                goal: "适度冒险",
                actions: ["尝试低风险投资", "学习资产配置", "设立投资预算"]
            },
            {
                stage: "成熟期",
                goal: "平衡发展",
                actions: ["优化投资组合", "关注通货膨胀", "提升生活品质"]
            }
        ],
        
        tips: "偶尔让数字流动一下，静止的钱会发霉，流动的财富才生钱！"
    },

    // 2. 星际投资客  
    starInvestor: {
        name: "星际投资冒险家",
        styles: {
            ancient: "🌟 观星财神",
            scifi: "🛸 宇宙操盘手", 
            modern: "📈 趋势预言家",
            fruit: "🍇 葡萄先知",
            animal: "🦅 远见老鹰"
        },
        emoji: "🚀🌌📈",
        richPotential: 85,
        
        descriptions: {
            ancient: "夜观星象，日察商机。你能从星轨中读出财富的轨迹，从云气中看见商机的征兆！",
            scifi: "你的投资组合跨越多个维度，能在平行宇宙间套利！K线图在你眼中是时间的地图～",
            modern: "别人看到风险，你看到星辰大海！你的手机屏保是纳斯达克星云，心跳随宇宙膨胀～",
            fruit: "如葡萄般需要时间酝酿，你知道最好的投资像美酒，越陈越香！",
            animal: "像老鹰翱翔云端，你能在众人恐慌时，看到地平线外的财富曙光！"
        },
        
        deepAnalysis: {
            ancient: "【观星财神天命解析】\n你具备洞察先机的天赋，但天象也有阴晴圆缺。建议在追逐大势时，也要关注脚下实实在在的收益。设立止损线就像设置安全结界，保护你不被意外所伤。",
            scifi: "【宇宙操盘手维度报告】\n你的思维能穿越时空维度，但记住即使是超光速旅行也要遵守物理法则。建议建立风险控制系统，确保在探索未知时不会迷失方向。",
            modern: "【趋势预言家市场洞察】\n你的前瞻性令人钦佩，但市场情绪就像天气一样多变。建议结合技术分析与基本面，让预言更加精准。",
            fruit: "【葡萄先知成熟指南】\n像等待葡萄成熟，你的耐心是最大优势。但也要注意，不是所有葡萄都能酿成美酒。建议分散投资，避免把所有希望放在一个品种上。",
            animal: "【远见老鹰生存智慧】\n鹰眼的锐利让你看到远方，但捕食时也要关注近处的风险。建议制定详细的投资计划，让远见落地为实际收益。"
        },
        
        styleSpecificTips: {
            ancient: "🔭 古风建议：学习姜子牙'愿者上钩'的耐心，等待最佳投资时机。",
            scifi: "🌠 科幻建议：建立'时间胶囊投资法'，为不同时间维度的目标配置资产。",
            modern: "📈 现代建议：用'望远镜与显微镜'结合的方式分析投资机会。",
            fruit: "🍷 果蔬建议：像品酒师一样，培养对优质投资标的的敏锐嗅觉。",
            animal: "🦅 动物建议：学习鹰类的捕食策略，耐心观察，迅猛出击。"
        },
        
        strengths: ["长远眼光", "敢于冒险", "学习能力强"],
        weaknesses: ["可能过于理想化", "风险较高", "需要耐心等待"],
        
        growthPath: [
            {
                stage: "探索期",
                goal: "建立知识体系", 
                actions: ["学习投资理论", "关注宏观经济", "建立观察清单"]
            },
            {
                stage: "实践期",
                goal: "验证投资理念",
                actions: ["小规模试投", "记录投资日志", "分析成功失败案例"]
            },
            {
                stage: "成熟期",
                goal: "优化投资系统",
                actions: ["建立投资框架", "完善风控体系", "传授投资经验"]
            }
        ],
        
        tips: "在追逐星辰时，别忘了脚下的土地，稳健才是穿越时空的飞船！"
    },

    // 3. 情绪消费家
    emotionSpender: {
        name: "情绪消费达人", 
        styles: {
            ancient: "🎭 戏精散财",
            scifi: "🧠 多巴胺猎人", 
            modern: "😊 快乐买家",
            fruit: "🍓 草莓心情",
            animal: "🐬 嬉戏海豚"
        },
        emoji: "🎭🛍️😄",
        richPotential: 45,
        
        descriptions: {
            ancient: "今朝有酒今朝醉，千金散尽为欢颜！你的银子不是花了，是变成了快乐的回忆～",
            scifi: "你的购物车连接着快乐中枢，每笔消费都在释放幸福的多巴胺烟花！",
            modern: "理性？那是什么？你的消费哲学是：喜欢就买，不行就分，重启试试！",
            fruit: "如草莓般鲜美易逝，你相信快乐要及时品尝，过期不候！",
            animal: "像海豚般自由嬉戏，你用金钱绘制生活的彩虹，每个泡泡都是快乐的瞬间！"
        },
        
        deepAnalysis: {
            ancient: "【戏精散财深度解析】\n你深谙'人生得意须尽欢'的哲理，用金钱换取快乐体验。但记住，真正的快乐来自于平衡。建议设立'快乐基金'，既享受当下又为未来储蓄。",
            scifi: "【多巴胺猎人终极报告】\n你的快乐获取系统发达，但过度刺激可能导致阈值升高。建议寻找免费或低成本的快乐来源，保持对生活的敏感度。",
            modern: "【快乐买家专业分析】\n你的消费带来即时满足，但长期财务安全也很重要。建议建立'理性消费清单'，区分需要和想要。",
            fruit: "【草莓心情成长指南】\n如草莓般追求新鲜感是你的天性，但也要学会欣赏持久的价值。建议培养储蓄习惯，让快乐更长久。",
            animal: "【嬉戏海豚生态观察】\n海豚的玩乐天性值得学习，但自然界中海豚也会为生存储备。建议在享受生活的同时，建立财务安全网。"
        },
        
        styleSpecificTips: {
            ancient: "💎 古风建议：学习李白'千金散尽还复来'的豪迈，但也要有杜甫'安得广厦千万间'的责任。",
            scifi: "🛸 科幻建议：建立'情绪消费预算'，用科技手段控制冲动购物。",
            modern: "📊 现代建议：实践'24小时冷静期'规则，延迟满足避免冲动消费。",
            fruit: "🍓 果蔬建议：像草莓一样，既享受甜美当下，也为繁殖下一代储备营养。",
            animal: "🐬 动物建议：学习海豚的智慧，在嬉戏中不忘生存技能的磨练。"
        },
        
        strengths: ["享受生活", "情绪丰富", "创造快乐"],
        weaknesses: ["冲动消费", "储蓄意识弱", "可能财务紧张"],
        
        growthPath: [
            {
                stage: "萌芽期",
                goal: "建立消费意识",
                actions: ["记录消费流水", "区分需要和想要", "设立储蓄目标"]
            },
            {
                stage: "成长期", 
                goal: "平衡消费储蓄",
                actions: ["制定消费预算", "建立应急基金", "寻找免费娱乐"]
            },
            {
                stage: "成熟期",
                goal: "智慧消费",
                actions: ["优化消费结构", "投资提升幸福感", "传授平衡智慧"]
            }
        ],
        
        tips: "快乐无价，但记得为明天的笑容也存点'快乐储备金'哦！"
    },

    // 4. 玄学理财师
    mysticInvestor: {
        name: "玄学理财大师",
        styles: {
            ancient: "🔮 占星财阀",
            scifi: "⚡ 量子招财", 
            modern: "✨ 运气投资者",
            fruit: "🔮 水晶葡萄",
            animal: "🔮 灵性黑猫"
        },
        emoji: "🔮⭐💰",
        richPotential: 62,
        
        descriptions: {
            ancient: "掐指一算，财源滚滚！你的罗盘指向财富方位，卦象揭示投资良机～",
            scifi: "你能在量子层面吸引财富，用意识波动影响市场！每个决定都是多维度的～",
            modern: "星座运势是你的投资指南，幸运数字是你的交易密码！直觉比数据分析更准～",
            fruit: "如水晶般通透神秘，你能看到普通人看不见的财富能量流动！",
            animal: "像黑猫般神秘难测，你的投资策略总是出人意料，却又恰到好处！"
        },
        
        deepAnalysis: {
            ancient: "【占星财阀深度解析】\n你继承了古老智慧，相信天地人三才相应。但记住，天时不如地利，地利不如人和。建议在相信运势的同时，也要扎实学习理财知识。",
            scifi: "【量子招财终极报告】\n你的直觉可能基于潜意识的信息处理，但科学验证很重要。建议建立'直觉验证系统'，记录并分析直觉决策的准确率。",
            modern: "【运气投资者专业分析】\n你的乐观心态吸引机会，但运气需要实力支撑。建议在相信幸运的同时，建立扎实的投资基本功。",
            fruit: "【水晶葡萄成长指南】\n如水晶般敏锐是你的天赋，但清晰的逻辑同样重要。建议在直觉和理性间找到平衡点。",
            animal: "【灵性黑猫生态观察】\n黑猫的神秘气质令人着迷，但脚踏实地才能走得更远。建议在相信直觉的同时，不忘基本面分析。"
        },
        
        styleSpecificTips: {
            ancient: "💎 古风建议：学习诸葛亮'借东风'的智慧，既信天时更重人事。",
            scifi: "🛸 科幻建议：建立'量子决策模型'，将直觉与数据分析结合。",
            modern: "📊 现代建议：用'幸运日记'记录直觉决策，培养更精准的第六感。",
            fruit: "🔮 果蔬建议：像水晶一样，既保持灵性通透，也要有坚实的支撑基础。",
            animal: "🔮 动物建议：学习黑猫的独立神秘，但也要有家猫的务实稳重。"
        },
        
        strengths: ["直觉敏锐", "创意无限", "心态乐观"],
        weaknesses: ["可能忽视数据", "风险难控", "依赖运气"],
        
        growthPath: [
            {
                stage: "萌芽期",
                goal: "培养理财直觉",
                actions: ["记录投资灵感", "学习基础分析", "建立决策日志"]
            },
            {
                stage: "成长期", 
                goal: "平衡直觉理性",
                actions: ["验证直觉准确率", "学习技术分析", "建立风控系统"]
            },
            {
                stage: "成熟期",
                goal: "融合智慧决策",
                actions: ["优化决策模型", "传授直觉培养", "建立个人投资哲学"]
            }
        ],
        
        tips: "玄学辅助，理性为主！记得在星座指引外，也要看看财务报表～"
    },

    // 5. 时间复利魔法师
    timeMagician: {
        name: "时间复利魔法师",
        styles: {
            ancient: "⏳ 时光财神",
            scifi: "🕰️ 时间编织者", 
            modern: "📊 长期主义者",
            fruit: "🍯 慢酿蜜糖",
            animal: "🐢 时空灵龟"
        },
        emoji: "⏳📈🔮",
        richPotential: 88,
        
        descriptions: {
            ancient: "不争一时之利，但求万世之基。你的财富如陈年美酒，时光是最好的调味师！",
            scifi: "你在时间河流中播种金钱，用耐心浇灌，收获的是跨越维度的财富果实！",
            modern: "别人追涨杀跌，你微笑定投。十年后同学会，你是那个安静的赢家～",
            fruit: "如蜂蜜般需要时间酝酿，你知道真正的甜美来自于耐心的等待！",
            animal: "像灵龟般穿越时空，你深谙'快就是慢，慢就是快'的财富真谛！"
        },
        
        deepAnalysis: {
            ancient: "【时光财神深度解析】\n你领悟了'大器晚成'的智慧，用时间酿造财富。但要注意，过度保守可能错失时代机遇。建议在长期持有中适度调整，保持投资组合的时代适应性。",
            scifi: "【时间编织者终极报告】\n你在时间维度上的布局令人赞叹，但时间价值需要与机会成本平衡。建议建立动态调整机制，让时间真正成为朋友。",
            modern: "【长期主义者专业分析】\n你的耐心是稀缺品质，但长期不等于永远持有。建议建立定期评估机制，确保投资标的始终符合长期逻辑。",
            fruit: "【慢酿蜜糖成长指南】\n如蜂蜜般需要时间沉淀，但也要注意蜜源的质量。建议在长期投资中持续学习，提升选品能力。",
            animal: "【时空灵龟生态观察】\n灵龟的长寿源于稳健，但自然选择也要求适应变化。建议在坚持长期主义的同时，保持对市场变化的敏感。"
        },
        
        styleSpecificTips: {
            ancient: "💎 古风建议：学习愚公移山的精神，但也要懂得借助现代工具。",
            scifi: "🛸 科幻建议：建立'时间复利加速器'，优化长期投资效率。",
            modern: "📊 现代建议：用'望远镜投资法'，着眼未来十年趋势。",
            fruit: "🍯 果蔬建议：像蜜蜂酿蜜一样，既要有耐心等待，也要勤奋寻找优质花源。",
            animal: "🐢 动物建议：学习龟类的长寿智慧，稳健中不忘适时调整方向。"
        },
        
        strengths: ["极强耐心", "长期规划", "稳健增长"],
        weaknesses: ["回报周期长", "可能错过短期机会", "需要坚持"],
        
        growthPath: [
            {
                stage: "萌芽期",
                goal: "建立长期视角",
                actions: ["学习复利原理", "制定十年规划", "培养耐心习惯"]
            },
            {
                stage: "成长期", 
                goal: "实践长期投资",
                actions: ["开始定投计划", "建立投资组合", "学习资产配置"]
            },
            {
                stage: "成熟期",
                goal: "优化长期系统",
                actions: ["完善传承规划", "建立动态调整", "传授长期智慧"]
            }
        ],
        
        tips: "时间是你最忠诚的伙伴，但也要记得为当下留些生活的甜蜜！"
    },

    // 6. 社交投资达人
    socialInvestor: {
        name: "社交投资网络家",
        styles: {
            ancient: "🤝 义结金兰",
            scifi: "🌐 人脉网络节点", 
            modern: "👥 圈子投资者",
            fruit: "🍍 凤梨团结",
            animal: "🐝 采花蜜蜂"
        },
        emoji: "🤝📊👥",
        richPotential: 70,
        descriptions: {
            ancient: "四海之内皆兄弟，财路通达靠人脉。你的朋友就是你的财富地图！",
            scifi: "你的人脉网络覆盖整个社交星系，每个连接点都可能引爆财富超新星！",
            modern: "微信群是你的投资俱乐部，朋友圈是你的项目来源！信息就是你的财富密码～",
            fruit: "如凤梨般团结紧密，你知道独木难成林，众志可成城！",
            animal: "像蜜蜂般勤劳社交，你在花丛间飞舞，采集最甜的投资花蜜！"
        },
        deepAnalysis: {
            ancient: "【义结金兰深度解析】\n你深谙'多个朋友多条路'的古训，人脉网络是你的核心竞争力。但记住，真正的友谊需要真诚维系，而非纯粹的利益交换。建议在维护关系的同时，也要培养独立的判断能力。",
            scifi: "【人脉网络节点终极报告】\n你的社交雷达覆盖范围极广，但要注意信息过载的风险。建议建立信息过滤系统，只关注真正有价值的人脉和机会。",
            modern: "【圈子投资者专业分析】\n你的社交能力令人羡慕，但圈子文化也有其局限性。建议保持独立思考，不盲目跟从群体决策。",
            fruit: "【凤梨团结成长指南】\n团结协作是你的优势，但也要注意保持个人特色。建议在集体智慧和个人判断间找到平衡点。",
            animal: "【采花蜜蜂生态观察】\n你像蜜蜂般勤奋建立人脉，但也要注意'花粉'的质量。建议精选社交圈，把时间留给真正重要的人。"
        },
        styleSpecificTips: {
            ancient: "💎 古风建议：学习管鲍之交的真诚，建立经得起考验的友谊。",
            scifi: "🛸 科幻建议：建立'人脉能量场'理论，优化社交网络结构。",
            modern: "📊 现代建议：用CRM思维管理人脉，建立长效联系机制。",
            fruit: "🍍 果蔬建议：像凤梨一样，外表独立内在团结，保持个性又善于合作。",
            animal: "🐝 动物建议：学习蜜蜂的精准采蜜，在合适的圈子里寻找机会。"
        },
        strengths: ["人脉资源丰富", "信息灵通", "合作能力强"],
        weaknesses: ["可能过度依赖他人", "容易信息过载", "决策可能从众"],
        growthPath: [
            {
                stage: "萌芽期",
                goal: "建立基础人脉",
                actions: ["参加行业活动", "建立联系人档案", "学习社交礼仪"]
            },
            {
                stage: "成长期", 
                goal: "深化关键关系",
                actions: ["维护核心人脉", "提供价值交换", "建立信任基础"]
            },
            {
                stage: "成熟期",
                goal: "构建生态网络",
                actions: ["打造个人品牌", "建立合作生态", "成为资源节点"]
            }
        ],
        tips: "人脉重要，但独立思考更重要！记得在集体智慧中保持清醒判断～"
    },

    // 7. 极简理财家
    minimalistWealth: {
        name: "极简理财大师",
        styles: {
            ancient: "🎐 清修居士",
            scifi: "⚡ 效率最大化者",
            modern: "📱 数字极简派", 
            fruit: "🍎 纯净苹果",
            animal: "🐜 精简蚂蚁"
        },
        emoji: "🎐📊⚡",
        richPotential: 75,
        descriptions: {
            ancient: "大道至简，大财至纯。你去繁就简，在 minimalist 中找到财富真谛！",
            scifi: "你的财务系统像量子计算机般高效，用最少的资源创造最大的价值！",
            modern: "三个账户管理全部财富，五款APP搞定所有理财！简单就是你的超能力～",
            fruit: "如苹果般纯粹简洁，你知道真正的富有不是拥有更多，而是需要更少！",
            animal: "像蚂蚁般高效有序，你用最简单的系统构建最稳固的财富帝国！"
        },
        deepAnalysis: {
            ancient: "【清修居士深度解析】\n你领悟了'少即是多'的古老智慧，财务极简化让你心无旁骛。但要注意，过度简化可能错过多元化机会。建议在简约中保留必要的灵活性。",
            scifi: "【效率最大化者终极报告】\n你的系统优化能力超群，但效率不等于效果。建议在追求简洁的同时，也要关注长期收益的最大化。",
            modern: "【数字极简派专业分析】\n你的数字化管理令人钦佩，但技术依赖也有风险。建议建立离线备份和应急方案。",
            fruit: "【纯净苹果成长指南】\n如苹果般纯粹是你的追求，但自然界的多样性也值得借鉴。建议在核心简化基础上适度多元化。",
            animal: "【精简蚂蚁生态观察】\n蚂蚁的集体智慧证明简单规则可以创造复杂系统。建议在个人财务中应用类似的简单有效原则。"
        },
        styleSpecificTips: {
            ancient: "💎 古风建议：学习老子'无为而治'的智慧，让财富自然生长。",
            scifi: "🛸 科幻建议：建立'最小可行财务系统'，用20%精力获得80%效果。",
            modern: "📊 现代建议：实践'断舍离'理财法，定期清理不必要的财务负担。",
            fruit: "🍎 果蔬建议：像苹果树一样，主干清晰分支有序，结构简单但果实丰硕。",
            animal: "🐜 动物建议：学习蚂蚁的分工协作，建立自动化的财务流程。"
        },
        strengths: ["高效管理", "目标明确", "减少浪费"],
        weaknesses: ["可能过于简化", "错过复杂机会", "灵活性不足"],
        growthPath: [
            {
                stage: "萌芽期",
                goal: "建立基础系统",
                actions: ["简化银行账户", "统一理财工具", "建立自动转账"]
            },
            {
                stage: "成长期", 
                goal: "优化流程效率",
                actions: ["制定投资清单", "建立决策模板", "自动化定期投资"]
            },
            {
                stage: "成熟期",
                goal: "构建完整体系",
                actions: ["完善资产配置", "建立风险控制", "传承理财智慧"]
            }
        ],
        tips: "极简不是匮乏，而是精准！记得在简化中不要错过必要的多样性～"
    },

    // 8. 冒险财富家
    adventureWealth: {
        name: "冒险财富探险家",
        styles: {
            ancient: "⚔️ 冒险寻宝者",
            scifi: "🌪️ 风险冲浪者", 
            modern: "🎲 高风险玩家",
            fruit: "🌶️ 刺激辣椒",
            animal: "🐆 迅捷猎豹"
        },
        emoji: "⚔️🎲🌪️",
        richPotential: 55,
        descriptions: {
            ancient: "不入虎穴，焉得虎子！你敢为天下先，在风险中寻找财富的明珠！",
            scifi: "你在风险曲线上冲浪，把波动率当作过山车来享受！心跳就是你的指南针～",
            modern: "All in是你的口头禅，杠杆是你的加速器！人生就是一场华丽的冒险～",
            fruit: "如辣椒般刺激火热，你享受那种在风险边缘舞蹈的灼热感！",
            animal: "像猎豹般迅猛出击，你在机会出现的瞬间就全力冲刺！"
        },
        deepAnalysis: {
            ancient: "【冒险寻宝者深度解析】\n你具备探险家的勇气，在未知领域寻找财富宝藏。但记住，真正的冒险家懂得计算风险。建议在冒险前做好充分的准备和逃生计划。",
            scifi: "【风险冲浪者终极报告】\n你在风险浪潮中如鱼得水，但再好的冲浪手也会遇到巨浪。建议建立严格的风险控制系统，确保不会一次失误就出局。",
            modern: "【高风险玩家专业分析】\n你的胆识令人钦佩，但金融市场不是赌场。建议将高风险投资控制在可承受范围内，确保生活品质不受影响。",
            fruit: "【刺激辣椒成长指南】\n如辣椒般追求刺激是你的天性，但也要学会欣赏平淡的美味。建议在投资组合中配置一定比例的稳健资产。",
            animal: "【迅捷猎豹生态观察】\n猎豹的爆发力令人惊叹，但持久力不足。建议在快速出击的同时，也要培养长期持有的耐心。"
        },
        styleSpecificTips: {
            ancient: "💎 古风建议：学习郑和下西洋的冒险精神，但要做好充分准备。",
            scifi: "🛸 科幻建议：建立'多维风险对冲'策略，在不同维度分散风险。",
            modern: "📊 现代建议：用'风险预算'管理法，为冒险设置明确的界限。",
            fruit: "🌶️ 果蔬建议：像辣椒一样，少量提味过量伤身，控制风险暴露程度。",
            animal: "🐆 动物建议：学习猎豹的捕食策略，快速出击但懂得适时休息。"
        },
        strengths: ["敢于尝试", "快速决策", "抗压能力强"],
        weaknesses: ["风险过高", "可能冲动", "稳定性差"],
        growthPath: [
            {
                stage: "萌芽期",
                goal: "学习风险管理",
                actions: ["了解各种投资风险", "学习止损策略", "建立风险意识"]
            },
            {
                stage: "成长期", 
                goal: "实践风险控制",
                actions: ["设置投资上限", "建立止损规则", "分散高风险投资"]
            },
            {
                stage: "成熟期",
                goal: "平衡风险收益",
                actions: ["优化风险调整收益", "建立预警系统", "传授风险管理经验"]
            }
        ],
        tips: "冒险精神可贵，但安全绳更重要！记得为最坏情况准备应急预案～"
    },

    // 9. 知识变现者
    knowledgeMonetizer: {
        name: "知识变现大师",
        styles: {
            ancient: "📚 博学鸿儒",
            scifi: "🧠 智慧资本化", 
            modern: "🎓 知识投资者",
            fruit: "📖 智慧书卷",
            animal: "🦉 智慧猫头鹰"
        },
        emoji: "📚💡💰",
        richPotential: 82,
        descriptions: {
            ancient: "书中自有黄金屋，你深谙知识就是力量的古训，用智慧开启财富之门！",
            scifi: "你的大脑是24小时运转的知识变现机器，每个脑细胞都在创造价值！",
            modern: "课程付费比衣服消费还大方，书架比奢侈品柜还值钱！知识是你的硬通货～",
            fruit: "如书卷般厚重丰富，你知道真正的财富来自于头脑中的智慧宝库！",
            animal: "像猫头鹰般睿智深邃，你在知识的森林中捕捉最珍贵的财富灵感！"
        },
        deepAnalysis: {
            ancient: "【博学鸿儒深度解析】\n你继承了'学而优则仕'的传统，用知识创造价值。但要注意，理论知识需要与实践结合。建议在深入学习的同时，也要关注市场需求的變化。",
            scifi: "【智慧资本化终极报告】\n你的知识转化效率惊人，但要注意知识过时的问题。建议建立持续学习机制，保持知识的时效性和竞争力。",
            modern: "【知识投资者专业分析】\n你在自我投资上毫不吝啬，但投资回报需要时间验证。建议建立知识应用的实践路径，让学习产生实际价值。",
            fruit: "【智慧书卷成长指南】\n如书卷般积累知识是你的习惯，但也要学会知识的筛选和提炼。建议建立个人知识管理体系，提高学习效率。",
            animal: "【智慧猫头鹰生态观察】\n猫头鹰的智慧在于静观其变，厚积薄发。建议在积累知识的同时，也要耐心等待合适的变现时机。"
        },
        styleSpecificTips: {
            ancient: "💎 古风建议：学习孔子'因材施教'的智慧，将知识转化为实用技能。",
            scifi: "🛸 科幻建议：建立'知识神经网络'，实现跨领域知识融合创新。",
            modern: "📊 现代建议：用'知识IPO'模式，将专业知识转化为商业价值。",
            fruit: "📖 果蔬建议：像书卷一样，既有深度又有广度，建立T型知识结构。",
            animal: "🦉 动物建议：学习猫头鹰的观察力，在安静思考中发现商业机会。"
        },
        strengths: ["持续学习", "智慧投资", "长期价值"],
        weaknesses: ["可能理论过多", "实践不足", "回报周期长"],
        growthPath: [
            {
                stage: "萌芽期",
                goal: "建立知识体系",
                actions: ["确定学习方向", "建立书单课程", "制定学习计划"]
            },
            {
                stage: "成长期", 
                goal: "知识应用实践",
                actions: ["寻找实践机会", "建立作品集", "获得专业认证"]
            },
            {
                stage: "成熟期",
                goal: "知识价值变现",
                actions: ["开发知识产品", "建立个人品牌", "传授专业知识"]
            }
        ],
        tips: "知识要转化为价值，学习要关联实践！否则只是昂贵的娱乐～"
    },

    // 10. 创意财富家  
    creativeWealth: {
        name: "创意财富梦想家",
        styles: {
            ancient: "🎨 创意匠人",
            scifi: "💫 创新思维者", 
            modern: "🚀 创业梦想家",
            fruit: "🎨 调色板",
            animal: "🦚 开屏孔雀"
        },
        emoji: "🎨💫🚀",
        richPotential: 65,
        descriptions: {
            ancient: "匠心独运，点石成金。你能在寻常处见不寻常，化创意为财富！",
            scifi: "你的创意脑波能扭曲现实，让想法直接变现！每个灵感都是财富种子～",
            modern: "副业收入超过主业，兴趣直接变现！你的创造力就是印钞机～",
            fruit: "如调色板般丰富多彩，你用创意的色彩绘制独特的财富画卷！",
            animal: "像孔雀般绚烂夺目，你用独特的才华吸引财富的目光！"
        },
        deepAnalysis: {
            ancient: "【创意匠人深度解析】\n你继承了传统匠人的创新精神，在技艺中融入独特创意。但要注意，创意需要市场检验。建议在发挥创意的同时，也要关注用户需求和商业可行性。",
            scifi: "【创新思维者终极报告】\n你的思维突破常规，能看到别人看不到的机会。但创新也意味着不确定性。建议在追求创新的同时，建立快速试错和迭代的机制。",
            modern: "【创业梦想家专业分析】\n你的创业热情感染人心，但创业之路充满挑战。建议在追逐梦想的同时，也要做好充分的商业规划和风险准备。",
            fruit: "【调色板成长指南】\n如调色板般多彩是你的优势，但也要注意色彩的协调性。建议在多元创意中找到核心方向，建立个人特色。",
            animal: "【开屏孔雀生态观察】\n孔雀的开屏令人惊艳，但美丽需要实力支撑。建议在展示创意的同时，也要扎实打磨产品和服务的质量。"
        },
        styleSpecificTips: {
            ancient: "💎 古风建议：学习鲁班匠心精神，将创意与实用完美结合。",
            scifi: "🛸 科幻建议：建立'创意孵化器'模式，系统化培育创新想法。",
            modern: "📊 现代建议：用'精益创业'方法，快速验证创意商业模式。",
            fruit: "🎨 果蔬建议：像调色板一样，主次分明层次清晰，让创意有序呈现。",
            animal: "🦚 动物建议：学习孔雀的自信展示，但也要有扎实的实力支撑。"
        },
        strengths: ["创新能力强", "多元收入", "适应变化"],
        weaknesses: ["可能不切实际", "风险较高", "需要持续灵感"],
        growthPath: [
            {
                stage: "萌芽期",
                goal: "培养创意习惯",
                actions: ["建立灵感库", "学习创新方法", "尝试小项目"]
            },
            {
                stage: "成长期", 
                goal: "创意商业化",
                actions: ["市场测试", "建立商业模式", "保护知识产权"]
            },
            {
                stage: "成熟期",
                goal: "构建创意生态",
                actions: ["打造品牌", "建立团队", "拓展创意边界"]
            }
        ],
        tips: "创意无限，但落地为王！记得在天马行空时也要关注商业逻辑～"
    },

    // 11. 稳健增长者
    steadyGrower: {
        name: "稳健增长大师",
        styles: {
            ancient: "🌳 百年树人",
            scifi: "🔄 复利引擎",
            modern: "📊 稳健投资者",
            fruit: "🌲 成长红杉",
            animal: "🐘 稳重大象"
        },
        emoji: "🌳📈🔒",
        richPotential: 80,
        descriptions: {
            ancient: "十年树木，百年树人。你相信时间的力量，用耐心培育财富大树！",
            scifi: "你的财富像精密机器般稳定增长，每个齿轮都完美配合！",
            modern: "年化10%比一夜暴富更让你安心，稳健是你的人生信条～",
            fruit: "如红杉般根基深厚，你的财富在稳定中不断向上生长！",
            animal: "像大象般步步为营，你用稳健的步伐走向财务自由！"
        },
        deepAnalysis: {
            ancient: "【百年树人深度解析】\n你深谙'欲速则不达'的道理，用耐心培育财富。但要注意，过度稳健可能错失时代机遇。建议在稳健基础上适度进取。",
            scifi: "【复利引擎终极报告】\n你的财富增长系统稳定可靠，但也要注意通货膨胀的侵蚀。建议建立抗通胀投资组合。",
            modern: "【稳健投资者专业分析】\n你的风险控制能力出色，但完全规避风险也是一种风险。建议在安全边际内适度承担风险。",
            fruit: "【成长红杉成长指南】\n如红杉般稳健成长，但也要注意环境变化。建议定期评估投资环境，适时调整策略。",
            animal: "【稳重大象生态观察】\n大象的步伐稳重，但也会根据环境调整速度。建议在稳健投资中保持灵活性。"
        },
        styleSpecificTips: {
            ancient: "💎 古风建议：学习曾国藩'结硬寨，打呆仗'的稳健策略。",
            scifi: "🛸 科幻建议：建立'稳健增长算法'，优化风险调整后收益。",
            modern: "📊 现代建议：用'核心-卫星'策略，在稳健基础上追求超额收益。",
            fruit: "🌲 果蔬建议：像红杉一样，既有深厚根基，也要向上争取阳光。",
            animal: "🐘 动物建议：学习大象的智慧，稳重中不失时机把握。"
        },
        strengths: ["风险控制强", "稳定增长", "心态平和"],
        weaknesses: ["可能过于保守", "增长较慢", "需要长期坚持"],
        growthPath: [
            {
                stage: "萌芽期",
                goal: "建立稳健基础",
                actions: ["学习风险管理", "建立应急基金", "制定财务计划"]
            },
            {
                stage: "成长期", 
                goal: "优化增长策略",
                actions: ["学习资产配置", "建立投资组合", "优化收益风险比"]
            },
            {
                stage: "成熟期",
                goal: "完善财富体系",
                actions: ["建立传承规划", "优化税务策略", "传授稳健智慧"]
            }
        ],
        tips: "稳健不是停滞，而是可持续的前进！记得在安全范围内适度冒险～"
    },

    // 12. 机会捕捉者
    opportunitySeeker: {
        name: "机会捕捉猎手",
        styles: {
            ancient: "🎯 时机大师",
            scifi: "⚡ 瞬时决策者",
            modern: "🔍 机会猎人",
            fruit: "🎯 靶心苹果",
            animal: "🐆 机会猎豹"
        },
        emoji: "🎯⚡🔍",
        richPotential: 68,
        descriptions: {
            ancient: "机不可失，时不再来。你总能准确把握时机，在关键时刻做出正确选择！",
            scifi: "你的机会雷达能捕捉微弱的信号，在别人犹豫时果断出手！",
            modern: "市场波动是你的朋友，危机中看到机遇是你的超能力～",
            fruit: "如靶心般精准，你总能找到最佳的投资时机和位置！",
            animal: "像猎豹般敏锐，你在机会出现的瞬间就能锁定目标！"
        },
        deepAnalysis: {
            ancient: "【时机大师深度解析】\n你具备把握时机的天赋，但时机稍纵即逝。建议建立系统化的机会识别机制，避免依赖单一直觉。",
            scifi: "【瞬时决策者终极报告】\n你的快速决策能力令人惊叹，但速度不等于准确度。建议在快速决策前建立检查清单。",
            modern: "【机会猎人专业分析】\n你的敏锐度是宝贵资产，但过度交易可能侵蚀收益。建议建立交易频率控制机制。",
            fruit: "【靶心苹果成长指南】\n如靶心般精准是你的追求，但也要注意机会成本。建议在专注的同时保持适度分散。",
            animal: "【机会猎豹生态观察】\n猎豹的爆发力令人羡慕，但持久力同样重要。建议在快速出击的同时培养长期持有耐心。"
        },
        styleSpecificTips: {
            ancient: "💎 古风建议：学习孙子'兵贵神速'的智慧，但也要'谋定而后动'。",
            scifi: "🛸 科幻建议：建立'机会预警系统'，提前识别潜在投资机会。",
            modern: "📊 现代建议：用'机会成本分析'法，量化每个决策的潜在收益。",
            fruit: "🎯 果蔬建议：像靶心苹果一样，既精准定位，也要考虑整体果园的健康。",
            animal: "🐆 动物建议：学习猎豹的选择性出击，只捕捉真正有价值的机会。"
        },
        strengths: ["敏锐洞察", "快速决策", "善于把握机会"],
        weaknesses: ["可能过度交易", "决策可能仓促", "需要持续关注"],
        growthPath: [
            {
                stage: "萌芽期",
                goal: "培养机会意识",
                actions: ["学习市场分析", "建立观察清单", "记录机会识别"]
            },
            {
                stage: "成长期", 
                goal: "优化决策系统",
                actions: ["建立决策框架", "学习风险评估", "控制交易频率"]
            },
            {
                stage: "成熟期",
                goal: "完善机会管理",
                actions: ["建立机会数据库", "优化资金配置", "传授时机把握"]
            }
        ],
        tips: "机会重要，但执行力更重要！记得在识别机会后要有果断的行动力～"
    }
    
    
};

// 题目选择函数（用于非故事模式，作为备用）
function selectQuestionsForVersion(version) {
    // 基础题目库（作为备用，如果故事模式有问题可以使用）
    const backupQuestions = [
        {
            question: "💰 意外获得5万元奖金，你的第一反应是？",
            options: [
                { text: "📈 研究投资组合，让钱生钱", scores: { starInvestor: 2 } },
                { text: "💾 立即存入定期，数字增长最安心", scores: { digitalHoarder: 2 } },
                { text: "🛍️ 买下心仪已久的限量版物品", scores: { emotionSpender: 2 } },
                { text: "📚 报名进阶理财课程，投资大脑", scores: { knowledgeMonetizer: 2 } }
            ]
        }
        // 可以添加更多基础题目...
    ];
    
    const questionCounts = {
        quick: 10,
        standard: 20,
        deep: 35
    };
    
    const targetCount = questionCounts[version] || 10;
    return backupQuestions.slice(0, Math.min(targetCount, backupQuestions.length));
}
