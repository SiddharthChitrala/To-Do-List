import { Component, Input, OnInit, Output} from '@angular/core';
import { Todo } from '../../todo';  
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem implements OnInit {

  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }
  ngOnInit(): void {

  }
  onClick(todo: Todo) {
    this.todoDelete.emit(this.todo);
    alert("Todo item deleted: " + todo.title);
  }
  onCheckBoxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);
    // todo.active = !todo.active;
    console.log("Checkbox clicked for Todo:", todo);
    // Optionally, you can emit an event or update localStorage here if needed
  }
}
