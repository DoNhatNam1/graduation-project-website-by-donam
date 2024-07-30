FROM node:20-alpine AS base

# Rebuild the source code only when needed
FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat git
WORKDIR /app

RUN git clone https://github.com/DoNhatNam1/graduation-project-website-by-donam.git

WORKDIR /app/graduation-project-website-by-donam

ARG DOCKER_POSTGRES_PRISMA_URL
ARG NEXT_PUBLIC_FIREBASE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ARG NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_FIREBASE_APP_ID
ARG NEXT_PUBLIC_FIREBASE_MESUREMENT_ID
ARG NEXT_PUBLIC_HOSTNAME_PATH
ARG COOKIES_SESSION_NAME
ARG COOKIES_DATA_NAME
ARG SECRET_KEY
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG NEXT_AUTH_SECRET
ARG KEY_REGISTER_EMAIL

# Install dependencies based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_ENV production
ENV DOCKER_POSTGRES_PRISMA_URL $DOCKER_POSTGRES_PRISMA_URL
ENV NEXT_PUBLIC_FIREBASE_API_KEY $NEXT_PUBLIC_FIREBASE_API_KEY
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN $NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID $NEXT_PUBLIC_FIREBASE_PROJECT_ID
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET $NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID $NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIREBASE_APP_ID $NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIREBASE_MESUREMENT_ID $NEXT_PUBLIC_FIREBASE_MESUREMENT_ID
ENV NEXT_PUBLIC_HOSTNAME_PATH $NEXT_PUBLIC_HOSTNAME_PATH
ENV COOKIES_SESSION_NAME $COOKIES_SESSION_NAME
ENV COOKIES_DATA_NAME $COOKIES_DATA_NAME
ENV SECRET_KEY $SECRET_KEY
ENV GOOGLE_CLIENT_ID $GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET $GOOGLE_CLIENT_SECRET
ENV NEXT_AUTH_SECRET $NEXT_AUTH_SECRET
ENV KEY_REGISTER_EMAIL $KEY_REGISTER_EMAIL

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app/graduation-project-website-by-donam

ARG DOCKER_POSTGRES_PRISMA_URL
ARG NEXT_PUBLIC_FIREBASE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ARG NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_FIREBASE_APP_ID
ARG NEXT_PUBLIC_FIREBASE_MESUREMENT_ID
ARG NEXT_PUBLIC_HOSTNAME_PATH
ARG COOKIES_SESSION_NAME
ARG COOKIES_DATA_NAME
ARG SECRET_KEY
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG NEXT_AUTH_SECRET
ARG KEY_REGISTER_EMAIL

ENV NODE_ENV production
ENV DOCKER_POSTGRES_PRISMA_URL $DOCKER_POSTGRES_PRISMA_URL
ENV NEXT_PUBLIC_FIREBASE_API_KEY $NEXT_PUBLIC_FIREBASE_API_KEY
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN $NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID $NEXT_PUBLIC_FIREBASE_PROJECT_ID
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET $NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID $NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIREBASE_APP_ID $NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIREBASE_MESUREMENT_ID $NEXT_PUBLIC_FIREBASE_MESUREMENT_ID
ENV NEXT_PUBLIC_HOSTNAME_PATH $NEXT_PUBLIC_HOSTNAME_PATH
ENV COOKIES_SESSION_NAME $COOKIES_SESSION_NAME
ENV COOKIES_DATA_NAME $COOKIES_DATA_NAME
ENV SECRET_KEY $SECRET_KEY
ENV GOOGLE_CLIENT_ID $GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET $GOOGLE_CLIENT_SECRET
ENV NEXT_AUTH_SECRET $NEXT_AUTH_SECRET
ENV KEY_REGISTER_EMAIL $KEY_REGISTER_EMAIL
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/graduation-project-website-by-donam/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/node_modules/@prisma/client ./node_modules/@prisma/client
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/node_modules/.prisma/client ./node_modules/.prisma/client
COPY --from=builder --chown=nextjs:nodejs /app/graduation-project-website-by-donam/next.config.mjs ./next.config.mjs

USER root
COPY start.sh /start.sh
RUN chmod +x /start.sh

USER nextjs

EXPOSE 3000

ENV PORT 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output

ENTRYPOINT "/start.sh"
