import { tshirt } from './data/tshirt';
import { NextApiRequest, NextApiResponse } from 'next';

export default function getTshirt(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(tshirt);
    }

}
