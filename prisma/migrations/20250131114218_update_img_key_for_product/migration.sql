/*
  Warnings:

  - You are about to drop the column `img` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "img";

-- CreateTable
CREATE TABLE "ProductImg" (
    "id" SERIAL NOT NULL,
    "imgId" INTEGER NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "ProductImg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductImg" ADD CONSTRAINT "ProductImg_imgId_fkey" FOREIGN KEY ("imgId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
