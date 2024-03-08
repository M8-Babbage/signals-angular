import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import DASHBOARD_ROUTES from '../../dashboard/pages/dashboard.routes';
import SIGNALS_ROUTES from '../../signals/pages/signals.routes';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements OnInit {
  public menuItems = signal<MenuItem[]>([]);

  public ngOnInit(): void {
    this.menuItems.set(this.getAllRoutes());
    console.log(this.menuItems());
  }

  public getAllRoutes(): MenuItem[] {
    const dashboardRoutes = DASHBOARD_ROUTES[0].children;
    const signalsRoutes = SIGNALS_ROUTES[0].children;
    const allRoutes = [...(dashboardRoutes ?? []), ...(signalsRoutes ?? [])];
    const filteredRoutes = allRoutes.filter(
      (route) => !route.path?.includes('**') && !route.path?.includes(':')
    );
    const menuItems = filteredRoutes.map((route) => ({
      title: route.path ?? '',
      route: route.path ?? '',
    }));
    return menuItems;
  }
}
