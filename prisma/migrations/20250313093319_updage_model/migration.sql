/*
  Warnings:

  - Added the required column `isReaded` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "isReaded" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paymentMethod" TEXT;
