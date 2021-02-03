docker-path=/usr/bin/docker

build-weather:
	$(docker-path) build ./weather -t nota_weather

run-weather:
	$(docker-path) run \
	--network="container:influxdb" \
	nota_weather

build-octograph:
	$(docker-path) build ./octograph/app -t octograph

from_date := $(shell date --date="2 days ago" +"%Y-%m-%d")
to_date :=$(shell date --iso-8601=seconds)

run-octograph: 
	$(docker-path) run \
	--volume=/home/pi/projects/home_dashboard/octograph/octograph.ini:/usr/src/app/octograph.ini \
	--network="container:influxdb" \
	octograph --from-date=$(from_date) --to-date=$(to_date)


compose_command=/usr/local/bin/docker-compose -f docker-compose.yml -f speedtest-grafana/docker-compose.yml -f ruuvitag/docker-compose.yml

compose-up:
	$(compose_command) up -d

compose-down:
	$(compose_command) down

restart-bt-gateway:
	$(compose_command) restart bt-mqtt-gateway
