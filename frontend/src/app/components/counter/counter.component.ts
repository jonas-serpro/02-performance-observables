import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter = 0;

  @Output()
  changed = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  decrement() {
    this.counter--;
    this.changed.emit(this.counter);
  }

  increment() {
    this.counter++;
    this.changed.emit(this.counter);
  }
}
