//图片路径，你不用管
import {
    echoAvatar,
    monday,
    guest3,
    rainie,

    irne_background,
    irne_background2,

    frame3,
    frame2,
    frame1,
    echoBg,
    mainPageBG,

    
    rainie10,
    rainie11,
    rainie16,
    rainie4,
    rainie4_review,
    rainie9,
    rainie12,
    rainie13,
    rainie21,
    rainie19,
} from '../Assets';


import { User } from "../Types/user"

import { UserProfile } from "../Types/profile"

export const user : User[] = [
    {
        id: "ECHO0707",
        username: "ECHO is here",
        isVerified: true,

        email: "echo.xia@gmail.com",
        firstName: "ECHO",
        lastName: "Chen",
        roles: ["admin"],

        avatar: echoAvatar,
        followers: 100,
        rate: 5,
        personalSignature: "I am mater of EVA Player",
    },
    {
        id: "Anthony0707",
        username: "Anthony Evil",
        isVerified: true,

        email: "anthony.77yao@gmail.com",
        firstName: "Zhiyuan",
        lastName: "Zhe",
        roles: ["admin"],

        avatar: guest3,
        followers: 5100,
        rate: 4.5,
        personalSignature: "I AM stupid man",
    },
    {
        id: "Monday",
        username: "Krystal ICE",
        isVerified: false,

        email: "test3@gmail.com",
        firstName: "Krystal",
        lastName: "ICE",
        roles: ["user"],

        avatar: monday,
        followers: 2359,
        rate: 4.9,
        personalSignature: "I am real mater of Refrigerator magnet!!!!!!!!!!!!!!!!!",
    },
    {
        id: "RainieR1234",
        username: "Rainie Raining",
        isVerified: true,

        email: "test4@gmail.com",
        firstName: "Krystal",
        lastName: "ICE",
        roles: ["user"],

        avatar: rainie,
        followers: 2359,
        rate: 5,
        personalSignature: "I am mater of milk tea",
    }
]

export const userProfiles : UserProfile[] = [
    {
        user: user[0],
        simpleBackground: echoBg,
        fullBackground: echoBg,

        awards: [
            {
                id: "award1",
                name: "Best EVA Player",
                time: "2020-12-12",
                image: frame1,
            },
            {
                id: "award2",
                name: "Best EVA Player",
                time: "2020-12-12",
                image: frame2,
            },
            {
                id: "award3",
                name: "Best EVA Player",
                time: "2020-12-12",
                image: frame3,
            }
        ],
        masterpieces: [
            "hashCode1",
            "hashCode2",
            "hashCode3",
            "hashCode4",
        ],
        products: [
            "eightPanda2",
            "eightPanda1",
        ],
        DIYplans: [],
        favorites: [],
        wishlist: [],
        cart: [],
        history: [],

        comments: [],

        shippingAddress: {
            firstName: "Echo",
            lastName: "Chen",
            country: "Canada",
            province: "Ontario",
            city: "Toronto",
            street: "1234 Yonge St",
            postalCode: "M4T 1W2",
        }
    },
    {
        user: user[1],
        simpleBackground: irne_background,
        fullBackground: irne_background2,

        masterpieces: [
            "pic",
            "pic1",
            "pic2",
            "pic3",
            "pic4",
        ],
        awards: [],
        products: [
            "bag1",
            "bag2",
            "bag3",
            "bag4",
            "bag5",
            "bag6",
            "bag7",
            "pic",
            "pic1",
            "pic2",
            "pic3",
            "pic4",
            "pic5",
            "pic6",
            "pic7",
            "pic8",
            "pic9",
            "pic10",
            "pic11",
            "pic12",
            "case1",
            "case2",
            "case3",
            "case4",
            "case5",
            "keyChainAstronautPig3",
            "keyChainAstronautPig2",
            "keyChainAstronautPig1",
            "keyChainAstronautPanda1",
            "keli",
            "crystalBall3",
            "phoneHolderAstronaut2",
            "eightPanda2",
            "eightPanda1",
            "bookshelfDuck3",
            "bookshelfDuck1",
            "monday",
            "guest3",
            "tantPaper",
            "shenhe",
            "refrigeratorSticker2",
            "patternedPaper",
            "paper",
            "nod",
            "fujiCap3",
            "fujiCap1",
            "frame5",
            "frame4",
            "frame3",
            "frame2",
            "frame1",
            "airpodCaseAstronaut",
            "echoBg",
            "mainPageBG",
        ],
        DIYplans: [],
        favorites: [],
        wishlist: [],
        cart: [],

        history: [],
        comments: [],

        shippingAddress: {
            firstName: "Irne",
            lastName: "Chen",
            country: "Canada",
            province: "Ontario",
            city: "Toronto",
            street: "1234 Yonge St",
            postalCode: "M4T 1W2",
        }
    },
    {
        user: user[2],
        simpleBackground: mainPageBG,
        fullBackground: mainPageBG,

        masterpieces: [],
        awards: [],
        products: [],
        DIYplans: [],
        favorites: [],
        wishlist: [],
        cart: [],

        history: [],
        comments: [],

        shippingAddress: {
            firstName: "Krystal",
            lastName: "ICE",
            country: "Canada",
            province: "Ontario",
            city: "Toronto",
            street: "1234 Yonge St",
            postalCode: "M4T 1W2",
        }
    },
    {
        user: user[3],
        simpleBackground: irne_background,
        fullBackground: irne_background2,

        masterpieces: [],
        awards: [],
        products: [],
        DIYplans: [
            {
                id: "diyplan1",
                name: "手机壳奶油胶,滴胶,半铺胶定制",
                productionCycle: "3 days",

                acceptTime: "24 hours",
                initialPrice: 10,
                maxPrice: 15,
                image: [
                    rainie16,
                ],
                tag: [
                    "phone case", 
                    "奶油胶", 
                    "滴胶", 
                    "半铺胶"
                ],
                description : "手机壳定制！将您的泡泡玛特和各种有意思的东西做成手机壳吧！",
            },
            {
                id: "diyplan2",
                name: "耳机壳子定制",
                productionCycle: "1 weeks",

                acceptTime: "Anytime",
                initialPrice: 15,
                maxPrice: 25,
                image: [
                    rainie9,
                ],
                tag: [
                    "耳机壳", 
                    "奶油胶", 
                    "滴胶", 
                    "半铺胶"
                ],
                description : "手机壳子定制",    
            },
            {
                id: "diyplan3",
                name: "电子烟壳定制",
                productionCycle: "1 weeks",
                acceptTime: "Anytime",
                initialPrice: 15,
                maxPrice: 20,
                image: [
                    rainie19,
                ],
                tag: ["电子烟壳", "滴胶", "半铺胶"],
                description: "烟壳也可以定制哦！",
            },
            {
                id: "diyplan4",
                name: "美瞳盒子定制",
                productionCycle: "1 weeks",
                acceptTime: "Anytime",
                initialPrice: 20,
                maxPrice: 60,
                image: [
                    rainie12,
                ],
                tag: ["美瞳盒", "奶油胶", "滴胶", "半铺胶"],
                description: "手机壳定制！将您的泡泡玛特和各种有意思的东西做成手机壳吧！",
            },
            {
                id: "diyplan5",
                name: "手机支架定制",
                productionCycle: "1 weeks",
                acceptTime: "Anytime",
                initialPrice: 20,
                maxPrice: 70,
                image: [
                    rainie13,
                ],
                tag: ["手机支架", "奶油胶", "滴胶", "半铺胶"],
                description: "手机壳定制！将您的泡泡玛特和各种有意思的东西做成手机壳吧！",
            },
            {
                id: "diyplan6",
                name: "其他奶油胶装饰定制",
                productionCycle: "1 weeks",
                acceptTime: "Anytime",
                initialPrice: 20,
                maxPrice: 100,
                image: [
                    rainie21,
                ],
                tag: ["奶油胶", "滴胶", "半铺胶"],
                description: "喜欢盲盒的宝贝们可以问我要现货哦！",
            },
        ],
        history: [],
        favorites: [],
        wishlist: [],
        cart: [],

        

        comments: [
            {
                id: "comment1",
                userId: "RainieR1234",
                productId: "product1",

                title: "Great Insulation and storage space!",
                content: "I love this pop socket! It's so cute and it's a great way to store my earbuds! I love the design and the quality is great! I would definitely recommend this to anyone who wants a cute pop socket!",
                type: "diy",

                image: [
                    rainie10,
                    rainie11,
                ],
                rate: 5,
                location: "USA",
                createdAt: "February 12, 2023"
            },
            {
                id: "comment2",
                userId: "RainieR1234",
                productId: "product2",

                title: "Great Insulation and storage space!",
                content: "I love this! so cute",
                type: "final product",

                image: [
                    rainie4,
                    rainie4_review,
                ],
                rate: 5,
                location: "Toronto",
                createdAt: "February 12, 2023"
            }
        ],

        shippingAddress: {
            firstName: "Rainie",
            lastName: "Raining",
            country: "Canada",
            province: "Ontario",
            city: "Toronto",
            street: "1234 Yonge St",
            postalCode: "M4T 1W2",
        }
    }
]