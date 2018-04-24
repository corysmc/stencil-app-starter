import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'slot-component',
  styleUrl: 'slot-component.css'
})
export class SlotComponent {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
