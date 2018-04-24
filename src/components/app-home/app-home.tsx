import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build
          entire apps all with web components using Stencil! Check out our docs
          on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <ion-button href="/app-slots">App Slots</ion-button>
        <ion-button href="/shuffle-content">Shuffle Content</ion-button>
        <ion-button href="/profile/stencil">Profile page</ion-button>
      </div>
    );
  }
}
