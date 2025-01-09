import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Fetch all categories with their products
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  console.log('Categories:', categories);

  // Fetch all users
  const users = await prisma.user.findMany();
  console.log('Users:', users);

  // Fetch all news
  const news = await prisma.news.findMany();
  console.log('News:', news);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
