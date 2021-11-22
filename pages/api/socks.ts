import { socks } from './data/socks';
import { NextApiRequest, NextApiResponse } from 'next';

export default function getSocks(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(socks);
    }

}