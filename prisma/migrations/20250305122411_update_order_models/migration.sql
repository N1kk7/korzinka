/*
  Warnings:

  - You are about to drop the column `postalCode` on the `ShippingInfo` table. All the data in the column will be lost.
  - Added the required column `totalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "totalPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ShippingInfo" DROP COLUMN "postalCode",
ADD COLUMN     "postCompany" TEXT,
ADD COLUMN     "postOffice" TEXT,
ADD COLUMN     "postomat" TEXT,
ALTER COLUMN "address" DROP NOT NULL;
