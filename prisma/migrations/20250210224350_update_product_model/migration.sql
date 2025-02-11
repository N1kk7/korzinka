/*
  Warnings:

  - You are about to drop the column `groupPackQuantity` on the `ProductOptions` table. All the data in the column will be lost.
  - You are about to drop the column `packageQuantity` on the `ProductOptions` table. All the data in the column will be lost.
  - You are about to drop the column `poductSize` on the `ProductOptions` table. All the data in the column will be lost.
  - You are about to drop the column `productCapacity` on the `ProductOptions` table. All the data in the column will be lost.
  - You are about to drop the column `productDensity` on the `ProductOptions` table. All the data in the column will be lost.
  - You are about to drop the column `productWeight` on the `ProductOptions` table. All the data in the column will be lost.
  - Added the required column `groupPackQuantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageQuantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poductSize` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productCapacity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productDensity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productWeight` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "groupPackQuantity" TEXT NOT NULL,
ADD COLUMN     "packageQuantity" TEXT NOT NULL,
ADD COLUMN     "poductSize" TEXT NOT NULL,
ADD COLUMN     "productCapacity" TEXT NOT NULL,
ADD COLUMN     "productDensity" TEXT NOT NULL,
ADD COLUMN     "productWeight" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductOptions" DROP COLUMN "groupPackQuantity",
DROP COLUMN "packageQuantity",
DROP COLUMN "poductSize",
DROP COLUMN "productCapacity",
DROP COLUMN "productDensity",
DROP COLUMN "productWeight";
