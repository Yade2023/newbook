<script setup>
import { ref, onMounted } from 'vue'
import MenuCom from '../components/MenuCom.vue'



const treeData = ref([])

// 在组件加载时获取数据
onMounted(() => {
  fetchMenuData()
})

async function fetchMenuData() {
  try {                    
    const response = await fetch('https://localhost:7135/api/MenuGetVueControllers/getMenu')
    if (!response.ok) {
      throw new Error('Failed to fetch menu data')
    }
    const data = await response.json()
    treeData.value = buildTree(data)
  } catch (error) {
    console.error('Error fetching or processing data:', error)
  }
}

function buildTree(data) {
  const map = new Map();
  const tree = [];

  // 将数据按照 root 分类存入 map
  data.forEach(item => {
    if (!map.has(item.id)) {
      map.set(item.id, { ...item, children: [] });
    }
    if (item.root === null) {
      tree.push(map.get(item.id));
    } else {
      const parent = map.get(item.root);
      parent.children.push(map.get(item.id));
    }
  })

  return tree
}
</script>

<template>
   <div>
    <ul v-if="treeData.length > 0">
      <MenuCom :model="treeData"></MenuCom>
    </ul>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>