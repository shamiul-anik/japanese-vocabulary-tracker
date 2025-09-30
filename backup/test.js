const vocabularyData = [
  {
    id: 1,
    word: "毎朝",
    meaning: "every morning",
    furigana: "まいあさ",
    romaji: "maiasa",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "私は毎朝コーヒーを飲みます。 (Watashi wa maiasa kōhī o nomimasu.) - I drink coffee every morning."
  },
  {
    id: 2,
    word: "問題",
    meaning: "problem",
    furigana: "もんだい",
    romaji: "mondai",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "この数学の問題は難しいです。 (Kono sūgaku no mondai wa muzukashii desu.) - This math problem is difficult."
  },
  {
    id: 3,
    word: "お茶",
    meaning: "green tea",
    furigana: "おちゃ",
    romaji: "ocha",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "お茶を一杯飲みましょう。 (Ocha o ippai nomimashō.) - Let's have a cup of tea."
  },
  {
    id: 4,
    word: "黒",
    meaning: "black",
    furigana: "くろ",
    romaji: "kuro",
    level: 5,
    part_of_speech: "noun, な-adjective",
    example_sentence: "彼の車は黒いです。 (Kare no kuruma wa kuroi desu.) - His car is black."
  },
  {
    id: 5,
    word: "台所",
    meaning: "kitchen",
    furigana: "だいどころ",
    romaji: "daidokoro",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "母は台所で料理をしています。 (Haha wa daidokoro de ryōri o shite imasu.) - Mother is cooking in the kitchen."
  },
  {
    id: 6,
    word: "葉書",
    meaning: "postcard",
    furigana: "はがき",
    romaji: "hagaki",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "友達に葉書を送りました。 (Tomodachi ni hagaki o okurimashita.) - I sent a postcard to my friend."
  },
  {
    id: 7,
    word: "ペン",
    meaning: "pen",
    furigana: "",
    romaji: "pen",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "このペンで名前を書いてください。 (Kono pen de namae o kaite kudasai.) - Please write your name with this pen."
  },
  {
    id: 8,
    word: "ニュース",
    meaning: "news",
    furigana: "",
    romaji: "nyūsu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "毎晩、ニュースを見ます。 (Mai ban, nyūsu o mimasu.) - I watch the news every evening."
  },
  {
    id: 9,
    word: "花瓶",
    meaning: "a vase",
    furigana: "かびん",
    romaji: "kabin",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "花瓶にきれいな花を生けました。 (Kabin ni kirei na hana o ikemashita.) - I arranged beautiful flowers in the vase."
  },
  {
    id: 10,
    word: "フォーク",
    meaning: "fork",
    furigana: "",
    romaji: "fōku",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "フォークとナイフを使ってください。 (Fōku to naifu o tsukatte kudasai.) - Please use the fork and knife."
  },
  {
    id: 11,
    word: "引く",
    meaning: "to pull",
    furigana: "ひく",
    romaji: "hiku",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "ドアを引いて開けてください。 (Doa o hiite akete kudasai.) - Please pull the door to open it."
  },
  {
    id: 12,
    word: "フィルム",
    meaning: "roll of film",
    furigana: "",
    romaji: "firumu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "カメラのフィルムが終わりました。 (Kamera no firumu ga owarimashita.) - The camera film has run out."
  },
  {
    id: 13,
    word: "磨く",
    meaning: "to brush teeth, to polish",
    furigana: "みがく",
    romaji: "migaku",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "毎日、歯を磨きます。 (Mainichi, ha o migakimasu.) - I brush my teeth every day."
  },
  {
    id: 14,
    word: "押す",
    meaning: "to push, to stamp something",
    furigana: "おす",
    romaji: "osu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "ボタンを押して、エレベーターを呼びます。 (Botan o oshite, erebētā o yobimasu.) - I push the button to call the elevator."
  },
  {
    id: 15,
    word: "売る",
    meaning: "to sell",
    furigana: "うる",
    romaji: "uru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 16,
    word: "電気",
    meaning: "electricity, electric light",
    furigana: "でんき",
    romaji: "denki",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 17,
    word: "並ぶ",
    meaning: "to line up, to stand in a line",
    furigana: "ならぶ",
    romaji: "narabu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 18,
    word: "病気",
    meaning: "illness",
    furigana: "びょうき",
    romaji: "byōki",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 19,
    word: "ポケット",
    meaning: "pocket",
    furigana: "",
    romaji: "poketto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 20,
    word: "頭",
    meaning: "head",
    furigana: "あたま",
    romaji: "atama",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 21,
    word: "はし",
    meaning: "chopsticks",
    furigana: "",
    romaji: "hashi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 22,
    word: "英語",
    meaning: "English language",
    furigana: "えいご",
    romaji: "eigo",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 23,
    word: "家",
    meaning: "house",
    furigana: "いえ",
    romaji: "ie",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 24,
    word: "一月",
    meaning: "one month",
    furigana: "ひとつき",
    romaji: "hitotsuki",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 25,
    word: "暑い",
    meaning: "hot",
    furigana: "あつい",
    romaji: "atsui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 26,
    word: "遊ぶ",
    meaning: "to play, to make a visit",
    furigana: "あそぶ",
    romaji: "asobu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 27,
    word: "取る",
    meaning: "to take something",
    furigana: "とる",
    romaji: "toru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 28,
    word: "九",
    meaning: "nine",
    furigana: "きゅう / く",
    romaji: "kyū / ku",
    level: 5,
    part_of_speech: "numeral",
    example_sentence: "電話番号の最後の数字は九です。 (Denwa bangō no saigo no sūji wa kyū desu.) - The last digit of the phone number is nine."
  },
  {
    id: 29,
    word: "閉める",
    meaning: "to close something",
    furigana: "しめる",
    romaji: "shimeru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "出かける前に、ドアを閉めてください。 (Dekakeru mae ni, doa o shimete kudasai.) - Please close the door before you go out."
  },
  {
    id: 30,
    word: "たいへん",
    meaning: "very",
    furigana: "",
    romaji: "taihen",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "たいへんお世話になりました。 (Taihen o-sewa ni narimashita.) - Thank you very much for your help."
  },
  {
    id: 31,
    word: "奥さん",
    meaning: "(honorable) wife",
    furigana: "おくさん",
    romaji: "okusan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "田中さんの奥さんは先生です。 (Tanaka-san no okusan wa sensei desu.) - Mr. Tanaka's wife is a teacher."
  },
  {
    id: 32,
    word: "作文",
    meaning: "composition, writing",
    furigana: "さくぶん",
    romaji: "sakubun",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "作文の宿題をしました。 (Sakubun no shukudai o shimashita.) - I did my composition homework."
  },
  {
    id: 33,
    word: "便利",
    meaning: "useful, convenient",
    furigana: "べんり",
    romaji: "benri",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "このアプリはとても便利です。 (Kono apuri wa totemo benri desu.) - This app is very convenient."
  },
  {
    id: 34,
    word: "右",
    meaning: "right side",
    furigana: "みぎ",
    romaji: "migi",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "右に曲がってください。 (Migi ni magatte kudasai.) - Please turn right."
  },
  {
    id: 35,
    word: "寒い",
    meaning: "cold",
    furigana: "さむい",
    romaji: "samui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 36,
    word: "あびる",
    meaning: "to bathe, to shower",
    furigana: "",
    romaji: "abiru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 37,
    word: "十",
    meaning: "ten",
    furigana: "じゅう  とお",
    romaji: "jū  tō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 38,
    word: "中",
    meaning: "middle",
    furigana: "なか",
    romaji: "naka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 39,
    word: "消す",
    meaning: "to erase, to turn off power",
    furigana: "けす",
    romaji: "kesu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 40,
    word: "近く",
    meaning: "near",
    furigana: "ちかく",
    romaji: "chikaku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 41,
    word: "七つ",
    meaning: "seven",
    furigana: "ななつ",
    romaji: "nanatsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 42,
    word: "テープレコーダー",
    meaning: "tape recorder",
    furigana: "",
    romaji: "tēpurekōdā",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 43,
    word: "目",
    meaning: "eye",
    furigana: "め",
    romaji: "me",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 44,
    word: "空",
    meaning: "sky",
    furigana: "そら",
    romaji: "sora",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 45,
    word: "六日",
    meaning: "six days, sixth day of the month",
    furigana: "むいか",
    romaji: "muika",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 46,
    word: "座る",
    meaning: "to sit",
    furigana: "すわる",
    romaji: "suwaru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 47,
    word: "年",
    meaning: "year",
    furigana: "とし",
    romaji: "toshi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 48,
    word: "男の子",
    meaning: "boy",
    furigana: "おとこのこ",
    romaji: "otokonoko",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 49,
    word: "狭い",
    meaning: "narrow",
    furigana: "せまい",
    romaji: "semai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 50,
    word: "冷蔵庫",
    meaning: "refrigerator",
    furigana: "れいぞうこ",
    romaji: "reizōko",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 51,
    word: "カメラ",
    meaning: "camera",
    furigana: "",
    romaji: "kamera",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 52,
    word: "玄関",
    meaning: "entry hall",
    furigana: "げんかん",
    romaji: "genkan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 53,
    word: "違う",
    meaning: "to differ",
    furigana: "ちがう",
    romaji: "chigau",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 54,
    word: "危ない",
    meaning: "dangerous",
    furigana: "あぶない",
    romaji: "abunai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 55,
    word: "分かる",
    meaning: "to be understood",
    furigana: "わかる",
    romaji: "wakaru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 56,
    word: "言う",
    meaning: "to say",
    furigana: "いう",
    romaji: "iu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "「こんにちは」と言います。 (\"Konnichiwa\" to iimasu.) - I say \"hello\"."
  },
  {
    id: 57,
    word: "飲む",
    meaning: "to drink",
    furigana: "のむ",
    romaji: "nomu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "水を飲みます。 (Mizu o nomimasu.) - I drink water."
  },
  {
    id: 58,
    word: "練習",
    meaning: "to practice",
    furigana: "れんしゅうする",
    romaji: "renshūsuru",
    level: 5,
    part_of_speech: "suru-verb",
    example_sentence: "毎日、ピアノの練習をします。 (Mainichi, piano no renshū o shimasu.) - I practice piano every day."
  },
  {
    id: 59,
    word: "何",
    meaning: "what",
    furigana: "なん / なに",
    romaji: "nan / nani",
    level: 5,
    part_of_speech: "pronoun",
    example_sentence: "何をしていますか？ (Nani o shite imasu ka?) - What are you doing?"
  },
  {
    id: 60,
    word: "厚い",
    meaning: "kind, deep, thick",
    furigana: "あつい",
    romaji: "atsui",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "冬は厚いコートを着ます。 (Fuyu wa atsui kōto o kimasu.) - In winter, I wear a thick coat."
  },
  {
    id: 61,
    word: "毎月",
    meaning: "every month",
    furigana: "まいげつ / まいつき",
    romaji: "maigetsu / maitsuki",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "毎月、家賃を払います。 (Maigetsu, yachin o haraimasu.) - I pay rent every month."
  },
  {
    id: 62,
    word: "閉まる",
    meaning: "to close, to be closed",
    furigana: "しまる",
    romaji: "shimaru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 63,
    word: "脱ぐ",
    meaning: "to take off clothes",
    furigana: "ぬぐ",
    romaji: "nugu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 64,
    word: "黒い",
    meaning: "black",
    furigana: "くろい",
    romaji: "kuroi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 65,
    word: "登る",
    meaning: "to climb",
    furigana: "のぼる",
    romaji: "noboru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 66,
    word: "汚い",
    meaning: "dirty",
    furigana: "きたない",
    romaji: "kitanai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 67,
    word: "雨",
    meaning: "rain",
    furigana: "あめ",
    romaji: "ame",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 68,
    word: "お皿",
    meaning: "plate, dish",
    furigana: "おさら",
    romaji: "osara",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 69,
    word: "速い",
    meaning: "quick",
    furigana: "はやい",
    romaji: "hayai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 70,
    word: "お風呂",
    meaning: "bath",
    furigana: "おふろ",
    romaji: "ofuro",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 71,
    word: "新しい",
    meaning: "new",
    furigana: "あたらしい",
    romaji: "atarashii",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 72,
    word: "廊下",
    meaning: "corridor",
    furigana: "ろうか",
    romaji: "rōka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 73,
    word: "茶色",
    meaning: "brown",
    furigana: "ちゃいろ",
    romaji: "chairo",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 74,
    word: "コート",
    meaning: "coat, tennis court",
    furigana: "",
    romaji: "kōto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 75,
    word: "手紙",
    meaning: "letter",
    furigana: "てがみ",
    romaji: "tegami",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "祖母に手紙を書きました。 (Sobo ni tegami o kakimashita.) - I wrote a letter to my grandmother."
  },
  {
    id: 76,
    word: "要る",
    meaning: "to need",
    furigana: "いる",
    romaji: "iru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "この仕事には時間が要ります。 (Kono shigoto ni wa jikan ga irimasu.) - This job requires time."
  },
  {
    id: 77,
    word: "こっち",
    meaning: "this person or way",
    furigana: "",
    romaji: "kotchi",
    level: 5,
    part_of_speech: "pronoun",
    example_sentence: "こっちへ来てください。 (Kotchi e kite kudasai.) - Please come over here."
  },
  {
    id: 78,
    word: "スプーン",
    meaning: "spoon",
    furigana: "",
    romaji: "supūn",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "スプーンでスープを食べます。 (Supūn de sūpu o tabemasu.) - I eat soup with a spoon."
  },
  {
    id: 79,
    word: "時々",
    meaning: "sometimes",
    furigana: "ときどき",
    romaji: "tokidoki",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "時々、映画を見に行きます。 (Tokidoki, eiga o mi ni ikimasu.) - I sometimes go to see a movie."
  },
  {
    id: 80,
    word: "傘",
    meaning: "umbrella",
    furigana: "かさ",
    romaji: "kasa",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "雨が降っているので、傘を持って行きます。 (Ame ga futte iru node, kasa o motte ikimasu.) - It's raining, so I'll take an umbrella."
  },
  {
    id: 81,
    word: "いい / よい",
    meaning: "good",
    furigana: "",
    romaji: "ii / yoi",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "今日はいい天気ですね。 (Kyō wa ii tenki desu ne.) - The weather is nice today, isn't it?"
  },
  {
    id: 82,
    word: "電話",
    meaning: "telephone",
    furigana: "でんわ",
    romaji: "denwa",
    level: 5,
    part_of_speech: "noun, suru-verb",
    example_sentence: "友達に電話をかけました。 (Tomodachi ni denwa o kakemashita.) - I called my friend on the phone."
  },
  {
    id: 83,
    word: "勤める",
    meaning: "to work for someone",
    furigana: "つとめる",
    romaji: "tsutomeru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 84,
    word: "安い",
    meaning: "cheap",
    furigana: "やすい",
    romaji: "yasui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 85,
    word: "どう",
    meaning: "how, in what way",
    furigana: "",
    romaji: "dō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 86,
    word: "道",
    meaning: "street",
    furigana: "みち",
    romaji: "michi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 87,
    word: "バス",
    meaning: "bus",
    furigana: "",
    romaji: "basu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 88,
    word: "クラス",
    meaning: "class",
    furigana: "",
    romaji: "kurasu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 89,
    word: "差す",
    meaning: "to stretch out hands, to raise an umbrella",
    furigana: "さす",
    romaji: "sasu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 90,
    word: "スポーツ",
    meaning: "sport",
    furigana: "",
    romaji: "supōtsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 91,
    word: "どっち",
    meaning: "which",
    furigana: "",
    romaji: "dotchi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 92,
    word: "そば",
    meaning: "near, beside",
    furigana: "",
    romaji: "soba",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 93,
    word: "新聞",
    meaning: "newspaper",
    furigana: "しんぶん",
    romaji: "shinbun",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 94,
    word: "どうして",
    meaning: "for what reason",
    furigana: "",
    romaji: "dōshite",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 95,
    word: "庭",
    meaning: "garden",
    furigana: "にわ",
    romaji: "niwa",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 96,
    word: "大きな",
    meaning: "big",
    furigana: "おおきな",
    romaji: "ōkina",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "大きな犬が公園にいます。 (Ōkina inu ga kōen ni imasu.) - There is a big dog in the park."
  },
  {
    id: 97,
    word: "辺",
    meaning: "area",
    furigana: "へん",
    romaji: "hen",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "この辺にコンビニはありますか？ (Kono hen ni konbini wa arimasu ka?) - Is there a convenience store around here?"
  },
  {
    id: 98,
    word: "番号",
    meaning: "number",
    furigana: "ばんごう",
    romaji: "bangō",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "電話番号を教えてください。 (Denwa bangō o oshiete kudasai.) - Please tell me your phone number."
  },
  {
    id: 99,
    word: "家族",
    meaning: "family",
    furigana: "かぞく",
    romaji: "kazoku",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "私の家族は五人家族です。 (Watashi no kazoku wa go-nin kazoku desu.) - My family has five members."
  },
  {
    id: 100,
    word: "下手",
    meaning: "unskillful",
    furigana: "へた",
    romaji: "heta",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "私は料理が下手です。 (Watashi wa ryōri ga heta desu.) - I am bad at cooking."
  },
  {
    id: 101,
    word: "料理",
    meaning: "cuisine",
    furigana: "りょうり",
    romaji: "ryōri",
    level: 5,
    part_of_speech: "noun, suru-verb",
    example_sentence: "週末に美味しい料理を作ります。 (Shūmatsu ni oishii ryōri o tsukurimasu.) - I make delicious food on weekends."
  },
  {
    id: 102,
    word: "カレー",
    meaning: "curry",
    furigana: "",
    romaji: "karē",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "今日の夕食はカレーです。 (Kyō no yūshoku wa karē desu.) - Today's dinner is curry."
  },
  {
    id: 103,
    word: "六",
    meaning: "six",
    furigana: "ろく",
    romaji: "roku",
    level: 5,
    part_of_speech: "numeral",
    example_sentence: "教室には机が六つあります。 (Kyōshitsu ni wa tsukue ga muttsu arimasu.) - There are six desks in the classroom."
  },
  {
    id: 104,
    word: "今年",
    meaning: "this year",
    furigana: "ことし",
    romaji: "kotoshi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 105,
    word: "初めて",
    meaning: "for the first time",
    furigana: "はじめて",
    romaji: "hajimete",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 106,
    word: "風邪",
    meaning: "a cold",
    furigana: "かぜ",
    romaji: "kaze",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 107,
    word: "赤い",
    meaning: "red",
    furigana: "あかい",
    romaji: "akai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 108,
    word: "甘い",
    meaning: "sweet",
    furigana: "あまい",
    romaji: "amai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 109,
    word: "西",
    meaning: "west",
    furigana: "にし",
    romaji: "nishi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 110,
    word: "毎週",
    meaning: "every week",
    furigana: "まいしゅう",
    romaji: "maishū",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 111,
    word: "いつも",
    meaning: "always",
    furigana: "",
    romaji: "itsumo",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 112,
    word: "五つ",
    meaning: "five",
    furigana: "いつつ",
    romaji: "itsutsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 113,
    word: "建物",
    meaning: "building",
    furigana: "たてもの",
    romaji: "tatemono",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 114,
    word: "なる",
    meaning: "to become",
    furigana: "",
    romaji: "naru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 115,
    word: "まっすぐ",
    meaning: "straight ahead, direct",
    furigana: "",
    romaji: "massugu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 116,
    word: "作る",
    meaning: "to make",
    furigana: "つくる",
    romaji: "tsukuru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 117,
    word: "風",
    meaning: "wind",
    furigana: "かぜ",
    romaji: "kaze",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 118,
    word: "少し",
    meaning: "few",
    furigana: "すこし",
    romaji: "sukoshi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 119,
    word: "大学",
    meaning: "university",
    furigana: "だいがく",
    romaji: "daigaku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 120,
    word: "シャツ",
    meaning: "shirt",
    furigana: "",
    romaji: "shatsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 121,
    word: "病院",
    meaning: "hospital",
    furigana: "びょういん",
    romaji: "byōin",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 122,
    word: "会社",
    meaning: "company",
    furigana: "かいしゃ",
    romaji: "kaisha",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 123,
    word: "無くす",
    meaning: "to lose something",
    furigana: "なくす",
    romaji: "nakusu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 124,
    word: "スリッパ",
    meaning: "slippers",
    furigana: "",
    romaji: "surippa",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 125,
    word: "地下鉄",
    meaning: "underground train",
    furigana: "ちかてつ",
    romaji: "chikatetsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 126,
    word: "ページ",
    meaning: "page",
    furigana: "",
    romaji: "pēji",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 127,
    word: "曇る",
    meaning: "to become cloudy, to become dim",
    furigana: "くもる",
    romaji: "kumoru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 128,
    word: "辞書",
    meaning: "dictionary",
    furigana: "じしょ",
    romaji: "jisho",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 129,
    word: "万年筆",
    meaning: "fountain pen",
    furigana: "まんねんひつ",
    romaji: "mannenhitsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 130,
    word: "海",
    meaning: "sea",
    furigana: "うみ",
    romaji: "umi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 131,
    word: "エレベーター",
    meaning: "elevator",
    furigana: "",
    romaji: "erebētā",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 132,
    word: "たぶん",
    meaning: "probably",
    furigana: "",
    romaji: "tabun",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 133,
    word: "夕方",
    meaning: "evening",
    furigana: "ゆうがた",
    romaji: "yūgata",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 134,
    word: "東",
    meaning: "east",
    furigana: "ひがし",
    romaji: "higashi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 135,
    word: "声",
    meaning: "voice",
    furigana: "こえ",
    romaji: "koe",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 136,
    word: "撮る",
    meaning: "to take a photo or record a film",
    furigana: "とる",
    romaji: "toru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 137,
    word: "私",
    meaning: "(humble) I, myself",
    furigana: "わたくし",
    romaji: "watakushi",
    level: 5,
    part_of_speech: "pronoun",
    example_sentence: "わたくしは田中と申します。 (Watakushi wa Tanaka to mōshimasu.) - I am Tanaka. (Formal)"
  },
  {
    id: 138,
    word: "両親",
    meaning: "both parents",
    furigana: "りょうしん",
    romaji: "ryōshin",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "両親と旅行に行きました。 (Ryōshin to ryokō ni ikimashita.) - I went on a trip with my parents."
  },
  {
    id: 139,
    word: "きれい",
    meaning: "pretty, clean",
    furigana: "",
    romaji: "kirei",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "この花はとてもきれいです。 (Kono hana wa totemo kirei desu.) - This flower is very beautiful."
  },
  {
    id: 140,
    word: "どうぞ",
    meaning: "please",
    furigana: "",
    romaji: "dōzo",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "どうぞ、お座りください。 (Dōzo, o-suwarikudasai.) - Please, have a seat."
  },
  {
    id: 141,
    word: "好き",
    meaning: "likeable",
    furigana: "すき",
    romaji: "suki",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "私は音楽が好きです。 (Watashi wa ongaku ga suki desu.) - I like music."
  },
  {
    id: 142,
    word: "静か",
    meaning: "quiet",
    furigana: "しずか",
    romaji: "shizuka",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "図書館は静かです。 (Toshokan wa shizuka desu.) - The library is quiet."
  },
  {
    id: 143,
    word: "お父さん",
    meaning: "(honorable) father",
    furigana: "おとうさん",
    romaji: "otōsan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "お父さんは会社員です。 (Otōsan wa kaishain desu.) - My father is a company employee."
  },
  {
    id: 144,
    word: "人",
    meaning: "person",
    furigana: "ひと",
    romaji: "hito",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "この町にはたくさんの人が住んでいます。 (Kono machi ni wa takusan no hito ga sunde imasu.) - Many people live in this town."
  },
  {
    id: 145,
    word: "覚える",
    meaning: "to remember",
    furigana: "おぼえる",
    romaji: "oboeru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "新しい単語を覚えるのは楽しいです。 (Atarashii tango o oboeru no wa tanoshii desu.) - It's fun to learn new words."
  },
  {
    id: 146,
    word: "休み",
    meaning: "rest, holiday",
    furigana: "やすみ",
    romaji: "yasumi",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "明日は学校の休みです。 (Ashita wa gakkō no yasumi desu.) - Tomorrow is a school holiday."
  },
  {
    id: 147,
    word: "池",
    meaning: "pond",
    furigana: "いけ",
    romaji: "ike",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "公園の池に鯉がいます。 (Kōen no ike ni koi ga imasu.) - There are carp in the park pond."
  },
  {
    id: 148,
    word: "始まる",
    meaning: "to begin",
    furigana: "はじまる",
    romaji: "hajimaru",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "映画は七時に始まります。 (Eiga wa shichi-ji ni hajimarimasu.) - The movie starts at seven o'clock."
  },
  {
    id: 149,
    word: "困る",
    meaning: "to be worried",
    furigana: "こまる",
    romaji: "komaru",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "財布を忘れて困りました。 (Saifu o wasurete komarimashita.) - I forgot my wallet and was in trouble."
  },
  {
    id: 150,
    word: "ほか",
    meaning: "other, the rest",
    furigana: "",
    romaji: "hoka",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "ほかの質問はありますか？ (Hoka no shitsumon wa arimasu ka?) - Do you have any other questions?"
  },
  {
    id: 151,
    word: "ちゃわん",
    meaning: "rice bowl",
    furigana: "",
    romaji: "chawan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "ご飯をちゃわんに盛ります。 (Gohan o chawan ni morimasu.) - I serve rice into a bowl."
  },
  {
    id: 152,
    word: "疲れる",
    meaning: "to get tired",
    furigana: "つかれる",
    romaji: "tsukareru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "一日中歩いて、とても疲れました。 (Ichinichijū aruite, totemo tsukaremashita.) - I walked all day and got very tired."
  },
  {
    id: 153,
    word: "掃除",
    meaning: "to clean, to sweep",
    furigana: "そうじする",
    romaji: "sōjisuru",
    level: 5,
    part_of_speech: "suru-verb",
    example_sentence: "週末に部屋の掃除をします。 (Shūmatsu ni heya no sōji o shimasu.) - I clean my room on weekends."
  },
  {
    id: 154,
    word: "賑やか",
    meaning: "bustling, busy",
    furigana: "にぎやか",
    romaji: "nigiyaka",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "祭りの日は町がとても賑やかです。 (Matsuri no hi wa machi ga totemo nigiyaka desu.) - The town is very lively on festival day."
  },
  {
    id: 155,
    word: "一つ",
    meaning: "one",
    furigana: "ひとつ",
    romaji: "hitotsu",
    level: 5,
    part_of_speech: "numeral",
    example_sentence: "ケーキを一つください。 (Kēki o hitotsu kudasai.) - One cake, please."
  },
  {
    id: 156,
    word: "来週",
    meaning: "next week",
    furigana: "らいしゅう",
    romaji: "raishū",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "来週、試験があります。 (Raishū, shiken ga arimasu.) - I have an exam next week."
  },
  {
    id: 157,
    word: "財布",
    meaning: "wallet",
    furigana: "さいふ",
    romaji: "saifu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "財布にお金を入れます。 (Saifu ni okane o iremasu.) - I put money in my wallet."
  },
  {
    id: 158,
    word: "知る",
    meaning: "to know",
    furigana: "しる",
    romaji: "shiru",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "その人の名前を知っていますか？ (Sono hito no namae o shitte imasu ka?) - Do you know that person's name?"
  },
  {
    id: 159,
    word: "教える",
    meaning: "to teach, to tell",
    furigana: "おしえる",
    romaji: "oshieru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "先生が新しい漢字を教えてくれました。 (Sensei ga atarashii kanji o oshiete kuremashita.) - The teacher taught us a new kanji."
  },
  {
    id: 160,
    word: "朝御飯",
    meaning: "breakfast",
    furigana: "あさごはん",
    romaji: "asagohan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "朝御飯はパンとコーヒーです。 (Asagohan wa pan to kōhī desu.) - Breakfast is bread and coffee."
  },
  {
    id: 161,
    word: "飛ぶ",
    meaning: "to fly, to hop",
    furigana: "とぶ",
    romaji: "tobu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "鳥が空を飛んでいます。 (Tori ga sora o tonde imasu.) - Birds are flying in the sky."
  },
  {
    id: 162,
    word: "言葉",
    meaning: "word, language",
    furigana: "ことば",
    romaji: "kotoba",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "日本語の言葉を勉強しています。 (Nihongo no kotoba o benkyō shite imasu.) - I am studying Japanese words."
  },
  {
    id: 163,
    word: "キロ / キログラム",
    meaning: "kilogram",
    furigana: "",
    romaji: "kiro / kiroguramu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "この荷物は三キロあります。 (Kono nimotsu wa san-kiro arimasu.) - This luggage weighs three kilograms."
  },
  {
    id: 164,
    word: "赤",
    meaning: "red",
    furigana: "あか",
    romaji: "aka",
    level: 5,
    part_of_speech: "noun, な-adjective",
    example_sentence: "信号が赤になったら、止まってください。 (Shingō ga aka ni nattara, tomatte kudasai.) - When the light turns red, please stop."
  },
  {
    id: 165,
    word: "自分",
    meaning: "oneself",
    furigana: "じぶん",
    romaji: "jibun",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 166,
    word: "デパート",
    meaning: "department store",
    furigana: "",
    romaji: "depāto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 167,
    word: "薄い",
    meaning: "thin, weak",
    furigana: "うすい",
    romaji: "usui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 168,
    word: "高い",
    meaning: "tall, expensive",
    furigana: "たかい",
    romaji: "takai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 169,
    word: "帰る",
    meaning: "to go back",
    furigana: "かえる",
    romaji: "kaeru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 170,
    word: "はい",
    meaning: "yes",
    furigana: "",
    romaji: "hai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 171,
    word: "卵",
    meaning: "egg",
    furigana: "たまご",
    romaji: "tamago",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 172,
    word: "低い",
    meaning: "short, low",
    furigana: "ひくい",
    romaji: "hikui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 173,
    word: "なぜ",
    meaning: "why",
    furigana: "",
    romaji: "naze",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 174,
    word: "一日",
    meaning: "(1) one day, (2) first of month",
    furigana: "いちにち",
    romaji: "ichinichi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 175,
    word: "いいえ",
    meaning: "no",
    furigana: "",
    romaji: "iie",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 176,
    word: "小さな",
    meaning: "little",
    furigana: "ちいさな",
    romaji: "chiisana",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 177,
    word: "時間",
    meaning: "time",
    furigana: "じかん",
    romaji: "jikan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 178,
    word: "上げる",
    meaning: "to give",
    furigana: "あげる",
    romaji: "ageru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "友達にプレゼントをあげました。 (Tomodachi ni purezento o agemashita.) - I gave a present to my friend."
  },
  {
    id: 179,
    word: "ふろ",
    meaning: "bath",
    furigana: "",
    romaji: "furo",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "毎日、ふろに入ります。 (Mainichi, furo ni hairimasu.) - I take a bath every day."
  },
  {
    id: 180,
    word: "生徒",
    meaning: "pupil",
    furigana: "せいと",
    romaji: "seito",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "この学校には五百人の生徒がいます。 (Kono gakkō ni wa gohyaku-nin no seito ga imasu.) - There are five hundred students in this school."
  },
  {
    id: 181,
    word: "レストラン",
    meaning: "restaurant",
    furigana: "",
    romaji: "resutoran",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "週末にレストランで食事をします。 (Shūmatsu ni resutoran de shokuji o shimasu.) - I eat at a restaurant on weekends."
  },
  {
    id: 182,
    word: "出す",
    meaning: "to put out",
    furigana: "だす",
    romaji: "dasu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "ゴミを出してください。 (Gomi o dashite kudasai.) - Please take out the trash."
  },
  {
    id: 183,
    word: "かわいい",
    meaning: "cute",
    furigana: "",
    romaji: "kawaii",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "その子猫はとてもかわいいです。 (Sono koneko wa totemo kawaii desu.) - That kitten is very cute."
  },
  {
    id: 184,
    word: "音楽",
    meaning: "music",
    furigana: "おんがく",
    romaji: "ongaku",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "音楽を聞くのが好きです。 (Ongaku o kiku no ga suki desu.) - I like listening to music."
  },
  {
    id: 185,
    word: "歌",
    meaning: "song",
    furigana: "うた",
    romaji: "uta",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "日本の歌を歌います。 (Nihon no uta o utaimasu.) - I sing Japanese songs."
  },
  {
    id: 186,
    word: "いちばん",
    meaning: "best, first",
    furigana: "",
    romaji: "ichiban",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 187,
    word: "咲く",
    meaning: "to bloom",
    furigana: "さく",
    romaji: "saku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 188,
    word: "山",
    meaning: "mountain",
    furigana: "やま",
    romaji: "yama",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 189,
    word: "テレビ",
    meaning: "television",
    furigana: "",
    romaji: "terebi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 190,
    word: "授業",
    meaning: "lesson, class work",
    furigana: "じゅぎょう",
    romaji: "jugyō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 191,
    word: "暖かい",
    meaning: "warm",
    furigana: "あたたかい",
    romaji: "atatakai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 192,
    word: "セーター",
    meaning: "sweater, jumper",
    furigana: "",
    romaji: "sētā",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 193,
    word: "自転車",
    meaning: "bicycle",
    furigana: "じてんしゃ",
    romaji: "jitensha",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 194,
    word: "ラジカセ / ラジオカセット",
    meaning: "radio cassette player",
    furigana: "",
    romaji: "rajikase / rajiokasetto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 195,
    word: "つける",
    meaning: "to turn on",
    furigana: "",
    romaji: "tsukeru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 196,
    word: "さ来年",
    meaning: "year after next",
    furigana: "さらいねん",
    romaji: "sarainen",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 197,
    word: "学校",
    meaning: "school",
    furigana: "がっこう",
    romaji: "gakkō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 198,
    word: "いくら",
    meaning: "how much?",
    furigana: "",
    romaji: "ikura",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 199,
    word: "四",
    meaning: "four",
    furigana: "し / よん",
    romaji: "shi / yon",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 200,
    word: "入る",
    meaning: "to enter, to contain",
    furigana: "はいる",
    romaji: "hairu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 201,
    word: "曇り",
    meaning: "cloudy weather",
    furigana: "くもり",
    romaji: "kumori",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 202,
    word: "外国",
    meaning: "foreign country",
    furigana: "がいこく",
    romaji: "gaikoku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 203,
    word: "温い",
    meaning: "luke warm",
    furigana: "ぬるい",
    romaji: "nurui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 204,
    word: "そうして / そして",
    meaning: "and",
    furigana: "",
    romaji: "sōshite / soshite",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 205,
    word: "どうも",
    meaning: "thanks",
    furigana: "",
    romaji: "dōmo",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "どうも、ありがとうございます。 (Dōmo, arigatō gozaimasu.) - Thank you very much."
  },
  {
    id: 206,
    word: "仕事",
    meaning: "job",
    furigana: "しごと",
    romaji: "shigoto",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "毎日、八時間仕事します。 (Mainichi, hachi-jikan shigoto shimasu.) - I work eight hours every day."
  },
  {
    id: 207,
    word: "窓",
    meaning: "window",
    furigana: "まど",
    romaji: "mado",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "窓からきれいな景色が見えます。 (Mado kara kirei na keshiki ga miemasu.) - I can see a beautiful view from the window."
  },
  {
    id: 208,
    word: "晩",
    meaning: "evening",
    furigana: "ばん",
    romaji: "ban",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "晩ご飯は何にしますか？ (Bangohan wa nani ni shimasu ka?) - What shall we have for dinner?"
  },
  {
    id: 209,
    word: "難しい",
    meaning: "difficult",
    furigana: "むずかしい",
    romaji: "muzukashii",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "この問題は難しいです。 (Kono mondai wa muzukashii desu.) - This problem is difficult."
  },
  {
    id: 210,
    word: "村",
    meaning: "village",
    furigana: "むら",
    romaji: "mura",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "田舎の村に住んでいます。 (Inaka no mura ni sunde imasu.) - I live in a village in the countryside."
  },
  {
    id: 211,
    word: "鉛筆",
    meaning: "pencil",
    furigana: "えんぴつ",
    romaji: "enpitsu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "鉛筆で絵を描きます。 (Enpitsu de e o kakimasu.) - I draw pictures with a pencil."
  },
  {
    id: 212,
    word: "長い",
    meaning: "long",
    furigana: "ながい",
    romaji: "nagai",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "この道はとても長いです。 (Kono michi wa totemo nagai desu.) - This road is very long."
  },
  {
    id: 213,
    word: "生まれる",
    meaning: "to be born",
    furigana: "うまれる",
    romaji: "umareru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 214,
    word: "雑誌",
    meaning: "magazine",
    furigana: "ざっし",
    romaji: "zasshi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 215,
    word: "国",
    meaning: "country",
    furigana: "くに",
    romaji: "kuni",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 216,
    word: "おまわりさん",
    meaning: "friendly term for policeman",
    furigana: "",
    romaji: "omawarisan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 217,
    word: "今朝",
    meaning: "this morning",
    furigana: "けさ",
    romaji: "kesa",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 218,
    word: "晴れる",
    meaning: "to be sunny",
    furigana: "はれる",
    romaji: "hareru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 219,
    word: "夕飯",
    meaning: "dinner",
    furigana: "ゆうはん",
    romaji: "yūhan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "夕飯の後で、散歩します。 (Yūhan no ato de, sanpo shimasu.) - I go for a walk after dinner."
  },
  {
    id: 220,
    word: "一緒",
    meaning: "together",
    furigana: "いっしょ",
    romaji: "issho",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "友達と一緒に映画を見に行きました。 (Tomodachi to issho ni eiga o mi ni ikimashita.) - I went to see a movie with my friend."
  },
  {
    id: 221,
    word: "どれ",
    meaning: "which (of three or more)",
    furigana: "",
    romaji: "dore",
    level: 5,
    part_of_speech: "pronoun",
    example_sentence: "どれが私の傘ですか？ (Dore ga watashi no kasa desu ka?) - Which one is my umbrella?"
  },
  {
    id: 222,
    word: "立つ",
    meaning: "to stand",
    furigana: "たつ",
    romaji: "tatsu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "電車の中で立ちました。 (Densha no naka de tachimashita.) - I stood up in the train."
  },
  {
    id: 223,
    word: "元気",
    meaning: "health, vitality",
    furigana: "げんき",
    romaji: "genki",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "お元気ですか？ (O-genki desu ka?) - How are you? (Literally: Are you healthy?)"
  },
  {
    id: 224,
    word: "天気",
    meaning: "weather",
    furigana: "てんき",
    romaji: "tenki",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "今日の天気は晴れです。 (Kyō no tenki wa hare desu.) - Today's weather is sunny."
  },
  {
    id: 225,
    word: "医者",
    meaning: "medical doctor",
    furigana: "いしゃ",
    romaji: "isha",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "熱があるので、医者に行きます。 (Netsu ga aru node, isha ni ikimasu.) - I have a fever, so I'm going to the doctor."
  },
  {
    id: 226,
    word: "七",
    meaning: "seven",
    furigana: "しち / なな",
    romaji: "shichi / nana",
    level: 5,
    part_of_speech: "numeral",
    example_sentence: "一週間は七日です。 (Isshūkan wa nanoka desu.) - A week has seven days."
  },
  {
    id: 227,
    word: "はく",
    meaning: "to wear, to put on trousers",
    furigana: "",
    romaji: "haku",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "ズボンをはいてください。 (Zubon o haite kudasai.) - Please put on your pants."
  },
  {
    id: 228,
    word: "だんだん",
    meaning: "gradually",
    furigana: "",
    romaji: "dandan",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "だんだん暖かくなってきました。 (Dandan atatakaku natte kimashita.) - It's gradually getting warmer."
  },
  {
    id: 229,
    word: "戸",
    meaning: "Japanese style door",
    furigana: "と",
    romaji: "to",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "戸を閉めて、蚊が入らないようにします。 (To o shimete, ka ga hairanai yō ni shimasu.) - I close the door so mosquitoes don't get in."
  },
  {
    id: 230,
    word: "ノート",
    meaning: "notebook, exercise book",
    furigana: "",
    romaji: "nōto",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "ノートに先生の話を書きます。 (Nōto ni sensei no hanashi o kakimasu.) - I write down what the teacher says in my notebook."
  },
  {
    id: 231,
    word: "また",
    meaning: "again, and",
    furigana: "",
    romaji: "mata",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "また明日会いましょう。 (Mata ashita aimashō.) - Let's meet again tomorrow."
  },
  {
    id: 232,
    word: "今日",
    meaning: "today",
    furigana: "きょう",
    romaji: "kyō",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "今日は何曜日ですか？ (Kyō wa nanyōbi desu ka?) - What day of the week is today?"
  },
  {
    id: 233,
    word: "とても",
    meaning: "very",
    furigana: "",
    romaji: "totemo",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "この映画はとても面白かったです。 (Kono eiga wa totemo omoshirokatta desu.) - This movie was very interesting."
  },
  {
    id: 234,
    word: "一昨年",
    meaning: "year before last",
    furigana: "おととし",
    romaji: "ototoshi",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "一昨年、日本に行きました。 (Ototoshi, Nihon ni ikimashita.) - I went to Japan the year before last."
  },
  {
    id: 235,
    word: "文章",
    meaning: "sentence, text",
    furigana: "ぶんしょう",
    romaji: "bunshō",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "短い文章を書きました。 (Mijikai bunshō o kakimashita.) - I wrote a short sentence."
  },
  {
    id: 236,
    word: "公園",
    meaning: "park",
    furigana: "こうえん",
    romaji: "kōen",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "公園で子供たちが遊んでいます。 (Kōen de kodomotachi ga asonde imasu.) - Children are playing in the park."
  },
  {
    id: 237,
    word: "借りる",
    meaning: "to borrow",
    furigana: "かりる",
    romaji: "kariru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "図書館で本を借ります。 (Toshokan de hon o karimasu.) - I borrow books from the library."
  },
  {
    id: 238,
    word: "口",
    meaning: "mouth, opening",
    furigana: "くち",
    romaji: "kuchi",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "口を大きく開けてください。 (Kuchi o ōkiku akete kudasai.) - Please open your mouth wide."
  },
  {
    id: 239,
    word: "持つ",
    meaning: "to hold",
    furigana: "もつ",
    romaji: "motsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 240,
    word: "上着",
    meaning: "jacket",
    furigana: "うわぎ",
    romaji: "uwagi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 241,
    word: "秋",
    meaning: "autumn",
    furigana: "あき",
    romaji: "aki",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 242,
    word: "悪い",
    meaning: "bad",
    furigana: "わるい",
    romaji: "warui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 243,
    word: "青い",
    meaning: "blue",
    furigana: "あおい",
    romaji: "aoi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 244,
    word: "住む",
    meaning: "to live in",
    furigana: "すむ",
    romaji: "sumu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 245,
    word: "かける",
    meaning: "to call by phone",
    furigana: "",
    romaji: "kakeru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 246,
    word: "木曜日",
    meaning: "Thursday",
    furigana: "もくようび",
    romaji: "mokuyōbi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 247,
    word: "忘れる",
    meaning: "to forget",
    furigana: "わすれる",
    romaji: "wasureru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 248,
    word: "お手洗い",
    meaning: "bathroom",
    furigana: "おてあらい",
    romaji: "otearai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 249,
    word: "写真",
    meaning: "photograph",
    furigana: "しゃしん",
    romaji: "shashin",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 250,
    word: "ゼロ",
    meaning: "zero",
    furigana: "",
    romaji: "zero",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 251,
    word: "いろいろ",
    meaning: "various",
    furigana: "",
    romaji: "iroiro",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 252,
    word: "もう",
    meaning: "already",
    furigana: "",
    romaji: "mō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 253,
    word: "会う",
    meaning: "to meet",
    furigana: "あう",
    romaji: "au",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 254,
    word: "南",
    meaning: "south",
    furigana: "みなみ",
    romaji: "minami",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 255,
    word: "五日",
    meaning: "five days, fifth day",
    furigana: "いつか",
    romaji: "itsuka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 256,
    word: "着る",
    meaning: "to put on from the shoulders down",
    furigana: "きる",
    romaji: "kiru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 257,
    word: "そこ",
    meaning: "that place",
    furigana: "",
    romaji: "soko",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 258,
    word: "終る",
    meaning: "to finish",
    furigana: "おわる",
    romaji: "owaru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 259,
    word: "どの",
    meaning: "which",
    furigana: "",
    romaji: "dono",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 260,
    word: "読む",
    meaning: "to read",
    furigana: "よむ",
    romaji: "yomu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "新聞を読みます。 (Shinbun o yomimasu.) - I read the newspaper."
  },
  {
    id: 261,
    word: "それでは",
    meaning: "in that situation",
    furigana: "",
    romaji: "soredeha",
    level: 5,
    part_of_speech: "conjunction",
    example_sentence: "それでは、また明日。 (Sore de wa, mata ashita.) - Well then, see you tomorrow."
  },
  {
    id: 262,
    word: "来月",
    meaning: "next month",
    furigana: "らいげつ",
    romaji: "raigetsu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "来月、誕生日です。 (Raigetsu, tanjōbi desu.) - My birthday is next month."
  },
  {
    id: 263,
    word: "果物",
    meaning: "fruit",
    furigana: "くだもの",
    romaji: "kudamono",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "果物を食べると、健康になります。 (Kudamono o taberu to, kenkō ni narimasu.) - Eating fruit makes you healthy."
  },
  {
    id: 264,
    word: "止まる",
    meaning: "to come to a halt",
    furigana: "とまる",
    romaji: "tomaru",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "信号が赤になったら、車は止まります。 (Shingō ga aka ni nattara, kuruma wa tomarimasu.) - When the light turns red, cars stop."
  },
  {
    id: 265,
    word: "着く",
    meaning: "to arrive at",
    furigana: "つく",
    romaji: "tsuku",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "空港に着きました。 (Kūkō ni tsukimashita.) - I arrived at the airport."
  },
  {
    id: 266,
    word: "大好き",
    meaning: "to be very likeable",
    furigana: "だいすき",
    romaji: "daisuki",
    level: 5,
    part_of_speech: "な-adjective",
    example_sentence: "チョコレートが大好きです。 (Chokorēto ga daisuki desu.) - I love chocolate very much."
  },
  {
    id: 267,
    word: "妹",
    meaning: "(humble) younger sister",
    furigana: "いもうと",
    romaji: "imōto",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "妹は中学生です。 (Imōto wa chūgakusei desu.) - My younger sister is a junior high school student."
  },
  {
    id: 268,
    word: "夏",
    meaning: "summer",
    furigana: "なつ",
    romaji: "natsu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "夏は海に行きます。 (Natsu wa umi ni ikimasu.) - In summer, I go to the beach."
  },
  {
    id: 269,
    word: "今晩",
    meaning: "this evening",
    furigana: "こんばん",
    romaji: "konban",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "今晩、何をしますか？ (Konban, nani o shimasu ka?) - What will you do this evening?"
  },
  {
    id: 270,
    word: "塩",
    meaning: "salt",
    furigana: "しお",
    romaji: "shio",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "このスープは塩が足りません。 (Kono sūpu wa shio ga tarimasen.) - This soup needs more salt."
  },
  {
    id: 271,
    word: "先週",
    meaning: "last week",
    furigana: "せんしゅう",
    romaji: "senshū",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "先週、映画を見に行きました。 (Senshū, eiga o mi ni ikimashita.) - I went to see a movie last week."
  },
  {
    id: 272,
    word: "欲しい",
    meaning: "want",
    furigana: "ほしい",
    romaji: "hoshii",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "新しいパソコンが欲しいです。 (Atarashii pasokon ga hoshii desu.) - I want a new computer."
  },
  {
    id: 273,
    word: "木",
    meaning: "tree, wood",
    furigana: "き",
    romaji: "ki",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "公園に大きな木があります。 (Kōen ni ōkina ki ga arimasu.) - There is a big tree in the park."
  },
  {
    id: 274,
    word: "ほんとう",
    meaning: "truth",
    furigana: "",
    romaji: "hontō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 275,
    word: "薬",
    meaning: "medicine",
    furigana: "くすり",
    romaji: "kusuri",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 276,
    word: "お菓子",
    meaning: "sweets, candy",
    furigana: "おかし",
    romaji: "okashi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 277,
    word: "金曜日",
    meaning: "Friday",
    furigana: "きんようび",
    romaji: "kin'yōbi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 278,
    word: "まずい",
    meaning: "unpleasant",
    furigana: "",
    romaji: "mazui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 279,
    word: "お酒",
    meaning: "alcohol, rice wine",
    furigana: "おさけ",
    romaji: "osake",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 280,
    word: "多い",
    meaning: "many",
    furigana: "おおい",
    romaji: "ōi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 281,
    word: "動物",
    meaning: "animal",
    furigana: "どうぶつ",
    romaji: "dōbutsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 282,
    word: "切符",
    meaning: "ticket",
    furigana: "きっぷ",
    romaji: "kippu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 283,
    word: "キロ / キロメートル",
    meaning: "kilometre",
    furigana: "",
    romaji: "kiro / kiromētoru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 284,
    word: "呼ぶ",
    meaning: "to call out, to invite",
    furigana: "よぶ",
    romaji: "yobu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 285,
    word: "体",
    meaning: "body",
    furigana: "からだ",
    romaji: "karada",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 286,
    word: "ゆっくりと",
    meaning: "slowly",
    furigana: "",
    romaji: "yukkurito",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 287,
    word: "二日",
    meaning: "two days, second day of the month",
    furigana: "ふつか",
    romaji: "futsuka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 288,
    word: "大人",
    meaning: "adult",
    furigana: "おとな",
    romaji: "otona",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 289,
    word: "歯",
    meaning: "tooth",
    furigana: "は",
    romaji: "ha",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 290,
    word: "冬",
    meaning: "winter",
    furigana: "ふゆ",
    romaji: "fuyu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 291,
    word: "所",
    meaning: "place",
    furigana: "ところ",
    romaji: "tokoro",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 292,
    word: "吹く",
    meaning: "to blow",
    furigana: "ふく",
    romaji: "fuku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 293,
    word: "足",
    meaning: "foot, leg",
    furigana: "あし",
    romaji: "ashi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 294,
    word: "箱",
    meaning: "box",
    furigana: "はこ",
    romaji: "hako",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 295,
    word: "八",
    meaning: "eight",
    furigana: "はち",
    romaji: "hachi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 296,
    word: "朝",
    meaning: "morning",
    furigana: "あさ",
    romaji: "asa",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 297,
    word: "一昨日",
    meaning: "day before yesterday",
    furigana: "おととい",
    romaji: "ototoi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 298,
    word: "有名",
    meaning: "famous",
    furigana: "ゆうめい",
    romaji: "yūmei",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 299,
    word: "二十日",
    meaning: "twenty days, twentieth",
    furigana: "はつか",
    romaji: "hatsuka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 300,
    word: "近い",
    meaning: "near",
    furigana: "ちかい",
    romaji: "chikai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 301,
    word: "ください",
    meaning: "please",
    furigana: "",
    romaji: "kudasai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 302,
    word: "時計",
    meaning: "watch, clock",
    furigana: "とけい",
    romaji: "tokei",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 303,
    word: "午後",
    meaning: "afternoon",
    furigana: "ごご",
    romaji: "gogo",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 304,
    word: "食べ物",
    meaning: "food",
    furigana: "たべもの",
    romaji: "tabemono",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 305,
    word: "降る",
    meaning: "to fall, e.g. rain or snow",
    furigana: "ふる",
    romaji: "furu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 306,
    word: "易しい",
    meaning: "easy, simple",
    furigana: "やさしい",
    romaji: "yasashii",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 307,
    word: "大使館",
    meaning: "embassy",
    furigana: "たいしかん",
    romaji: "taishikan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 308,
    word: "誰",
    meaning: "who",
    furigana: "だれ",
    romaji: "dare",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 309,
    word: "上",
    meaning: "on top of",
    furigana: "うえ",
    romaji: "ue",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 310,
    word: "五",
    meaning: "five",
    furigana: "ご",
    romaji: "go",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 311,
    word: "十日",
    meaning: "ten days, the tenth day",
    furigana: "とおか",
    romaji: "tōka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 312,
    word: "どちら",
    meaning: "which of two",
    furigana: "",
    romaji: "dochira",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 313,
    word: "プール",
    meaning: "swimming pool",
    furigana: "",
    romaji: "pūru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 314,
    word: "小さい",
    meaning: "little",
    furigana: "ちいさい",
    romaji: "chiisai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 315,
    word: "今週",
    meaning: "this week",
    furigana: "こんしゅう",
    romaji: "konshū",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 316,
    word: "肉",
    meaning: "meat",
    furigana: "にく",
    romaji: "niku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 317,
    word: "零",
    meaning: "zero",
    furigana: "れい",
    romaji: "rei",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 318,
    word: "豚肉",
    meaning: "pork",
    furigana: "ぶたにく",
    romaji: "butaniku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 319,
    word: "広い",
    meaning: "spacious, wide",
    furigana: "ひろい",
    romaji: "hiroi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 320,
    word: "靴下",
    meaning: "socks",
    furigana: "くつした",
    romaji: "kutsushita",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 321,
    word: "一人",
    meaning: "one person",
    furigana: "ひとり",
    romaji: "hitori",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 322,
    word: "かぎ",
    meaning: "key",
    furigana: "",
    romaji: "kagi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 323,
    word: "向こう",
    meaning: "over there",
    furigana: "むこう",
    romaji: "mukō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 324,
    word: "上手",
    meaning: "skillful",
    furigana: "じょうず",
    romaji: "jōzu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 325,
    word: "牛肉",
    meaning: "beef",
    furigana: "ぎゅうにく",
    romaji: "gyūniku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 326,
    word: "話",
    meaning: "talk, story",
    furigana: "はなし",
    romaji: "hanashi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 327,
    word: "毎晩",
    meaning: "every night",
    furigana: "まいばん",
    romaji: "maiban",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 328,
    word: "三つ",
    meaning: "three",
    furigana: "みっつ",
    romaji: "mittsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 329,
    word: "吸う",
    meaning: "to smoke, to suck",
    furigana: "すう",
    romaji: "sū",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 330,
    word: "銀行",
    meaning: "bank",
    furigana: "ぎんこう",
    romaji: "ginkō",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 331,
    word: "大切",
    meaning: "important",
    furigana: "たいせつ",
    romaji: "taisetsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 332,
    word: "学生",
    meaning: "student",
    furigana: "がくせい",
    romaji: "gakusei",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 333,
    word: "部屋",
    meaning: "room",
    furigana: "へや",
    romaji: "heya",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 334,
    word: "昼御飯",
    meaning: "midday meal",
    furigana: "ひるごはん",
    romaji: "hirugohan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 335,
    word: "下",
    meaning: "below",
    furigana: "した",
    romaji: "shita",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 336,
    word: "二つ",
    meaning: "two",
    furigana: "ふたつ",
    romaji: "futatsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 337,
    word: "百",
    meaning: "hundred",
    furigana: "ひゃく",
    romaji: "hyaku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 338,
    word: "地図",
    meaning: "map",
    furigana: "ちず",
    romaji: "chizu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 339,
    word: "八百屋",
    meaning: "greengrocer",
    furigana: "やおや",
    romaji: "yaoya",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 340,
    word: "ネクタイ",
    meaning: "tie, necktie",
    furigana: "",
    romaji: "nekutai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 341,
    word: "去年",
    meaning: "last year",
    furigana: "きょねん",
    romaji: "kyonen",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 342,
    word: "火曜日",
    meaning: "Tuesday",
    furigana: "かようび",
    romaji: "kayōbi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 343,
    word: "乗る",
    meaning: "to get on, to ride",
    furigana: "のる",
    romaji: "noru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 344,
    word: "弟",
    meaning: "younger brother",
    furigana: "おとうと",
    romaji: "otōto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 345,
    word: "あなた",
    meaning: "you",
    furigana: "",
    romaji: "anata",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 346,
    word: "千",
    meaning: "thousand",
    furigana: "せん",
    romaji: "sen",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 347,
    word: "緑",
    meaning: "green",
    furigana: "みどり",
    romaji: "midori",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 348,
    word: "とり肉",
    meaning: "chicken meat",
    furigana: "とりにく",
    romaji: "toriniku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 349,
    word: "軽い",
    meaning: "light",
    furigana: "かるい",
    romaji: "karui",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 350,
    word: "あまり",
    meaning: "not very",
    furigana: "",
    romaji: "amari",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 351,
    word: "帽子",
    meaning: "hat",
    furigana: "ぼうし",
    romaji: "bōshi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 352,
    word: "丈夫",
    meaning: "strong, durable",
    furigana: "じょうぶ",
    romaji: "jōbu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 353,
    word: "入れる",
    meaning: "to put in",
    furigana: "いれる",
    romaji: "ireru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 354,
    word: "二十歳",
    meaning: "20 years old, 20th year",
    furigana: "はたち",
    romaji: "hatachi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 355,
    word: "三日",
    meaning: "three days, third day of the month",
    furigana: "みっか",
    romaji: "mikka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 356,
    word: "遠い",
    meaning: "far",
    furigana: "とおい",
    romaji: "tōi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 357,
    word: "夏休み",
    meaning: "summer holiday",
    furigana: "なつやすみ",
    romaji: "natsuyasumi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 358,
    word: "友達",
    meaning: "friend",
    furigana: "ともだち",
    romaji: "tomodachi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 359,
    word: "横",
    meaning: "beside, side, width",
    furigana: "よこ",
    romaji: "yoko",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 360,
    word: "冷たい",
    meaning: "cold to the touch",
    furigana: "つめたい",
    romaji: "tsumetai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 361,
    word: "夜",
    meaning: "evening, night",
    furigana: "よる",
    romaji: "yoru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 362,
    word: "トイレ",
    meaning: "toilet",
    furigana: "",
    romaji: "toire",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 363,
    word: "おなか",
    meaning: "stomach",
    furigana: "",
    romaji: "onaka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 364,
    word: "どこ",
    meaning: "where",
    furigana: "",
    romaji: "doko",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 365,
    word: "暇",
    meaning: "free time",
    furigana: "ひま",
    romaji: "hima",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 366,
    word: "鳴く",
    meaning: "animal noise. to chirp, roar or croak etc.",
    furigana: "なく",
    romaji: "naku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 367,
    word: "隣",
    meaning: "next door to",
    furigana: "となり",
    romaji: "tonari",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 368,
    word: "先生",
    meaning: "teacher, doctor",
    furigana: "せんせい",
    romaji: "sensei",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 369,
    word: "出口",
    meaning: "exit",
    furigana: "でぐち",
    romaji: "deguchi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 370,
    word: "後ろ",
    meaning: "behind",
    furigana: "うしろ",
    romaji: "ushiro",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 371,
    word: "先月",
    meaning: "last month",
    furigana: "せんげつ",
    romaji: "sengetsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 372,
    word: "テープ",
    meaning: "tape",
    furigana: "",
    romaji: "tēpu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 373,
    word: "お姉さん",
    meaning: "(honorable) older sister",
    furigana: "おねえさん",
    romaji: "oneesan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 374,
    word: "じゃ / じゃあ",
    meaning: "well then…",
    furigana: "",
    romaji: "ja / jaa",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 375,
    word: "本",
    meaning: "book",
    furigana: "ほん",
    romaji: "hon",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 376,
    word: "泳ぐ",
    meaning: "to swim",
    furigana: "およぐ",
    romaji: "oyogu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "夏は海で泳ぎます。 (Natsu wa umi de oyogimasu.) - I swim in the sea in summer."
  },
  {
    id: 377,
    word: "灰皿",
    meaning: "ashtray",
    furigana: "はいざら",
    romaji: "haizara",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "灰皿にタバコの灰を落としてください。 (Haizara ni tabako no hai o otoshite kudasai.) - Please put the cigarette ash in the ashtray."
  },
  {
    id: 378,
    word: "門",
    meaning: "gate",
    furigana: "もん",
    romaji: "mon",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "学校の門は七時に開きます。 (Gakkō no mon wa shichi-ji ni akimasu.) - The school gate opens at seven o'clock."
  },
  {
    id: 379,
    word: "荷物",
    meaning: "luggage",
    furigana: "にもつ",
    romaji: "nimotsu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "駅で荷物を預けました。 (Eki de nimotsu o azukemashita.) - I left my luggage at the station."
  },
  {
    id: 380,
    word: "この",
    meaning: "this",
    furigana: "",
    romaji: "kono",
    level: 5,
    part_of_speech: "pre-noun adjectival",
    example_sentence: "この本は面白いです。 (Kono hon wa omoshiroi desu.) - This book is interesting."
  },
  {
    id: 381,
    word: "書く",
    meaning: "to write",
    furigana: "かく",
    romaji: "kaku",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "日記に今日のことを書きます。 (Nikki ni kyō no koto o kakimasu.) - I write about today in my diary."
  },
  {
    id: 382,
    word: "毎年",
    meaning: "every year",
    furigana: "まいねん / まいとし",
    romaji: "mainen / maitoshi",
    level: 5,
    part_of_speech: "adverb",
    example_sentence: "毎年、家族で旅行に行きます。 (Maitoshi, kazoku de ryokō ni ikimasu.) - Every year, I go on a trip with my family."
  },
  {
    id: 383,
    word: "明日",
    meaning: "tomorrow",
    furigana: "あした",
    romaji: "ashita",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "明日は休みです。 (Ashita wa yasumi desu.) - Tomorrow is a holiday."
  },
  {
    id: 384,
    word: "ホテル",
    meaning: "hotel",
    furigana: "",
    romaji: "hoteru",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "旅行では、ホテルに泊まります。 (Ryokō de wa, hoteru ni tomarimasu.) - On trips, I stay at a hotel."
  },
  {
    id: 385,
    word: "降りる",
    meaning: "to get off, to descend",
    furigana: "おりる",
    romaji: "oriru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "次の駅で電車を降ります。 (Tsugi no eki de densha o orimasu.) - I will get off the train at the next station."
  },
  {
    id: 386,
    word: "重い",
    meaning: "heavy",
    furigana: "おもい",
    romaji: "omoi",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "この荷物はとても重いです。 (Kono nimotsu wa totemo omoi desu.) - This luggage is very heavy."
  },
  {
    id: 387,
    word: "電車",
    meaning: "electric train",
    furigana: "でんしゃ",
    romaji: "densha",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "電車で会社に行きます。 (Densha de kaisha ni ikimasu.) - I go to work by train."
  },
  {
    id: 388,
    word: "痛い",
    meaning: "painful",
    furigana: "いたい",
    romaji: "itai",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "歯が痛いので、歯医者に行きます。 (Ha ga itai node, haisha ni ikimasu.) - My tooth hurts, so I'm going to the dentist."
  },
  {
    id: 389,
    word: "話す",
    meaning: "to speak",
    furigana: "はなす",
    romaji: "hanasu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "日本語で話す練習をしています。 (Nihongo de hanasu renshū o shite imasu.) - I am practicing speaking Japanese."
  },
  {
    id: 390,
    word: "りっぱ",
    meaning: "splendid",
    furigana: "",
    romaji: "rippa",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 391,
    word: "つまらない",
    meaning: "boring",
    furigana: "",
    romaji: "tsumaranai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 392,
    word: "よく",
    meaning: "often, well",
    furigana: "",
    romaji: "yoku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 393,
    word: "嫌",
    meaning: "unpleasant",
    furigana: "いや",
    romaji: "iya",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 394,
    word: "宿題",
    meaning: "homework",
    furigana: "しゅくだい",
    romaji: "shukudai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 395,
    word: "死ぬ",
    meaning: "to die",
    furigana: "しぬ",
    romaji: "shinu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 396,
    word: "みんな",
    meaning: "everyone",
    furigana: "",
    romaji: "minna",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 397,
    word: "万",
    meaning: "ten thousand",
    furigana: "まん",
    romaji: "man",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 398,
    word: "映画",
    meaning: "movie",
    furigana: "えいが",
    romaji: "eiga",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 399,
    word: "遅い",
    meaning: "late, slow",
    furigana: "おそい",
    romaji: "osoi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 400,
    word: "耳",
    meaning: "ear",
    furigana: "みみ",
    romaji: "mimi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 401,
    word: "かかる",
    meaning: "to take time or money",
    furigana: "",
    romaji: "kakaru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 402,
    word: "でも",
    meaning: "but",
    furigana: "",
    romaji: "demo",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 403,
    word: "四つ",
    meaning: "four",
    furigana: "よっつ",
    romaji: "yottsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 404,
    word: "机",
    meaning: "desk",
    furigana: "つくえ",
    romaji: "tsukue",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "机の上にノートがあります。 (Tsukue no ue ni nōto ga arimasu.) - There is a notebook on the desk."
  },
  {
    id: 405,
    word: "あっち",
    meaning: "over there",
    furigana: "",
    romaji: "atchi",
    level: 5,
    part_of_speech: "pronoun",
    example_sentence: "あっちに駅があります。 (Atchi ni eki ga arimasu.) - The station is over there."
  },
  {
    id: 406,
    word: "買う",
    meaning: "to buy",
    furigana: "かう",
    romaji: "kau",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "新しい服を買いました。 (Atarashii fuku o kaimashita.) - I bought new clothes."
  },
  {
    id: 407,
    word: "開く",
    meaning: "to open, to become open",
    furigana: "あく",
    romaji: "aku",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "店は九時に開きます。 (Mise wa ku-ji ni akimasu.) - The store opens at nine o'clock."
  },
  {
    id: 408,
    word: "教室",
    meaning: "classroom",
    furigana: "きょうしつ",
    romaji: "kyōshitsu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "教室で勉強します。 (Kyōshitsu de benkyō shimasu.) - I study in the classroom."
  },
  {
    id: 409,
    word: "かばん",
    meaning: "bag, basket",
    furigana: "",
    romaji: "kaban",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "かばんに教科書を入れました。 (Kaban ni kyōkasho o iremashita.) - I put the textbook in my bag."
  },
  {
    id: 410,
    word: "マッチ",
    meaning: "match",
    furigana: "",
    romaji: "matchi",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "マッチでろうそくに火をつけます。 (Matchi de rōsoku ni hi o tsukemasu.) - I light the candle with a match."
  },
  {
    id: 411,
    word: "短い",
    meaning: "short",
    furigana: "みじかい",
    romaji: "mijikai",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "夏休みは短いです。 (Natsuyasumi wa mijikai desu.) - The summer vacation is short."
  },
  {
    id: 412,
    word: "姉",
    meaning: "(humble) older sister",
    furigana: "あね",
    romaji: "ane",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "姉は大学生です。 (Ane wa daigakusei desu.) - My older sister is a university student."
  },
  {
    id: 413,
    word: "大勢",
    meaning: "great number of people",
    furigana: "おおぜい",
    romaji: "ōzei",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "コンサートには大勢の人が来ました。 (Konsāto ni wa ōzei no hito ga kimashita.) - A large number of people came to the concert."
  },
  {
    id: 414,
    word: "開ける",
    meaning: "to open",
    furigana: "あける",
    romaji: "akeru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "窓を開けて、新鮮な空気を入れてください。 (Mado o akete, shinsen na kūki o irete kudasai.) - Please open the window and let in some fresh air."
  },
  {
    id: 415,
    word: "忙しい",
    meaning: "busy, irritated",
    furigana: "いそがしい",
    romaji: "isogashii",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "今週はとても忙しいです。 (Konshū wa totemo isogashii desu.) - I am very busy this week."
  },
  {
    id: 416,
    word: "おばあさん",
    meaning: "grandmother, female senior-citizen",
    furigana: "",
    romaji: "obaasan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "おばあさんは元気です。 (Obāsan wa genki desu.) - My grandmother is healthy."
  },
  {
    id: 417,
    word: "店",
    meaning: "shop",
    furigana: "みせ",
    romaji: "mise",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "あの店で本を買いました。 (Ano mise de hon o kaimashita.) - I bought a book at that store."
  },
  {
    id: 418,
    word: "ワイシャツ",
    meaning: "business shirt",
    furigana: "",
    romaji: "waishatsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 419,
    word: "北",
    meaning: "north",
    furigana: "きた",
    romaji: "kita",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 420,
    word: "ラジオ",
    meaning: "radio",
    furigana: "",
    romaji: "rajio",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 421,
    word: "すぐに",
    meaning: "instantly",
    furigana: "",
    romaji: "suguni",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 422,
    word: "ハンカチ",
    meaning: "handkerchief",
    furigana: "",
    romaji: "hankachi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 423,
    word: "いつ",
    meaning: "when",
    furigana: "",
    romaji: "itsu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 424,
    word: "全部",
    meaning: "all",
    furigana: "ぜんぶ",
    romaji: "zenbu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 425,
    word: "橋",
    meaning: "bridge",
    furigana: "はし",
    romaji: "hashi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 426,
    word: "川 / 河",
    meaning: "river",
    furigana: "かわ",
    romaji: "kawa",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 427,
    word: "バター",
    meaning: "butter",
    furigana: "",
    romaji: "batā",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 428,
    word: "もっと",
    meaning: "more",
    furigana: "",
    romaji: "motto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 429,
    word: "入口",
    meaning: "entrance",
    furigana: "いりぐち",
    romaji: "iriguchi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 430,
    word: "など",
    meaning: "et cetera",
    furigana: "",
    romaji: "nado",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 431,
    word: "太い",
    meaning: "fat",
    furigana: "ふとい",
    romaji: "futoi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 432,
    word: "やる",
    meaning: "to do",
    furigana: "",
    romaji: "yaru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 433,
    word: "自動車",
    meaning: "automobile",
    furigana: "じどうしゃ",
    romaji: "jidōsha",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 434,
    word: "昼",
    meaning: "noon, daytime",
    furigana: "ひる",
    romaji: "hiru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 435,
    word: "色",
    meaning: "colour",
    furigana: "いろ",
    romaji: "iro",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 436,
    word: "黄色",
    meaning: "yellow",
    furigana: "きいろ",
    romaji: "kiiro",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 437,
    word: "左",
    meaning: "left hand side",
    furigana: "ひだり",
    romaji: "hidari",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 438,
    word: "野菜",
    meaning: "vegetable",
    furigana: "やさい",
    romaji: "yasai",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 439,
    word: "シャワー",
    meaning: "shower",
    furigana: "",
    romaji: "shawā",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 440,
    word: "散歩",
    meaning: "to stroll",
    furigana: "さんぽする",
    romaji: "sanposuru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 441,
    word: "三",
    meaning: "three",
    furigana: "さん",
    romaji: "san",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 442,
    word: "消える",
    meaning: "to disappear",
    furigana: "きえる",
    romaji: "kieru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 443,
    word: "映画館",
    meaning: "cinema",
    furigana: "えいがかん",
    romaji: "eigakan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 444,
    word: "いす",
    meaning: "chair",
    furigana: "",
    romaji: "isu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 445,
    word: "誕生日",
    meaning: "birthday",
    furigana: "たんじょうび",
    romaji: "tanjōbi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 446,
    word: "切る",
    meaning: "to cut",
    furigana: "きる",
    romaji: "kiru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 447,
    word: "七日",
    meaning: "seven days, the seventh day",
    furigana: "なのか",
    romaji: "nanoka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 448,
    word: "洗う",
    meaning: "to wash",
    furigana: "あらう",
    romaji: "arau",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 449,
    word: "あれ",
    meaning: "that",
    furigana: "",
    romaji: "are",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 450,
    word: "グラム",
    meaning: "gram",
    furigana: "",
    romaji: "guramu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 451,
    word: "習う",
    meaning: "to learn",
    furigana: "ならう",
    romaji: "narau",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 452,
    word: "後",
    meaning: "afterwards",
    furigana: "あと",
    romaji: "ato",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 453,
    word: "猫",
    meaning: "cat",
    furigana: "ねこ",
    romaji: "neko",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 454,
    word: "図書館",
    meaning: "library",
    furigana: "としょかん",
    romaji: "toshokan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 455,
    word: "並べる",
    meaning: "to line up, to set up",
    furigana: "ならべる",
    romaji: "naraberu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 456,
    word: "しかし",
    meaning: "however",
    furigana: "",
    romaji: "shikashi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 457,
    word: "大きい",
    meaning: "big",
    furigana: "おおきい",
    romaji: "ōkii",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 458,
    word: "八日",
    meaning: "eight days, eighth day of the month",
    furigana: "ようか",
    romaji: "yōka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 459,
    word: "歩く",
    meaning: "to walk",
    furigana: "あるく",
    romaji: "aruku",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 460,
    word: "ズボン",
    meaning: "trousers",
    furigana: "",
    romaji: "zubon",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 461,
    word: "九日",
    meaning: "nine days, ninth day",
    furigana: "ここのか",
    romaji: "kokonoka",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 462,
    word: "そっち",
    meaning: "over there",
    furigana: "",
    romaji: "sotchi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 463,
    word: "たて",
    meaning: "length, height",
    furigana: "",
    romaji: "tate",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 464,
    word: "カップ",
    meaning: "cup",
    furigana: "",
    romaji: "kappu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 465,
    word: "あの",
    meaning: "that over there",
    furigana: "",
    romaji: "ano",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 466,
    word: "頼む",
    meaning: "to ask",
    furigana: "たのむ",
    romaji: "tanomu",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 467,
    word: "お兄さん",
    meaning: "(honorable) older brother",
    furigana: "おにいさん",
    romaji: "oniisan",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 468,
    word: "手",
    meaning: "hand",
    furigana: "て",
    romaji: "te",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 469,
    word: "ええ",
    meaning: "yes",
    furigana: "",
    romaji: "ee",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 470,
    word: "毎日",
    meaning: "every day",
    furigana: "まいにち",
    romaji: "mainichi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 471,
    word: "花",
    meaning: "flower",
    furigana: "はな",
    romaji: "hana",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 472,
    word: "一",
    meaning: "one",
    furigana: "いち",
    romaji: "ichi",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 473,
    word: "居る",
    meaning: "to be, to have (used for people and animals)",
    furigana: "いる",
    romaji: "iru",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 474,
    word: "砂糖",
    meaning: "sugar",
    furigana: "さとう",
    romaji: "satō",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "コーヒーに砂糖を入れます。 (Kōhī ni satō o iremasu.) - I put sugar in my coffee."
  },
  {
    id: 475,
    word: "カレンダー",
    meaning: "calendar",
    furigana: "",
    romaji: "karendā",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "カレンダーを見て、予定を確認します。 (Karendā o mite, yotei o kakunin shimasu.) - I look at the calendar to check my schedule."
  },
  {
    id: 476,
    word: "今",
    meaning: "now",
    furigana: "いま",
    romaji: "ima",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "今、何時ですか？ (Ima, nan-ji desu ka?) - What time is it now?"
  },
  {
    id: 477,
    word: "旅行",
    meaning: "travel",
    furigana: "りょこう",
    romaji: "ryokō",
    level: 5,
    part_of_speech: "noun, suru-verb",
    example_sentence: "夏に旅行に行きます。 (Natsu ni ryokō ni ikimasu.) - I will go on a trip in the summer."
  },
  {
    id: 478,
    word: "できる",
    meaning: "to be able to",
    furigana: "",
    romaji: "dekiru",
    level: 5,
    part_of_speech: "verb (ichidan)",
    example_sentence: "日本語で話せます。 (Nihongo de hanasemasu.) - I can speak Japanese."
  },
  {
    id: 479,
    word: "春",
    meaning: "spring",
    furigana: "はる",
    romaji: "haru",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "春は花が咲きます。 (Haru wa hana ga sakimasu.) - Flowers bloom in spring."
  },
  {
    id: 480,
    word: "する",
    meaning: "to do",
    furigana: "",
    romaji: "suru",
    level: 5,
    part_of_speech: "verb (irregular)",
    example_sentence: "宿題をします。 (Shukudai o shimasu.) - I do my homework."
  },
  {
    id: 481,
    word: "八つ",
    meaning: "eight",
    furigana: "やっつ",
    romaji: "yattsu",
    level: 5,
    part_of_speech: "numeral",
    example_sentence: "リンゴを八つ買いました。 (Ringo o yattsu kaimashita.) - I bought eight apples."
  },
  {
    id: 482,
    word: "町",
    meaning: "town, city",
    furigana: "まち",
    romaji: "machi",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "この町は静かで、住みやすいです。 (Kono machi wa shizuka de, sumiyasui desu.) - This town is quiet and easy to live in."
  },
  {
    id: 483,
    word: "渡す",
    meaning: "to hand over",
    furigana: "わたす",
    romaji: "watasu",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "先生にレポートを渡しました。 (Sensei ni repōto o watashimashita.) - I handed the report to the teacher."
  },
  {
    id: 484,
    word: "青",
    meaning: "blue",
    furigana: "あお",
    romaji: "ao",
    level: 5,
    part_of_speech: "noun, な-adjective",
    example_sentence: "空は青いです。 (Sora wa aoi desu.) - The sky is blue."
  },
  {
    id: 485,
    word: "白",
    meaning: "white",
    furigana: "しろ",
    romaji: "shiro",
    level: 5,
    part_of_speech: "noun, な-adjective",
    example_sentence: "白い紙に字を書きます。 (Shiroi kami ni ji o kakimasu.) - I write letters on white paper."
  },
  {
    id: 486,
    word: "ある",
    meaning: "to be, to have (used for inanimate objects)",
    furigana: "",
    romaji: "aru",
    level: 5,
    part_of_speech: "verb (godan)",
    example_sentence: "机の上に本があります。 (Tsukue no ue ni hon ga arimasu.) - There is a book on the desk."
  },
  {
    id: 487,
    word: "ベッド",
    meaning: "bed",
    furigana: "",
    romaji: "beddo",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "夜になると、ベッドで寝ます。 (Yoru ni naru to, beddo de nemasu.) - When night comes, I sleep in bed."
  },
  {
    id: 488,
    word: "水",
    meaning: "water",
    furigana: "みず",
    romaji: "mizu",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "のどが渇いたので、水を飲みます。 (Nodo ga kawaita node, mizu o nomimasu.) - I'm thirsty, so I'll drink some water."
  },
  {
    id: 489,
    word: "いくつ",
    meaning: "how many?, how old?",
    furigana: "",
    romaji: "ikutsu",
    level: 5,
    part_of_speech: "interrogative",
    example_sentence: "りんごはいくつありますか？ (Ringo wa ikutsu arimasu ka?) - How many apples are there?"
  },
  {
    id: 490,
    word: "楽しい",
    meaning: "enjoyable",
    furigana: "たのしい",
    romaji: "tanoshii",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "パーティーはとても楽しかったです。 (Pātī wa totemo tanoshikatta desu.) - The party was very enjoyable."
  },
  {
    id: 491,
    word: "御飯",
    meaning: "cooked rice, meal",
    furigana: "ごはん",
    romaji: "gohan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "御飯の時間です。 (Gohan no jikan desu.) - It's time for a meal."
  },
  {
    id: 492,
    word: "皆さん",
    meaning: "everyone",
    furigana: "みなさん",
    romaji: "minasan",
    level: 5,
    part_of_speech: "noun",
    example_sentence: "皆さん、こんにちは！ (Minasan, konnichiwa!) - Hello, everyone!"
  },
  {
    id: 493,
    word: "おいしい",
    meaning: "delicious",
    furigana: "",
    romaji: "oishii",
    level: 5,
    part_of_speech: "い-adjective",
    example_sentence: "このケーキはとてもおいしいです。 (Kono kēki wa totemo oishii desu.) - This cake is very delicious."
  },
  {
    id: 494,
    word: "ペット",
    meaning: "pet",
    furigana: "",
    romaji: "petto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 495,
    word: "外",
    meaning: "outside",
    furigana: "そと",
    romaji: "soto",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 496,
    word: "前",
    meaning: "before",
    furigana: "まえ",
    romaji: "mae",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  },
  {
    id: 497,
    word: "来る",
    meaning: "to come",
    furigana: "まえ",
    romaji: "mae",
    level: 5,
    part_of_speech: "",
    example_sentence: ""
  }
];