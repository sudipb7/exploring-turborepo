import { PrismaClient, User } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") globalThis.prisma = prisma;

// This code ensures that we only have one instance of the Prisma Client in our application, by using the global object to create a global variable prisma.By doing this, we can reuse the same prisma instance across our entire application.
