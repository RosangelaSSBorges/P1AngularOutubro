import { Component, OnInit } from '@angular/core';
import { RosangelaWalletService } from '../rosangelaWallet.service';

@Component({
  selector: 'app-rosangelaCurrency',
  templateUrl: './rosangelaCurrency.component.html',
  styleUrls: ['./rosangelaCurrency.component.css'],
})
export class RosangelaCurrencyComponent implements OnInit {
  constructor(public wallet: RosangelaWalletService) {}

  ngOnInit() {
    this.wallet.atualizarValores();
  }
}

    