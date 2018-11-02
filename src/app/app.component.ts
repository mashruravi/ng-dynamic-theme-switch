import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-dynamic-theme-switch';

  @HostBinding('class') componentCssClass;

  setTheme(themeName: string) {
    this.componentCssClass = themeName;
  }
}
