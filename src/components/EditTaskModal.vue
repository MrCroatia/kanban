<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore, type Task } from '../stores/taskStore';

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const taskStore = useTaskStore();
const title = ref(props.task.title);
const description = ref(props.task.description);
const column = ref(props.task.column);

function saveChanges() {
  if (title.value.trim()) {
    taskStore.updateTask(props.task.id, {
      title: title.value,
      description: description.value,
      column: column.value
    });
    emit('close');
  }
}

function closeModal() {
  emit('close');
}
</script>

<template>
  <div class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-retro-dark border border-retro-purple/50 rounded-lg p-6 w-full max-w-md mx-4 shadow-neon">
      <h3 class="text-white text-lg mb-4 font-mono">Edit Task</h3>
      
      <form @submit.prevent="saveChanges">
        <div class="mb-4">
          <label for="title" class="block text-white/80 text-sm mb-1 font-mono">Title</label>
          <input 
            id="title" 
            v-model="title" 
            type="text" 
            class="w-full bg-retro-black/70 border border-retro-purple/30 rounded p-2 text-white focus:border-retro-pink focus:outline-none"
            required
          />
        </div>
        
        <div class="mb-4">
          <label for="description" class="block text-white/80 text-sm mb-1 font-mono">Description</label>
          <textarea 
            id="description" 
            v-model="description" 
            class="w-full bg-retro-black/70 border border-retro-purple/30 rounded p-2 text-white focus:border-retro-pink focus:outline-none min-h-[100px]"
          ></textarea>
        </div>
        
        <div class="mb-6">
          <label for="column" class="block text-white/80 text-sm mb-1 font-mono">Status</label>
          <select 
            id="column" 
            v-model="column" 
            class="w-full bg-retro-black/70 border border-retro-purple/30 rounded p-2 text-white focus:border-retro-pink focus:outline-none"
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        
        <div class="flex justify-end space-x-3">
          <button 
            type="button" 
            @click="closeModal" 
            class="btn-secondary"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="btn-primary"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
