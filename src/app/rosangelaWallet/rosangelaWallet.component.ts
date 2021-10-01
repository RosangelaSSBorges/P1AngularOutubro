import { Component, OnInit, Input } from '@angular/core';
import { RosangelaWalletService } from '../rosangelaWallet.service';

@Component({
  selector: 'app-rosangelaWallet',
  templateUrl: './rosangelaWallet.component.html',
  styleUrls: ['./rosangelaWallet.component.css'],
})
export class RosangelaWalletComponent implements OnInit {
  @Input() valor: number;

  constructor(public wallet: RosangelaWalletService) {}

  ngOnInit() {}
  
  depositar(valor: string) {
    let calc: number;
    calc = parseFloat(valor) / this.wallet.getBitcoin();
    this.wallet.depositarBitcoin(calc);
  }
  sacar(valor: string) {
    let calc: number;
    calc = parseFloat(valor) / this.wallet.getBitcoin();
    this.wallet.sacarBitcoin(calc);
  }
}


