# Base image setup
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Install git
RUN apk add --no-cache git

# Clone the repository
RUN git clone https://github.com/DoNhatNam1/graduation-project-website-by-donam.git .

# Copy .env file
COPY .env .env

################
# Dependencies #
################
FROM base AS dependencies

COPY package.json package-lock.json ./

RUN npm install

################
#    Build     #
################
FROM base AS build

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Prisma
RUN npx prisma generate --schema=prisma/schema.prisma

################
#    Target    #
################
FROM base AS target

# Create necessary system user and group
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from build stage
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/node_modules/@prisma/client ./node_modules/@prisma/client

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]