import { Component, State } from "@stencil/core";

const PrivateRoute = ({ component, ...props }: { [key: string]: any }) => (
  <stencil-route
    {...props}
    routeRender={(props: { [key: string]: any }) => {
      if (props.loading) {
        console.log("loading");
        return <div>Loading</div>;
      } else {
        console.log("not loading");
        if (props.user) {
          const Component = component;
          return (
            <div>
              <Component {...props.componentProps} />
            </div>
          );
          // return <Component {...props.componentProps} />;
        }
        return <stencil-router-redirect url="/login" />;
      }
    }}
  />
);
@Component({
  tag: "my-app",
  styleUrl: "my-app.css"
})
export class MyApp {
  @State() user;
  @State() loading: boolean = true;

  componentDidLoad() {
    this.changeLoginState();
  }

  changeLoginState() {
    setTimeout(() => {
      this.user = "Cory";
      this.loading = false;
    }, 1000);
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
            <stencil-route
              url="/profile-works"
              component="app-profile"
              componentProps={{ loading: this.loading, user: this.user }}
            />
            <PrivateRoute
              url="/profile"
              componentProps={{ loading: this.loading, user: this.user }}
              component="app-profile"
            />
          </stencil-router>
        </main>
      </div>
    );
  }
}
