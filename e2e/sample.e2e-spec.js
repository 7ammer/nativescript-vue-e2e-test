var appium = require("nativescript-dev-appium");
var chai = require("chai");

describe('My Suite', () => {
	let driver= appium.AppiumDriver;

	before(async () => {
		// Wait for the driver instance to be created
		driver = await appium.createDriver()
	})

	after(async () => {
		// Destroy the driver instance
		await driver.quit()
	})

	it('validates something', async () => {
		// write your test in here
		const submitBtns = await driver.findElementsByClassName('button');
		await submitBtns[0].click()
	})
})
