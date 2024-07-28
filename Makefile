start-db: ## Start the database docker container.
	docker compose -f docker-compose.yml up -d db

build-nextjs: ## Build the server docker container.
	docker compose -f docker-compose.yml build -d nextjs_c 
	
start-nextjs: ## Start the server docker container.
	docker compose -f docker-compose.yml up -d nextjs_c 

start-full: ## Start the full docker container.
	docker compose -f docker-compose.yml up -d

sync-db: ## sync the database with prisma migrate.
	docker exec -it nextjs_c npx prisma migrate dev --name init

pg-login: ## Login to local postgres.
	docker exec -it db psql -U postgres

rm-b-cache: ## Login to local postgres.
	docker buildx prune -f