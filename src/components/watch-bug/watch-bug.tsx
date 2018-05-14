import { Component, Prop, Watch } from "@stencil/core";

@Component({
  tag: "watch-bug"
})
export class WatchBug {
  @Prop() update: string;

  @Watch("update")
  updateData(newVal) {
    alert("new Val" + newVal);
  }

  render() {
    return (
      <div>
        Update Value: {this.update} <br />
        Alert should show after 2 secons. Triggered by updated passed via
        'my-app'.<br />
        Note: try this in console: <br />
        <p>"document.querySelector('watch-bug').update = 'Cody'"</p>
      </div>
    );
  }
}
