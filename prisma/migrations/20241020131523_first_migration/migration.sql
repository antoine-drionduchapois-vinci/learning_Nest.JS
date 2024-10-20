-- CreateTable
CREATE TABLE "Fighter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "record" TEXT NOT NULL,

    CONSTRAINT "Fighter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
