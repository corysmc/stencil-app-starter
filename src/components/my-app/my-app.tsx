import "@ionic/core";
import { Component } from "@stencil/core";

@Component({
  tag: "my-app",
  styleUrl: "my-app.css"
})
export class MyApp {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />

          <ion-route url="/profile/:name" component="app-profile" />

          <ion-route
            url="/app-slots"
            component="app-slots"
          />
          <ion-route
            url="/shuffle-content"
            component="shuffle-content"
          />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
