<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStore';

const props = defineProps<{
  columnId: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const taskStore = useTaskStore();
const title = ref('');
const description = ref('');

function addTask() {
  if (title.value.trim()) {
    taskStore.addTask({
      title: title.value,
      description: description.value,
      column: props.columnId
    });
    emit('close');
  }
}

function closeModal() {
  emit('close');
}
</script>

<template>
  <div>
    <h3 class="text-white text-lg mb-4 font-mono">Add New Task</h3>
    
    <form @submit.prevent="addTask">
      <div class="mb-4">
        <label for="title" class="block text-white/80 text-sm mb-1 font-mono">Title</label>
        <input 
          id="title" 
          v-model="title" 
          type="text" 
          class="w-full bg-retro-black/70 border border-retro-purple/30 rounded p-2 text-white focus:border-retro-pink focus:outline-none"
          placeholder="Enter task title"
          required
        />
      </div>
      
      <div class="mb-6">
        <label for="description" class="block text-white/80 text-sm mb-1 font-mono">Description</label>
        <textarea 
          id="description" 
          v-model="description" 
          class="w-full bg-retro-black/70 border border-retro-purple/30 rounded p-2 text-white focus:border-retro-pink focus:outline-none min-h-[100px]"
          placeholder="Enter task description (optional)"
        ></textarea>
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
          Add Task
        </button>
      </div>
    </form>
  </div>
</template>
