import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  contagem$ = new BehaviorSubject<number>(0); // valores emitidos pelo CounterComponent

  exibir = false; // controla se o DisplayComponent é exibido

  ngOnInit(): void {
    // Inscrição no observable da contagem
  }

  /**
   * Método utilizado no event binding do CounterComponent
   * @param contagem
   */
  emitirContagem(contagem: any) {
    this.contagem$.next(contagem);
  }

  alternarExibicao() {
    this.exibir = !this.exibir;
  }
}
