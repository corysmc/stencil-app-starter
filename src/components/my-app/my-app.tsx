import "@ionic/core";
import { Component } from "@stencil/core";

@Component({
  tag: "my-app",
  styleUrl: "my-app.css"
})
export class MyApp {
  swService = {
    getWorkouts: async () => {
      const response = await fetch(
        "https://sworkit-api.herokuapp.com/v1/categories/strength"
      );
      const json = await response.json();
      const workouts = json.workouts;
      return workouts;
    }
  };

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />

          <ion-route url="/profile/:name" component="app-profile" />

          <ion-route
            url="/app-slots"
            component="app-slots"
            componentProps={{ swService: this.swService }}
          />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
