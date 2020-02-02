import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppareilComponent } from "./appareil/appareil.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AppareilService } from "./services/appareil.service";
import { AuthComponent } from "./auth/auth.component";
import { AppareilViewComponent } from "./appareil-view/appareil-view.component";
import { AuthService } from "./services/auth.service";
import { SingleAppareilComponent } from "./single-appareil/single-appareil.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { EditAppareilComponent } from "./edit-appareil/edit-appareil.component";
import { UserService } from "./services/user.service";
import { UserListComponent } from "./user-list/user-list.component";
import { NewUserComponent } from "./new-user/new-user.component";

const appRoutes: Routes = [
  {
    path: "appareils",
    canActivate: [AuthGuardService],
    component: AppareilViewComponent
  },
  {
    path: "appareils/:id",
    canActivate: [AuthGuardService],
    component: SingleAppareilComponent
  },
  {
    path: "edit",
    canActivate: [AuthGuardService],
    component: EditAppareilComponent
  },
  { path: "auth", component: AuthComponent },
  { path: "users", component: UserListComponent },
  { path: "users", component: UserListComponent },
  { path: "new-user", component: NewUserComponent },
  { path: "", component: AppareilViewComponent },
  { path: "not-found", component: FourOhFourComponent },
  { path: "**", redirectTo: "not-found" }
];
@NgModule({
  declarations: [
    AppComponent,
    SingleAppareilComponent,
    AppareilComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
