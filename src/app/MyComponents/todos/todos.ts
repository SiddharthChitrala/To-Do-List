import { Component } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodoItem } from "../todo-item/todo-item";
import { AddTodo } from "../add-todo/add-todo";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos {


  todos: Todo[];
  storedTodos: string | null;


  constructor() {
    // Load todos from localStorage if available, otherwise initialize with an empty array
    this.storedTodos = null;
    this.todos = [];

  }
  // used for testing purposes
  // this.todos = [
  //   { sno: 1, title: "Learn Angular", desc: "Learn Angular from scratch", active: true },
  //   { sno: 2, title: "Learn React", desc: "Learn React from scratch", active: true },
  //   { sno: 3, title: "Learn Swimming", desc: "Learn Swimming from scratch", active: true },
  //   { sno: 4, title: "Learn Flutter", desc: "Learn Flutter from scratch", active: true },
  //   { sno: 5, title: "Learn Python", desc: "Learn Python from scratch", active: true },
  //   { sno: 6, title: "Learn Java", desc: "Learn Java from scratch", active: true }
  // ]



  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.storedTodos = localStorage.getItem('todos');
      if (this.storedTodos !== null) {
        this.todos = JSON.parse(this.storedTodos);
      }
    } else {
      console.warn('localStorage is not available. Using an in-memory array for todos.');
      // You might choose to handle the absence of localStorage differently here
    }
  }

  deleteTodo(todo: Todo) {
    console.log("Deleted Todo", todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
    console.log("Todo item deleted: " + todo.title);
  }

  addTodo(todo: Todo) {
    if (!todo || !todo.title || !todo.desc) {
      console.error("Invalid todo item. Title and description are required.");
    } else {
      console.log("New Todo added:", todo);
      this.todos.push(todo);
      console.log("Todo item added: " + todo.title);
      // Save the updated todos to localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  }

 CheckBoxTodo(todo: Todo) {
  console.log("Checkbox clicked for Todo:", todo);

  const index = this.todos.findIndex(t => t.sno === todo.sno);

  if (index !== -1) {
    this.todos[index].active = !this.todos[index].active;
    console.log("Todo updated:", this.todos[index]);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  } else {
    console.warn("Todo not found in list:", todo);
  }
}



}
