import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ButtonModule, Dialog, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-projectX';
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
