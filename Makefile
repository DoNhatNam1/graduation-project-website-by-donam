.PHONY: start-db
start-db: ## Start the database docker container.
	docker compose -f docker-compose.yml up -d db

.PHONY: start-nextjs
start-nextjs: ## Start the server docker container.
	docker compose -f docker-compose.yml up -d nextjs_c

.PHONY: sync-db
sync-db: ## sync the database with prisma migrate.
	docker exec -it nextjs_c npx prisma migrate dev --name init

.PHONY: pg-login
pg-login: ## Login to local postgres.
	docker exec -it db psql -U postgres

.PHONY: start-full
start-full: ## Start the web and database container at the same time.
    docker compose -f docker-compose.yml up -d db
    @echo "Waiting for db to be ready..."
    @while ! docker exec -i db psql -U postgres -c "SELECT 1;" > /dev/null 2>&1; do \
        sleep 1; \
    done
    docker compose -f docker-compose.yml up -d nextjs_c