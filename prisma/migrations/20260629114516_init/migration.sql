-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "user_Name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_Name_key" ON "user"("user_Name");
