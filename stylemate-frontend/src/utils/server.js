import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = Vue.createApp()
app.use(VueAxios, axios)

export default axios.create({
    baseURL:`https://elsa.beta.mediance.co.kr`
})

