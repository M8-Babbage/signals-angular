import { JsonPipe } from '@angular/common';
import { Component, effect, signal, untracked } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss',
})
export default class PropertiesPageComponent {
  public counter = signal<number>(0);
  public user = signal<Data>({
    id: 1,
    email: 'edwinjpr11@gmail.com',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  increaseBy(number: number) {
    this.counter.update((value) => value + number);
  }

  onFieldUpdated(field: string, value: string) {
    console.log(`Field ${field} updated with value ${value}`);
    this.user.update((user) => {
      return {
        ...user,
        [field]: value,
      };
    });
  }

  // Efecto que se ejecuta cuando el usuario cambia
  public userChangedEffect = effect((onCleanup) => {
    console.log('Effect ', this.user()['first_name']);
    // Untracked: Evita que se ejecute el efecto cuando se actualiza el estado, solo se ejecuta cuando se inicializa
    untracked(() => {
      console.log(this.counter());
    });
    // onCleanup: Acciones a realizar cuando se destruye el efecto
    onCleanup(() => {
      console.log('Efecto destruido');
    });
  });
}
