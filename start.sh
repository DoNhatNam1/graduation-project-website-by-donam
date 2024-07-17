#!/bin/bash
cd app

cd graduation-project-website-by-donam

node server.js &

sleep 20

npx prisma generate

npx prisma migrate dev --name init

echo "Setup completed."