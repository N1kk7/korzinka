/*
  Warnings:

  - You are about to drop the column `adressId` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `homeAdress` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `postCompany` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `postIndex` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `postOffice` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `postomat` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `isReaded` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `notificationId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `discountNot` on the `UserSetting` table. All the data in the column will be lost.
  - You are about to drop the column `newsStateNot` on the `UserSetting` table. All the data in the column will be lost.
  - You are about to drop the column `orderStateNot` on the `UserSetting` table. All the data in the column will be lost.
  - You are about to drop the column `passwordBlock` on the `UserSetting` table. All the data in the column will be lost.
  - You are about to drop the column `settingId` on the `UserSetting` table. All the data in the column will be lost.
  - You are about to drop the column `twoFeCheck` on the `UserSetting` table. All the data in the column will be lost.
  - Added the required column `country` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setting` to the `UserSetting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserSetting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `UserSetting` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_adressId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "UserSetting" DROP CONSTRAINT "UserSetting_settingId_fkey";

-- AlterTable
ALTER TABLE "Adress" DROP COLUMN "adressId",
DROP COLUMN "homeAdress",
DROP COLUMN "postCompany",
DROP COLUMN "postIndex",
DROP COLUMN "postOffice",
DROP COLUMN "postomat",
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "date",
DROP COLUMN "isReaded",
DROP COLUMN "notificationId",
ADD COLUMN     "read" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserSetting" DROP COLUMN "discountNot",
DROP COLUMN "newsStateNot",
DROP COLUMN "orderStateNot",
DROP COLUMN "passwordBlock",
DROP COLUMN "settingId",
DROP COLUMN "twoFeCheck",
ADD COLUMN     "setting" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Adress_userId_idx" ON "Adress"("userId");

-- CreateIndex
CREATE INDEX "Category_parentId_idx" ON "Category"("parentId");

-- CreateIndex
CREATE INDEX "CategoryTranslation_categoryId_idx" ON "CategoryTranslation"("categoryId");

-- CreateIndex
CREATE INDEX "CategoryTranslation_language_idx" ON "CategoryTranslation"("language");

-- CreateIndex
CREATE INDEX "News_createdAt_idx" ON "News"("createdAt");

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");

-- CreateIndex
CREATE INDEX "Order_userId_idx" ON "Order"("userId");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- CreateIndex
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");

-- CreateIndex
CREATE INDEX "OrderItem_productId_idx" ON "OrderItem"("productId");

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");

-- CreateIndex
CREATE INDEX "Product_price_idx" ON "Product"("price");

-- CreateIndex
CREATE INDEX "ProductImg_imgId_idx" ON "ProductImg"("imgId");

-- CreateIndex
CREATE INDEX "ProductOptions_optionId_idx" ON "ProductOptions"("optionId");

-- CreateIndex
CREATE INDEX "ProductOptionsTranslation_optionId_idx" ON "ProductOptionsTranslation"("optionId");

-- CreateIndex
CREATE INDEX "ProductOptionsTranslation_language_idx" ON "ProductOptionsTranslation"("language");

-- CreateIndex
CREATE INDEX "ProductTranslation_productId_idx" ON "ProductTranslation"("productId");

-- CreateIndex
CREATE INDEX "ProductTranslation_language_idx" ON "ProductTranslation"("language");

-- CreateIndex
CREATE INDEX "ShippingInfo_city_idx" ON "ShippingInfo"("city");

-- CreateIndex
CREATE INDEX "ShippingInfo_country_idx" ON "ShippingInfo"("country");

-- CreateIndex
CREATE INDEX "User_phoneNumber_idx" ON "User"("phoneNumber");

-- CreateIndex
CREATE INDEX "UserSetting_userId_idx" ON "UserSetting"("userId");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSetting" ADD CONSTRAINT "UserSetting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
