import { SpotifyNewPage } from './app.po';

describe('spotify-new App', () => {
  let page: SpotifyNewPage;

  beforeEach(() => {
    page = new SpotifyNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
