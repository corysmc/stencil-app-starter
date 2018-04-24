import { Component, Prop } from "@stencil/core";

@Component({
  tag: "scrollable-row",
  styleUrl: "scrollable-row.css"
})
export class ScrollableRow {
  @Prop() company: any;

  render() {
    if (this.company) {
      return (
        <div>
          <h4>{this.company.name}</h4>
          <ul>
            {this.company.team.map((person: any) => {
              return (
                <li>
                  <ion-button fill="clear" href={`/profile/${person.name}`}>
                    <h6>{person.name}</h6>
                  </ion-button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
