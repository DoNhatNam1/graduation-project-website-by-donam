#!/bin/bash

node server.js &

sleep 20

npx prisma generate

npx prisma migrate dev --name init

echo "Setup completed."