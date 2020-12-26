### Nota smarthome dashboard

Adding more bits and bobs around the house. I know I could probably use homeassistant for all of this ( or parts of it) but wanted to make something more bespoke.

Goal is to have as many of these dashboards served via nginx and then have a react frontend that would let you navigate to each one - ideally make a nice little homedashboard for it

#### Ruuvitag monitoring

I've used the docker-compose setup from https://github.com/koenvervloesem/ruuvitag-demo and stripped out all the demo related parts.

Pulled the influxdb and grafan part of this up a level

#### Speedtest grafana 

Used to have this running in isolation https://github.com/frdmn/docker-speedtest-grafana but I've pulled into into this repo ( stripping out everything I didn't need )

Pulled the influxdb and grafana parts of this up a level too