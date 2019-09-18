import { AppCategoriasPage } from './app.po';

describe('app-categorias App', function() {
  let page: AppCategoriasPage;

  beforeEach(() => {
    page = new AppCategoriasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
