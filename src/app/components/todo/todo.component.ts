import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  todoInput = '';

  constructor() {

  }

  ngOnInit(): void {
  }

  checkDone(id: number) {
    this.todos.map((value, index) => {
      if(index == id) {
        value.completed = !value.completed
      }
      return value;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, index) =>
      index !== id
    );
  }

  addTodo(e: Event) {
    e.preventDefault();
    this.todos.push({
      content: this.todoInput,
      completed: false
    });
    this.todoInput = '';
  }
}
