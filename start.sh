#!/bin/sh

# Run Prisma migrations
echo "Running Prisma migrations..."
npx prisma migrate dev --name init

# Start the application
echo "Starting the application..."
node server.js &

# Keep the container running
echo "Keeping the container alive..."
tail -f /dev/null