import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 560;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`);

  user: Observable<User[]>;
  @ViewChild(MatSidenav) slidenav: MatSidenav;

  constructor(zone: NgZone,
              private router: Router,
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
    this.router.events.subscribe(() => {
      if (this.isSmallScreen()) {
        return this.slidenav.close();
      }
    });
  }

  isSmallScreen() {
    return this.mediaMatcher.matches;
  }

}
