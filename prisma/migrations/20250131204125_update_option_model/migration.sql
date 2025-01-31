/*
  Warnings:

  - You are about to drop the column `optionDescription` on the `ProductOptions` table. All the data in the column will be lost.
  - You are about to drop the column `optionWholesale` on the `ProductOptions` table. All the data in the column will be lost.
  - You are about to drop the column `wholesaleOnly` on the `ProductOptions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductOptions" DROP COLUMN "optionDescription",
DROP COLUMN "optionWholesale",
DROP COLUMN "wholesaleOnly";
