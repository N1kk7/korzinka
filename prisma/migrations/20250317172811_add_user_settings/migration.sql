-- CreateTable
CREATE TABLE "UserSetting" (
    "id" SERIAL NOT NULL,
    "settingId" INTEGER,
    "discountNot" BOOLEAN NOT NULL DEFAULT true,
    "orderStateNot" BOOLEAN NOT NULL DEFAULT true,
    "newsStateNot" BOOLEAN NOT NULL DEFAULT true,
    "twoFeCheck" BOOLEAN NOT NULL DEFAULT true,
    "passwordBlock" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSetting" ADD CONSTRAINT "UserSetting_settingId_fkey" FOREIGN KEY ("settingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
