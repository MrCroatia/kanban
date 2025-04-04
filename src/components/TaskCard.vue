<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore, type Task } from '../stores/taskStore';
import EditTaskModal from './EditTaskModal.vue';

const props = defineProps<{
  task: Task;
}>();

const taskStore = useTaskStore();
const showEditModal = ref(false);
const showConfirmDelete = ref(false);

function openEditModal() {
  showEditModal.value = true;
}

function closeEditModal() {
  showEditModal.value = false;
}

function confirmDelete() {
  showConfirmDelete.value = true;
}

function cancelDelete() {
  showConfirmDelete.value = false;
}

function deleteTask() {
  taskStore.deleteTask(props.task.id);
  showConfirmDelete.value = false;
}

// Format date to show only the date part
function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}
</script>

<template>
  <div class="task-card cursor-move">
    <div class="flex justify-between items-start mb-2">
      <h4 class="text-white font-bold text-sm">{{ task.title }}</h4>
      <div class="flex space-x-1">
        <button 
          @click.stop="openEditModal" 
          class="text-xs text-white/70 hover:text-retro-blue transition-colors p-1"
        >
          Edit
        </button>
        <button 
          @click.stop="confirmDelete" 
          class="text-xs text-white/70 hover:text-retro-pink transition-colors p-1"
        >
          Delete
        </button>
      </div>
    </div>
    
    <p class="text-white/70 text-xs mb-3">{{ task.description }}</p>
    
    <div class="text-right">
      <span class="text-xs text-white/50 font-mono">{{ formatDate(task.createdAt) }}</span>
    </div>

    <!-- Edit Modal -->
    <EditTaskModal 
      v-if="showEditModal" 
      :task="task" 
      @close="closeEditModal" 
    />

    <!-- Delete Confirmation -->
    <div v-if="showConfirmDelete" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-retro-dark border border-retro-pink/50 rounded-lg p-6 w-full max-w-sm mx-4">
        <h3 class="text-white text-lg mb-4 font-mono">Delete Task?</h3>
        <p class="text-white/70 mb-6 text-sm">Are you sure you want to delete "{{ task.title }}"?</p>
        <div class="flex justify-end space-x-3">
          <button @click="cancelDelete" class="btn-secondary">Cancel</button>
          <button @click="deleteTask" class="btn-primary">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
