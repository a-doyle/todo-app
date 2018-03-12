class TodoService {
    private static _lastId = 0;

    private static generateTodoId() {
        return TodoService._lastId += 1;
    }

    private static clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };

    private todos: any[] = [];

    constructor(todos) {
        var _this = this;

        if (todos) {
            todos.forEach(function(todo) {
                _this.add(todo);
            })
        }
    }

    // Accepts a todo name or todo object
    add(input) {
        var todo = {
            id: TodoService.generateTodoId(),
            name: null,
            state: 1
        };

        if(typeof input === 'string') {
            todo.name = input;
        }
        else if(typeof input.name === 'string') {
            todo.name = input.name;
        } else {
            throw 'Invalid Todo name!';
        }

        this.todos.push(todo);
        return todo;
    };

    clearCompleted() {
        this.todos = this.todos.filter(function(x) {
            return x.state == 1;
        });
    }

    getAll() {
        return TodoService.clone(this.todos);
    }

    getById(todoId) {
        var todo = this._find(todoId);
        return TodoService.clone(todo);
    };

    toggle(todoId) {
        var todo = this._find(todoId);
        if(!todo) return;
        switch(todo.state) {
            case 1:
                todo.state = 2;
                break;
            case 2:
                todo.state = 1;
                break;
        }
    }

    private _find(todoId) {
        var filtered = this.todos.filter(function(x) {
            return x.id == todoId;
        });

        if(filtered.length) {
            return filtered[0];
        }

        return null;
    }
}