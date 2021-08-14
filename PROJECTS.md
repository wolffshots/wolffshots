# Projects

## Passion projects

### [wolffmeter](https://github.com/wolffshots/wolffmeter)
ESP32 powered lightmeter. A from scratch, open source, incident light meter with possibility for smart features.
- Current WIP
- Written in MicroPython with interrupts and power saving being the core programming goals

### [esp32-warm-water](https://github.com/wolffshots/esp32-warm-water)/[temp_controlled_relay](https://github.com/wolffshots/temp_controlled_relay)

An embedded systems solution to take the temperature of a water bath regularly and turn a relay on and off. The main application I started working on this project for was to be able to develop colour photographic film at a set temperature (the C-41 process I use is done at 38°C) which I successfully did a few times with the initial Arduino implementation before starting to rewrite it in esp-idf (partially to learn the framework and partially to improve on some bugs and on the things I learnt whilst doing the first project)

- initial implementation (kinda deprecated) [temp controlled relay](https://github.com/wolffshots/temp_controlled_relay)
- esp-idf implementation [esp32-warm-water](https://github.com/wolffshots/esp32-warm-water)
  - [esp32-ds18b20](https://github.com/wolffshots/esp32-ds18b20) library to interface with ds18b20 temperature probe (forked from [DavidAntliff](https://github.com/DavidAntliff/esp32-ds18b20))
  - [esp32-gpio](https://github.com/wolffshots/esp32-gpio) simple wrapper library to setup gpio pins
  - [esp32-owb](https://github.com/wolffshots/esp32-owb) onewire bus library for use with the ds18b20 sensor (forked from [DavidAntliff](https://github.com/DavidAntliff/esp32-owb))
  - [esp32-spiffs](https://github.com/wolffshots/esp32-spiffs) library to setup and interface with spiffs file system
  - [esp32-ssd1306](https://github.com/wolffshots/esp32-ssd1306) library to setup and interface with a ssd1306 driven oled over either spi or i2c (forked from [nopnop2002](https://github.com/nopnop2002/esp-idf-ssd1306) with some heavy mods)
  - [esp32-timer](https://github.com/wolffshots/esp32-timer) library to setup high resolution timers (to perform some action either periodically or once)
  - [esp32-utility](https://github.com/wolffshots/esp32-utility) very simple library to package some common utilities that don't have another home
  - [esp32-webserver](https://github.com/wolffshots/esp32-webserver) library to create a webserver which specifically pertains to the warm water project
  - [esp32-wifi](https://github.com/wolffshots/esp32-wifi) wrapper library to setup wifi (either as station or softap)

## [Dado](https://dadoagency.com/) Agency
### [Petlab](https://thepetlabco.com/)
Providers of everything from pet vitamin supplements to grooming products
### [Petlab Customer Account Portal](https://account.petlab.com)
Portal for managing orders, subscriptions and pets on Petlab

## Next Step Digital
### [Proper Living](https://properliving.co.za/)
A modern, student oriented property development. 
Written in Gatsby, Firebase Cloud functions and Node.js. 
Companion mobile app written in TypeScript and React Native with a Firebase Cloud Function serverless backend
### [Coach Elite](https://coachelite.co.za/)
A better solution for fitness coaches to deliver workouts to their clients
Links: [App Store](https://apps.apple.com/gb/app/coachelite/id1512634037), [Play Store](https://play.google.com/store/apps/details?id=com.coachelite.coachelite) and [Coach Portal](https://coachelite.co.za/)
### Head2Head
A way of tracking friendly leagues and matches to get stats for the games that go unnoticed
- Links: [App Store](https://apps.apple.com/us/app/Head2Head/id1527745287) and [Play Store](https://play.google.com/store/apps/details?id=com.nextstepdigital.head2head)