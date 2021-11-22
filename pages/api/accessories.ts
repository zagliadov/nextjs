import { NextApiRequest, NextApiResponse } from 'next';
import { accessories } from './data/accessories';

export default function getAccessories(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(accessories);
    }

}