import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  @Prop() name: string;

  render() {
    return (
      <ion-content>
        <div class="app-profile">
          <p>
            Hello! My name is {this.name}. My name was passed in through a route
            param!
          </p>
        </div>
        <ion-list>
          <ion-item>
            <ion-label>Popover</ion-label>
            <ion-select
              id="customPopoverSelect"
              interface="popover"
              placeholder="Select One"
            >
              <ion-select-option value="brown">Brown</ion-select-option>
              <ion-select-option value="blonde">Blonde</ion-select-option>
              <ion-select-option value="black">Black</ion-select-option>
              <ion-select-option value="red">Red</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
        
      </ion-content>
    );
  }
}
