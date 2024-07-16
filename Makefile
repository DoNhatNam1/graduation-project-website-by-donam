.PHONY: start-db
start-db: ## Start the database docker container.
	docker compose -f docker-compose.yml up -d db

.PHONY: start-server
start-server: ## Start the server docker container.
	docker compose -f docker-compose.yml up -d --build server

.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -f docker-compose.yml down
  
.PHONY: build-prod
build-prod: ## Build the production docker image.
	docker compose -f docker-compose.yml build

.PHONY: start-prod
start-prod: ## Start the production docker container.
	docker compose -f docker-compose.yml up -d

.PHONY: stop-prod
stop-prod: ## Stop the production docker container.
	docker compose -f docker-compose.yml down