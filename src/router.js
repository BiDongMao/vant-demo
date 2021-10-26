/*
 * @Author: zhangmin
 * @Date: 2021-01-31 16:40:05
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-10-26 16:30:09
 * @Description: 文件说明
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'login',
    component: () => import('./view/login'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'index',
    component: () => import('./view/index'),
    meta: {
      title: '首页'
    }
  },
  {
    name: "list",
    component: () => import("./view/basic/list"),
    meta: {
      title: "列表",
    },
  },
  {
    name: "form",
    component: () => import("./view/basic/form"),
    meta: {
      title: "表单",
    },
  },
  {
    name: "button",
    component: () => import("./view/basic/button"),
    meta: {
      title: "按钮",
    },
  },
  {
    name: "loading",
    component: () => import("./view/basic/loading"), 
    meta: {
      title: "加载框",
    },
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
