FROM node:20-alpine AS base

# 1. Install dependencies only when needed
FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat git
RUN mkdir app && cd app/
RUN git clone https://github.com/DoNhatNam1/graduation-project-website-by-donam.git

RUN cd graduation-project-website-by-donam/

# Install dependencies based on the preferred package manager
RUN npm ci

# Run Prisma commands
RUN npm prisma db push
RUN npm prisma generate

# Run custom scripts
RUN cd scripts/ && node insertData.js && cd ../

# Build the Next.js application
RUN npm run build

# 2. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app/graduation-project-website-by-donam/

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/graduation-project-website-by-donam/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/.next/static ./.next/static


USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD HOSTNAME=localhost node server.js