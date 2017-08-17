import { LoginPage } from '../pages/add_account_flow/login';
import { LoginPageAssertions } from '../pages/add_account_flow/login';
import { DashboardPageElements } from '../pages/add_account_flow/dashboard';
import { DashboardPage } from '../pages/add_account_flow/dashboard';
import { DashboardPageAssertions } from '../pages/add_account_flow/dashboard';
import { BankAccountPageElements } from '../pages/add_account_flow/bank_account';
import { BankAccountPage } from '../pages/add_account_flow/bank_account';
import { BankAccountPageAssertions } from '../pages/add_account_flow/bank_account';
import { SelectAccountPageElements } from '../pages/add_account_flow/select_account';
import { SelectAccountPage } from '../pages/add_account_flow/select_account';
import { SelectAccountPageAssertions } from '../pages/add_account_flow/select_account';

export class AddAccount {

	public loginPage = new LoginPage();
	public loginPageAssertions = new LoginPageAssertions();
	public dashboardPageElements = new DashboardPageElements();
	public dashboardPage = new DashboardPage();
	public dashboardPageAssertions = new DashboardPageAssertions();
	public bankAccountPageElements = new BankAccountPageElements();
	public bankAccountPage = new BankAccountPage();
	public bankAccountPageAssertions = new BankAccountPageAssertions();
	public selectAccountPageElements = new SelectAccountPageElements();
	public selectAccountPage = new SelectAccountPage();
	public selectAccountPageAssertions = new SelectAccountPageAssertions();
}
