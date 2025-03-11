-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phoneNumber" TEXT;

-- CreateTable
CREATE TABLE "Adress" (
    "id" SERIAL NOT NULL,
    "adressId" INTEGER,
    "postCompany" TEXT,
    "postOffice" TEXT,
    "postomat" TEXT,
    "city" TEXT NOT NULL,
    "postIndex" TEXT,
    "homeAdress" TEXT,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
