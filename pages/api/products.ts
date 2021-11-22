import { products } from './data/products';
import { NextApiRequest, NextApiResponse } from 'next';

export default function getProducts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(products);
    }

}


