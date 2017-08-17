import { BrowserHelper } from '../../shared/browserhelper';
import { IElement } from '../../shared/browserhelper';

export interface ISelectAccountPageElements {
	SearchBar: IElement;
	SearchBarInput: IElement;
	ListItem: IElement;
	AccountCode: IElement;
	AccountNameInput: IElement;
	AccountType: IElement;
	AccountNumber: IElement;
	AccountTypeOptions: IElement;
	ButtonContinue: IElement;
}

export class SelectAccountPageElements implements ISelectAccountPageElements {

	readonly SearchBar: IElement = {
		selector: '[data-automationid="bankSearch"]'
	};

	readonly SearchBarInput: IElement = {
		selector: '#xui-searchfield-1018-inputEl'
	};

	readonly ListItem: IElement = {
		selector: '//*[@id="dataview-1025"]'
	};

	readonly AccountCode: IElement = {
		selector: '[data-automationid="accountCode"]'
	};

	readonly AccountNameInput: IElement = {
		selector: '//*[@id="accountname-1037-inputEl"]'
	};

	readonly AccountType: IElement = {
		selector: '[data-automationid="accountType"]',
	};

	readonly AccountTypeOptions: IElement = {
		selector: '//*[@id="boundlist-1076-listEl"]/li[2]'
	};

	readonly AccountNumber: IElement = {
		selector: '//*[@id="accountnumber-1068-inputEl"]'
	};

	readonly ButtonContinue: IElement = {
		selector: '#common-button-submit-1015-btnInnerEl'
	};
}

export class SelectAccountPage {

	myPageElements: ISelectAccountPageElements = new SelectAccountPageElements();

	addBankAccount = (userData): void => {
		const { myPageElements } = this;
		const { searchBarInput } = userData;

		BrowserHelper.waitForVisible(myPageElements.SearchBarInput)
			.setValue(myPageElements.SearchBarInput, searchBarInput)
			.waitForVisible(myPageElements.ListItem)
			.click(myPageElements.ListItem, myPageElements.AccountCode.selector);
	}

	enterBankAccountDetails = (userData, nextPage): void => {
		const { myPageElements } = this;
		const { accountName, accountNumber } = userData;


		BrowserHelper.waitForVisible(myPageElements.AccountNameInput)
			.setValue(myPageElements.AccountNameInput, accountName)
			.click(myPageElements.AccountType, myPageElements.AccountTypeOptions.selector)
			.click(myPageElements.AccountTypeOptions, myPageElements.AccountNumber.selector)
			.setValue(myPageElements.AccountNumber, accountNumber)
			.click(myPageElements.ButtonContinue, nextPage);
	}
}

export class SelectAccountPageAssertions {

	myPageElements: ISelectAccountPageElements = new SelectAccountPageElements();

	verifySelectAccountPage = (): void => {
		const { myPageElements } = this;
		BrowserHelper.waitForVisible(myPageElements.SearchBarInput);
		expect(BrowserHelper.isVisible(myPageElements.SearchBarInput)).toBeTruthy();
	}
}

