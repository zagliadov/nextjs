
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
}
export interface IPropsGoodsList {
    products: IGoods[];
}


export type IAccessories = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
}

export type IHoodies = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
}

export type IMasks = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
}

export type ISocks = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
}

export type ITshirt = {
    id: number;
    title: string;
    body: string;
    price: string;
    url: string;
}