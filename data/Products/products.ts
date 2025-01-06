import zipBags from "./zip-bags"
import trashBag from "./trash-bag"
import stratchRoll from "./stratch-roll"
import popularProducts from "./popular-products"
import largeBags from "./large-bags"
import gloves from "./gloves"
import discountProducts from "./discount-products"
import packagingBags from "./packaging-bag/index"
import lightBags from "./light-bag/index"



const products = {
  id: 1,
  group: 'all-products',
  products: [
    discountProducts,
    popularProducts,
    lightBags,
    packagingBags,
    trashBag,
    stratchRoll,
    largeBags,
    zipBags,
    gloves

  ]

}



export default products


  