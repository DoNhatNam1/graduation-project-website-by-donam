.PHONY: start-db
start-db: ## Start the database docker container.
	docker compose -f docker/development/docker-compose.yml up -d postgres-v15 pgadmin-v4

.PHONY: stop-db
stop-db: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down postgres-v15 pgadmin-v4

.PHONY: start-dev
start-dev: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml up next-web -d --build 

.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down next-web
  
.PHONY: build-prod
build-prod: ## Build the production docker image.
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-prod
start-prod: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-prod
stop-prod: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down