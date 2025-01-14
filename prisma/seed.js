import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const category1 = await prisma.category.create({
    data: {
      group: 'electronics',
      title: 'Electronics',
      visible: true,
      categoryImg: "",
      products: {
        create: [
          {
            title: 'Smartphone',
            visible: true,
            img: 'smartphone.jpg',
            price: '699.99',
            discountPrice: 599.99,
            wholesalePrice: '650.00',
            wholesaleDescription: 'Buy 10 or more for $650 each',
            counterQuantity: 50,
            wholesaleOnly: false,
          },
          {
            title: 'Laptop',
            visible: true,
            img: 'laptop.jpg',
            price: '1200.00',
          },
          {
            title: 'Smartwatch',
            visible: true,
            img: 'smartwatch.jpg',
            price: '199.99',
            discountPrice: 149.99,
            wholesalePrice: '180.00',
            wholesaleDescription: 'Bulk discount available for 20+ units',
            counterQuantity: 100,
            wholesaleOnly: false,
          },
          {
            title: 'Wireless Earbuds',
            visible: true,
            img: 'earbuds.jpg',
            price: '89.99',
            discountPrice: 79.99,
            wholesalePrice: '85.00',
            wholesaleDescription: 'Perfect for bulk sales and distributors',
            counterQuantity: 200,
            wholesaleOnly: false,
          },
          {
            title: 'Gaming Console',
            visible: true,
            img: 'gaming-console.jpg',
            price: '499.99',
            discountPrice: 459.99,
            wholesalePrice: '480.00',
            wholesaleDescription: 'Ideal for gaming enthusiasts and retailers',
            counterQuantity: 30,
            wholesaleOnly: true,
          },
        ],
      },
    },
  });
  
  console.log('Category with products created:', category1);
  

  // Create users
  const user1 = await prisma.user.create({
    data: {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'hashedpassword123', // Use a hashed password in production
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'hashedpassword456', // Use a hashed password in production
    },
  });

  // Create news
  const news1 = await prisma.news.create({
    data: {
      title: 'Welcome to our store!',
      content: 'We are excited to launch our new e-commerce platform.',
      visible: true,
    },
  });

  const news2 = await prisma.news.create({
    data: {
      title: 'Big Sale!',
      content: 'Get up to 50% off on electronics this weekend.',
      visible: true,
    },
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
