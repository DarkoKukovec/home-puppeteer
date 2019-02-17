# home-puppeteer
Personal home automation system

## Project parts
* server - communication with all devices
  * Express.js + TypeScript + MobX + DatX + WebSockets
* client - UI
  * React + TypeScript + MobX + DatX + WebSockets

## Systems

* Tradfri
  * Lights/groups - on/off/brightness/color
  * Motion sensor
* TV - WebOS
  * notifications, volume, on/off, ...
* Netatmo Weather station - get current weather conditions
* Broadlink Mini 3 - A/C control
* Netatmo Thermostat - set temperature
* Window blinds (TBD) - open/close
* Intercom (TBD) - notification, video stream?

## Notes

### WebOS

* https://github.com/hobbyquaker/lgtv2

### Netatmo Weather

* https://dev.netatmo.com/resources/technical/reference/smarthomeapi
* https://www.npmjs.com/package/netatmo

### Tradfri

* https://www.npmjs.com/package/node-tradfri
* https://github.com/AlCalzone/node-tradfri-client
* https://github.com/LinusU/node-tradfri

### Broadlink

* https://github.com/lprhodes/homebridge-broadlink-rm
  * accessories/aircon.js
  * global.Service
* https://github.com/lprhodes/broadlinkjs-rm
* https://github.com/ssj234/broadlink-js-smth

### Thermostat

* Netatmo Thermostat
  * https://dev.netatmo.com/resources/technical/reference/smarthomeapi
  * https://www.npmjs.com/package/netatmo

### Intercom

* BTicino 344642
