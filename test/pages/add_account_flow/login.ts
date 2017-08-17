import { BrowserHelper } from '../../shared/browserhelper';
import { IElement } from '../../shared/browserhelper';

export interface ILoginPageElements {
	Email: IElement;
	Password: IElement;
	Login: IElement;
}

export class LoginPageElements implements ILoginPageElements {

	readonly Email: IElement = {
		selector: '#email'
	};

	readonly Password: IElement = {
		selector: '#password'
	};

	readonly Login: IElement = {
		selector: '//*[@id="submitButton"]'
	};
}

export class LoginPage {

	myPageElements: ILoginPageElements = new LoginPageElements();

	enterLoginCredentials = (user): void => {
		const { myPageElements } = this;
		const { email, password } = user;


		BrowserHelper.setValue(myPageElements.Email, email)
			.setValue(myPageElements.Password, password);
	}

	submitCredentials = (nextPage): void => {
		BrowserHelper.click(this.myPageElements.Login, nextPage);
	}
}

export class LoginPageAssertions {

	myPageElements: ILoginPageElements = new LoginPageElements();

	verifyLoginPage = (): void => {
		const { myPageElements } = this;
		expect(BrowserHelper.isVisible(myPageElements.Email)).toBeTruthy();
	}
}

