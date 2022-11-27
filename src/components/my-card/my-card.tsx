import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @Prop({ mutable: true }) userName: string;

  @State() APIData: string;

  @State() showCard: boolean = true;

  @Watch('userName')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('The new value of user name is: ' + newValue + ' old value is: ' + oldValue);
  }

  changeStates() {
    this.userName = 'Name Changed!';
    this.APIData = 'We get API data';
    this.showCard = false;
  }

  componentWillUpdate() {
    console.log('Will update!');
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
    if (this.showCard) {
      contentToDisplay = reactContent;
    }

    let mainContent = (
      <div class="my-card-wrapper">
        <h1>Hi, I am {this.userName}</h1>
        <h5>{this.APIData}</h5>
        <button class="btn-stencil" onClick={this.changeStates.bind(this)}>
          Stencil
        </button>
        <button class="btn-react">React</button>

        {contentToDisplay}
        {stencilContent}
      </div>
    );

    return mainContent;
  }
}
