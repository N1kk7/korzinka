/*
  Warnings:

  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - The `price` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "title",
ADD COLUMN     "wholesaleInfo" TEXT,
DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION,
ALTER COLUMN "counterQuantity" SET DEFAULT 1;

-- CreateTable
CREATE TABLE "ProductOptionsTranslation" (
    "id" SERIAL NOT NULL,
    "optionId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "optionInfo" TEXT NOT NULL,

    CONSTRAINT "ProductOptionsTranslation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductOptionsTranslation" ADD CONSTRAINT "ProductOptionsTranslation_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "ProductOptions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
