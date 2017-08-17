
exports.config = {
	specs: [
		'./test/specs/**/*.js'
	],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	//
	// ============
	// Capabilities
	// ============
	maxInstances: 10,

	capabilities: [{
		// maxInstances can get overwritten per capability. So if you have an in-house Selenium
		// grid with only 5 firefox instances available you can make sure that not more than
		// 5 instances get started at a time.
		maxInstances: 1,
		//
		browserName: 'chrome'
	}],
	//
	// ===================
	// Test Configurations
	// ===================
	// Define all options that are relevant for the WebdriverIO instance here
	//
	// By default WebdriverIO commands are executed in a synchronous way using
	// the wdio-sync package. If you still want to run your tests in an async way
	// e.g. using promises you can set the sync option to false.
	sync: true,
	//
	// Level of logging verbosity: silent | verbose | command | data | result | error
	logLevel: 'error',
	//
	// Enables colors for log output.
	coloredLogs: true,
	//
	// If you only want to run your tests until a specific amount of tests have failed use
	// bail (default is 0 - don't bail, run all tests).
	bail: 0,

	outputPath: './test/output',

	// Saves a screenshot to a given path if a command fails.
	screenshotPath: './test/output/error/screenshots/',

	// Set a base URL in order to shorten url command calls. If your url parameter starts
	// with "/", then the base url gets prepended.
	baseUrl: 'https://login.xero.com/',
	//
	// Default timeout for all waitFor* commands.
	waitforTimeout: 10000,
	//
	// Default timeout in milliseconds for request
	// if Selenium Grid doesn't send response
	connectionRetryTimeout: 90000,
	//
	// Default request retries count
	connectionRetryCount: 3,
	// Test runner services
	// Services take over a specific job you don't want to take care of. They enhance
	// your test setup with almost no effort. Unlike plugins, they don't add new
	// commands. Instead, they hook themselves up into the test process.
	// services: [],//
	// Framework you want to run your specs with.
	// The following are supported: Mocha, Jasmine, and Cucumber
	// see also: http://webdriver.io/guide/testrunner/frameworks.html
	//
	// Make sure you have the wdio adapter package for the specific framework installed
	// before running any tests.
	framework: 'jasmine',
	//
	// Test reporter for stdout.
	// The only one supported by default is 'dot'
	// see also: http://webdriver.io/guide/testrunner/reporters.html
	// reporters: ['dot'],
	//
	// Options to be passed to Jasmine.
	jasmineNodeOpts: {
		//
		// Jasmine default timeout
		defaultTimeoutInterval: (24 * 60 * 60 * 1000),
		//
		// The Jasmine framework allows interception of each assertion in order to log the state of the application
		// or website depending on the result. For example, it is pretty handy to take a screenshot every time
		// an assertion fails.
		expectationResultHandler: function (passed, assertion) {
			// do something
		}
	},

	//
	// =====
	// Hooks
	// =====
	// WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
	// it and to build services around it. You can either apply a single function or an array of
	// methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
	// resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
	// onPrepare: function (config, capabilities) {
	// },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
	// beforeSession: function (config, capabilities, specs) {
	// },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
}
