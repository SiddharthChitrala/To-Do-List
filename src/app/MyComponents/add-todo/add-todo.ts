import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodo {
  title: string = '';
  desc: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  // This method is called when the form is submitted

  onSubmit() {
    const todo = {
      sno: Math.floor(Math.random() * 1000),
      title: this.title,
      desc: this.desc,
      active: true
    }
    // Emit the new todo item to the parent component
    this.todoAdd.emit(todo);
    console.log("New Todo added:", todo);
  }


}
