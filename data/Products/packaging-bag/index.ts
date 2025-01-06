import type { ICategory } from "@/types/Products/ICategory";
    import packagingBlock from "./packaging-block";
    import packagingRoll from "./packaging-roll";


const indexPackage: ICategory = {
    id: 1,
    group: "index-packaging",
    title: 'Пакети фасувальні',
    visible: true,
    groupProducts: [
        packagingBlock,
        packagingRoll

    ],
}


export default indexPackage