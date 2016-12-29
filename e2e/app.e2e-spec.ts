import { ChampTrackerPage } from './app.po';

describe('champ-tracker App', function() {
  let page: ChampTrackerPage;

  beforeEach(() => {
    page = new ChampTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
