// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import words from "../../../data/word-bank.js";

type Word = {
	word: string;
};

type Res = {
	valid: boolean;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Res>
) {
	if (req.method === "POST") {
		const { word }: Word = req.body;

		const match = words.find((w) => w === word);
		const returnMatch = {
			valid: !!match,
		};
		res.status(200).json(returnMatch);
	}
}
