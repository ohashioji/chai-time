// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import words from "../../data/word-bank.js";

type Word = {
	word: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Word>
) {
	const todaysPick = {
		word: words[Math.floor(Math.random() * words.length)],
	};
	res.status(200).json(todaysPick);
}
