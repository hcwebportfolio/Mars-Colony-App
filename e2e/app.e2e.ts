import { Project5Page } from './app.po';

describe('project-5 App', function() {
  let page: Project5Page;

  beforeEach(() => {
    page = new Project5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('project-5 works!');
  });
});
