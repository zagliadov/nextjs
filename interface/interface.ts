
export interface IProduct {
    id: number;
    type?: string | undefined;
    title?: string;
    url?: string;
}

export interface IProps {
    products?: IProduct[];

}

export interface IProp {
    product?: IProduct;
}

export interface ITitle {
    title: string;
}




export type IGoods = {
    id?: number;
    title: string;
    body: string;
    price?: string;
    url: string;
    sizeOption: sizeOption[];
    deliveryOption: deliveryOption[]
}
export interface IPropsGoodsList {
    products: IGoods[];
}
export type IGoodsModalProps = {
    open: boolean,
    handleClose: (boolean) => void,
    title: string,
    body: string,
    price: string,
    id: number,
    url: string,
    sizeOption: sizeOption[],
    deliveryOption: deliveryOption[],
}



export type sizeOption = {[key: string]: string}
export type deliveryOption = {[key: string]: string}
export interface IAccessories {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
    sizeOption: sizeOption[];
    deliveryOption: deliveryOption[];
}

export type IHoodies = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
    sizeOption: sizeOption[];
    deliveryOption: deliveryOption[];
}

export type IMasks = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
    sizeOption: sizeOption[];
    deliveryOption: deliveryOption[];
}

export type ISocks = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
    sizeOption: sizeOption[];
    deliveryOption: deliveryOption[];
}

export type ITshirt = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
    sizeOption: sizeOption[];
    deliveryOption: deliveryOption[];
}