.PHONY: build-dev
build-dev: ## Build the development docker image.
	docker compose -f docker/development/docker-compose.yml build

.PHONY: start-dev
start-dev: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml up -d

.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down
  
.PHONY: build-prod
build-prod: ## Build the production docker image.
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-prod
start-prod: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-prod
stop-prod: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down