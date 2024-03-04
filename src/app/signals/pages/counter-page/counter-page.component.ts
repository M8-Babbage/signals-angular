import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {
  public counter: WritableSignal<number> = signal<number>(10);

  public doubleCount: Signal<number> = computed(() => this.counter() * 2);

  increaseBy(option: number) {
    this.counter.update((value) => {
      return value + option;
    });
  }

  reset() {
    this.counter.set(10);
  }
}
