import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LogInComponent } from "./Account/log-in/log-in.component";
import { CollectionComponent } from "./Component/collection/collection.component";
import { ResultComponent } from "./result/result.component";
import { UserComponent } from "./User/user.component";


let myroutes=[
    {
        path:"Create",component:ResultComponent
    
    },
    {
        path:"Login",component:LogInComponent
    },
    {
        path:"SignUp",component:UserComponent
    },
    {
        path:"CreateCollection",component:CollectionComponent
    }
]

@NgModule({
    imports :[RouterModule.forRoot(myroutes)],
    exports :[RouterModule]
    
})

export class AppRoutingModule{

}