import "./styles/index.scss"
import "windi.css"
import "./styles/markdown.scss"

import {  RouterScrollBehavior } from 'vue-router'
import { ViteSSG } from 'vite-ssg'
import NProgress from "nprogress"
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

import routes from "pages-generated"
import App from './App.vue'

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (savedPosition)
        return savedPosition
    else
        return { top: 0 }
}



export const createApp = ViteSSG(
    App,
    { routes, scrollBehavior },
    ({ router, isClient }) => {
      dayjs.extend(LocalizedFormat)
  
      if (isClient) {
        router.beforeEach(() => { NProgress.start() })
        router.afterEach(() => { NProgress.done() })
      }
    },
  )