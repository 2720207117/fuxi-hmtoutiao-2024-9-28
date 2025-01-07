<template>
  <div class="login-container">
    <el-card class="login_box">
      <img src="@/assets/images/logo_index.png" alt="logo" />

      <!-- 表单 -->
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        status-icon
      >
        <el-form-item prop="mobile">
          <el-input
            placeholder="请输入手机号"
            v-model="loginForm.mobile"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            class="yzm"
            placeholder="验证码"
            v-model="loginForm.code"
          ></el-input>
          <el-button class="btn_yzm">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>
          我已阅读并同意
          <el-link :underline="false" type="primary"> 用户协议 </el-link>
          和
          <el-link :underline="false" type="primary"> 隐私条款 </el-link>
        </el-form-item>
        <el-form-item>
          <el-button class="sub" type="primary" @click="login()">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    // 自定义校验规则（校验手机号）
    const checkMobile = (rule, value, callback) => {
      // 校验逻辑（1开头，第二位2-9之间的数字，剩余为9个任意数字）
      if (/^1[2-9]\d{9}$/.test(value)) {
        callback();
      } else {
        callback(new Error("手机号码格式有误！"));
      }
    };

    return {
      // 表单对应的对象
      loginForm: {
        mobile: "12011111111",
        code: "246810",
      },

      // 表单的校验规则对象
      loginRules: {
        mobile: [
          { required: true, message: "手机号不能为空！", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
        code: [
          { required: true, message: "验证码不能为空！", trigger: "blur" },
          { len: 6, message: "验证码必须为六位数字！", trigger: "blur" },
        ],
      },

      // 默认选中复选框
      checked: true,
    };
  },
  methods: {
    login() {
      // 表单整体校验-->校验成功进行登录
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 校验成功进行登录
          alert("登录成功！");

          this.$http
            .post(
              "http://api-toutiao-web.itheima.net/mp/v1_0/authorizations",
              this.loginForm
            )
            .then((res) => {
              // res 响应对象，包含相应数据
              console.log(res);

              // data 后台返回的json数据 已经转换为对象
              const data = res.data;
              console.log(data);
              // 登录成功后：做什么事情？
              // 1. 跳转到首页
              // 2. 保存登录状态

              this.$router.push("/");
            })
            .catch((err) => {
              // console.log(err);
              this.$message.error("用户名称或密码输入错误！");
            });
        }
      });
    },
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