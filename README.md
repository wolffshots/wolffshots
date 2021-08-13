# wolffshots
skip to [project](#Projects), [experience](#Experience), [education](#Education)
## Professional summary

2 years experience in web/app/iot development after a 3 year BSc in Computer Science and Computer Engineering at UCT.

## Skills
### Languages
- JavaScript
- Java
- C in embedded systems
- C++
- Python + MicroPython
- HTML and CSS
### Other
- Linux server admin
- Photography (analog and digital)
- Film development (colour and black & white)

## Certification

- [BSc Computer Engineering & Computer Science](undergrad.pdf)
- [POPI Compliance](https://popicompliance.onramp.training//TrainingGuideQuestionUploads//c26101df-cf0e-4c7b-9cb0-c07c5cac7dd1/53483e1e-0929-4780-b100-c695b9454177dd4223fd-48bf-46ad-aab6-345f4e19636ef43b18c6-d075-40e3-a42d-e8a9d1ff05e7.pdf)
- [Practical React Native](https://www.udemy.com/certificate/UC-c2062d4a-e303-4c2d-a23f-1bfd116d3a4e/)
- [Complete React](https://www.udemy.com/certificate/UC-e35e325d-f30d-4e52-a25f-239a28af0d0a/)
- [Python/Django](https://www.udemy.com/certificate/UC-5OJ41TU1/)


## Experience

### Front End developer at [Dado](https://dadoagency.com/) (June 2021 - Present)

- working with custom APIs
- Next.js
- Storybooks
- Gatsby

### Programmer at Next Step Digital (February 2020 - March 2021)

- mainly working in React (Gatsby) and React Native
- various aspects of Firebase for backends
- the projects under Next Step Digital are listed in the [Projects](#projects) section below

### Server and network administrator at Mills Fitchett Cape (January 2020 - Present)

- built and setup a Linux server with DNS filter for the local network
- maintained a Mikrotik network with custom firewall settings and 3 access points

## Projects

### Passion projects

#### [wolffmeter](https://github.com/wolffshots/wolffmeter)
ESP32 powered lightmeter. A from scratch, open source, incident light meter with possibility for smart features.
- Current WIP
- Written in MicroPython with interrupts and power saving being the core programming goals

#### [esp32-warm-water](https://github.com/wolffshots/esp32-warm-water)/[temp_controlled_relay](https://github.com/wolffshots/temp_controlled_relay)

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

### Next Step Digital
#### Proper Living
A modern, student oriented property development

- Fully custom website for a property development project aimed at students
- Part of the main development team and assisted with bug resolution
- Written in Gatsby with a backend in Node.js
- Link: [properliving.co.za](https://properliving.co.za/)
- Also built the companion mobile app in TypeScript and React Native with a Firebase Cloud Function serverless backend

#### Coach Elite

A better solution for fitness coaches to deliver workouts to their clients

- Core development team
- Written in React Native with the backend in Node.js
- Web app written in React
- Links:

  - on the Apple [App Store](https://apps.apple.com/gb/app/coachelite/id1512634037)
  - on the Google [Play Store](https://play.google.com/store/apps/details?id=com.coachelite.coachelite)
  - [Coach Portal](https://coachelite.co.za/)

#### Head2Head

A way of tracking friendly leagues and matches to get stats for the games that go unnoticed

- Lead developer
- Written in React Native with the backend in Node.js
- Links: [App Store](https://apps.apple.com/us/app/Head2Head/id1527745287) and [Play Store](https://play.google.com/store/apps/details?id=com.nextstepdigital.head2head)

# Photography

I do some hobby photography and if you're here about that please message me on any of my socials or my email
The rights to my photos are reserved unless you explicitly get my consent or are one of the subjects of the image in question

## Links

- [instagram](https://www.instagram.com/wolffshots)

## Education

### BSc in Computer Science and Computer Engineering (2017 - 2019)

- University of Cape Town
- specialisations include software engineering and embedded systems with some project management and machine learning

### NSC

- Herzlia High School 2016
- Attended AP Maths and AP English

## Stats

<p align="center">
  <a href="https://github.com/wolffshots">
    <img src="https://github-readme-stats.vercel.app/api?username=wolffshots&count_private=true&show_icons=true" alt="wolffshots' GitHub stats" data-canonical-src="https://github-readme-stats.vercel.app/api?username=wolffshots&amp;count_private=true&amp;show_icons=true" style="max-width:100%;">
  </a>
</p>

<p align="center">
  <a href="https://github.com/wolffshots">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wolffshots" alt="wolffshots' top languages" data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=wolffshots" style="max-width:100%;">
  </a>
</p>
