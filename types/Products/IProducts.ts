export interface IProduct {
    id: number;
    group: string;
    groupName?: string,
    title: string;
    visible: boolean;
    products?: {
      id: number;
        title: string;
        img: string;
        price: string;
        discountPrice: number;
        visible: boolean;
        wholesalePrice: string;
        wholesaleDescription: string;
        counterQuantity: number;
        wholesaleOnly: boolean;
    }[];
    
  }
