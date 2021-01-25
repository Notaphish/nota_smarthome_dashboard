build:
	docker build ./ -t nota_weather

run:
	/usr/bin/docker run \
	--network="container:influxdb" \
	nota_weather