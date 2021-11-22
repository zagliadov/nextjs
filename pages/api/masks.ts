import { masks } from './data/masks';
import { NextApiRequest, NextApiResponse } from 'next';

export default function getMasks(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(masks);
    }

}