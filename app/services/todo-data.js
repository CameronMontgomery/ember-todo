import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Todo {
  @tracked text = '';
  @tracked isCompleted = false;
  constructor(text) {
    this.text = text;
  }
}

export default class TodoDataService extends Service {
  @tracked todos = A([]);

  @action
  add(text) {
    let newTodo = new Todo(text);

    this.todos.pushObject(newTodo);
  }
}
