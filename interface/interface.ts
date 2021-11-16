
export interface IPosts {
    id: number;
    title?: string | undefined;
    body?: string;
}

export interface IProps {
    posts?: IPosts[];

}

export interface IProp {
    post?: IPosts;
}

export interface ITitle {
    title: string;
}