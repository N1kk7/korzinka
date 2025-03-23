/*
  Warnings:

  - Added the required column `postCompany` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postOffice` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postomat` to the `Adress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adress" ADD COLUMN     "postCompany" TEXT NOT NULL,
ADD COLUMN     "postOffice" TEXT NOT NULL,
ADD COLUMN     "postomat" TEXT NOT NULL;
