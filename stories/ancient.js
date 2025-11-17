// stories/ancient.js - 古风故事线（修正版，确保35题）
const ancientStory = {
    title: "江湖财缘录",
    introduction: "🎎 大明嘉靖年间，天下财富流转，江湖风云再起。你，一个身世成谜的少年，即将踏入这纷扰的江湖，书写属于自己的财富传奇...",
    
    getQuestions: function(version) {
        const questionCounts = {
            quick: 10,
            standard: 20, 
            deep: 35
        };
        
        const allChapters = [
            {
                chapter: "第一章：身世之谜",
                story: "🌅 清晨的竹林间，一位白发老者将你唤至身边：'孩子，你已成年，是时候知晓自己的身世了。十八年前，你的父母在江湖中创立了'天机商号'，却在一次神秘的海难中失踪。如今商号衰落，各方势力虎视眈眈...'",
                questions: [
                    {
                        question: "面对这突如其来的身世，你的第一反应是？",
                        options: [
                            { 
                                text: "💰 立即调查父母留下的商业遗产", 
                                scores: { merchant: 3, investigator: 1 },
                                response: "你深知商业帝国的基础在于资产，决定先从财务入手。"
                            },
                            { 
                                text: "⚔️ 追查父母失踪的真相", 
                                scores: { warrior: 3, justice: 1 },
                                response: "你认为真相重于财富，决心查明当年的海难之谜。"
                            },
                            { 
                                text: "🌾 低调行事，先观察各方势力", 
                                scores: { farmer: 3, observer: 1 },
                                response: "你选择谨慎行事，在暗处观察敌友。"
                            },
                            { 
                                text: "🎭 暗中联络父母旧部，重建势力", 
                                scores: { wanderer: 3, strategist: 1 },
                                response: "你相信人脉的力量，开始秘密联络旧部。"
                            }
                        ]
                    },
                    {
                        question: "老者递给你三件信物：商号令牌、神秘地图、武功秘籍，你会优先研究哪个？",
                        options: [
                            { 
                                text: "🏷️ 商号令牌 - 重振家族商业", 
                                scores: { merchant: 2, practical: 1 },
                                response: "你认为经济基础决定上层建筑。"
                            },
                            { 
                                text: "🗺️ 神秘地图 - 探寻未知宝藏", 
                                scores: { adventurer: 2, curious: 1 },
                                response: "你对未知的财富充满好奇。"
                            },
                            { 
                                text: "📖 武功秘籍 - 提升自保能力", 
                                scores: { warrior: 2, protector: 1 },
                                response: "你觉得在乱世中武力很重要。"
                            },
                            { 
                                text: "🔍 三件都仔细研究，寻找关联", 
                                scores: { analyst: 2, meticulous: 1 },
                                response: "你认为三者之间必有联系。"
                            }
                        ]
                    },
                    {
                        question: "你发现商号令牌上刻着'诚信为本'四字，这让你想到？",
                        options: [
                            { 
                                text: "🤝 商业信誉是立身之本", 
                                scores: { honest: 2, merchant: 1 },
                                response: "你深知诚信在商界的重要性。"
                            },
                            { 
                                text: "🛡️ 需要建立自己的信誉体系", 
                                scores: { strategist: 2, planner: 1 },
                                response: "你开始规划如何建立个人品牌。"
                            },
                            { 
                                text: "💎 这可能暗示着某种秘密", 
                                scores: { investigator: 2, curious: 1 },
                                response: "你觉得这四个字背后另有深意。"
                            },
                            { 
                                text: "🌱 从基础做起，脚踏实地", 
                                scores: { farmer: 2, practical: 1 },
                                response: "你决定一步一个脚印地前进。"
                            }
                        ]
                    },
                    {
                        question: "老者告诉你父母曾与四大势力都有往来，你的态度是？",
                        options: [
                            { 
                                text: "🤝 主动拜访四大势力", 
                                scores: { networker: 2, diplomat: 1 },
                                response: "你觉得应该主动建立关系。"
                            },
                            { 
                                text: "🕵️ 暗中调查四大势力的底细", 
                                scores: { investigator: 2, cautious: 1 },
                                response: "你认为需要先了解对手。"
                            },
                            { 
                                text: "💼 专注于重振自家商号", 
                                scores: { focused: 2, merchant: 1 },
                                response: "你觉得自身实力最重要。"
                            },
                            { 
                                text: "🎯 选择最有利的势力合作", 
                                scores: { strategist: 2, opportunist: 1 },
                                response: "你相信选择比努力更重要。"
                            }
                        ]
                    },
                    {
                        question: "在离开前，老者给你最后的忠告，你最在意的是？",
                        options: [
                            { 
                                text: "⚖️ '江湖险恶，人心难测'", 
                                scores: { cautious: 2, protector: 1 },
                                response: "你觉得安全最重要。"
                            },
                            { 
                                text: "💎 '财富如水，能载舟亦能覆舟'", 
                                scores: { balanced: 2, philosopher: 1 },
                                response: "你思考财富的真正意义。"
                            },
                            { 
                                text: "🤝 '多个朋友多条路'", 
                                scores: { networker: 2, alliance: 1 },
                                response: "你认为人际关系很关键。"
                            },
                            { 
                                text: "🚀 '机不可失，时不再来'", 
                                scores: { opportunist: 2, adventurer: 1 },
                                response: "你觉得要抓住机会。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第二章：初入江湖", 
                story: "🏮 你带着信物来到苏州城，发现'天机商号'已被四大势力觊觎：漕帮控制水路、盐商垄断官盐、镖局把持陆运、还有神秘的'暗影阁'在暗中操控。更令人震惊的是，你在商号密室发现了一封密信，暗示父母的海难并非意外...",
                questions: [
                    {
                        question: "面对复杂的局势，你的首要行动是？",
                        options: [
                            {
                                text: "📊 详细盘点商号资产和债务",
                                scores: { merchant: 2, planner: 1 },
                                response: "你深知'知己知彼'，先摸清自家底细。"
                            },
                            {
                                text: "🤝 拜访各方势力首领，试探态度",
                                scores: { networker: 2, diplomat: 1 },
                                response: "你相信人际关系是破局的关键。"
                            },
                            {
                                text: "🕵️ 暗中调查'暗影阁'的底细", 
                                scores: { investigator: 2, warrior: 1 },
                                response: "你认为这个神秘组织与父母失踪有关。"
                            },
                            {
                                text: "💼 寻找可靠的合作伙伴",
                                scores: { entrepreneur: 2, alliance: 1 },
                                response: "你明白独木难支，需要寻找盟友。"
                            }
                        ]
                    },
                    {
                        question: "在调查中，你发现商号有个忠心耿耿的老掌柜，但他似乎知道一些秘密却不愿透露，你会？",
                        options: [
                            {
                                text: "❤️ 用真诚打动他，建立信任",
                                scores: { generous: 2, honest: 1 },
                                response: "你相信真心能换来真心。"
                            },
                            {
                                text: "💎 用利益交换，许以重酬",
                                scores: { merchant: 2, practical: 1 },
                                response: "你认为利益是最可靠的关系纽带。"
                            },
                            {
                                text: "🎯 暗中调查他的背景和软肋",
                                scores: { strategist: 2, cautious: 1 },
                                response: "你习惯掌握主动权，不轻易相信他人。"
                            },
                            {
                                text: "🤔 暂时按兵不动，继续观察",
                                scores: { observer: 2, patient: 1 },
                                response: "你觉得时机未到，选择等待。"
                            }
                        ]
                    },
                    {
                        question: "四大势力中，哪一方最值得你优先接触？",
                        options: [
                            {
                                text: "🚢 漕帮 - 控制水路运输命脉",
                                scores: { merchant: 2, practical: 1 },
                                response: "你认为物流是商业的基础。"
                            },
                            {
                                text: "🧂 盐商 - 拥有官方背景和资金",
                                scores: { networker: 2, diplomat: 1 },
                                response: "你相信官商结合的力量。"
                            },
                            {
                                text: "🛡️ 镖局 - 武力保障和情报网络", 
                                scores: { warrior: 2, protector: 1 },
                                response: "你觉得安全是首要考虑。"
                            },
                            {
                                text: "🌑 暗影阁 - 神秘但信息灵通",
                                scores: { investigator: 2, riskTaker: 1 },
                                response: "你对神秘组织充满好奇。"
                            }
                        ]
                    },
                    {
                        question: "你发现商号的账簿有蹊跷，似乎有人在暗中转移资产，你会？",
                        options: [
                            {
                                text: "🔍 立即彻查所有账目",
                                scores: { investigator: 2, meticulous: 1 },
                                response: "你认为必须查明真相。"
                            },
                            {
                                text: "🎭 装作不知，暗中监视",
                                scores: { strategist: 2, observer: 1 },
                                response: "你选择放长线钓大鱼。"
                            },
                            {
                                text: "🤝 找可靠的人协助调查", 
                                scores: { alliance: 2, networker: 1 },
                                response: "你相信团队合作的力量。"
                            },
                            {
                                text: "💼 先稳定业务，再处理内鬼",
                                scores: { merchant: 2, practical: 1 },
                                response: "你觉得商号正常运转更重要。"
                            }
                        ]
                    },
                    {
                        question: "在整理父母遗物时，你发现一封未寄出的信，提到'南洋商路'，你的想法是？",
                        options: [
                            {
                                text: "🌊 立即着手调查南洋商路",
                                scores: { adventurer: 2, curious: 1 },
                                response: "你觉得这是重要线索。"
                            },
                            {
                                text: "📚 先研究南洋贸易的相关知识",
                                scores: { learner: 2, analyst: 1 },
                                response: "你认为需要充分准备。"
                            },
                            {
                                text: "🤝 寻找了解南洋商路的人", 
                                scores: { networker: 2, diplomat: 1 },
                                response: "你觉得专业人士的建议很重要。"
                            },
                            {
                                text: "💼 暂时搁置，先解决眼前问题",
                                scores: { practical: 2, focused: 1 },
                                response: "你认为应该分清主次。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第三章：商海惊涛",
                story: "🌊 你逐渐掌握了商号的运营，却发现了一个惊天秘密：父母其实在暗中经营着一条通往南洋的秘密商路，这条商路不仅利润惊人，还关系到大明海防。此时，倭寇突然袭击沿海，朝廷下令禁海，你的商船被困在海外...",
                questions: [
                    {
                        question: "面对禁海令和被困的商船，你会？",
                        options: [
                            {
                                text: "⚔️ 冒险出海，营救商船和船员",
                                scores: { warrior: 3, adventurer: 2 },
                                response: "你视船员如家人，不惜冒险相救。"
                            },
                            {
                                text: "📜 利用父母的人脉，寻求官方特许",
                                scores: { diplomat: 3, networker: 2 },
                                response: "你相信合法途径才是长久之计。"
                            },
                            {
                                text: "🛶 寻找隐秘航线，暗中继续贸易",
                                scores: { wanderer: 3, strategist: 2 },
                                response: "你在危机中看到了新的机会。"
                            },
                            {
                                text: "💰 暂时放弃商船，保全陆上产业",
                                scores: { cautious: 3, merchant: 2 },
                                response: "你懂得取舍，选择最稳妥的方案。"
                            }
                        ]
                    },
                    {
                        question: "在营救过程中，你发现倭寇袭击背后有内鬼操控，这个内鬼很可能是四大势力之一，你会？",
                        options: [
                            {
                                text: "🔍 暗中收集证据，一举揭发",
                                scores: { investigator: 2, justice: 1 },
                                response: "你选择用证据说话，不冤枉好人。"
                            },
                            {
                                text: "💥 直接对峙，逼对方现形",
                                scores: { warrior: 2, confront: 1 },
                                response: "你厌恶阴谋，喜欢光明正大地解决问题。"
                            },
                            {
                                text: "🎭 将计就计，设下陷阱",
                                scores: { strategist: 2, clever: 1 },
                                response: "你善于利用敌人的计谋反制。"
                            },
                            {
                                text: "🤝 寻求其他势力帮助，共同对抗",
                                scores: { alliance: 2, networker: 1 },
                                response: "你相信团结就是力量。"
                            }
                        ]
                    },
                    {
                        question: "南洋商路的关键货物是什么？你的经营策略是？",
                        options: [
                            {
                                text: "🌶️ 香料贸易 - 高风险高回报",
                                scores: { adventurer: 2, merchant: 1 },
                                response: "你追求高额利润，不怕冒险。"
                            },
                            {
                                text: "🦢 丝绸瓷器 - 稳定传统贸易",
                                scores: { merchant: 2, planner: 1 },
                                response: "你选择稳健可靠的经营方式。"
                            },
                            {
                                text: "📚 文化典籍 - 开拓知识贸易", 
                                scores: { scholar: 2, innovator: 1 },
                                response: "你认为知识是最有价值的商品。"
                            },
                            {
                                text: "🔧 技术工艺 - 引进先进技术",
                                scores: { reformer: 2, practical: 1 },
                                response: "你着眼于长远的技术发展。"
                            }
                        ]
                    },
                    {
                        question: "你发现父母在海外建立了一个秘密基地，里面有大量金银和重要文件，你会如何处理？",
                        options: [
                            {
                                text: "💰 立即转移财富，充实商号",
                                scores: { merchant: 2, practical: 1 },
                                response: "你觉得资金应该用于发展。"
                            },
                            {
                                text: "🔒 保持原状，作为应急储备",
                                scores: { cautious: 2, planner: 1 },
                                response: "你认为应该留一手。"
                            },
                            {
                                text: "📚 优先研究文件，寻找线索", 
                                scores: { investigator: 2, scholar: 1 },
                                response: "你觉得真相比财富更重要。"
                            },
                            {
                                text: "🤝 与可信之人分享这个秘密",
                                scores: { alliance: 2, networker: 1 },
                                response: "你相信分享能获得更多帮助。"
                            }
                        ]
                    },
                    {
                        question: "你发现南洋商路还涉及军火贸易，这与朝廷禁令冲突，你的选择是？",
                        options: [
                            {
                                text: "🚫 立即停止军火贸易",
                                scores: { lawful: 2, ethical: 1 },
                                response: "你觉得不能违反朝廷禁令。"
                            },
                            {
                                text: "🔄 转型其他商品贸易",
                                scores: { reformer: 2, practical: 1 },
                                response: "你认为应该寻找替代方案。"
                            },
                            {
                                text: "🤝 寻求官方特许继续经营", 
                                scores: { diplomat: 2, networker: 1 },
                                response: "你觉得可以合法化经营。"
                            },
                            {
                                text: "💼 暗中继续，但要更谨慎",
                                scores: { strategist: 2, riskTaker: 1 },
                                response: "你认为商机难得。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第四章：情义两难",
                story: "💔 在追查真相的过程中，你结识了一位志同道合的伙伴，两人并肩作战，建立了深厚的情谊。然而，你逐渐发现这位伙伴的身世也与当年的海难有关，甚至可能是导致悲剧的元凶之后...",
                questions: [
                    {
                        question: "发现伙伴的身世秘密后，你会？",
                        options: [
                            {
                                text: "🗡️ 立即质问，要求解释",
                                scores: { warrior: 2, justice: 1 },
                                response: "你无法容忍欺骗，选择直接面对。"
                            },
                            {
                                text: "🕵️ 暗中调查，确认真相",
                                scores: { investigator: 2, cautious: 1 },
                                response: "你相信事实胜于雄辩，先查明真相。"
                            },
                            {
                                text: "💔 暂时隐瞒，观察对方举动",
                                scores: { strategist: 2, observer: 1 },
                                response: "你选择以静制动，等待对方露出破绽。"
                            },
                            {
                                text: "🤝 坦诚相待，共同面对过去",
                                scores: { honest: 2, alliance: 1 },
                                response: "你相信真诚能化解一切隔阂。"
                            }
                        ]
                    },
                    {
                        question: "如果伙伴确实与父母之死有关，但并非故意，你的选择是？",
                        options: [
                            {
                                text: "⚖️ 依法办事，交给官府处置",
                                scores: { justice: 2, lawful: 1 },
                                response: "你坚持法律和原则。"
                            },
                            {
                                text: "💔 断绝关系，但不再追究",
                                scores: { cautious: 2, protector: 1 },
                                response: "你选择保护自己，但也不愿伤害对方。"
                            },
                            {
                                text: "🔄 给予改过机会，共同查明真相", 
                                scores: { generous: 2, reformer: 1 },
                                response: "你相信每个人都有改过的机会。"
                            },
                            {
                                text: "🤔 视情况而定，看对方态度",
                                scores: { strategist: 2, observer: 1 },
                                response: "你根据实际情况灵活处理。"
                            }
                        ]
                    },
                    {
                        question: "伙伴主动向你坦白了一切，并愿意弥补过错，你的态度是？",
                        options: [
                            {
                                text: "❤️ 完全原谅，继续并肩作战",
                                scores: { generous: 2, alliance: 1 },
                                response: "你觉得真诚的悔过值得原谅。"
                            },
                            {
                                text: "🛡️ 保持距离，但给予机会",
                                scores: { cautious: 2, protector: 1 },
                                response: "你选择谨慎地重建信任。"
                            },
                            {
                                text: "💼 要求实际补偿，再谈原谅", 
                                scores: { merchant: 2, practical: 1 },
                                response: "你觉得实际行动比言语更重要。"
                            },
                            {
                                text: "🎯 考验对方的诚意和行动",
                                scores: { strategist: 2, observer: 1 },
                                response: "你认为时间会证明一切。"
                            }
                        ]
                    },
                    {
                        question: "你发现伙伴其实一直在暗中保护你，对抗真正的幕后黑手，你的感受是？",
                        options: [
                            {
                                text: "😢 感动于对方的付出",
                                scores: { emotional: 2, generous: 1 },
                                response: "你觉得真情可贵。"
                            },
                            {
                                text: "🤔 怀疑这是另一种算计",
                                scores: { skeptic: 2, cautious: 1 },
                                response: "你认为需要保持警惕。"
                            },
                            {
                                text: "🔍 调查真正的幕后黑手", 
                                scores: { investigator: 2, focused: 1 },
                                response: "你觉得应该关注真正的问题。"
                            },
                            {
                                text: "🤝 主动修复关系，共同对敌",
                                scores: { alliance: 2, networker: 1 },
                                response: "你认为团结对敌更重要。"
                            }
                        ]
                    },
                    {
                        question: "在共同对抗敌人的过程中，你们的关系发生了怎样的变化？",
                        options: [
                            {
                                text: "💞 情谊更加深厚",
                                scores: { emotional: 2, alliance: 1 },
                                response: "你觉得患难见真情。"
                            },
                            {
                                text: "⚖️ 保持合作但保持距离",
                                scores: { balanced: 2, cautious: 1 },
                                response: "你认为工作需要但感情要克制。"
                            },
                            {
                                text: "🔄 重新建立信任基础", 
                                scores: { reformer: 2, patient: 1 },
                                response: "你觉得需要时间重建关系。"
                            },
                            {
                                text: "🎯 纯粹的工作伙伴关系",
                                scores: { practical: 2, focused: 1 },
                                response: "你认为事业比感情重要。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第五章：权力巅峰",
                story: "👑 经过重重考验，你不仅重振了'天机商号'，还整合了四大势力，成为江南商界的领袖。此时，朝廷注意到了你的影响力，皇帝亲自召见，希望你出任户部侍郎，掌管天下财政...",
                questions: [
                    {
                        question: "面对朝廷的征召，你的选择是？",
                        options: [
                            {
                                text: "🎯 接受官职，用权力改革财政",
                                scores: { ambitious: 2, reformer: 1 },
                                response: "你看到了更大的舞台和改革的机会。"
                            },
                            {
                                text: "🏮 婉拒官职，专注商业发展",
                                scores: { merchant: 2, independent: 1 },
                                response: "你相信商业的力量，不愿涉足官场。"
                            },
                            {
                                text: "🤝 接受虚职，保持商业独立性",
                                scores: { diplomat: 2, strategist: 1 },
                                response: "你在权力和自由间找到了平衡点。"
                            },
                            {
                                text: "🌊 借机提出条件，为商界争取利益",
                                scores: { networker: 2, alliance: 1 },
                                response: "你利用这个机会为整个商界发声。"
                            }
                        ]
                    },
                    {
                        question: "成为商界领袖后，你的经营理念是？",
                        options: [
                            {
                                text: "📈 追求利润最大化",
                                scores: { merchant: 2, ambitious: 1 },
                                response: "你认为商业的本质就是追求利润。"
                            },
                            {
                                text: "⚖️ 平衡利益与社会责任",
                                scores: { reformer: 2, justice: 1 },
                                response: "你相信企业应该承担社会责任。"
                            },
                            {
                                text: "🤝 建立商业联盟，共同发展", 
                                scores: { alliance: 2, networker: 1 },
                                response: "你认为合作共赢才是长久之道。"
                            },
                            {
                                text: "💡 创新商业模式，引领变革",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你致力于开创性的商业实践。"
                            }
                        ]
                    },
                    {
                        question: "你在朝中为商界争取利益时，面对官员的刁难，你的应对策略是？",
                        options: [
                            {
                                text: "💰 用金钱开路，打通关系",
                                scores: { merchant: 2, practical: 1 },
                                response: "你认为这是最直接有效的方法。"
                            },
                            {
                                text: "🤝 建立人脉网络，寻找盟友",
                                scores: { networker: 2, diplomat: 1 },
                                response: "你相信人际关系的力量。"
                            },
                            {
                                text: "⚖️ 据理力争，维护商界权益", 
                                scores: { warrior: 2, justice: 1 },
                                response: "你坚持原则，不畏强权。"
                            },
                            {
                                text: "🎭 运用智慧，巧妙周旋",
                                scores: { strategist: 2, clever: 1 },
                                response: "你善于在复杂环境中找到出路。"
                            }
                        ]
                    },
                    {
                        question: "你发现朝廷内部也存在派系斗争，你的立场是？",
                        options: [
                            {
                                text: "🤝 保持中立，不参与斗争",
                                scores: { balanced: 2, cautious: 1 },
                                response: "你觉得政治斗争太危险。"
                            },
                            {
                                text: "🎯 选择最有利的派系合作",
                                scores: { strategist: 2, opportunist: 1 },
                                response: "你认为站队是必要的。"
                            },
                            {
                                text: "🔄 在不同派系间平衡", 
                                scores: { diplomat: 2, networker: 1 },
                                response: "你善于在不同势力间周旋。"
                            },
                            {
                                text: "💡 建立自己的势力",
                                scores: { ambitious: 2, leader: 1 },
                                response: "你觉得应该掌握主动权。"
                            }
                        ]
                    },
                    {
                        question: "面对其他商家的嫉妒和竞争，你的态度是？",
                        options: [
                            {
                                text: "🤝 主动合作，共同发展",
                                scores: { alliance: 2, generous: 1 },
                                response: "你觉得合作比竞争更重要。"
                            },
                            {
                                text: "⚔️ 正面竞争，用实力说话",
                                scores: { warrior: 2, confident: 1 },
                                response: "你相信市场竞争的力量。"
                            },
                            {
                                text: "🎭 分化瓦解，各个击破", 
                                scores: { strategist: 2, clever: 1 },
                                response: "你善于运用策略。"
                            },
                            {
                                text: "💡 创新突破，保持领先",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你觉得创新是最好的竞争。"
                            }
                        ]
                    }
                ]
            },
            {
                chapter: "第六章：江湖恩怨",
                story: "⚔️ 你发现父母的失踪与朝廷内部的权力斗争有关。一位神秘的黑衣人夜访，透露当年的海难其实是精心策划的阴谋，目的是夺取'天机商号'掌握的海外贸易路线。更令人震惊的是，当今朝中重臣也牵涉其中...",
                questions: [
                    {
                        question: "得知朝廷重臣涉案，你的行动策略是？",
                        options: [
                            {
                                text: "📜 收集证据，通过合法途径揭发",
                                scores: { justice: 3, lawful: 2 },
                                response: "你相信法律和正义终将战胜邪恶。"
                            },
                            {
                                text: "🗡️ 联合江湖义士，武力讨回公道",
                                scores: { warrior: 3, confront: 2 },
                                response: "你认为有些正义需要用剑来维护。"
                            },
                            {
                                text: "🎭 设局引蛇出洞，让其自露马脚",
                                scores: { strategist: 3, clever: 2 },
                                response: "你选择用智慧让敌人自投罗网。"
                            },
                            {
                                text: "💼 以其人之道还治其人之身",
                                scores: { merchant: 3, practical: 2 },
                                response: "你决定在商业上彻底击败对方。"
                            }
                        ]
                    },
                    {
                        question: "在追查过程中，你发现当年的知情人现在处境危险，你会？",
                        options: [
                            {
                                text: "🛡️ 立即派人保护，确保安全",
                                scores: { protector: 2, generous: 1 },
                                response: "你视人命重于证据。"
                            },
                            {
                                text: "🔍 暗中监视，等待更多线索",
                                scores: { investigator: 2, observer: 1 },
                                response: "你认为这是引出幕后黑手的好机会。"
                            },
                            {
                                text: "⚡ 迅速行动，抢先一步获取证词",
                                scores: { adventurer: 2, riskTaker: 1 },
                                response: "你相信速度就是最好的保护。"
                            },
                            {
                                text: "🤝 寻求官府合作，共同保护",
                                scores: { diplomat: 2, networker: 1 },
                                response: "你觉得官方力量更可靠。"
                            }
                        ]
                    },
                    {
                        question: "真相大白后，面对涉案的朝廷重臣，你的最终决定是？",
                        options: [
                            {
                                text: "⚖️ 坚持依法严惩，不留情面",
                                scores: { justice: 3, lawful: 2 },
                                response: "你坚信法律面前人人平等。"
                            },
                            {
                                text: "🔄 给予改过机会，但限制权力",
                                scores: { reformer: 3, generous: 2 },
                                response: "你觉得应该给人改过的机会。"
                            },
                            {
                                text: "💼 用其把柄换取商业利益", 
                                scores: { merchant: 3, practical: 2 },
                                response: "你认为这是最实际的解决方案。"
                            },
                            {
                                text: "🎯 暂时放过，等待更好时机",
                                scores: { strategist: 3, observer: 2 },
                                response: "你觉得时机还不成熟。"
                            }
                        ]
                    },
                    {
                        question: "你发现幕后黑手其实是为了保护更大的秘密，你的选择是？",
                        options: [
                            {
                                text: "🔍 继续追查到底",
                                scores: { investigator: 2, determined: 1 },
                                response: "你觉得必须知道全部真相。"
                            },
                            {
                                text: "🛡️ 保护现有成果，停止追查",
                                scores: { protector: 2, cautious: 1 },
                                response: "你认为适可而止很重要。"
                            },
                            {
                                text: "🤝 与对方谈判达成协议", 
                                scores: { negotiator: 2, diplomat: 1 },
                                response: "你觉得可以找到妥协方案。"
                            },
                            {
                                text: "💡 寻找其他知情者",
                                scores: { networker: 2, alliance: 1 },
                                response: "你认为应该多方求证。"
                            }
                        ]
                    },
                    {
                        question: "在最终对决中，你发现敌人其实也有苦衷，你的态度是？",
                        options: [
                            {
                                text: "❤️ 给予理解和宽容",
                                scores: { generous: 2, emotional: 1 },
                                response: "你觉得每个人都有自己的苦衷。"
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
                chapter: "第七章：财富真谛",
                story: "💎 真相大白后，你面临着人生最重要的选择。你可以选择继承庞大的商业帝国，也可以选择简朴的生活，或者用财富造福百姓。这时，那位神秘的黑衣人再次出现，揭示了父母留下的最终遗言...",
                questions: [
                    {
                        question: "父母的遗言揭示了他们对财富的理解：'富可敌国不如德被天下'，你的感悟是？",
                        options: [
                            {
                                text: "💰 继续扩大商业版图，用实力说话",
                                scores: { merchant: 3, ambitious: 2 },
                                response: "你认为强大的经济实力才能改变世界。"
                            },
                            {
                                text: "🌾 回归田园，追求内心的平静",
                                scores: { farmer: 3, minimalist: 2 },
                                response: "你领悟到简单才是真正的富有。"
                            },
                            {
                                text: "🤲 散财济世，帮助需要的人",
                                scores: { generous: 3, reformer: 2 },
                                response: "你相信分享才是财富的意义。"
                            },
                            {
                                text: "🎯 建立慈善基金，系统化帮助他人",
                                scores: { planner: 3, systematic: 2 },
                                response: "你希望用更有效的方式回馈社会。"
                            }
                        ]
                    },
                    {
                        question: "最终，你对'天机商号'的未来规划是？",
                        options: [
                            {
                                text: "🏰 打造千年商号，代代传承",
                                scores: { traditional: 3, planner: 2 },
                                response: "你希望建立不朽的商业传奇。"
                            },
                            {
                                text: "🔄 改革商业模式，适应新时代",
                                scores: { innovator: 3, reformer: 2 },
                                response: "你认为变革才是生存之道。"
                            },
                            {
                                text: "🌍 开拓海外市场，走向世界",
                                scores: { adventurer: 3, ambitious: 2 },
                                response: "你的目光已经投向更广阔的天地。"
                            },
                            {
                                text: "🤝 与员工共享成果，共同富裕",
                                scores: { alliance: 3, generous: 2 },
                                response: "你相信团队的力量。"
                            }
                        ]
                    },
                    {
                        question: "回顾整个经历，你认为真正的成功是什么？",
                        options: [
                            {
                                text: "🏆 财富和权力的积累",
                                scores: { merchant: 3, ambitious: 2 },
                                response: "你觉得物质成就是衡量成功的标准。"
                            },
                            {
                                text: "❤️ 内心的平静和满足",
                                scores: { farmer: 3, minimalist: 2 },
                                response: "你认为心灵的富足才是真正的成功。"
                            },
                            {
                                text: "🤝 人际关系的和谐与信任", 
                                scores: { networker: 3, alliance: 2 },
                                response: "你觉得良好的人际关系最重要。"
                            },
                            {
                                text: "🌱 对社会的贡献和影响",
                                scores: { reformer: 3, visionary: 2 },
                                response: "你认为改变世界才是真正的成功。"
                            }
                        ]
                    },
                    {
                        question: "你希望后人如何记住你和'天机商号'？",
                        options: [
                            {
                                text: "💰 江南首富，商业传奇",
                                scores: { merchant: 2, ambitious: 1 },
                                response: "你为自己的商业成就自豪。"
                            },
                            {
                                text: "⚖️ 正义的守护者",
                                scores: { just: 2, protector: 1 },
                                response: "你觉得维护正义更重要。"
                            },
                            {
                                text: "🤝 合作共赢的倡导者", 
                                scores: { alliance: 2, networker: 1 },
                                response: "你认为合作精神最可贵。"
                            },
                            {
                                text: "💡 商业创新的先驱",
                                scores: { innovator: 2, visionary: 1 },
                                response: "你为自己的创新理念自豪。"
                            }
                        ]
                    },
                    {
                        question: "面对未来的挑战和机遇，你的心态是？",
                        options: [
                            {
                                text: "🚀 充满期待，继续前进",
                                scores: { adventurer: 2, confident: 1 },
                                response: "你觉得人生就是不断挑战。"
                            },
                            {
                                text: "🛡️ 谨慎规划，稳中求进",
                                scores: { planner: 2, cautious: 1 },
                                response: "你认为稳健发展最重要。"
                            },
                            {
                                text: "🌱 享受当下，知足常乐", 
                                scores: { minimalist: 2, balanced: 1 },
                                response: "你觉得简单就是幸福。"
                            },
                            {
                                text: "🤝 培养后人，传承智慧",
                                scores: { educator: 2, investor: 1 },
                                response: "你认为培养下一代很重要。"
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
        merchant: "金算盘掌柜",
        warrior: "剑胆琴心客",  
        farmer: "田园隐逸者",
        wanderer: "逍遥游商",
        planner: "神机妙算师",
        networker: "八面玲珑使",
        entrepreneur: "点石成金手",
        investigator: "明察秋毫探",
        justice: "仗义疏财侠",
        observer: "静观其变饮茶人",
        strategist: "运筹帷幄谋士",
        generous: "乐善好施主",
        honest: "一诺千金士",
        practical: "务实求利商",
        cautious: "步步为营者",
        diplomat: "长袖善舞使",
        alliance: "结盟共赢家",
        adventurer: "险中求富贵",
        confront: "快意恩仇客",
        clever: "智计百出者",
        ambitious: "雄心壮志主",
        independent: "独行其道者",
        reformer: "革故鼎新派",
        scholar: "博学多才子",
        lawful: "循规蹈矩人",
        protector: "守成保业者",
        visionary: "高瞻远瞩者",
        minimalist: "知足常乐人",
        traditional: "承前启后者",
        realist: "审时度势者",
        educator: "薪火相传师",
        guide: "指点迷津人",
        determined: "百折不挠者",
        focused: "专注致志者",
        learner: "虚心求教生",
        emotional: "情深义重人",
        skeptic: "疑人不用者",
        balanced: "中庸之道者",
        philosopher: "深思熟虑者",
        opportunist: "见机行事者",
        riskTaker: "富贵险中求",
        leader: "一呼百应主",
        confident: "胸有成竹者",
        investor: "慧眼识珠人",
        systematic: "有条不紊者",
        just: "公正不阿者"
    }
};