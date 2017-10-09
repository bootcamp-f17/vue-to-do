var todo_example = new Vue({

  el: '#to-do',

  data: {

    newTaskText: '',

    tasks: [
      {
        id: 1,
        title: 'Buy milk',
      },
      {
        id: 2,
        title: 'Buy cookies',
      },
      {
        id: 3,
        title: 'Eat snack'
      }
    ],

    nextTaskId: 4

  },

  methods: {

    addTask: function() {

      this.tasks.push({
        id: this.nextTaskId++,
        title: this.newTaskText
      });
      this.newTaskText = '';

    },

    removeTask: function(id) {

      var index = this.findTask(id);
      this.tasks.splice(index, 1);

    },

    findTask: function(id) {

      return this.tasks.findIndex(function(task) {
        return id === task.id;
      });

    }

  }





});