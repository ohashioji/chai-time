/*
  Warnings:

  - You are about to drop the column `accountId` on the `WordGuessGame` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `WordGuessGame` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WordGuessGame" DROP CONSTRAINT "WordGuessGame_accountId_fkey";

-- AlterTable
ALTER TABLE "WordGuessGame" DROP COLUMN "accountId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Post";

-- AddForeignKey
ALTER TABLE "WordGuessGame" ADD CONSTRAINT "WordGuessGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
