import { Component, State } from "@stencil/core";

@Component({
  tag: "app-slots",
  styleUrl: "app-slots.css"
})
export class AppSlots {
  @State() people: any = [];

  async componentDidLoad() {
    setTimeout(() => {
      this.people = [
        { name: "Ryan", image: "" },
        { name: "Ben", image: "" },
        { name: "Cory", image: "" }
      ];
    });
  }

  render() {
    return (
      <ion-content>
        <ion-list>
          {this.people.length
            ? this.people.map(person => (
                <ion-item detail href={`/profile/${person.name}`}>
                  <ion-avatar slot="start">
                    <img src={person.image} />
                  </ion-avatar>
                  <div>
                    <h2>{person.name}</h2>
                    <p>3 exercises</p>
                  </div>
                </ion-item>
              ))
            : Array.from(Array(20).keys()).map(() => (
                <ion-item detail>
                  <ion-avatar slot="start">
                    <div class="sw-skeleton image circle" />
                  </ion-avatar>
                  <div style={{ width: "100%" }}>
                    <h2
                      style={{
                        width:
                          Math.floor(
                            Math.random() * (75 - 50 + 1) + 50
                          ).toString() + "%"
                      }}
                      class="sw-skeleton text"
                    />
                    <p style={{ width: "100px" }} class="sw-skeleton text" />
                  </div>
                </ion-item>
              ))}
        </ion-list>
      </ion-content>
    );
  }
}
