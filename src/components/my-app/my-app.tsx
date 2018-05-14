import "@ionic/core";
import { Component, State } from "@stencil/core";

@Component({
  tag: "my-app",
  styleUrl: "my-app.css"
})
export class MyApp {
  @State() update: string = "Not Updated Yet";
  componentDidLoad() {
    setTimeout(() => {
      this.update = "Cory";
    }, 1000);
  }
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />

          <ion-route url="/profile/:name" component="app-profile" />

          <ion-route url="/app-slots" component="app-slots" />
          <ion-route url="/shuffle-content" component="shuffle-content" />
          <ion-route
            url="/watch-bug"
            component="watch-bug"
            componentProps={{ update: this.update }}
          />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
