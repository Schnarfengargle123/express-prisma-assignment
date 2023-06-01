const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  //     const user1 = await prisma.user.upsert({
  //       where: {},
  //       update: {},
  //       data: {
  //         email: 'mr_bean1@email.com',
  //         username: 'mr_bean1',
  //         password: "Beans123",
  //         registered: false
  //       },
  //     });

  //     const user2 = await prisma.user.upsert({
  //       where: {},
  //       update: {},
  //       data: {
  //         email: 'mr_bean2@email.com',
  //         username: 'mr_bean2',
  //         password: "Beans123",
  //         registered: false
  //       },
  //     });

  //     const product1 = await prisma.user.upsert({
  //       where: {},
  //       update: {},
  //       data: {
  //         title: 'Sun Lounger Deluxe',
  //         description: 'The only sun lounger you will ever need.',
  //         category: "Home & Garden",
  //         price: 79.99,
  //         quantity: 4,
  //         available: true
  //       },
  // });

  //     const product2 = await prisma.user.upsert({
  //       where: {},
  //       update: {},
  //       data: {
  //         title: 'Sunbrella Parasol',
  //         description: 'Cool as can be.',
  //         category: "Home & Garden",
  //         price: 59.99,
  //         quantity: 2,
  //         available: true
  //       },
  //     });

  // ====================================================================================================

  const user1 = await prisma.user.create({
    data: {
      email: 'mr_bean1@email.com',
      username: 'mr_bean1',
      password: 'Beans123',
      registered: false,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'mr_bean2@email.com',
      username: 'mr_bean2',
      password: 'Beans123',
      registered: false,
    },
  });

  const product1 = await prisma.product.create({
    data: {
      title: 'Sun Lounger Deluxe',
      description: 'The only sun lounger you will ever need.',
      category: 'Home & Garden',
      price: 79.99,
      quantity: 4,
      available: true,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      title: 'Sunbrella Parasol',
      description: 'Cool as can be.',
      category: 'Home & Garden',
      price: 59.99,
      quantity: 2,
      available: true,
    },
  });

  console.log({ user1, user2, product1, product2 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
