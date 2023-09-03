import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from "@angular/forms";
import { StarComponent } from './star/star.component';

@NgModule({
  declarations:[
    AppComponent,
    ProductListComponent,
    StarComponent

  ],
  imports:[
    BrowserModule,
    FormsModule
  ],
  exports:[],
  bootstrap:[
    AppComponent

  ],
  

})
export class AppModule{}

