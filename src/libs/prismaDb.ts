import { PrismaClient } from '@prisma/client';
import { withOptimize } from '@prisma/extension-optimize';
import { withAccelerate } from '@prisma/extension-accelerate';

const extendPrisma = () => new PrismaClient().$extends(withOptimize()).$extends(withAccelerate());

type PrismaClientExtended = ReturnType<typeof extendPrisma>;

declare global {
    var prisma: PrismaClientExtended | undefined;
}

const prisma = global.prisma || extendPrisma();

if (process.env.NODE_ENV === 'production') global.prisma = prisma;

export default prisma;