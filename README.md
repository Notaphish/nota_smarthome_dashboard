### Nota smarthome dashboard

Creating a dashboard/common place for my smart home things and bit of a learning exercise with nginx.

Recently got a bunch of Ruuvitags for xmas and wanted to make a nice dashboard for the household, which is how this began. I already had the speedtest image running and uploading to grafana so just merged that with the ruuvitag repo initially.

Suspect I could use home_assistant for alot of this but given so much was already in docker it was pretty straightforward to do it like this - also learning!

Goal is to have as many of these dashboards served via nginx and then have a frontend that would let you navigate to each one - ideally make a nice little homedashboard for it.

Don't use this for anything "production" wise, I just run all this off a raspberry pi on my network ( its not exposed externally at all). Grafana doesn't have a password and the influxdb uses trash pwds too.

#### Start/stop

At the moment there is a shell script that just has the docker-compose command in it ( so I don't have to type it, atm its a bit wordy with all the different docker-compose files in use )

e.g. `./dc.sh up -d` or `./dc.sh down`

### Access things

http://localhost/grafana - access the grafana dashboard

http://localhost/hive - access the hive ui for monitor incoming messages from the bt-mqtt-gateway

http://localhost/node-red - viewing the node-red ui for viewing message related flows


### Ruuvitag monitoring

I've used the docker-compose setup from https://github.com/koenvervloesem/ruuvitag-demo and stripped out all the demo related parts.

Pulled the influxdb and grafan part of this up a level

I had issues where the bt-mgtt-gateway would stop processing bluetooth messages intermittently, after making sure all my bluetooth related things were up to date I now just restart this container every 20 minutes and it seems to be working much better now.
Would recommend the bluetooth updates aswell though.

### Speedtest grafana 

Used to have this running in isolation https://github.com/frdmn/docker-speedtest-grafana but I've pulled into into this repo ( stripping out everything I didn't need )

Pulled the influxdb and grafana parts of this up a level too.

### Octograph

Based on https://github.com/stevenewey/octograph but refactored to use my the single grafana and influxdb.

You can build and run the docker image for this via the [Makefile](octograph/Makefile) in the folder. The run target makes sure to run on the same network as influxdb

I have the run script being called once a day from cron.