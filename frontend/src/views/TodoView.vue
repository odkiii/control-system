<template>
  <main class="todo-page">
    <TaskList v-model:items="tasks" />
    <TaskStats :items="tasks" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import TaskList from '@/components/TaskList.vue'
import TaskStats from '@/components/TaskStats.vue'

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
