# Base image setup
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install git
RUN apk add --no-cache libc6-compat git


# Clone the repository
RUN git clone https://github.com/DoNhatNam1/graduation-project-website-by-donam.git

# Change working directory to the cloned repository
WORKDIR /app/graduation-project-website-by-donam

# COPY package.json package-lock.json ./

RUN npm ci

# Generate Prisma client

COPY . .

RUN npm run build

# COPY migrate-and-start.sh .
# RUN chmod +x migrate-and-start.sh

################
#    Runner    #
################
FROM node:18-alpine as runner


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
# COPY --from=builder /app/graduation-project-website-by-donam/migrate-and-start.sh ./migrate-and-start.sh
COPY --from=builder /app/graduation-project-website-by-donam/.next/static ./.next/static
COPY --from=builder /app/graduation-project-website-by-donam/node_modules ./node_modules

EXPOSE 3000
ENV PORT 3000

CMD  ["npm", "start-docker"]
