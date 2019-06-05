import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {

  @Element() el: HTMLElement;

  componentDidLoad() {
    this.getAndRenderIndex();
  }

  async getAndRenderIndex() {
    const result = await this.getFile();

    const templatePlaceholder = this.el.querySelector('.indexTemplate');
    templatePlaceholder.innerHTML = result;
  }

  async getFile() {
    return fetch('https://raw.githubusercontent.com/fanick-ber/stencil-render-problem/master/data/data.html')
      .then((res) => res.text())
  }

  render() {
    return (
      <div>
        This is the example main component
      <div class="indexTemplate"></div>
      </div>
    );
  }
}
