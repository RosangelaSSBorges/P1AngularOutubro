import { Component, OnInit } from '@angular/core';
import { RosangelaWalletService } from '../rosangelaWallet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public bitCoin: RosangelaWalletService) {}

  ngOnInit() {}
}
