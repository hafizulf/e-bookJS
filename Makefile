DOCKER_FILE := ./Dockerfile
DOCKER_DEV := -f docker-compose.yml -f docker-compose.dev.yml
DOCKER_IMAGES := ebookjs-app:latest

docker-build:
	docker build -f ${DOCKER_FILE} -t ${DOCKER_IMAGES} .

docker-run-dev:
	docker-compose ${DOCKER_DEV} up -d

docker-run-dev-build:
	docker-compose ${DOCKER_DEV} up -d --build

docker-run-dev-recreate-volume:
	docker-compose ${DOCKER_DEV} up -d --build -V

docker-stop-dev:
	docker-compose ${DOCKER_DEV} down

docker-stop-dev-remove-volume:
	docker-compose ${DOCKER_DEV} down -v

remove-coverage:
	rm -r coverage .nyc_output
