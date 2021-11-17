
export interface IPosts {
    id: number;
    title?: string | undefined;
    body?: string;
    url?: string;
    thumbnailUrl?: string;
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