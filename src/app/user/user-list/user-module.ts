import { CommonModule } from "@angular/common";
import { UserComponent } from "../user.component";
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserComponent
    ],
    exports: [
        UserComponent
    ]
})
export class UserModule { }