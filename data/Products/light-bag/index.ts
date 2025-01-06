import type { ICategory } from "@/types/Products/ICategory";
    import bigBag from "./big-bag";
    import imgBag from "./img-bag";
    import bioBag from "./bio-bag";
    import noImgBag from "./noImg-bag";

const indexBags: ICategory = {
    id: 1,
    group: "empty-bags",
    title: 'Пакети з майка',
    visible: true,
    groupProducts: [
        bigBag,
        imgBag,
        bioBag,
        noImgBag,
    ],
}




export default indexBags