<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore, type Task } from '../stores/taskStore';
import TaskCard from './TaskCard.vue';
import draggable from 'vuedraggable';

const props = defineProps<{
  column: {
    id: string;
    name: string;
    color: string;
  };
  tasks: Task[];
}>();

const emit = defineEmits<{
  (e: 'addTask', columnId: string): void;
}>();

const taskStore = useTaskStore();

const columnTasks = computed({
  get() {
    return props.tasks;
  },
  set(value) {
    // This will be called when tasks are reordered within the same column
    // No need to do anything as the array reference is maintained
  }
});

function handleTaskMove(event: any) {
  // This is called when a task is moved between columns
  if (event.added) {
    const task = event.added.element;
    taskStore.moveTask(task.id, props.column.id);
  }
}

const columnClass = computed(() => {
  return {
    'border-retro-pink': props.column.color === 'retro-pink',
    'border-retro-purple': props.column.color === 'retro-purple',
    'border-retro-teal': props.column.color === 'retro-teal',
  };
});

const headerClass = computed(() => {
  return {
    'text-retro-pink neon-text': props.column.color === 'retro-pink',
    'text-retro-purple neon-text-blue': props.column.color === 'retro-purple',
    'text-retro-teal neon-text-teal': props.column.color === 'retro-teal',
  };
});
</script>

<template>
  <div class="column" :class="columnClass">
    <div class="mb-4 flex justify-between items-center">
      <h3 class="text-lg font-pixel" :class="headerClass">{{ column.name }}</h3>
      <span class="text-white/70 text-sm">{{ tasks.length }}</span>
    </div>
    
    <draggable
      v-model="columnTasks"
      :group="{ name: 'tasks', pull: true, put: true }"
      item-key="id"
      ghost-class="ghost-card"
      chosen-class="chosen-card"
      animation="300"
      @change="handleTaskMove"
      class="min-h-[200px] space-y-3"
    >
      <template #item="{ element }">
        <TaskCard :task="element" />
      </template>
    </draggable>
    
    <div class="mt-4 text-center">
      <button 
        @click="emit('addTask', column.id)" 
        class="w-full py-2 px-3 bg-retro-dark/50 hover:bg-retro-dark border border-dashed border-white/20 rounded text-white/70 text-sm transition-colors duration-200"
      >
        + Add Task
      </button>
    </div>
  </div>
</template>

<style scoped>
.ghost-card {
  opacity: 0.5;
  background: #3d2b5e;
  border: 1px dashed rgba(199, 116, 232, 0.5);
}

.chosen-card {
  box-shadow: 0 0 15px rgba(255, 106, 213, 0.7);
}
</style>
