import { SmartWeatherPage } from './app.po';

describe('smart-weather App', () => {
  let page: SmartWeatherPage;

  beforeEach(() => {
    page = new SmartWeatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
