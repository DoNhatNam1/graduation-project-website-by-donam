.PHONY: start-db
start-db: ## Start the database docker container.
	docker compose -f docker-compose.yml up -d db

.PHONY: build-nextjs
build-nextjs: ## Build the server docker container.
	docker compose -f docker-compose.yml build -d nextjs_c 
	
.PHONY: start-nextjs
start-nextjs: ## Start the server docker container.
	docker compose -f docker-compose.yml up -d nextjs_c 

.PHONY: start-full
start-full: ## Start the full docker container.
	docker compose -f docker-compose.yml up -d

.PHONY: sync-db
sync-db: ## sync the database with prisma migrate.
	docker exec -it nextjs_c npx prisma migrate dev --name init

.PHONY: pg-login
pg-login: ## Login to local postgres.
	docker exec -it db psql -U postgres

.PHONY: rm-b-cache
rm-b-cache: ## Login to local postgres.
	docker buildx prune -f

	