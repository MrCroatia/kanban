<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore';
import KanbanColumn from './KanbanColumn.vue';
import AddTaskForm from './AddTaskForm.vue';
import { ref } from 'vue';

const taskStore = useTaskStore();
const showAddTaskForm = ref(false);
const selectedColumn = ref('todo');

function openAddTaskForm(columnId: string) {
  selectedColumn.value = columnId;
  showAddTaskForm.value = true;
}

function closeAddTaskForm() {
  showAddTaskForm.value = false;
}
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <h2 class="text-xl md:text-2xl font-mono text-white">
        <span class="text-retro-purple neon-text-blue">Task</span> Board
      </h2>
      <button 
        @click="openAddTaskForm('todo')" 
        class="btn-primary flex items-center"
      >
        <span class="mr-1">+</span> New Task
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KanbanColumn 
        v-for="column in taskStore.columns" 
        :key="column.id"
        :column="column"
        :tasks="taskStore.getTasksByColumn(column.id)"
        @add-task="openAddTaskForm(column.id)"
      />
    </div>

    <!-- Add Task Modal -->
    <div v-if="showAddTaskForm" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-retro-dark border border-retro-purple/50 rounded-lg p-6 w-full max-w-md mx-4 shadow-neon">
        <AddTaskForm 
          :column-id="selectedColumn" 
          @close="closeAddTaskForm" 
        />
      </div>
    </div>
  </div>
</template>
