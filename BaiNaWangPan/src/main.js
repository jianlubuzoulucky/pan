
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入element plus 插件
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
//引入base.scss 和 iconfont.css(图标)
import "@/assets/base.scss"
import "@/assets/icon/iconfont.css"
//引入cookiesvue插件
//使用 VueCookies 的 API：
import VueCookies from "vue-cookies"

const app = createApp(App)

//安装插件
app.use(VueCookies)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

/* 注册 VueCookies 后，你可以在任何组件中通过 this.$cookies 来操作 Cookies。
示例：设置、读取和删除 Cookies
设置 Cookie： 你可以为用户设置一个 Cookie，并且指定过期时间：

// // 设置名为 "token" 的 Cookie，值为 "123456"，过期时间为 1 天
// this.$cookies.set("token", "123456", "1d");
// 参数说明：

// 第一个参数是 Cookie 的键名。
// 第二个参数是 Cookie 的值。
// 第三个参数是过期时间，支持的单位包括天（d）、小时（h）、分钟（m）、秒（s）。如果不传此参数，Cookie 会在会话结束时失效（即浏览器关闭时失效）。



// 读取 Cookie： 你可以读取指定的 Cookie：
// const token = this.$cookies.get("token");
// console.log(token); // 输出 "123456"



// 删除 Cookie： 删除指定的 Cookie：

 this.$cookies.remove("token");*/

/* //  VueCookies 是一个 Vue 插件，它简化了 Cookies 的操作，使得你能够在 Vue 应用中更轻松地管理用户的会话状态、偏好设置等信息。通过简单的 API，你可以读取、设置、删除 Cookies，方便管理前端状态或与后端进行交互。

// 这个工具对于需要持久化小型数据（如 Token、用户偏好、主题设置等）的场景非常有用。如果你有进一步的需求或其他问题，欢迎继续提问！ */