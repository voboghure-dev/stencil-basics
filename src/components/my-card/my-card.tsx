import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop({ mutable: true }) userName: string;

  changeName() {
    this.userName = 'Name Changed!';
  }

  render() {
    let reactContent = (
      <div>
        <div class="card-custom" id="react-div">
          Hello, from React <br />
          Live Users
          <button class="btn-react small-btn" onClick={this.changeName.bind(this)}>
            Get React Users
          </button>
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

    let mainContent = (
      <div class="my-card-wrapper">
        <h1>Hi, I am {this.userName}</h1>
        <button class="btn-stencil">Stencil</button>
        <button class="btn-react">React</button>

        {reactContent}
        {stencilContent}
      </div>
    );

    return mainContent;
  }
}
