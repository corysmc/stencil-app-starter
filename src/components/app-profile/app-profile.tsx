import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  @Prop() user;

  render() {
    return (
      <div class="app-profile">
        <p>Hello, {this.user}. Welcome to Stencil!</p>
      </div>
    );
  }
}
