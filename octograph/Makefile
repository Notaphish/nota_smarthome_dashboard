date := $(shell date --date="2 days ago" +"%Y-%m-%d")

build-docker:
	docker build ./app -t octograph

run-docker: 
	/usr/bin/docker run \
	--volume=/home/pi/projects/home_dashboard/octograph/octograph.ini:/usr/src/app/octograph.ini \
	--network="container:influxdb" \
	octograph --from-date=$(date)