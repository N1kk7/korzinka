/*
  Warnings:

  - Added the required column `activeOrders` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allClients` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allEarning` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allOrders` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastOrders` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderGeography` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periods` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productRate` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnCancel` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellMetrics` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellOrder` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userMetrics` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `users` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearSales` to the `AdminMetric` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AdminMetric" ADD COLUMN     "activeOrders" BOOLEAN NOT NULL,
ADD COLUMN     "activity" BOOLEAN NOT NULL,
ADD COLUMN     "allClients" INTEGER NOT NULL,
ADD COLUMN     "allEarning" INTEGER NOT NULL,
ADD COLUMN     "allOrders" INTEGER NOT NULL,
ADD COLUMN     "lastOrders" BOOLEAN NOT NULL,
ADD COLUMN     "orderGeography" BOOLEAN NOT NULL,
ADD COLUMN     "periods" BOOLEAN NOT NULL,
ADD COLUMN     "productRate" BOOLEAN NOT NULL,
ADD COLUMN     "returnCancel" BOOLEAN NOT NULL,
ADD COLUMN     "sellMetrics" BOOLEAN NOT NULL,
ADD COLUMN     "sellOrder" BOOLEAN NOT NULL,
ADD COLUMN     "userMetrics" BOOLEAN NOT NULL,
ADD COLUMN     "users" INTEGER NOT NULL,
ADD COLUMN     "yearSales" INTEGER NOT NULL;
