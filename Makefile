DOCKER_FILE := ./Dockerfile
DOCKER_DEV := -f docker-compose.yml -f docker-compose.dev.yml
DOCKER_IMAGES := ebookjs-app:latest

docker-build:
	docker build -f ${DOCKER_FILE} -t ${DOCKER_IMAGES} .

docker-run-dev:
	docker-compose ${DOCKER_DEV} up -d

docker-run-dev-build:
	docker-compose ${DOCKER_DEV} up -d --build

docker-stop-dev:
	docker-compose ${DOCKER_DEV} down

remove-coverage:
	rm -r coverage .nyc_output
