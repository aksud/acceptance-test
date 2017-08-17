import { BrowserHelper } from '../../shared/browserhelper';
import { EnvironmentData } from '../../shared/global/environment_data';
import { UserData } from '../../shared/global/test_data';
import { AddAccount } from '../../pages/add_account';

const environmentData = new EnvironmentData();
const addAccount = new AddAccount();

describe('Add "ANZ NZ" bank account inside my Xero Organisation', () => {

	const userData = UserData.data();
	BrowserHelper.navigate();

	describe('When I navigate to Xero login page', () => {
		BrowserHelper.navigate();

		it('opens the login page ', () => {
			addAccount.loginPageAssertions.verifyLoginPage();
			addAccount.loginPage.enterLoginCredentials(userData);
		});
	});

	describe('When submit my login credentials', () => {

		it('opens the dashboard page ', () => {
			addAccount.loginPage.submitCredentials(addAccount.dashboardPageElements.Accounts.selector);
			addAccount.dashboardPageAssertions.verifyDashboardPage();
		});
	});

	describe('When I select the "Bank Accounts" option from the Accounts dropdown', () => {

		it('opens the bank accounts page ', () => {
			addAccount.dashboardPage.navigateToBankAccountsPage(addAccount.bankAccountPageElements.AddAccount.selector);
			addAccount.bankAccountPageAssertions.verifyBankAccountPage();
		});
	});

	describe('I select the "Add Bank Account" button', () => {

		it('opens the select bank accounts page', () => {
			addAccount.bankAccountPage.selectBankAccount(addAccount.selectAccountPageElements.SearchBar.selector);
			addAccount.selectAccountPageAssertions.verifySelectAccountPage();
		});
	});

	describe('When I search for "ANZ bank" in the search bar', () => {

		it('filters ANZ from the bank account list', () => {
			addAccount.selectAccountPage.addBankAccount(userData);
		});
	});

	describe('When add ANZ bank to my bank list', () => {

		it('adds ANZ bank to to my Organization', () => {
			addAccount.selectAccountPage.enterBankAccountDetails(userData, addAccount.bankAccountPage.myPageElements.AddAccount.selector);
			addAccount.bankAccountPageAssertions.verifyBankAccountAdded();
		});
	});
});
