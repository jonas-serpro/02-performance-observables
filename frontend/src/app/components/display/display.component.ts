import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit, OnDestroy {
  @Input()
  contagem$!: Observable<number>;

  valor: number = 0;

  constructor() {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.contagem$.subscribe((emissaoContagem) => {
      this.valor = emissaoContagem;

      if (emissaoContagem > 5) {
        this.valor = emissaoContagem * 2;

        document.body.style.borderWidth = '10px';
        document.body.style.borderStyle = 'solid';
        document.body.style.borderColor = 'red';
      } else {
        document.body.style.borderWidth = '';
        document.body.style.borderStyle = '';
        document.body.style.borderColor = '';
      }
    });
  }
}
