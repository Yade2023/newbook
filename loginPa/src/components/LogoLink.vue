<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <a href="https://www.instagram.com/connie_cares_spa/?hl=zh-hk" target="_blank" rel="noopener">IG   </a>+
      
      <a href="https://www.facebook.com/conniecares1990" target="_blank" rel="noopener">Facebook</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 50;
  font-size: 2.6rem;
  position: relative;
  top: -6px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
