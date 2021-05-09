import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    if (this.user.username == '' || this.user.username == null) {
      alert('User Name is required');
      return;
    } else if (this.user.password == '' || this.user.password == null) {
      alert('Password is required');
      return;
    } else if (this.user.firstName == '' || this.user.firstName == null) {
      alert('First Name is required');
      return;
      // } else if (this.user.username == '' || this.user.username == null) {
      //   alert('User Name is required');
      //   return;
    } else if (this.user.email == '' || this.user.email == null) {
      alert('Email is required');
      return;
    } else if (this.user.phone == '' || this.user.phone == null) {
      alert('Phone is required');
      return;
    } else {
      console.log(this.user);
    }

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data) => {
        //success
        console.log(data);
        alert('success');
      },
      (error) => {
        //error
        console.log(error);
        alert('something went wrong');
      }
    );
  }
}
