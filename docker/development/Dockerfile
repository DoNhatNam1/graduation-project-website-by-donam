# Base image setup
FROM node:20 AS builder

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

WORKDIR /app/graduation-project-website-by-donam

# Create necessary system user and group
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 --ingroup nodejs --shell /bin/bash --disabled-password nextjs

# RUN echo 'nextjs ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

ENV NODE_ENV=production

# Copy necessary files from build stage
COPY --from=builder /app/graduation-project-website-by-donam/package.json .
COPY --from=builder /app/graduation-project-website-by-donam/package-lock.json .
COPY --from=builder /app/graduation-project-website-by-donam/next.config.mjs ./next.config.mjs
COPY --from=builder /app/graduation-project-website-by-donam/public ./public
COPY --from=builder /app/graduation-project-website-by-donam/.next/standalone ./
COPY --from=builder /app/graduation-project-website-by-donam/.next/static ./.next/static
COPY --from=builder /app/graduation-project-website-by-donam/prisma ./prisma
COPY --from=builder /app/graduation-project-website-by-donam/scripts/insertData.js ./insertData.js
COPY --from=builder /app/graduation-project-website-by-donam/entrypoint.sh ./entrypoint.sh
COPY --from=builder /app/graduation-project-website-by-donam/node_modules/@prisma/client ./node_modules/@prisma/client

EXPOSE 3000

# Entrypoint script to wait for dependencies and then start the app
USER root
# RUN chmod +x /app/graduation-project-website-by-donam/wait-for-it.sh
# RUN chmod +x /app/graduation-project-website-by-donam/entrypoint.sh
# RUN chmod +x /app/graduation-project-website-by-donam/insertData.js

CMD ["entrypoint.sh"]