import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop({ mutable: true }) userName: string;

  @State() showStencilTab: boolean = false;
  @State() showReactTab: boolean = false;

  changeContent(content: string) {
    if (content == 'stenciltab') {
      this.showStencilTab = true;
      this.showReactTab = false;
    } else if (content == 'reacttab') {
      this.showStencilTab = false;
      this.showReactTab = true;
    } else {
      this.showStencilTab = false;
      this.showReactTab = false;
    }
  }

  render() {
    let reactContent = (
      <div>
        <div class="card-custom" id="react-div">
          Hello, from React <br />
          Live Users
          <button class="btn-react small-btn">Get React Users</button>
        </div>
      </div>
    );

    let stencilContent = (
      <div>
        <div class="card-custom" id="stencil-div">
          Hello, from Stencil
          <br />
          Live Users
          <button class="btn-stencil small-btn">Get Stencil Users</button>
        </div>
      </div>
    );

    let contentToDisplay = '';
    if (this.showStencilTab) {
      contentToDisplay = stencilContent;
    } else if (this.showReactTab) {
      contentToDisplay = reactContent;
    }

    let mainContent = (
      <div class="my-card-wrapper">
        <h1>Hi, I am {this.userName}</h1>

        <button class="btn-stencil" onClick={this.changeContent.bind(this, 'stenciltab')}>
          Stencil
        </button>
        <button class="btn-react" onClick={this.changeContent.bind(this, 'reacttab')}>
          React
        </button>

        {contentToDisplay}
      </div>
    );

    return mainContent;
  }
}
