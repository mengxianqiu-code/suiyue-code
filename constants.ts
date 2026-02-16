import { Poem, PoemCategory } from './types';

export const POEM_CATEGORIES: { id: PoemCategory; labelEn: string; labelZh: string; descEn: string; descZh: string }[] = [
  { 
    id: 'eve', 
    labelEn: "New Year's Eve", 
    labelZh: "除夕守岁",
    descEn: "The vigil of the last night, reflecting on the passage of time.",
    descZh: "一夜连双岁，五更分二年。感叹时光流逝与守岁习俗。"
  },
  { 
    id: 'day', 
    labelEn: "New Year's Day", 
    labelZh: "元日迎春",
    descEn: "Celebrations of the first day, renewal, and fresh beginnings.",
    descZh: "爆竹声中一岁除，春风送暖。万象更新的喜悦。"
  },
  { 
    id: 'nostalgia', 
    labelEn: "Traveler's Nostalgia", 
    labelZh: "羁旅乡愁",
    descEn: "The melancholy of being away from home during the holidays.",
    descZh: "独在异乡为异客，每逢佳节倍思亲。漂泊者的孤寂。"
  },
  { 
    id: 'folk', 
    labelEn: "Folk Customs", 
    labelZh: "田园民俗",
    descEn: "Rural traditions, farming life, and commoner celebrations.",
    descZh: "田家占气候，共说此年丰。淳朴的民间年景。"
  },
  { 
    id: 'court', 
    labelEn: "Imperial Court", 
    labelZh: "宫廷庆典",
    descEn: "Grand banquets and majesty within the palace walls.",
    descZh: "千官贺岁，万国衣冠。皇家的庄严与盛大。"
  },
  { 
    id: 'lantern', 
    labelEn: "Lantern Festival", 
    labelZh: "元夕灯会",
    descEn: "The climax of the New Year, lights, romance, and crowds.",
    descZh: "东风夜放花千树，宝马雕车香满路。元宵节的繁华。"
  }
];

export const STATIC_POEMS: Poem[] = [
  // ==========================================
  // 1. 元日迎春 (New Year's Day)
  // ==========================================
  {
    id: 'day-1',
    title: '元日',
    dynasty: 'Song',
    author: '王安石 (Wang Anshi)',
    category: 'day',
    content: `爆竹声中一岁除，\n春风送暖入屠苏。\n千门万户曈曈日，\n总把新桃换旧符。`,
    themes: ['Celebration', 'Renewal', 'Hope'],
    translation: "Amidst the boom of firecrackers a year has come to an end, / The spring wind drifts warmth into the Tusu wine. / While the rising sun illuminates thousands of doorways, / Everyone swaps old peach wood charms for new ones.",
    translationCn: "爆竹声中旧的一年已经过去，春风送来暖意，人们痛饮屠苏酒。千门万户沐浴在初升的阳光中，总要把旧的桃符换成新的桃符。"
  },
  {
    id: 'day-2',
    title: '元日',
    dynasty: 'Tang',
    author: '李世民 (Li Shimin)',
    category: 'day', // Also fits Court, but fits Day structure
    content: `高轩暧春色，邃阁媚新朝。\n彤庭飞彩旆，翠幌曜明珰。\n恭己临四方，心驰亿载长。`,
    themes: ['Imperial', 'Spring', 'Ambition'],
    translation: "High pavilions warm with spring colors, deep chambers charm the new dynasty. Red courtyards fly colorful flags...",
    translationCn: "高高的轩廊被春色温暖，深邃的阁楼在新年朝会中显得妩媚。红色的廷院中彩旗飘扬...我恭敬律己以君临四方，心神向往着江山亿载长存。"
  },
  {
    id: 'day-3',
    title: '迎新春',
    dynasty: 'Song',
    author: '柳永 (Liu Yong)',
    category: 'day',
    content: `嶰管变青律，帝里阳和新布。\n晴景回轻煦。庆嘉节、当三五。\n列华灯、千门万户。\n遍九陌、罗绮香风，游人珠翠，\n千浦万屿。`,
    themes: ['Celebration', 'City Life', 'Music'],
    translation: "The pitch pipes signal the return of spring, warmth spreads through the capital...",
    translationCn: "律管吹出了春的音律，京城里到处散布着新春的阳和之气。晴朗的景色带回了轻柔的温暖..."
  },
  {
    id: 'day-4',
    title: '元日述怀',
    dynasty: 'Tang',
    author: '卢照邻 (Lu Zhaolin)',
    category: 'day',
    content: `筮仕无中秩，归耕有外臣。\n人歌小岁酒，花舞大唐春。\n草色迷三径，风光动四邻。\n愿得长如此，年年物候新。`,
    themes: ['Spring', 'Wine', 'Nature'],
    translation: "People sing over the small-year wine, flowers dance in the Great Tang spring...",
    translationCn: "人们歌唱着饮守岁酒，花朵在这一派大唐春色中飞舞。草色迷离了庭院小路，风光惊动了四邻..."
  },
  {
    id: 'day-5',
    title: '玉楼春·己卯岁元日',
    dynasty: 'Song',
    author: '毛滂 (Mao Pang)',
    category: 'day',
    content: `一年滴尽莲花漏。\n碧井屠苏沉冻酒。\n晓寒料峭尚欺人，\n春态苗条先到柳。\n\n佳人重劝千长寿。\n柏叶椒花芬翠袖。\n醉乡深处少闲愁，\n这里犹夸元正后。`,
    themes: ['Romance', 'Spring', 'Wine'],
    translation: "The lotus water clock has dripped away a whole year...",
    translationCn: "莲花漏里的水滴尽了一年。碧井旁，屠苏酒里沉淀着冻酒。破晓的寒风料峭逼人，春天的姿态已先到了柳树梢头..."
  },
  {
    id: 'day-6',
    title: '蝶恋花·戊申元日立春席间作',
    dynasty: 'Song',
    author: '辛弃疾 (Xin Qiji)',
    category: 'day',
    content: `谁向椒盘簪彩胜？整整韶华，争上春风鬓。\n往日不堪重记省，为花长醉花应允。\n\n上苑风光好，只是游人尽日无归定。\n万紫千红总是春，动人春色不须多。`,
    themes: ['Spring', 'Youth', 'Wine'],
    translation: "Who pins the colorful ornaments from the pepper plate? The glory of youth competes to ascend the temples...",
    translationCn: "谁从椒盘中取出彩胜簪在头上？整整齐齐的美好年华，争着登上春风吹拂的鬓角..."
  },
  {
    id: 'day-7',
    title: '浣溪沙',
    dynasty: 'Song',
    author: '向子諲 (Xiang Ziyin)',
    category: 'day',
    content: `爆竹声中一岁除。东风送暖入屠苏。\n曈曈晓日上符书。\n\n老去怕看新历日，退归拟学旧农圃。\n更把春魁做座隅。`,
    themes: ['Aging', 'Retirement', 'Nature'],
    translation: "In the sound of firecrackers a year passes...",
    translationCn: "爆竹声中一年过去了。东风把暖意送入屠苏酒。初升的红日照耀着桃符..."
  },

  // ==========================================
  // 2. 除夕守岁 (New Year's Eve)
  // ==========================================
  {
    id: 'eve-1',
    title: '守岁',
    dynasty: 'Song',
    author: '苏轼 (Su Shi)',
    category: 'eve',
    content: `欲知垂尽岁，有似赴壑蛇。\n修鳞半已没，去意谁能遮。\n况欲系其尾，虽勤知奈何。\n儿童强不睡，相守夜欢哗。\n晨鸡且勿唱，更鼓畏添挝。\n坐久灯烬落，起看北斗斜。\n明年岂无年，心事恐蹉跎。\n努力尽今夕，少年犹可夸。`,
    themes: ['Time', 'Philosophy', 'Vigil'],
    translationCn: "想知道快要结束的一年是什么样吗？就像蛇爬向深谷一样...儿童强撑着不睡，相守过夜欢声喧哗..."
  },
  {
    id: 'eve-2',
    title: '除夜有怀',
    dynasty: 'Tang',
    author: '杜审言 (Du Shenyan)',
    category: 'eve',
    content: `故节当歌守，新年把烛迎。\n冬氛恋须鬓，春色入前旌。\n忽尤京梅发，甘从洛汭生。\n别来江国久，归计未还程。`,
    themes: ['Vigil', 'Candle', 'Waiting'],
    translationCn: "旧节日应当歌舞守岁，新年要举着蜡烛迎接。冬天的寒气还留恋在胡须鬓角，春色已经进入了前方的旗帜..."
  },
  {
    id: 'eve-3',
    title: '除夜雪',
    dynasty: 'Song',
    author: '陆游 (Lu You)',
    category: 'eve',
    content: `北风吹雪四更初，\n嘉瑞天教及岁除。\n半盏屠苏犹未举，\n灯前小草写桃符。`,
    themes: ['Snow', 'Quiet', 'Writing'],
    translationCn: "四更天初至，北风吹来了大雪，上天把这瑞雪赐给了除夕。盛了半盏屠苏酒还未举杯，在灯下写着小草字体的桃符。"
  },
  {
    id: 'eve-4',
    title: '双雁儿·除夕',
    dynasty: 'Song',
    author: '杨无咎 (Yang Wujiu)',
    category: 'eve',
    content: `劝君今夕不须眠。且满满，泛觥船。\n大家沈醉对芳筵。愿新年，胜旧年。`,
    themes: ['Drinking', 'Blessing', 'Party'],
    translationCn: "劝你今晚不要睡觉。且把酒杯斟满。大家沉醉面对丰盛的筵席。祝愿新的一年，胜过旧的一年。"
  },
  {
    id: 'eve-5',
    title: '鹧鸪天·丁巳除夕',
    dynasty: 'Song',
    author: '赵师侠 (Zhao Shixia)',
    category: 'eve',
    content: `爆竹声中岁又除。顿回和气满寰区。\n春风解绿江南树，不与人间染白须。\n\n残蜡烛，旧桃符。宁辞末后饮屠苏。\n归欤幸有园林胜，且醉东风听鹧鸪。`,
    themes: ['Nature', 'Aging', 'Peace'],
    translationCn: "爆竹声中一年又过去了。顿时祥和之气充满了天地。春风吹绿了江南的树木，不让它染上人间的白须..."
  },
  {
    id: 'eve-6',
    title: '祝英台近·除夜立春',
    dynasty: 'Song',
    author: '吴文英 (Wu Wenying)',
    category: 'eve',
    content: `剪红情，裁绿意，花信上钗股。\n残日东风，不放岁华去。\n有人添烛西窗，不眠侵晓，\n笑声转、新年莺语。`,
    themes: ['Spring', 'Vigil', 'Joy'],
    translationCn: "剪出红花绿叶的彩胜，春天的信息登上了钗头。有人在西窗下添蜡烛，彻夜不眠直到破晓，笑声转化为新年的黄莺啼鸣。"
  },
  {
    id: 'eve-7',
    title: '除日',
    dynasty: 'Song',
    author: '朱淑真 (Zhu Shuzhen)',
    category: 'eve',
    content: `爆竹声中腊已残，\n酴酥酒暖烛花寒。\n朦胧斗帐睡眠少，\n守岁街头夜将阑。`,
    themes: ['Female', 'Quiet', 'Cold'],
    translationCn: "爆竹声中腊月已尽，屠苏酒暖，烛花却显寒意。朦胧的帐子里睡意很少，街头守岁的夜色将尽。"
  },
  {
    id: 'eve-8',
    title: '高阳台·除夜',
    dynasty: 'Song',
    author: '韩疁 (Han Liu)',
    category: 'eve',
    content: `频听银签，重燃绛蜡，年华衮衮惊心。\n饯旧迎新，能消几刻光阴？\n老来可惯通宵饮？待不眠、还怕寒侵。`,
    themes: ['Aging', 'Time', 'Reflection'],
    translationCn: "频频听着报时的银签，重新点燃红烛，时光滚滚让人惊心。辞旧迎新，能消耗几刻光阴？..."
  },
  {
    id: 'eve-9',
    title: '应诏赋得除夜',
    dynasty: 'Tang',
    author: '史青 (Shi Qing)',
    category: 'eve', // Can also be Court
    content: `今岁今宵尽，明年明日催。\n寒随一夜去，春逐五更来。\n气色空中改，容颜暗里回。\n风光人不觉，已入后园梅。`,
    themes: ['Time', 'Nature', 'Spring'],
    translationCn: "今年就在今晚结束，明年紧催着明日到来。寒气随着这一夜离去，春天追逐着五更而来..."
  },
  {
    id: 'eve-10',
    title: '钦州守岁',
    dynasty: 'Tang',
    author: '张说 (Zhang Yue)',
    category: 'eve',
    content: `故岁今宵尽，新年明旦来。\n愁心随斗柄，东北望春回。`,
    themes: ['Time', 'Hope', 'Astronomy'],
    translationCn: "旧年今夜就结束了，新年明早就要到来。忧愁的心随着北斗星柄，向东北望去，期盼春天回归。"
  },

  // ==========================================
  // 3. 羁旅乡愁 (Nostalgia)
  // ==========================================
  {
    id: 'nos-1',
    title: '除夜作',
    dynasty: 'Tang',
    author: '高适 (Gao Shi)',
    category: 'nostalgia',
    content: `旅馆寒灯独不眠，\n客心何事转凄然。\n故乡今夜思千里，\n霜鬓明朝又一年。`,
    themes: ['Nostalgia', 'Loneliness', 'Aging'],
    translationCn: "住在旅馆里，对着寒灯，独自不眠，客居的心绪为何变得凄然？今夜思念故乡远在千里之外，明早两鬓霜白又过了一年。"
  },
  {
    id: 'nos-2',
    title: '次北固山下',
    dynasty: 'Tang',
    author: '王湾 (Wang Wan)',
    category: 'nostalgia',
    content: `客路青山外，行舟绿水前。\n潮平两岸阔，风正一帆悬。\n海日生残夜，江春入旧年。\n乡书何处达？归雁洛阳边。`,
    themes: ['Travel', 'Nature', 'Homesickness'],
    translationCn: "旅途在青山之外，行舟在绿水之前... 海上的红日诞生于残夜，江上的春意闯入了旧年..."
  },
  {
    id: 'nos-3',
    title: '除夜宿石头驿',
    dynasty: 'Tang',
    author: '戴叔伦 (Dai Shulun)',
    category: 'nostalgia',
    content: `旅馆谁相问？寒灯独可亲。\n一年将尽夜，万里未归人。\n寥落悲前事，支离笑此身。\n愁颜与衰鬓，明日又逢春。`,
    themes: ['Solitude', 'Inn', 'Aging'],
    translationCn: "在这旅馆里有谁来慰问我？只有寒灯是可亲的伴侣。今夜是一年中的最后一个夜晚，我却还在万里之外漂泊未归..."
  },
  {
    id: 'nos-4',
    title: '新年作',
    dynasty: 'Tang',
    author: '刘长卿 (Liu Changqing)',
    category: 'nostalgia',
    content: `乡心新岁切，天畔独潸然。\n老至居人下，春归在客先。\n岭猿同旦暮，江柳共风烟。\n已似长沙傅，从今又几年。`,
    themes: ['Exile', 'Tears', 'Spring'],
    translationCn: "新年来临，思乡的心情更加切骨，独自在天边黯然落泪。年老了还寄人篱下，春意竟然比我这个游子先回到了家乡..."
  },
  {
    id: 'nos-5',
    title: '除夜',
    dynasty: 'Tang',
    author: '白居易 (Bai Juyi)',
    category: 'nostalgia',
    content: `岁暮纷多思，天涯渺未归。\n老添新甲子，病减旧容辉。\n乡国音书绝，关河雁鹜飞。\n孤灯寒照雨，深竹暗浮烟。`,
    themes: ['Aging', 'Sickness', 'Distance'],
    translationCn: "岁末纷杂的思绪很多，身在天涯渺茫未归。老去又添了新的年岁，疾病减损了旧日的容颜..."
  },
  {
    id: 'nos-6',
    title: '除夜寄弟妹',
    dynasty: 'Tang',
    author: '白居易 (Bai Juyi)',
    category: 'nostalgia',
    content: `感时思弟妹，不寐百忧生。\n万里经年别，孤灯此夜情。\n病容非旧日，归思逼新正。\n早晚重相见，依依泥下耕。`,
    themes: ['Family', 'Separation', 'Sickness'],
    translationCn: "感叹时节而思念弟妹，无法入睡生出百种忧愁。万里之外经年的离别，孤灯之下今夜的深情..."
  },
  {
    id: 'nos-7',
    title: '岁夜咏怀',
    dynasty: 'Tang',
    author: '刘禹锡 (Liu Yuxi)',
    category: 'nostalgia',
    content: `弥年不得意，新岁又如何？\n念昔同游者，而今有几多？\n以闲为自在，将寿补蹉跎。\n春色无情故，幽居亦见过。`,
    themes: ['Reflection', 'Friendship', 'Life'],
    translationCn: "整年都不得意，新年到了又能怎样？想念昔日同游的朋友，现在还剩下几个？..."
  },
  {
    id: 'nos-8',
    title: '除夜有怀',
    dynasty: 'Tang',
    author: '崔涂 (Cui Tu)',
    category: 'nostalgia',
    content: `迢递三巴路，羁危万里身。\n乱山残雪夜，孤烛异乡人。\n渐与骨肉远，转于僮仆亲。\n那堪正漂泊，明日岁华新。`,
    themes: ['Exile', 'Solitude', 'Servants'],
    translationCn: "三巴的路途遥远，万里之身处于羁旅危难之中。乱山之中残留着雪的夜晚，孤独的烛光照着异乡的人..."
  },
  {
    id: 'nos-9',
    title: '思佳客·癸卯除夜',
    dynasty: 'Song',
    author: '吴文英 (Wu Wenying)',
    category: 'nostalgia',
    content: `十年旧梦无寻处，几度新春不在家。\n衣上犹沾佛院苔，眉间幸有山川翠。`,
    themes: ['Wandering', 'Memory', 'Landscape'],
    translationCn: "十年的旧梦无处寻找，好几次新春都不在家。衣服上还沾着佛院的青苔..."
  },
  {
    id: 'nos-10',
    title: '除夜',
    dynasty: 'Song',
    author: '文天祥 (Wen Tianxiang)',
    category: 'nostalgia', // Tragedy/Prison
    content: `乾坤空落落，岁月去堂堂。\n末路惊风雨，穷边饱雪霜。\n命随年欲尽，身与世俱忘。\n无复屠苏梦，挑灯夜未央。`,
    themes: ['Despair', 'Patriotism', 'Prison'],
    translationCn: "乾坤空旷落寞，岁月堂堂离去。在末路中惊恐于风雨，在边地饱受雪霜。生命随着年份将尽，身体与世事都已遗忘。不再有饮屠苏酒的梦，挑灯独坐夜未央。"
  },
  {
    id: 'nos-11',
    title: '除夜对酒赠少章',
    dynasty: 'Song',
    author: '陈师道 (Chen Shidao)',
    category: 'nostalgia',
    content: `岁晚身何托，灯前客未空。\n半生忧患里，一梦有无中。\n发短愁催白，颜衰酒借红。\n我歌君起舞，潦倒略相同。`,
    themes: ['Wine', 'Sorrow', 'Companionship'],
    translationCn: "岁末身体托付何处？灯前客人还未散去。半生都在忧患之中，一场大梦似有似无..."
  },
  {
    id: 'nos-12',
    title: '阮郎归',
    dynasty: 'Song',
    author: '秦观 (Qin Guan)',
    category: 'nostalgia',
    content: `湘天风雨破寒初。深沉庭院虚。\n丽谯吹罢小单于。峥嵘岁又除。\n\n宏醉客，且呼庐。归心云树疏。\n旧时宝马载香车。如今安在舆。`,
    themes: ['Exile', 'Memory', 'Contrast'],
    translationCn: "湘西的天空风雨打破了初寒。深沉的庭院空虚。城楼上吹奏完《小单于》曲。峥嵘的岁月又过去了..."
  },

  // ==========================================
  // 4. 田园民俗 (Folk Customs)
  // ==========================================
  {
    id: 'folk-1',
    title: '田家元日',
    dynasty: 'Tang',
    author: '孟浩然 (Meng Haoran)',
    category: 'folk',
    content: `昨夜斗回北，今朝岁起东。\n我年已强仕，无禄尚忧农。\n桑野就耕父，荷锄随牧童。\n田家占气候，共说此年丰。`,
    themes: ['Nature', 'Farming', 'Simplicity'],
    translationCn: "昨夜北斗星柄回指北方，今天早晨新的一年又由东方开始了... 与农夫一起去田间耕作... 听他们预测气候，都说今年是个丰收年。"
  },
  {
    id: 'folk-2',
    title: '卖痴呆词',
    dynasty: 'Song',
    author: '范成大 (Fan Chengda)',
    category: 'folk',
    content: `除夕更阑人不睡，厌禳钝滞迎新岁。\n小儿呼叫走长街，云有痴呆召人买。\n二物于人谁独无？就中吴侬仍有余。\n巷南巷北卖不得，相逢大笑相揶揄。`,
    themes: ['Humor', 'Custom', 'Children'],
    translationCn: "除夕夜深了人们还不睡，为了祈求新的一年聪明伶俐。小孩子在街上呼喊奔跑，说有“痴呆”要卖给人..."
  },
  {
    id: 'folk-3',
    title: '除夜',
    dynasty: 'Tang',
    author: '卢仝 (Lu Tong)',
    category: 'folk',
    content: `衰残归未遂，寂寞此宵情。\n旧国馀千里，新年隔五更。\n寒灯和雪剪，小饮对妻倾。\n唯有胶牙饧，依然称俗生。`,
    themes: ['Family', 'Custom', 'Candy'],
    translationCn: "衰老残病归家未遂，今夜寂寞之情。故乡相隔千里，新年只隔五更。剪去带着寒雪意象的灯花，对着妻子浅饮。只有吃胶牙饧（麦芽糖），依然像个世俗之人。"
  },
  {
    id: 'folk-4',
    title: '馈岁',
    dynasty: 'Song',
    author: '苏轼 (Su Shi)',
    category: 'folk',
    content: `农功各已收，岁事得相佐。\n为欢恐无及，假物托微货。\n... \n亦欲举乡风，独唱无人和。`,
    themes: ['Gifts', 'Community', 'Harvest'],
    translationCn: "农活大家都已经收尾，岁末的事情互相帮助。想要欢乐恐怕来不及，借着礼物寄托微薄的心意..."
  },
  {
    id: 'folk-5',
    title: '除夜',
    dynasty: 'Song',
    author: '戴复古 (Dai Fugu)',
    category: 'folk',
    content: `万物迎春送残腊，一年结局在今宵。\n生盆火烈轰鸣竹，守岁筳开听颂椒。\n野客预知农事好，村孺尽觉俗风饶。`,
    themes: ['Fire', 'Feast', 'Rural'],
    translationCn: "万物迎春送走腊月，一年的结局在今宵。生起火盆猛烈，爆竹轰鸣，守岁的筵席张开，听着颂词喝椒酒..."
  },
  {
    id: 'folk-6',
    title: '桂州腊夜',
    dynasty: 'Tang',
    author: '戎昱 (Rong Yu)',
    category: 'folk',
    content: `坐到三更尽，归仍万里赊。\n雪声偏傍竹，寒梦不离家。\n晓角分今古，朝旒忽这那。\n知君还强笑，未忍向梅花。`,
    themes: ['Night', 'Snow', 'Bamboo'],
    translationCn: "坐到三更尽了，归家之路仍然万里之遥。雪声偏偏傍着竹林，寒梦不离故乡..."
  },
  {
    id: 'folk-7',
    title: '岁日作',
    dynasty: 'Tang',
    author: '顾况 (Gu Kuang)',
    category: 'folk',
    content: `不觉老将春共至，更悲携手几人全。\n还将寂寞羞明镜，手把屠苏让少年。`,
    themes: ['Aging', 'Custom', 'Generosity'],
    translationCn: "不知不觉老迈与春天一起到来，更悲伤的是携手的朋友有几人保全？... 手里端着屠苏酒礼让给少年先饮。"
  },

  // ==========================================
  // 5. 宫廷庆典 (Imperial Court)
  // ==========================================
  {
    id: 'court-1',
    title: '守岁',
    dynasty: 'Tang',
    author: '李世民 (Li Shimin)',
    category: 'court',
    content: `暮景斜芳殿，年华丽绮宫。\n寒辞去冬雪，暖带入春风。\n阶馥舒梅素，盘花卷烛红。\n共欢新故岁，迎送一宵中。`,
    themes: ['Imperial', 'Majesty', 'Feast'],
    translationCn: "夕阳的余晖照射在华丽的宫殿上，岁月使得宫廷更加美丽。寒气伴随着冬雪离去，暖意跟随着春风而来..."
  },
  {
    id: 'court-2',
    title: '隋宫守岁',
    dynasty: 'Tang',
    author: '李商隐 (Li Shangyin)',
    category: 'court', // Historical critique
    content: `消息东郊木帝回，宫中行乐有新梅。\n沉香甲煎为庭燎，玉液琼苏作寿杯。\n遥望露盘疑是月，远闻鼍鼓欲惊雷。\n昭阳第一卿卿在，这也是昆仑王母来。`,
    themes: ['Luxury', 'History', 'Satire'],
    translationCn: "春神回归东郊的消息传来，宫中行乐伴着新梅。用沉香甲煎做庭院的火烛，用美酒做祝寿的杯... 这是讽刺隋炀帝奢侈的守岁。"
  },
  {
    id: 'court-3',
    title: '奉和正旦赐宰臣柏叶应制',
    dynasty: 'Tang',
    author: '武平一 (Wu Pingyi)',
    category: 'court',
    content: `绿叶迎春绿，寒枝历岁寒。\n愿持柏叶寿，长奉万年欢。`,
    themes: ['Praise', 'Ritual', 'Loyalty'],
    translationCn: "绿叶迎接着春天的翠绿，寒枝经历了岁月的严寒。愿以此柏叶祝寿，长久侍奉万年的欢乐。"
  },

  // ==========================================
  // 6. 元夕灯会 (Lantern Festival)
  // ==========================================
  {
    id: 'lan-1',
    title: '青玉案·元夕',
    dynasty: 'Song',
    author: '辛弃疾 (Xin Qiji)',
    category: 'lantern',
    content: `东风夜放花千树。更吹落、星如雨。\n宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。\n\n蛾儿雪柳黄金缕。笑语盈盈暗香去。\n众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。`,
    themes: ['Romance', 'Lights', 'Crowd'],
    translationCn: "东风吹开了元宵夜的火树银花，花灯灿烂，像千树花开... 我在人群中寻找她千百回，猛然回头，不经意间却在灯火零落之处发现了她。"
  },
  {
    id: 'lan-2',
    title: '生查子·元夕',
    dynasty: 'Song',
    author: '欧阳修 (Ouyang Xiu)',
    category: 'lantern',
    content: `去年元夜时，花市灯如昼。\n月上柳梢头，人约黄昏后。\n今年元夜时，月与灯依旧。\n不见去年人，泪湿春衫袖。`,
    themes: ['Memory', 'Lost Love', 'Sadness'],
    translationCn: "去年元宵夜之时，花市上灯光明亮如同白昼... 今年元宵夜之时，月光与灯光同去年一样。却再也看不到去年的那个人..."
  }
];

export const PROMPTS = {
  en: `Generate a comprehensive literary analysis framework for the theme of "New Year" (Guo Nian) in Tang and Song poetry. 
  
  Please cover the following dimensions:
  1. **Temporal Dimension**: How poets perceived the passage of time (e.g., waiting for the dawn on New Year's Eve).
  2. **Spatial Dimension**: The contrast between the festive court/city and the lonely traveler's inn.
  3. **Ritual & Imagery**: The symbolism of firecrackers, Tusu wine, and peach wood charms.
  4. **Emotional Duality**: The interplay between celebration (joy, hope) and introspection (nostalgia, aging).

  Format the output in Markdown.`,
  
  zh: `请生成一份关于唐宋诗词中“过年”主题的深度文学分析框架。

  请涵盖以下维度：
  1. **时间维度**：诗人对时光流逝的感知（如除夕守岁的紧迫感与元日新春的希望）。
  2. **空间维度**：热闹的宫廷/市井与孤独的羁旅/客舍之间的强烈对比。
  3. **仪式与意象**：爆竹、屠苏酒、桃符等核心意象的文化象征意义。
  4. **情感二重性**：节庆欢愉与个人身世之感（如乡愁、伤老）的交织。

  请使用 Markdown 格式输出。`
};

export const TRANSLATIONS = {
  en: {
    heroTitle: "Suiyue",
    heroSubtitle: "Echoes of the New Year in Classical Poetry",
    heroDesc: "Explore the joy of reunion and the melancholy of time passing through the lens of China's greatest poets.",
    enterArchives: "Enter the Archives",
    exploreCategories: "Explore by Themes",
    navAnthology: "Anthology",
    navChat: "Scholar AI",
    galleryTitle: "The Anthology",
    galleryDesc: "A comprehensive collection of works representing the duality of the New Year: the public celebration of renewal and the private contemplation of time.",
    filterAll: "All Works",
    chatTitle: "Ask the Scholar",
    chatDesc: "Interactive dialogue on history and culture",
    chatPlaceholder: "Ask about New Year traditions in the Song Dynasty...",
    chatWelcome: "Greetings. I am versed in the poetry of the Tang and Song dynasties. You may ask me about specific poets, the symbolism of 'firecrackers' or 'Tusu wine', or how the ancients coped with the passing of time during the New Year.",
    loading: "Consulting the archives...",
    footerQuote: "The years flow like water, only the ink remains.",
    dynasty: "Dynasty",
    authorBy: "by",
    collectionCount: "Collecting",
    works: "Masterpieces",
    worksCount: "works",
    analyzeBtn: "Deep Analysis",
    closeAnalysis: "Close Analysis",
    loadingAnalysis: "Analyzing poem...",
    analysisTitle: "Literary Framework Analysis",
    analysisDesc: "A structural breakdown of the themes, symbols, and emotions in the New Year poetry of the Tang and Song eras.",
    unlockAnalysis: "Generate Analysis Framework",
    generateBtn: "Generate Report",
    regenerate: "Regenerate Analysis"
  },
  zh: {
    heroTitle: "岁月",
    heroSubtitle: "唐诗宋词中的春节回响",
    heroDesc: "透过中国伟大诗人的视角，探索团圆的喜悦与时光流逝的感伤。一场走进“过年”心灵深处的旅程。",
    enterArchives: "进入卷宗",
    exploreCategories: "按主题探索",
    navAnthology: "诗词选集",
    navChat: "AI 诗学博士",
    galleryTitle: "诗词选集",
    galleryDesc: "收录全面的唐宋春节诗词，展现“过年”的多重面貌：从宫廷盛典到羁旅乡愁。",
    filterAll: "全部作品",
    chatTitle: "请教先生",
    chatDesc: "关于历史与文化的互动对话",
    chatPlaceholder: "询问关于宋代的春节习俗...",
    chatWelcome: "幸会。在下通晓唐诗宋词。你可以问我关于特定的诗人、“爆竹”或“屠苏酒”的意象，或者古人如何在新年之际面对时光流逝。",
    loading: "正在查阅典籍...",
    footerQuote: "“岁月如流，唯墨长存。”",
    dynasty: "朝",
    authorBy: "作者：",
    collectionCount: "已收录",
    works: "首传世佳作",
    worksCount: "首",
    analyzeBtn: "深度赏析",
    closeAnalysis: "收起赏析",
    loadingAnalysis: "正在赏析中...",
    analysisTitle: "文学框架深度解析",
    analysisDesc: "对唐宋新年诗词中的主题、意象与情感进行结构化剖析。",
    unlockAnalysis: "生成分析框架",
    generateBtn: "生成报告",
    regenerate: "重新生成分析"
  }
};