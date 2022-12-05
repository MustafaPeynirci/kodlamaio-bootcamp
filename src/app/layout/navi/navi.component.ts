import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
