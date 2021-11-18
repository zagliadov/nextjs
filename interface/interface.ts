
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