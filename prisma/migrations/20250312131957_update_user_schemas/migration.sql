-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userAvatar" TEXT;

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "notificationId" INTEGER,
    "message" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
