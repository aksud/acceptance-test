# acceptance-test
Thank you for giving me the opportunity to work on Xero's coding exercise. I really had fun while implementing this solution.

# About the framework

##### *Language* - TypeScript

##### *Testing Framework* - Webdriver IO  (wdio-jasmine) - http://webdriver.io/

This framework follows the page object model. If a test fails - it will store the screenshot in the `./output` directory.

This framework is capable of running tests in parallel - currently it has been disabled as we just have a single test.

# Getting started

1.  Install Node.JS
    http://nodejs.org
1.  Install Java SE Development- version 8 or above
    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
	`Useful troubleshooting link - https://stackoverflow.com/questions/18007804/cant-uninstall-java-7-jdk-on-mac-os-x-mountain-lion-10-8-4`
1.  `cd acceptance-test`
1.  `npm install`
1.	Install typescript globally `npm install -g typescript`
1.	Install `npx` globally `npm install -g npx`
1.	Install selenium drivers `npx selenium-standalone install` ( *Note If npx selenium-standalone is not recognized, please install `selenium-standalone` globally `npm install selenium-standalone@latest -g`*)
1.	Start Selenium `npx selenium-standalone start`
1.	Test if the setup works my running `npx wdio --specs`

# Setting up Selenium Grid (*Optional*)

1.	`cd acceptance-test`
1.	`npx selenium-standalone start -- -role hub`
1.	Open another terminal instance and run `npx selenium-standalone start -- -role node -hub http://localhost:4444/grid/register -browser browserName=chrome,maxInstances=5`
1.	Test if the grid is running successfully by opening http://localhost:4444/grid/console

# Running tests

1.	`cd acceptance-test`
1.	Complie the code
	```bash
	tsc
1.	Run the test
```bash
npx wdio --specs

