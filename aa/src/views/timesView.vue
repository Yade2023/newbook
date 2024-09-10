
<script setup>
import { ref, onUnmounted, computed } from 'vue'
const duration = ref(15 * 1000)
const elapsed = ref(0)
const strTime = ref(0)
let lastTime
let handle

const update = () => {
  elapsed.value = performance.now() - lastTime
  strTime.value = duration.value - elapsed.value
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle)
  } else {
    handle = requestAnimationFrame(update)
  }
}

const reset = () => {
  elapsed.value = 0
  strTime.value = 0
  lastTime = performance.now()
  update()
}

const progressRate = computed(() =>
  Math.max((duration.value - elapsed.value) / duration.value, 0)
)

reset()

onUnmounted(() => {
  cancelAnimationFrame(handle)
})
</script>

<template>
  <label
    >Elapsed Time: <progress :value="progressRate"></progress
  ></label>

  <div>{{ (strTime / 1000).toFixed(1) }}s</div>

  <div>
    Duration: <input type="range" v-model="duration" min="1" max="30000">
    {{ (duration / 1000).toFixed(1) }}s
  </div>

  <button @click="reset">Reset</button>
</template>

<style>
.elapsed-container {
  width: 300px;
}

.elapsed-bar {
  background-color: red;
  height: 10px;
}
</style>