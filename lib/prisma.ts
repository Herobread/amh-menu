import { PrismaClient } from '@prisma/client'

declare global {
  // Allow global `prisma` in the NodeJS global namespace
  var prisma: PrismaClient | undefined
}

// Add an instance of PrismaClient to the global object, reuse it in development to prevent creating multiple instances
const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
