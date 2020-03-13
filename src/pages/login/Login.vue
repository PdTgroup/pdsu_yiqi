<template>
  <div class="login-container">
    <LoginForm></LoginForm>
    <particle></particle>
  </div>
</template>
<script>
import LoginForm from "./view/LoginForm.vue";
import Particle from "./view/particles.vue";
export default {
  name: "login",
  components: {
    LoginForm,
    Particle
  }
};
</script>

<style lang="scss">
.login {
  z-index: 10;
}
.container {
  z-index: 1;
}
</style>
