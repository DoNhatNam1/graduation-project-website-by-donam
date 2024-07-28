
import prisma from "@/src/libs/prismaDb";

// Define action to fetch all user data
const getUserData = async () => {
    try {
      // Sử dụng Prisma Client để truy vấn tất cả dữ liệu từ bảng User
      const users = await prisma.tbAgencyAccount.findMany();
  
      // Trả về dữ liệu của người dùng
      return users;
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error fetching user data:', error);
      throw new Error('Error fetching user data');
    }
  };
  
  // Export action để có thể sử dụng ở nơi khác trong ứng dụng của bạn
  export default getUserData;