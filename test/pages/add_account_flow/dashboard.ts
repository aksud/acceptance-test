import { BrowserHelper } from '../../shared/browserhelper';
import { IElement } from '../../shared/browserhelper';

export interface IDashboardPageElements {
	Dashboard: IElement;
	Accounts: IElement;
	BankAccounts: IElement;
	Payroll: IElement;
	Reports: IElement;
	Contacts: IElement;
	Settings: IElement;
}

export class DashboardPageElements implements IDashboardPageElements {

	readonly Dashboard: IElement = {
		selector: '#Dashboard'
	};

	readonly Accounts: IElement = {
		selector: '#Accounts'
	};

	readonly BankAccounts: IElement = {
		selector: '//*[@id="xero-nav"]/div[2]/div[2]/div[1]/ul/li[2]/ul/li[1]/a'
	};

	readonly Payroll: IElement = {
		selector: '#Payroll'
	};

	readonly Reports: IElement = {
		selector: '#Reports'
	};

	readonly Contacts: IElement = {
		selector: '#Contacts'
	};

	readonly Settings: IElement = {
		selector: '#Settings'
	};
}

export class DashboardPage {

	myPageElements: IDashboardPageElements = new DashboardPageElements();

	navigateToBankAccountsPage = (nextPage): void => {
		const { myPageElements } = this;

		BrowserHelper.click(myPageElements.Accounts, myPageElements.Accounts.selector)
			.click(myPageElements.BankAccounts, nextPage);
	}

}

export class DashboardPageAssertions {

	myPageElements: IDashboardPageElements = new DashboardPageElements();

	verifyDashboardPage = (): void => {
		const { myPageElements } = this;

		expect(BrowserHelper.isVisible(myPageElements.Dashboard)).toBeTruthy();
		expect(BrowserHelper.isVisible(myPageElements.Accounts)).toBeTruthy();
		expect(BrowserHelper.isVisible(myPageElements.Payroll)).toBeTruthy();
		expect(BrowserHelper.isVisible(myPageElements.Reports)).toBeTruthy();
		expect(BrowserHelper.isVisible(myPageElements.Contacts)).toBeTruthy();
		expect(BrowserHelper.isVisible(myPageElements.Settings)).toBeTruthy();
	}
}

