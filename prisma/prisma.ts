

// import { PrismaClient } from '@prisma/client';

// let prisma: PrismaClient;

// if (!global.prisma) {
//   global.prisma = new PrismaClient();
// }

// prisma = global.prisma;

// export default prisma;

import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma;
}

export default prisma;
