<template>
  <div class="login-container">
    <el-card class="login_box">
      <img src="@/assets/images/logo_index.png" alt="logo" />

      <!-- 表单 -->
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="yzm" placeholder="验证码"></el-input>
          <el-button class="btn_yzm">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>
          我已阅读并同意
          <el-link :underline="false">用户协议</el-link>和<el-link
            :underline="false"
            >隐私条款</el-link
          >
        </el-form-item>
        <el-form-item>
          <el-button class="sub" type="primary"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style lang='less' scoped>
.login-container {
  background: url("@/assets/images/login_bg.jpg") no-repeat top / cover;
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
    box-shadow: 6px 6px 6px 6px;
    img {
      display: block;
      width: 180px;
      margin: 10px auto 30px;
    }
    form {
      padding: 0 40px;
      .yzm {
        width: 160px;
      }
      .btn_yzm {
        width: 115px;
        float: right;
      }
      .sub {
        width: 100%;
      }
    }
  }
}
</style>