import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent{
  title = "MySaree"

  secondary = false;

  themecolor={
    'bg-secondary': true,
    'bg-purple':false
  };
  toggletheme(){
    this.secondary = !this.secondary;

    this.themecolor = {
      'bg-purple' : this.secondary,
      'bg-secondary' : !this.secondary
    };
  }
  cartCount=5;

}
