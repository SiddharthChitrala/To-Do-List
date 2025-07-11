import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from "./MyComponents/todos/todos";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Todos , FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ToDo-List');
  constructor() {
    // setTimeout(() => {
    //   this.title.set('ToDo-List - Angular ');
    // }, 2000);
  }
}