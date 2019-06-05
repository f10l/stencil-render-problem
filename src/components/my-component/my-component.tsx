import { Component, Element, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {

  @Element() el: HTMLElement;

  @State() indexLoaded: boolean = false;

  componentDidLoad() {
    this.getAndRenderIndex();
  }

  async getAndRenderIndex() {
    const result = await this.getFile();

    const templatePlaceholder = this.el.querySelector('.indexTemplate');
    templatePlaceholder.innerHTML = result;
    this.indexLoaded = true;
  }

  async getFile() {
    return fetch('https://raw.githubusercontent.com/fanick-ber/stencil-render-problem/master/data/data.html')
      .then((res) => res.text())
  }

  render() {
    return (
      <div>
        This is the example main component

        {/* 
          Uncommenting this block leads to a not working display of
          the content of the .indexTemplate div
        */}

        {/* {!this.indexLoaded && (
          <div class="indexLoading">
            Loading...
          </div>
        )} */}
        <div class="indexTemplate"></div>
        {/* 
          It works when used after the .indexTemplate
        */}
        {!this.indexLoaded && (
          <div class="indexLoading">
            Loading...
           </div>
        )}
      </div>
    );
  }
}
