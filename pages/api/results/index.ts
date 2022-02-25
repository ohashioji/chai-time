// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../utils/db/prisma";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { email, attempts, timeTaken } = JSON.parse(req.body);
		const submitResult = async () => {
			const user = await prisma.user.findFirst({
				where: { email },
			});
			if (user) {
				const data = {
					userId: user.id,
					attempts: attempts + 1,
					timeTaken,
				};
				const response = await prisma.wordGuessGame.create({ data });
				res.status(200).json(response);
			} else {
				res.status(401).json("User not found");
			}
		};
		submitResult();
	}
}
