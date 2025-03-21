/*
  Warnings:

  - Added the required column `postIndex` to the `Adress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Adress" ADD COLUMN     "postIndex" TEXT NOT NULL;
