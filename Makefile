docker-path=/usr/bin/docker

SELF_DIR := $(dir $(lastword $(MAKEFILE_LIST)))

build-weather:
	$(docker-path) build ./weather -t nota_weather

run-weather:
	$(docker-path) run --rm \
	--network="container:influxdb" \
	nota_weather

build-octograph:
	$(docker-path) build ./octograph/app -t octograph

from_date := $(shell date --date="2 days ago" +"%Y-%m-%d")
to_date :=$(shell date --iso-8601=seconds)

run-octograph:
	$(docker-path) run --rm \
	--volume=$(SELF_DIR)/octograph/octograph.ini:/usr/src/app/octograph.ini \
	--network="container:influxdb" \
	octograph --from-date=$(from_date) --to-date=$(to_date)


compose_command=/usr/local/bin/docker-compose -f $(SELF_DIR)docker-compose.yml -f $(SELF_DIR)speedtest-grafana/docker-compose.yml -f $(SELF_DIR)ruuvitag/docker-compose.yml -f $(SELF_DIR)pihole/docker-compose.yml

compose-up:
	$(compose_command) up -d

compose-down:
	$(compose_command) down

restart-bt-gateway:
	$(compose_command) restart bt-mqtt-gateway
