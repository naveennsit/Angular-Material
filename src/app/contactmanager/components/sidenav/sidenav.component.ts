import {Component, NgZone, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 560;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`);

  user: Observable<User[]>;

  constructor(zone: NgZone,
              private userService: UserService) {
    this.mediaMatcher.addListener(mql => {
      zone.run(() => {
        this.mediaMatcher = mql;
      });
    });
  }

  ngOnInit() {
    this.user = this.userService.user;
    this.userService.loadAll();
  }

  isSmallScreen() {
    return this.mediaMatcher.matches;
  }

}
