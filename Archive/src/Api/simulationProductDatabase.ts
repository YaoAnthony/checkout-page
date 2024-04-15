//图片路径，你不用管
import {
    echoAvatar,
    monday,
    guest3,
    rainie,

    irne_background,
    irne_background2,

    rainie1,
    rainie2,
    rainie3,
    rainie4,
    rainie5,
    rainie6,
    rainie7,
    rainie8,
    rainie9,
    rainie10,
    rainie11,
    rainie12,
    rainie13,
    rainie14,
    rainie15,
    rainie16,
    rainie17,
    rainie18,
    rainie19,
    rainie20,
    rainie21,



    tantPaper,
    shenhe,
    refrigerator_sticker2,
    pic12,
    pic11,
    pic10,
    pic9,
    pic8,
    pic7,
    pic6,
    pic5,
    pic4,
    pic3,
    pic2,
    pic1,
    pic,
    phone_case_panda_green,
    phone_case_panda_blue,
    phone_case_original,
    phone_case_emoji_middle_finger,
    phone_case_black_cat,
    patternedPaper,
    paper,
    nod,
    key_chain_astronaut_pig3,
    key_chain_astronaut_pig2,
    key_chain_astronaut_pig1,
    key_chain_astronaut_panda1,
    keli,
    fuji_cap3,
    fuji_cap1,
    frame5,
    frame4,

    frame3,
    frame2,
    frame1,
    desk_decorations_crystal_ball3,
    desk_decorations_crystal_ball2,
    desk_decorations_crystal_ball1,
    desk_decorations_phone_holder_astronaut2,
    desk_decorations_eight_panda2,
    desk_decorations_eight_panda1,
    desk_decorations_bookshelf_duck3,
    desk_decorations_bookshelf_duck1,
    bag7,
    bag6,
    bag5,
    bag4,
    bag3,
    bag2,
    bag1,
    airpod_case_astronaut,

    echoBg,
    mainPageBG,
} from '../Assets';

import { Product } from '../Types/product';

export const product : Product[] = [
    {
        
        id: "bag1", //商品的id
        name: "BT-MET Bag(2023 limit)", //商品的名字
        //商品图片路径，一个产品有多张图片，就用载入多个图片，路径我都在前面加载好了，你就按名字写进去就行
        //比如这个包包要用bag1这个图片，就写bag1
        authorId: "Anthony0707", //商品的作者，你这个随便写，不过最好就搞个四五个作者来回倒，每个作者做的东西应该是同一类的，比如她做的包包，那包包都是这个人的
        authorName : "Anthony Evil",

        status: "unique", //商品的状态，unique是独一无二的，preorder是预售，soldout是售罄，你可以自己随便加，也可以单纯的写个status: "",表示这玩意没啥特别的状态
        shortIntroduction: "This is a bag", //商品的简短介绍，这个介绍会显示在商品列表页
        description: "This is a bag", //随便用chatGPT生成一段描述，这个描述会显示在商品详情页
        price: 11.99, //商品的价格
        likes: 100, //商品的点赞数
        rate: 5, //商品的评分，你随便写，最高是5
        image: [
            bag1,
        ],
        //商品的标签，你随便写，比如这个包包的材料是皮革和帆布，用途是背包，风格是复古，颜色是黑色和棕色
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
    },
    {
        id: "bag2",
        name: "The flower and forest",
        image: [
            bag2,
        ],
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        rate: 4,
        price: 6.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        shortIntroduction: "This is a bag",
        description: "This is a bag", 
        likes: 100, 
        status: "unique",
    },
    {
        id: "bag3",
        name: "Who are looking at me?",
        image: [
            bag3,
        ],
        rate: 4,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 6.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        shortIntroduction: "This is a bag",
        description: "This is a bag", 
        likes: 100, 
        status: "unique",
    },
    {
        id: "bag4",
        name: "Summer day",
        image: [
            bag4,
        ],
        rate: 4,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 26.99,
        authorId: "Anthony0707", 
        shortIntroduction: "This is a bag",
        authorName : "Anthony Evil",
        description: "This is a bag", 
        likes: 100, 
        status: "unique",
    },
    {
        id: "bag5",
        name: "Summer day",
        image: [
            bag5,
        ],
        rate: 4,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 16.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        shortIntroduction: "This is a bag",
        description: "This is a bag", 
        likes: 100,
        status: "unique",
    },
    
    {
        id: "bag6",
        name: "Winter day",
        image: [
            bag6,
        ],
        rate: 4,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 66.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        shortIntroduction: "This is a bag",
        description: "This is a bag", 
        likes: 100, 
        status: "unique",
    },
    {
        id: "bag7",
        name: "cute funny bag",
        image: [
            bag7,
        ],
        rate: 4,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 16.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        shortIntroduction: "This is a bag",
        description: "This is a bag", 
        likes: 100, 
        status: "unique",
    },
    {
        id: "pic",
        name: "Sneak Peek Backpack",
        image: [pic],
        rate: 4,
        tag: {
            material: ["canvas", "polyester"],
            aim: ["bag", "backpack"],
            style: ["casual", "sporty"],
            color: ["blue", "white"],
        },
        price: 29.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "Be the first to get this exclusive backpack!",
        description: "Be the first to get this exclusive backpack!",
        status: "preorder",
    },
    {
        id: "pic1",
        name: "Urban Explorer",
        image: [pic1],
        rate: 4,
        tag: {
            material: ["nylon", "leather"],
            aim: ["bag", "backpack"],
            style: ["modern", "urban"],
            color: ["gray", "black"],
        },
        price: 39.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "Perfect for the urban lifestyle",
        description: "Perfect for the urban lifestyle",
        status: "unique",
    },
    {
        id: "pic2",
        name: "BT-MET Bag(2023 limit)",
        image: [pic2],
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        rate: 4,
        price: 11.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a bag",
        status: "unique",
    },
    {
        id: "pic3",
        name: "The flower and forest",
        image: [pic3],
        rate: 4,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 6.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a bags",
        status: "unique",
    },
    {
        id: "pic4",
        name: "Who are looking at me?",
        image: [pic4],
        rate: 5,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 6.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a bags",
        status: "unique",
    },
    {
        id: "pic5",
        name: "Summer day",
        image: [pic5],
        rate: -1,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 26.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a bags",
        status: "unique",
    },
    {
        id: "pic6",
        name: "Summer day",
        image: [pic6],
        rate: 5,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 16.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a bags",
        status: "unique",
    },
    {
        id: "pic7",
        name: "Winter day",
        rate: 5,
        image: [pic7,pic6,pic9,pic10,pic11,pic12,pic8,pic5],
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 66.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This exquisite figurine, crafted with meticulous attention to detail, stands as a testament to the artistry of its creators. ",
        status: "unique",
    },
    {
        id: "pic8",
        name: "cute funny bag",
        rate: 5,
        image: [pic8],
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["black", "brown"],
        },
        price: 16.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a bags",
        status: "unique",
    },
    {
        id: "pic9",
        name: "Urban Explorer",
        image: [pic9],
        rate: 5,
        tag: {
            material: ["nylon", "leather"],
            aim: ["bag", "backpack"],
            style: ["modern", "urban"],
            color: ["gray", "black"],
        },
        price: 39.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "Perfect for the urban lifestyle",
        description: "Perfect for the urban lifestyle",
        status: "unique",
    },
    {
        id: "pic10",
        name: "Sneak Peek Backpack",
        image: [pic10],
        rate: 5,
        tag: {
            material: ["canvas", "polyester"],
            aim: ["bag", "backpack"],
            style: ["casual", "sporty"],
            color: ["blue", "white"],
        },
        price: 29.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "Be the first to get this exclusive backpack!",
        description: "Be the first to get this exclusive backpack!",
        status: "preorder",
    },
    {
        id: "pic11",
        name: "Limited Edition Retro Bag",
        image: [pic11],
        rate: 5,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["red", "cream"],
        },
        price: 33.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "A blast from the past - limited edition!",
        description: "A blast from the past - limited edition!",
        status: "soldout",
    },{
        id: "pic12",
        name: "Limited Edition Explorer",
        image: [pic12],
        rate: 5,
        tag: {
            material: ["leather", "canvas"],
            aim: ["bag", "backpack"],
            style: ["vintage", "retro"],
            color: ["brown", "green"],
        },
        price: 49.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "Discover new horizons with this limited edition bag!",
        description: "Grab it before it's gone!",
        status: "soldout",
    },
    {
        id: "case1",
        name: "Panda Green Phone Case",
        image: [phone_case_panda_green],
        rate: 5,
        tag: {
            material: ["material1", "material2"],
            aim: ["aim1", "aim2"],
            style: ["style1", "style2"],
            color: ["color1", "color2"],
        },
        price: 19.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "This is a panda green phone case",
        status: "unique",
    },
    {
        id: "case2",
        name: "Panda Blue Phone Case",
        image: [phone_case_panda_blue],
        rate: 5,
        tag: {
            material: ["material1", "material2"],
            aim: ["bag", "backpack"],
            style: ["casual", "sporty"],
            color: ["blue", "white"],
        },
        price: 15.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a panda blue phone case",
        status: "preorder",
    },
    {
        id: "case3",
        name: "Original Phone Case",
        image: [phone_case_original],
        rate: 5,
        tag: {
            material: ["material1", "material2"],
            aim: ["aim1", "aim2"],
            style: ["style1", "style2"],
            color: ["color1", "color2"],
        },
        price: 12.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "This is an original phone case",
        status: "soldout",
    },
    {
        id: "case4",
        name: "Middle Finger Emoji Phone Case",
        image: [phone_case_emoji_middle_finger],
        rate: 5,
        tag: {
            material: ["material1", "material2"],
            aim: ["aim1", "aim2"],
            style: ["style1", "style2"],
            color: ["color1", "color2"],
        },
        price: 14.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a middle finger emoji phone case",
        status: "preorder",
    },
    {
        id: "case5",
        name: "Black Cat Phone Case",
        image: [phone_case_black_cat],
        rate: 5,
        tag: {
            material: ["material1", "material2"],
            aim: ["aim1", "aim2"],
            style: ["style1", "style2"],
            color: ["color1", "color2"],
        },
        price: 16.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "This is a black cat phone case",
        status: "unique",
    }, 
    {
        id: "keyChainAstronautPig3",
        name: "Space Explorer Key Chain",
        image: [key_chain_astronaut_pig3],
        rate: 5,
        tag: {
            material: ["metal", "enamel"],
            aim: ["keychain"],
            style: ["space", "cute"],
            color: ["silver", "pink"],
        },
        price: 8.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Carry the universe with you with this adorable astronaut pig keychain!",
        status: "preorder",
    },
    {
        id: "keyChainAstronautPig2",
        name: "Galactic Pig Key Chain",
        image: [key_chain_astronaut_pig2],
        rate: 5,
        tag: {
            material: ["metal", "enamel"],
            aim: ["keychain"],
            style: ["galactic", "whimsical"],
            color: ["gold", "blue"],
        },
        price: 7.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "Unlock the mysteries of the cosmos with this pig astronaut keychain!",
        status: "unique",
    },
    {
        id: "keyChainAstronautPig1",
        name: "Cosmic Pig Charm",
        image: [key_chain_astronaut_pig1],
        rate: 5,
        tag: {
            material: ["metal", "enamel"],
            aim: ["keychain", "charm"],
            style: ["cosmic", "adorable"],
            color: ["black", "yellow"],
        },
        price: 6.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "Add a touch of the universe to your keys with this cosmic pig charm!",
        status: "soldout",
    },
    {
        id: "keyChainAstronautPanda1",
        name: "Astro Panda Key Chain",
        image: [key_chain_astronaut_panda1],
        rate: 5,
        tag: {
            material: ["metal", "enamel"],
            aim: ["keychain"],
            style: ["astronomy", "playful"],
            color: ["white", "blue"],
        },
        price: 9.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "Bring the wonders of space with you everywhere with this astro panda keychain!",
        status: "unique",
    },
    {
        id: "keli",
        name: "Starry Night Bracelet",
        rate: 5,
        image: [keli],
        tag: {
            material: ["metal", "fabric"],
            aim: ["bracelet"],
            style: ["celestial", "elegant"],
            color: ["black", "silver"],
        },
        price: 14.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Adorn your wrist with the beauty of the night sky with this starry night bracelet!",
        status: "preorder",
    }, 
    {
        id: "crystalBall3",
        name: "Mystic Crystal Ball",
        rate: 5,
        image: [
            desk_decorations_crystal_ball3,
            desk_decorations_crystal_ball2,
            desk_decorations_crystal_ball1,
        ],
        tag: {
            material: ["glass", "metal"],
            aim: ["desk decoration", "mystical"],
            style: ["crystal", "elegant"],
            color: ["clear", "gold"],
        },
        price: 19.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Add a touch of mystique to your desk with this elegant crystal ball!",
        status: "unique",
    },
    {
        id: "phoneHolderAstronaut2",
        name: "Astronaut Phone Holder",
        image: [desk_decorations_phone_holder_astronaut2],
        rate: 5,
        tag: {
            material: ["resin", "metal"],
            aim: ["desk decoration", "phone holder"],
            style: ["astronomy", "functional"],
            color: ["white", "silver"],
        },
        price: 16.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Keep your phone within reach with this adorable astronaut phone holder!",
        status: "unique",
    },
    {
        id: "eightPanda2",
        name: "Eight-Panda Desk Figurine",
        image: [desk_decorations_eight_panda2],
        rate: 5,
        tag: {
            material: ["resin"],
            aim: ["desk decoration"],
            style: ["playful", "adorable"],
            color: ["black", "white"],
        },
        price: 12.99,
        authorId: "ECHO0707",
        authorName: "ECHO is here",
        likes: 100,
        shortIntroduction: "This is a bag",
        description: "Bring joy to your workspace with this delightful eight-panda desk figurine!",
        status: "preorder",
    },
    {
        id: "eightPanda1",
        name: "Eight-Panda Desk Figurine",
        image: [desk_decorations_eight_panda1],
        rate: 5,
        tag: {
            material: ["resin"],
            aim: ["desk decoration"],
            style: ["playful", "adorable"],
            color: ["black", "white"],
        },
        price: 12.99,
        authorId: "ECHO0707",
        authorName: "ECHO is here",
        likes: 53,
        shortIntroduction: "This is a bag",
        description: "Bring joy to your workspace with this delightful eight-panda desk figurine!",
        status: "preorder",
    },
    {
        id: "bookshelfDuck3",
        name: "Quirky Duck Bookshelf Decor",
        rate: 5,
        image: [desk_decorations_bookshelf_duck3],
        tag: {
            material: ["resin"],
            aim: ["desk decoration", "bookshelf decor"],
            style: ["quirky", "whimsical"],
            color: ["yellow", "blue"],
        },
        price: 14.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Add a touch of whimsy to your bookshelf with this quirky duck decor!",
        status: "unique",
    },
    {
        id: "bookshelfDuck1",
        name: "Quirky Duck Bookshelf Decor",
        image: [desk_decorations_bookshelf_duck1],
        rate: 5,
        tag: {
            material: ["resin"],
            aim: ["desk decoration", "bookshelf decor"],
            style: ["quirky", "whimsical"],
            color: ["yellow", "blue"],
        },
        price:14.99,
        
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Add a touch of whimsy to your bookshelf with this quirky duck decor!",
        status: "unique",
    }, {
        id: "monday",
        name: "Monday Vibes Desk Calendar",
        image: [monday],
        rate: 5,
        tag: {
            material: ["paper", "cardboard"],
            aim: ["desk decoration", "calendar"],
            style: ["modern", "minimalist"],
            color: ["white", "black"],
        },
        price: 8.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        
        description: "Stay organized with Monday Vibes - a sleek and minimalist desk calendar!",
        status: "preorder",
    },
    {
        id: "guest3",
        name: "Whimsical Guestbook",
        image: [guest3],
        rate: 5,
        tag: {
            material: ["paper", "leather"],
            aim: ["guestbook"],
            style: ["whimsical", "vibrant"],
            color: ["multicolor"],
        },
        price: 14.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Capture memories with this whimsical and vibrant guestbook!",
        status: "unique",
    },
    {
        id: "tantPaper",
        name: "Tant Origami Paper Pack",
        image: [tantPaper],
        rate: 5,
        tag: {
            material: ["paper"],
            aim: ["crafting", "origami"],
            style: ["traditional", "colorful"],
            color: ["assorted"],
        },
        price: 6.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Unleash your creativity with this pack of vibrant Tant origami paper!",
        status: "soldout",
    },
    {
        id: "shenhe",
        name: "Shenhe Abstract Art Print",
        image: [shenhe],
        rate: 5,
        tag: {
            material: ["paper", "canvas"],
            aim: ["wall art", "abstract"],
            style: ["modern", "expressive"],
            color: ["blue", "white"],
        },
        price: 18.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Add a touch of modern art to your space with the Shenhe abstract art print!",
        status: "preorder",
    },
    {
        id: "refrigeratorSticker2",
        name: "Vintage Travel Sticker Set",
        image: [refrigerator_sticker2],
        rate: 5,
        tag: {
            material: ["vinyl"],
            aim: ["fridge decoration", "travel theme"],
            style: ["vintage", "nostalgic"],
            color: ["multicolor"],
        },
        price: 9.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Give your fridge a vintage flair with this set of travel-themed stickers!",
        status: "unique",
    },
    {
        id: "patternedPaper",
        name: "Assorted Patterned Paper Pack",
        image: [patternedPaper],
        rate: 5,
        tag: {
            material: ["paper"],
            aim: ["crafting", "scrapbooking"],
            style: ["assorted patterns"],
            color: ["multicolor"],
        },
        price: 7.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Elevate your crafting projects with this assorted patterned paper pack!",
        status: "unique",
    },
    {
        id: "paper",
        name: "Premium Quality Sketchbook",
        image: [paper],
        rate: 5,
        tag: {
            material: ["paper"],
            aim: ["sketching", "drawing"],
            style: ["premium", "classic"],
            color: ["white"],
        },
        price: 12.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Unleash your artistic talents with this premium quality sketchbook!",
        status: "soldout",
    },
    {
        id: "nod",
        name: "Nod - The Cute Plush Toy",
        image: [nod],
        rate: 5,
        tag: {
            material: ["plush", "cotton"],
            aim: ["plush toy", "decor"],
            style: ["cute", "adorable"],
            color: ["yellow"],
        },
        price: 16.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Bring joy to your space with Nod, the cute and adorable plush toy!",
        status: "preorder",
    },
    {
        id: "fujiCap3",
        name: "Fuji Mountain Embroidered Cap",
        image: [fuji_cap3],
        rate: 5,
        tag: {
            material: ["cotton", "polyester"],
            aim: ["hat", "cap"],
            style: ["embroidered", "outdoor"],
            color: ["black"],
        },
        price: 14.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Embrace the outdoors with this Fuji Mountain embroidered cap!",
        status: "unique",
    },
    {
        id: "fujiCap1",
        name: "Fuji Mountain Printed Cap",
        image: [fuji_cap1],
        rate: 5,
        tag: {
            material: ["cotton", "polyester"],
            aim: ["hat", "cap"],
            style: ["printed", "casual"],
            color: ["blue", "white"],
        },
        price: 12.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Add a touch of style with this Fuji Mountain printed cap!",
        status: "preorder",
    },
    {
        id: "frame5",
        name: "Elegant Gold Photo Frame",
        image: [frame5],
        rate: 5,
        tag: {
            material: ["metal"],
            aim: ["photo frame", "decor"],
            style: ["elegant", "classic"],
            color: ["gold"],
        },
        price: 20.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Display your memories in style with this elegant gold photo frame!",
        status: "unique",
    },
    {
        id: "frame4",
        name: "Vintage Wooden Photo Frame",
        image: [frame4],
        rate: 5,
        tag: {
            material: ["wood"],
            aim: ["photo frame", "decor"],
            style: ["vintage", "nostalgic"],
            color: ["brown"],
        },
        price: 18.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 500,
        shortIntroduction: "This is a bag",
        description: "Give your photos a vintage touch with this wooden photo frame!",
        status: "soldout",
    },{
        id: "frame3",
        name: "Modern Silver Photo Frame",
        image: [frame3],
        rate: 5,
        tag: {
            material: ["metal"],
            aim: ["photo frame", "decor"],
            style: ["modern", "sleek"],
            color: ["silver"],
        },
        price: 22.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Showcase your memories with this modern silver photo frame!",
        status: "preorder",
    },
    {
        id: "frame2",
        name: "Contemporary Black Photo Frame",
        image: [frame2],
        rate: 5,
        tag: {
            material: ["metal"],
            aim: ["photo frame", "decor"],
            style: ["contemporary", "minimalistic"],
            color: ["black"],
        },
        price: 19.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        
        description: "Enhance your space with this contemporary black photo frame!",
        status: "unique",
    },
    {
        id: "frame1",
        name: "Elegant Gold-Edged Photo Frame",
        image: [frame1],
        rate: 5,
        tag: {
            material: ["metal"],
            aim: ["photo frame", "decor"],
            style: ["elegant", "classic"],
            color: ["gold"],
        },
        price: 24.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Display your cherished moments with this elegant gold-edged photo frame!",
        status: "soldout",
    },
    {
        id: "airpodCaseAstronaut",
        name: "Astronaut-Themed AirPods Case",
        image: [airpod_case_astronaut],
        rate: 5,
        tag: {
            material: ["silicone"],
            aim: ["AirPods case", "accessory"],
            style: ["astronaut-themed", "fun"],
            color: ["white"],
        },
        price: 9.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Protect your AirPods with this cool astronaut-themed case!",
        status: "preorder",
    },
    {
        id: "echoBg",
        name: "Echo's Signature Background",
        image: [echoBg],
        rate: 5,
        tag: {
            material: ["digital"],
            aim: ["background", "digital art"],
            style: ["signature", "modern"],
            color: ["multicolor"],
        },
        price: 5.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        
        shortIntroduction: "This is a bag",
        description: "Personalize your digital space with Echo's signature background!",
        status: "unique",
    },
    {
        id: "mainPageBG",
        name: "Main Page Background Pack",
        image: [mainPageBG],
        rate: 4.5,
        tag: {
            material: ["digital"],
            aim: ["background", "digital art"],
            style: ["assorted designs"],
            color: ["multicolor"],
        },
        price: 8.99,
        authorId: "Anthony0707", 
        authorName : "Anthony Evil",
        likes: 100, 
        shortIntroduction: "This is a bag",
        description: "Transform your digital experience with this main page background pack!",
        status: "soldout",
    },
]