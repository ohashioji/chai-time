-- CreateTable
CREATE TABLE "WordGuessGame" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL,
    "timeTaken" INTEGER NOT NULL,

    CONSTRAINT "WordGuessGame_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WordGuessGame" ADD CONSTRAINT "WordGuessGame_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
