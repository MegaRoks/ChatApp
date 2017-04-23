import { MyChatAppPage } from './app.po';

describe('my-chat-app App', () => {
  let page: MyChatAppPage;

  beforeEach(() => {
    page = new MyChatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
