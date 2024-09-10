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
      <a href="https://www.msn.com/zh-tw/weather/forecast/in-%E5%AF%B6%E5%B1%B1%E9%84%89,%E6%96%B0%E7%AB%B9%E7%B8%A3?ocid=msedgntphdr&cvid=6ab3ab38012b4ce1865788bb66a2aa6c&loc=eyJsIjoi5a%2B25bGx6YSJIiwiciI6IuiHuueBo%2BecgSIsInIyIjoi5paw56u557ijIiwiYyI6IuWPsOeBoyIsImkiOiJUVyIsImciOiJ6aC10dyIsIngiOiIxMjEuMDIyMjE2Nzk2ODc1IiwieSI6IjI0Ljc1MDU2MDc2MDQ5ODA0NyJ9&weadegreetype=C"
         target="_blank" rel="noopener">氣象首頁</a> +
      <a href="https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-005?Authorization=CWA-75A66CAB-F4B0-43D8-8209-C55C8CA327A0&limit=10&offset=2&format=JSON&locationName=%E8%98%86%E7%AB%B9%E5%8D%80,%E5%A4%A7%E5%9C%92%E5%8D%80/" 
         target="_blank" rel="noopener">API連結</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
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
