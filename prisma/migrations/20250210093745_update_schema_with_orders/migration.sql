/*
  Warnings:

  - Added the required column `groupText` to the `CategoryTranslation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupPackQuantity` to the `ProductOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageQuantity` to the `ProductOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poductSize` to the `ProductOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productCapacity` to the `ProductOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productDensity` to the `ProductOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productWeight` to the `ProductOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupPackage` to the `ProductTranslation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productColor` to the `ProductTranslation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productMaterial` to the `ProductTranslation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELED');

-- AlterTable
ALTER TABLE "CategoryTranslation" ADD COLUMN     "groupText" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductOptions" ADD COLUMN     "groupPackQuantity" TEXT NOT NULL,
ADD COLUMN     "packageQuantity" TEXT NOT NULL,
ADD COLUMN     "poductSize" TEXT NOT NULL,
ADD COLUMN     "productCapacity" TEXT NOT NULL,
ADD COLUMN     "productDensity" TEXT NOT NULL,
ADD COLUMN     "productWeight" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductTranslation" ADD COLUMN     "groupPackage" TEXT NOT NULL,
ADD COLUMN     "productColor" TEXT NOT NULL,
ADD COLUMN     "productMaterial" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShippingInfo" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "recipient" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "ShippingInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShippingInfo_orderId_key" ON "ShippingInfo"("orderId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShippingInfo" ADD CONSTRAINT "ShippingInfo_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
