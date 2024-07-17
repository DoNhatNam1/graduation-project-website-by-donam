#!/bin/bash

# Lệnh để chạy server
node server.js &

# Đợi một chút để server khởi động
sleep 5

# Lệnh để generate Prisma client
npx prisma generate

# Lệnh để chạy migration với tên là 'init'
npx prisma migrate dev --name init

# Kết thúc script
echo "Setup completed."