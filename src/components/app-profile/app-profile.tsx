import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  @Prop() name: string;

  render() {
    return (
      <div class="app-profile">
        <p>
          Hello! My name is {this.name}. My name was passed in through a route
          param!
        </p>
      </div>
    );
  }
}
