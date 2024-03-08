import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Data } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss',
})
export default class UserInfoPageComponent implements OnInit {
  private usersService = inject(UsersService);
  public userId = signal<number>(1);
  public currentUser = signal<Data>({});
  public userWasFound = signal<boolean>(true);
  public fullName = computed<string>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado';
    const user = this.currentUser();
    return `${user['first_name']} ${user['last_name']}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number): void {
    if (id <= 0) return;
    this.userId.set(id);
    this.currentUser.set({});
    this.usersService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.currentUser.set({});
        this.userWasFound.set(false);
      },
    });
  }
}
