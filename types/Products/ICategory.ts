import type { IProduct } from "./IProducts"

export interface ICategory {
    id: number;
    group: string,
    title: string,
    visible: boolean,
    groupProducts: IProduct[]
}
