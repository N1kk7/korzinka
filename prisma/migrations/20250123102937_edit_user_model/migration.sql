/*
  Warnings:

  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - The `wholesalePrice` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `stockState` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "stock",
ADD COLUMN     "stockState" BOOLEAN NOT NULL,
ADD COLUMN     "stockValue" INTEGER DEFAULT 0,
DROP COLUMN "wholesalePrice",
ADD COLUMN     "wholesalePrice" INTEGER;

-- CreateTable
CREATE TABLE "ProductOptions" (
    "id" SERIAL NOT NULL,
    "optionId" INTEGER NOT NULL,
    "optionImg" TEXT NOT NULL,
    "optionDescription" TEXT NOT NULL,
    "optionPrice" DOUBLE PRECISION,
    "optionWholesale" DOUBLE PRECISION,
    "wholesaleOnly" BOOLEAN NOT NULL,

    CONSTRAINT "ProductOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductOptions" ADD CONSTRAINT "ProductOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
