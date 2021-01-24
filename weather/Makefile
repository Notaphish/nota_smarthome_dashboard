build:
	docker build ./ -t nota_openweathermap_influxdb

run:
	/usr/bin/docker run \
	--network="container:influxdb" \
	nota_openweathermap_influxdb