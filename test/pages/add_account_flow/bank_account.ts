import { BrowserHelper } from '../../shared/browserhelper';
import { IElement } from '../../shared/browserhelper';

export interface IBankAccountPageElements {
	AddAccount: IElement;
	BankAccountSuccess: IElement;
}

export class BankAccountPageElements implements IBankAccountPageElements {

	readonly AddAccount: IElement = {
		selector: 'span.text'
	};

	readonly BankAccountSuccess: IElement = {
		selector: '//*[@id="notify01"]'
	};
}

export class BankAccountPage {

	myPageElements: IBankAccountPageElements = new BankAccountPageElements();

	selectBankAccount = (nextPage): void => {

		const { myPageElements } = this;
		BrowserHelper.click(myPageElements.AddAccount, nextPage);
	}
}

export class BankAccountPageAssertions {

	myPageElements: IBankAccountPageElements = new BankAccountPageElements();

	verifyBankAccountPage = (): void => {
		expect(BrowserHelper.isVisible(this.myPageElements.AddAccount)).toBeTruthy();
	}

	verifyBankAccountAdded = (): void => {
		expect(BrowserHelper.isVisible(this.myPageElements.BankAccountSuccess)).toBeTruthy();
	}
}

