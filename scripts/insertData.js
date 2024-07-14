import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    // Tạo các đối tượng mới
    const admin = await prisma.tbAdmin.create({
      data: {
        password: 'admin_password',
        name: 'Admin User',
        phone_number: 123456789,
        address: 'Admin Address',
        urlhost: 'admin.test.com',
        email: 'admin@example.com',
        image: 'admin_image_url'
      }
    });

    const agency = await prisma.tbAgencyAccount.create({
      data: {
        password: 'agency_password',
        name: 'Agency User',
        phone_number: 987654321,
        address: 'Agency Address',
        role: 'Agency',
        urlhost: 'agency.test.com',
        email: 'agency@example.com',
        image: 'agency_image_url'
      }
    });

    const subAccount = await prisma.tbSubAccount.create({
      data: {
        AgencyId: agency.id,
        password: 'subaccount_password',
        name: 'SubAccount User',
        phone_number: 555555555,
        address: 'SubAccount Address',
        urlhost: 'subaccount.test.com',
        email: 'subaccount@example.com',
        image: 'subaccount_image_url'
      }
    });

    console.log('Data inserted successfully:', { admin, agency, subAccount });

  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    await prisma.$disconnect(); // Đảm bảo ngắt kết nối sau khi hoàn thành
  }
}

main();
