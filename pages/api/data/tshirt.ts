import { ITshirt } from "../../../interface/interface"
import { deliveryOption } from './options/deliveryOption';
import { sizeOption } from './options/sizeOption';

export const tshirt: ITshirt[] = [
    {
        "id": 1,
        "title": "t-shirt 1",
        "body": "t-shirt 1 body",
        "price": "450",
        "url": "https://via.placeholder.com/600/2196f3",
        "sizeOption": sizeOption,
        "deliveryOption": deliveryOption,
    },
    {
        "id": 2,
        "title": "t-shirt 2",
        "body": "t-shirt 2 body",
        "price": "400",
        "url": "https://via.placeholder.com/600/2196f3",
        "sizeOption": sizeOption,
        "deliveryOption": deliveryOption,
    },
    {
        "id": 3,
        "title": "t-shirt 3",
        "body": "t-shirt 3 body",
        "price": "350",
        "url": "https://via.placeholder.com/600/2196f3",
        "sizeOption": sizeOption,
        "deliveryOption": deliveryOption,
    },
    {
        "id": 4,
        "title": "t-shirt 4",
        "body": "t-shirt 4 body",
        "price": "400",
        "url": "https://via.placeholder.com/600/2196f3",
        "sizeOption": sizeOption,
        "deliveryOption": deliveryOption,
    }
]