import { Subject } from "rxjs/Subject";
import { User } from "../model/user.model";

export class UserService {
 
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  private users: User[] = [
    new User('Fehmi', 'Bchir', 'fehmibchir@gmail.com', 'jus d\'orange', ['coder', 'boire du café'])
];
}
