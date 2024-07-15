# Base image setup
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install git
RUN apk add --no-cache git

# Clone the repository
RUN git clone https://github.com/DoNhatNam1/graduation-project-website-by-donam.git

# Change working directory to the cloned repository
WORKDIR /app/graduation-project-website-by-donam

COPY .env.development .env
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

################
#    Runner    #
################
FROM node:20-alpine as runner

# Create necessary system user and group
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

ENV NODE_ENV=production

# Copy necessary files from build stage
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/package.json .
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/package-lock.json .
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs  /app/graduation-project-website-by-donam/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/node_modules/@prisma/client ./node_modules/@prisma/client

USER nextjs

EXPOSE 3000

CMD npx prisma db push --schema=prisma/schema.prisma && npx prisma generate --schema=prisma/schema.prisma && npm start-docker