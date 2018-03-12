var TodoService = (function() {
    var _lastId = 0;

    function generateTodoId() {
        return _lastId += 1;
    }

    function clone(src) {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };

    function TodoService(todos) {
        var _this = this;
        this.todos = [];

        if (todos) {
            todo.forEach(function(todo) {
                _this.add(todo);
            })
        }
    }
})