import { Ng2MovieQuizPage } from './app.po';

describe('ng2-movie-quiz App', function() {
  let page: Ng2MovieQuizPage;

  beforeEach(() => {
    page = new Ng2MovieQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
