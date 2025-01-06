import type { IProduct } from "@/types/Products/IProducts"


const noImg: IProduct = {
    "id": 4,
    "group": "noImg-bag",
    "groupName": "Пакети без малюнка",
    "title": "Пакети без малюнка",
    "visible": true,
    "products": [
        {
        "id": 1,
        "title": "Пакет майка Полоса “Сине-белая” 45*70 100 шт.",
        "img": "@/public/img/bag.png",
        "price": "230,00 грн.",
        "discountPrice":  50,
        "visible": true,
        "wholesalePrice": "190,00 грн.",
        "wholesaleDescription": "Оптовая цена действует от 10 пачек.",
        "counterQuantity": 5,
        "wholesaleOnly": false,


        }
    ]
}
  
  export default noImg