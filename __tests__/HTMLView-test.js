import React from 'react';

import renderer from 'react-test-renderer';

import HTMLView from '../HTMLView';

describe('<HTMLView/>', () => {
  it('should render an empty <Text/> element', () => {
    const htmlContent = '<p><a href="http://jsdf.co">&hearts nice job!</a></p>';

    expect(
      renderer.create(<HTMLView value={htmlContent} />).toJSON()
    ).toMatchSnapshot();
  });

  it('should render text in a (nested) <Text/> element', () => {
    const htmlContent = 'This is some text';

    expect(
      renderer.create(<HTMLView value={htmlContent} />).toJSON()
    ).toMatchSnapshot();
  });

  it('should render an <Image />, with default width/height of 1', () => {
    const imgSrc = 'https://facebook.github.io/react-native/img/header_logo.png';
    const htmlContent = `<img src="${imgSrc}"/>`;

    expect(
      renderer.create(<HTMLView value={htmlContent} />).toJSON()
    ).toMatchSnapshot();
  });

  it('should render an <Image /> with set width/height', () => {
    const imgSrc = 'https://facebook.github.io/react-native/img/header_logo.png';
    const htmlContent = `<img src="${imgSrc}" width="66" height="58"/>`;

    expect(
      renderer.create(<HTMLView value={htmlContent} />).toJSON()
    ).toMatchSnapshot();
  });

  it('should render shoddy html including headings, links, bold, italic', () => {
    const htmlContent = `
      <div class="comment">
        <span class="c00">
          <h2>&gt; Dwayne’s only companion at night was a Labrador retriever named Sparky.</h2>
        <p>
        <i>Sparky could not wag his tail-because of an automobile accident many years ago, so he had no way of telling other dogs how friendly he was.
        He opened the door of the cage, something Bill couldn’t have done in a thousand years. Bill flew over to a windowsill.
        <b>The undippable flag was a beauty, and the anthem and the vacant motto might not have mattered much, if it weren’t for this: a lot of citizens were so ignored and cheated and insulted that they thought they might be in the wrong country, or even on the wrong planet, that some terrible mistake had been made.
        </p>
        <p>
          [1] <a href="https://code.facebook.com/posts/1505962329687926/flow-a-new-static-type-checker-for-javascript/" rel="nofollow">https://code.facebook.com/posts/1505962329687926/flow-a-new-...</a>
        </p>
      </span>
    </div>
    `;

    expect(
      renderer.create(<HTMLView value={htmlContent} />).toJSON()
    ).toMatchSnapshot();
  });
});
