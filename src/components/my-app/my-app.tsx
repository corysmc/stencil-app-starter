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
    }, 2000);
  }
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />

            <stencil-route url="/profile/:name" component="app-profile" />
            <stencil-route url="/shuffle-content" component="shuffle-content" />
            <stencil-route
              url="/watch-bug"
              component="watch-bug"
              componentProps={{ update: this.update }}
            />
          </stencil-router>
        </main>
      </div>
    );
  }
}
