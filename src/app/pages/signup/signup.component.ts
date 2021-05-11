import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) {}

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
      // alert('User Name is required');
      this.snack.open('Username is requerd', 'Ok', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
      return;
    } else if (this.user.password == '' || this.user.password == null) {
      // alert('Password is required');
      this.snack.open('Password is required', 'Ok', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
      return;
    } else if (this.user.firstName == '' || this.user.firstName == null) {
      // alert('First Name is required');
      this.snack.open('First Name is required', 'Ok', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
      return;
      // } else if (this.user.username == '' || this.user.username == null) {
      //   alert('User Name is required');
      //   return;
    } else if (this.user.email == '' || this.user.email == null) {
      // alert('Email is required');
      this.snack.open('Email is required', 'Ok', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
      return;
    } else if (this.user.phone == '' || this.user.phone == null) {
      // alert('Phone is required');
      this.snack.open('Phone is required', 'Ok', {
        duration: 3000,
        verticalPosition: 'bottom',
      });
      return;
    } else {
      console.log(this.user);
    }

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        // alert('success');
        // this.snack.open('Success', 'Ok', {
        //   duration: 3000,
        // });
        //sweetalert2
        Swal.fire('Success', 'User id is ' + data.id, 'success');
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        // this.snack.open('Something went wrong', 'Ok', {
        //   duration: 3000,
        // });
        Swal.fire('Error', 'Something going wrong', 'error');
      }
    );
  }
}
