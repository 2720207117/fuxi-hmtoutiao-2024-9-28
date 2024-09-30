<template>
  <div class="login-container">
    <el-card class="login_box">
        <img src="@/assets/images/logo_index.png" alt="logo">
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .login-container {
        background: url('@/assets/images/login_bg.jpg') no-repeat top / cover;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        .login_box {
            width: 420px;
            height: 360px;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img {
                display: block;
                width: 200px;
                margin: 0 auto;
            }
        }
    }
</style>