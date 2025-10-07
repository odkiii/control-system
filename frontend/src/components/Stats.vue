<template>
  <section class="stats">
    <h2>Статистика</h2>
    <p>Всего задач: <strong>{{ total }}</strong></p>
    <p>Сделано: <strong>{{ completed }}</strong></p>
    <p>Прогресс: <strong>{{ progress }}%</strong></p>

    <div class="progress-bar">
      <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] }
})

const total = computed(() => props.items.length)
const completed = computed(() =>
  props.items.filter(item => item.toLowerCase().includes('готово')).length
)
const progress = computed(() =>
  total.value ? Math.round((completed.value / total.value) * 100) : 0
)
</script>
