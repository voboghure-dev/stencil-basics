import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  render() {
    return <div class="my-card-wrapper">This is my card</div>;
  }
}
