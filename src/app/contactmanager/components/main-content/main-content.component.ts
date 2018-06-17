import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  user: User;

  constructor(private  activeRoute: ActivatedRoute, private userService: UserService) {
    this.activeRoute.params.subscribe((params) => {
      let id = params['id'];
      if (!id) {
        id = 1;
      }
      this.user = null;
      this.userService.user.subscribe((users) => {
        if (users.length === 0) {
          return;
        }
        this.user = this.userService.getUserById(id);

      });

    });
  }

  ngOnInit() {

  }

}
