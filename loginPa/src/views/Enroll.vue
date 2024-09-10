<!-- eslint-disable vue/multi-word-component-names -->

<script>
import '../assets/login1.css'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const mail = ref('');
    const pw = ref('');
    const errorMessage = ref('');
    const emailError = ref('');
    // eslint-disable-next-line no-unused-vars
    const router = useRouter();

    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!mail.value.match(emailPattern)) {
        emailError.value = '請輸入有效的電子郵件地址';
        return false;
      } else {
        emailError.value = '';
        return true;
      }
    };

    const handleSubmit = async () => {
      if (!validateEmail()) {
        return;
      }
      try {
        const response = await fetch('https://localhost:7135/api/EnrollGetVueControllers/addenroll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            mail:  mail.value,
            pw:  pw.value
          })
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Network response was not ok');
        }
        else{
                  
        console.log('註冊成功:', data);
        errorMessage.value = data.message;
        alert(data.message);
        errorMessage.value = '';
        }
      } 
      catch (error) {
        console.error('註冊失敗:', error);
        errorMessage.value = error.message || '註冊失敗，請再試一次。';
        alert(this.errorMessage);
        errorMessage.value = '';
      }
    };

    const validateEmailField = () => {
      const isValidEmail = validateEmail(mail.value);
      emailError.value = isValidEmail ? '' : '请输入有效的电子邮件地址';
    };

    return {
      mail,
      pw,
      errorMessage,
      emailError,
      handleSubmit,
      validateEmailField, 
    };
  }
};
</script>


<template>
  <div class="login-container">
    <h2>登入頁面</h2>
    <form @submit.prevent="handleSubmit">
    
      <div class="input-group">
        <label for="mail">電子郵件</label>
        <input type="email" id="mail" v-model="mail" required  placeholder="請輸入您的電子郵件" @blur="validateEmail">
        <p v-if="emailError" class="error">{{ emailError }}</p>

      </div>
      <div class="input-group">
        <label for="pw">密碼</label>
        <input type="password" id="pw" v-model="pw" required placeholder="請輸入您的密碼">
      </div>

        <button type="submit">註冊</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

