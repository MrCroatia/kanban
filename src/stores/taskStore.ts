import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Task {
  id: string;
  title: string;
  description: string;
  column: string;
  createdAt: Date;
}

export const useTaskStore = defineStore('tasks', () => {
  // State
  const tasks = ref<Task[]>([
    // To Do column
    {
      id: '1',
      title: 'Design UI mockups',
      description: 'Create wireframes for the new dashboard',
      column: 'todo',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Research competitors',
      description: 'Analyze features of similar products',
      column: 'todo',
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'Update documentation',
      description: 'Add new API endpoints to the docs',
      column: 'todo',
      createdAt: new Date(),
    },

    // In Progress column
    {
      id: '4',
      title: 'Implement authentication',
      description: 'Add JWT-based auth to the backend',
      column: 'inprogress',
      createdAt: new Date(),
    },
    {
      id: '5',
      title: 'Fix navigation bug',
      description: "Menu doesn't close on mobile devices",
      column: 'inprogress',
      createdAt: new Date(),
    },
    {
      id: '6',
      title: 'Optimize images',
      description: 'Compress and lazy-load product images',
      column: 'inprogress',
      createdAt: new Date(),
    },

    // Done column
    {
      id: '7',
      title: 'Setup project repo',
      description: 'Initialize Git repository and CI/CD',
      column: 'done',
      createdAt: new Date(),
    },
    {
      id: '8',
      title: 'Create component library',
      description: 'Build reusable UI components',
      column: 'done',
      createdAt: new Date(),
    },
    {
      id: '9',
      title: 'Write unit tests',
      description: 'Add tests for core functionality',
      column: 'done',
      createdAt: new Date(),
    },
  ]);

  // Columns configuration
  const columns = ref([
    { id: 'todo', name: 'To Do', color: 'retro-pink' },
    { id: 'inprogress', name: 'In Progress', color: 'retro-purple' },
    { id: 'done', name: 'Done', color: 'retro-teal' },
  ]);

  // Actions
  function addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    tasks.value.push(newTask);
  }

  function updateTask(taskId: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>) {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.value[taskIndex] = {
        ...tasks.value[taskIndex],
        ...updates,
      };
    }
  }

  function deleteTask(taskId: string) {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  }

  function moveTask(taskId: string, targetColumn: string) {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.value[taskIndex].column = targetColumn;
    }
  }

  function getTasksByColumn(columnId: string) {
    return tasks.value.filter(task => task.column === columnId);
  }

  return {
    tasks,
    columns,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    getTasksByColumn,
  };
});
