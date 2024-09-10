<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, computed ,defineProps  } from 'vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  model: Array
})


function isFolder(item) {
  return item.children && item.children.length > 0;
}
function toggle(item) {
  item.isOpen= !item.isOpen
}
function changeType(item) {
  if (!item.children) {
    item.children = []
    // eslint-disable-next-line no-undef
    addChild(item)
    item.isOpen = true
  }
}



</script>

<template>
  <li v-for="item in model" :key="item.id">
     <div
        :class="{ bold: isFolder(item) }"
        @click="toggle(item)"
        @dblclick="changeType(item)"> 
        {{ item.region  }}
      <span v-if="isFolder(item)">[{{ item.isOpen ? '-' : '+' }}]</span> 
    </div>
    <ul v-if="isFolder(item) && item.isOpen">
      
      <MenuCom :model="item.children"></MenuCom>
      
      <!--
      <li class="add" @click="addChild">+</li>
      -->
      
    </ul>
  </li>
</template>