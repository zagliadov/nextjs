import { hoodies } from './data/hoodies';
import { NextApiRequest, NextApiResponse } from 'next';

export default function getHoodies(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(hoodies);
    }

}