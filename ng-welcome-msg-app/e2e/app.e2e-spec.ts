import { NgWelcomeMsgAppPage } from './app.po';

describe('ng-welcome-msg-app App', function() {
  let page: NgWelcomeMsgAppPage;

  beforeEach(() => {
    page = new NgWelcomeMsgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
