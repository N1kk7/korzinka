

import type { INews } from "@/types/News/INews";

import banerImg from '@/public/img/news/baner.png'
import baner1 from '@/public/img/news/baner1.png'
import discount from '@/public/img/news/discount.png'
import sale from '@/public/img/news/sale.jpg'
import dopomoga from '@/public/img/news/dopomoga.jpg'
import social from '@/public/img/news/social.jpg'


export const newsData: INews[] = [
    {
        id: 1,
        title: "Новинки та оновлення товарів",
        img: banerImg,
        description: "Ми раді представити нову колекцію [назва колекції], яка вже є у каталозі. Оцініть сучасні дизайни та покращені характеристики!",
        date: "01.01.2025",
        bgColor: ''
    },
    {
        id: 2,
        title: "Новинки та оновлення товарів",
        img: baner1,
        description: "У розділі [назва розділу] з'явилися [опис новинок], що ідеально підходять для [сфера застосування].",
        date: "01.01.2025",
        bgColor: ''
    },
    {
        id: 3,
        title: "Акції та знижки",
        img: discount,
        description: " Поспішайте! Тільки до [дати] знижки до 50% на [категорія товарів].",
        date: "01.01.2025",
        bgColor: '',
    },
    {
        id: 4,
        title: "Акції та знижки",
        img: sale,
        description: "Підпишіться на нашу розсилку та отримайте промокод на 10% знижки на перше замовлення.",
        date: "01.01.2025",
        bgColor: '',

    },
    {
        id: 5,
        title: "Акції та знижки",
        img: discount,
        description: " Перегляньте наш огляд на [товар]: всі переваги та недоліки в одному відео.",
        date: "01.01.2025",
        bgColor: '',

    },
    {
        id: 6,
        title: "Соціальні ініціативи",
        img: dopomoga,
        description: "Ми продовжуємо підтримувати благодійні ініціативи: частина коштів від продажу [категорія товарів] буде спрямована на [мету].",
        date: "01.01.2025",
        bgColor: '',

    },
    {
        id: 7,
        title: "Соціальні ініціативи",
        img: social,
        description: "Дізнайтесь більше про наш проект [назва проекту], який допомагає [опис допомоги].",
        date: "01.01.2025",
        bgColor: '',

    },
    
]