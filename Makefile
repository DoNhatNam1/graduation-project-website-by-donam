.PHONY: start-db
start-db: ## Start the database docker container.
	docker compose -f docker-compose.yml up -d db

.PHONY: start-nextjs
start-nextjs: ## Start the server docker container.
	docker compose -f docker-compose.yml up -d --build nextjs_c

.PHONY: sync-db
sync-db: ## sync the database with prisma migrate.
	docker exec -it nextjs_c npx prisma migrate dev --name init

.PHONY: pg-login
pg-login: ## Login to local postgres.
	docker exec -it db psql -U postgres
  
.PHONY: build-prod
build-prod: ## Build the production docker image.
	docker compose -f docker-compose.yml build

.PHONY: start-prod
start-prod: ## Start the production docker container.
	docker compose -f docker-compose.yml up -d

.PHONY: stop-prod
stop-prod: ## Stop the production docker container.
	docker compose -f docker-compose.yml down