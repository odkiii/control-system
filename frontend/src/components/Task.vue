<template>
  <section class="todo">
    <h2>Список задач</h2>

    <div class="todo-input">
      <input
        v-model.trim="newTask"
        type="text"
        placeholder="Новая задача"
        @keyup.enter="addTask"
      />
      <button @click="addTask">Добавить</button>
    </div>

    <ul class="todo-list">
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] }
})
const emit = defineEmits(['update:items'])

const tasks = computed({
  get: () => props.items,
  set: val => emit('update:items', val)
})

const newTask = ref('')

const addTask = () => {
  const task = newTask.value.trim()
  if (!task) return
  tasks.value = [...tasks.value, task]
  newTask.value = ''
}
</script>
