#!/bin/sh
set -e

# Wait for postgres-v15 and pgadmin-v4 to be ready
# /app/graduation-project-website-by-donam/wait-for-it.sh -t 0 postgres-v15:5432 -- echo "postgres-v15 is up"
# /app/graduation-project-website-by-donam/wait-for-it.sh -t 0 pgadmin-v4:80 -- echo "pgadmin-v4 is up"

# Run Prisma commands
npx prisma db push --schema=prisma/schema.prisma
npx prisma generate --schema=prisma/schema.prisma

# Run insertData.js
node /app/graduation-project-website-by-donam/insertData.js

# Start the application
npm start-docker