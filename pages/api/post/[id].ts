// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {
        query: { id },
        method,
    } = req;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: method,
        }
    );

    const data = await response.json();

    if (Object.keys(data).length === 0) res.status(404).json({});

    switch (method) {
        case "GET":
            res.status(200).json(data);
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end({ message: `Method ${method} Not Allowed` });
    }
}
