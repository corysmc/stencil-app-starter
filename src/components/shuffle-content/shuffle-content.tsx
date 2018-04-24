import { Component, State } from "@stencil/core";

@Component({
  tag: "shuffle-content",
  styleUrl: "shuffle-content.css"
})
export class ShuffleContent {
  workoutCategories = ["Strength", "Yoga", "Cardio", "Stretching"];
  @State()
  companies: { name: string; team: { name: string; image: string }[] }[] = [];

  componentDidLoad() {
    this.companies = [
      {
        name: "Sworkit",
        team: [
          { name: "Ryan", image: "/" },
          { name: "Ben", image: "/" },
          { name: "Cory", image: "/" }
        ]
      },
      {
        name: "Ionic",
        team: [
          { name: "Max", image: "/" },
          { name: "Ben", image: "/" },
          { name: "Adam", image: "/" }
        ]
      }
    ];
  }

  render() {
    return [
      <header>
        <h1>Shuffling?</h1>
      </header>,
      <slot-component>
        <h2>THIS CONTENT SHOULD SHOW FIRST</h2>
        {this.workoutCategories.map(category => {
          return (
            <ion-col col-6 col-lg-3>
              <ion-anchor href={`profile/${category}`}>
                <div class={`category ${category}`}>
                  <ion-ripple-effect />
                  <h3>{category}</h3>
                </div>
              </ion-anchor>
            </ion-col>
          );
        })}

        {this.companies.length ? (
          <div>
            <h2>This content should show SECOND</h2>
            {this.companies.map(company => {
              return (
                <div>
                  <h4>{company.name}</h4>
                  <ul>
                    {company.team.map((person: any) => {
                      return (
                        <li>
                          <ion-button
                            fill="clear"
                            href={`/profile/${person.name}`}
                          >
                            <h6>{person.name}</h6>
                          </ion-button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </slot-component>
    ];
  }
}
