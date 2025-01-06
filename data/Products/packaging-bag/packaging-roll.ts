import type { IProduct } from "@/types/Products/IProducts"

const packagingRoll: IProduct = {
    "id": 1,
    "group" : "packaging-roll",
    "groupName": "Пакети фасувальні в рулоні",
    "title": "Пакети фасувальні в рулоні",
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



export default packagingRoll