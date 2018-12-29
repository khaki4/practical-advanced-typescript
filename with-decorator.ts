import fetch from "fetch-node";

namespace withDecorator {
  interface ITodo {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
  }

  function Get(url: string) {
    return function(target: any, name: string) {
      const hiddenInstanceKey = "_$$" + name + "$$_";
      const init = () => {
        return fetch(url).then(response => response.json());
      };

      Object.defineProperty(target, name, {
        get: function() {
          return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
        },
        configurable: true
      });
    };
  }

  function First() {
    return function(target: any, name: string) {
      const hiddenInstanceKey = "_$$" + name + "$$_";
      const prevInit = (Object.getOwnPropertyDescriptor(target, name) as any)
        .get;
      const init = () => {
        return prevInit().then(response => response.json());
      };

      Object.defineProperty(target, name, {
        get: function() {
          return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
        }
      });
    };
  }

  class TodoService {
    @First()
    @Get("https://jsonplaceholder.typicode.com/todos")
    todos: Promise<ITodo[]>;
  }

  const todoService = new TodoService();
  todoService.todos.then(todos => {
    console.log(todos);
  });
}
