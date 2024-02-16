import { NgModule } from "@angular/core";
import { DBZComponent } from "./pages/main-page.component";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./components/list/list.component";
import { AddCharacterComponent } from "./components/add-character/add-character.component";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations:[
    DBZComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    DBZComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class DBZModule{

}
