#!/bin/bash

/usr/bin/docker run \
--volume=/home/pi/projects/home_dashboard/octograph/octograph.ini:/usr/src/app/octograph.ini \
--network="container:influxdb" \
octograph --from-date=2020-12-20