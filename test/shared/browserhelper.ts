import { EnvironmentData } from '../shared/global/environment_data';


export interface IElement {
	selector: string;
	requiredFieldText?: string;
}

export namespace BrowserHelper {

	export function navigate(url?) {
		browser.url(`/${url}`);
		return BrowserHelper;
	}

	export function click(clickSelector: IElement, waitForSelector) {
		const environmentData = new EnvironmentData();

		browser.waitForExist(clickSelector.selector, environmentData.timeout);
		browser.click(clickSelector.selector);
		browser.waitForExist(waitForSelector, environmentData.timeout);
		return BrowserHelper;
	}

	export function setValue(element: IElement, value: string) {
		browser.setValue(element.selector, value);
		return BrowserHelper;
	}

	export function waitForVisible(element: IElement) {
		const environmentData = new EnvironmentData();
		browser.waitForVisible(element.selector, environmentData.timeout);
		return BrowserHelper;
	}

	export function isVisible(element: IElement): boolean {
		const environmentData = new EnvironmentData();
		browser.waitForExist(element.selector, environmentData.timeout);
		return browser.isVisible(element.selector);
	}
}

