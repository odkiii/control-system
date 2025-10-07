<template>
  <div>
    <h1>Мои задачи</h1>
  </div>
</template>


<script setup>
import { ref } from 'vue'
// import TaskList from '@/components/TaskList.vue'
// import TaskStats from '@/components/TaskStats.vue'

const tasks = ref([])
</script>

<style scoped>
.todo-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 2rem auto;
}
</style>
