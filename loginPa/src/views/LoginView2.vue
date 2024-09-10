<template>
  <div class="login-container">
    <h2>登入</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="mail">電子郵件1:</label><br>
        <input type="email" id="mail" v-model="mail" placeholder="請輸入您的電子郵件" required>
      </div>
      <div class="form-group">
        <label for="password">密碼:</label>
        <div class="password-container">
          <input :type="passwordFieldType" id="password" v-model="password" placeholder="請輸入您的密碼" required>
        </div>
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="rememberMe"> 記住密碼
        </label>
      </div>
      <div class="form-actions">
        <button type="submit" >登入</button>
        <button type="button" @click="goToEnroll">前往註冊</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const mail = ref('');
    const password = ref('');
    const rememberMe = ref(false);
    const passwordFieldType = ref('password');
    const router = useRouter();

    const handleLogin = async () => {
      try {
        const response = await fetch('https://localhost:7135/api/EnrollGetVueControllers/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            mail: mail.value,
            pw: password.value,
            rememberMe: rememberMe.value
          })
        });
        if(response.ok){
          const data = await response.json();
          
          if(data.success)
          {
            alert(data.message);
            router.push('/menu');
          }
          else
          {
            //false:::
            alert(data.message);
          }
          console.log(data.message);
        }

      } 
      catch (error) {
        // eslint-disable-next-line no-undef
        alert(data.message);
        console.error('登录失败:', error);
        // 处理登录失败的情况，例如显示错误消息给用户
      }
    };
    

    const togglePasswordVisibility = () => {
      passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
    };

    const goToEnroll = () => {
      router.push('/Enroll');
    };

    return {
      mail,
      password,
      rememberMe,
      passwordFieldType,
      handleLogin,
      togglePasswordVisibility,
      goToEnroll,
    };
  }
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.password-container {
  display: flex;
  align-items: center;
}
.password-container button {
  margin-left: 10px;
}
.form-actions {
  display: flex;
  justify-content: space-between;
}
</style>
