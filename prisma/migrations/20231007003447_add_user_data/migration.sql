-- CreateTable
CREATE TABLE "UserData" (
    "ausID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("ausID")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_ausID_key" ON "UserData"("ausID");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_userId_key" ON "UserData"("userId");

-- AddForeignKey
ALTER TABLE "UserData" ADD CONSTRAINT "UserData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
