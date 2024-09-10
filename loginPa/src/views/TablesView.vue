<script setup>
import { ref ,onMounted } from 'vue'
import Tables from '../components/Tables.vue'

const searchQuery = ref('')
const tablesColumns = ['region', 'name',]
const tablesData = ref([])

// 在组件加载时获取数据
onMounted(() => {
  fetchTablesData()
})

async function fetchTablesData() {
  try {                    
    const response = await fetch('https://localhost:7135/api/MenuGetVueControllers/getMenu')
    if (!response.ok) {
      throw new Error('Failed to fetch menu data')
    }
    tablesData.value = await response.json()
  } catch (error) {
    console.error('Error fetching or processing data:', error)
  }
}

  </script>

<template>
  <!--
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <Tables
  :data="tablesData"
  :columns="tablesColumns"
  :filter-key="searchQuery">

  </Tables>
  -->
  <div>
    <form id="search">
      Search <input name="query" v-model="searchQuery">
    </form>
    <ul v-if="tablesData.length > 0">
      <Tables  
        :data="tablesData"
        :columns="tablesColumns"
        :filter-key="searchQuery">
      </Tables>
    </ul>
    <div v-else>
      Loading...
    </div>
  </div>
</template>