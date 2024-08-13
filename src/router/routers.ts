//对外暴露常量路由
export const constantRouter = [
  {
    //登录路由
    path: "/login",
    component: () => import("@/view/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏 true：隐藏，false：显示
      icon: "Promotion", //菜单文字左侧图标，支持 element-plus 所以图标
    },
  },
  {
    //登录成功展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "discover",
    meta: {
      title: "推荐",
      hidden: false,
      icon: "",
    },
    redirect: "/discover",
    children: [
      {
        path: "/discover",
        component: () => import("@/view/discover/index.vue"),
        meta: {
          title: "推荐",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    //登录成功展示数据的路由
    path: "/music",
    component: () => import("@/layout/index.vue"),
    name: "music",
    meta: {
      title: "音乐馆",
      hidden: false,
      icon: "",
    },
    redirect: "/music",
    children: [
      {
        path: "/music",
        component: () => import("@/view/music/index.vue"),
        meta: {
          title: "音乐馆",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    //登录成功展示数据的路由
    path: "/radioSation",
    component: () => import("@/layout/index.vue"),
    name: "radioSation",
    meta: {
      title: "歌单",
      hidden: false,
      icon: "",
    },
    redirect: "/radioSation",
    children: [
      {
        path: "/radioSation",
        component: () => import("@/view/radioSation/index.vue"),
        meta: {
          title: "歌单",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },

  {
    //登录成功展示数据的路由
    path: "/video",
    component: () => import("@/layout/index.vue"),
    name: "video",
    meta: {
      title: "视频",
      hidden: false,
      icon: "",
    },
    redirect: "/video",
    children: [
      {
        path: "/video",
        component: () => import("@/view/video/index.vue"),
        meta: {
          title: "视频",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  //播放列表
  {
    path: "/playlist",
    component: () => import("@/layout/index.vue"),
    name: "playlist",
    meta: {
      title: "播放列表",
      hidden: true,
      icon: "",
    },
    redirect: "/playlist",
    children: [
      {
        path: "/playlist",
        component: () => import("@/view/play/playList/index.vue"),
        meta: {
          title: "播放列表",
          hidden: false,
          icon: "HomeFilled",
        },
      },
      {
        path: "/playDetails",
        component: () => import("@/view/play/playDetails/index.vue"),
        meta: {
          title: "播放列表详情",
          hidden: false,
          icon: "HomeFilled",
        },
      },
      {
        path: "/albums",
        component: () => import("@/view/play/albums/index.vue"),
        meta: {
          title: "专辑",
          hidden: false,
          icon: "HomeFilled",
        },
      },
      {
        path: "/mvDetail",
        component: () => import("@/view/play/mvDetail/index.vue"),
        meta: {
          title: "播放mv",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    //登录成功展示数据的路由
    path: "/lyricInfo",
    component: () => import("@/layout/index.vue"),
    name: "lyricInfo",
    meta: {
      title: "歌词",
      hidden: true,
      icon: "",
    },
    redirect: "/lyricInfo",
    children: [
      {
        path: "/lyricInfo",
        component: () => import("@/view/lyricInfo/index.vue"),
        meta: {
          title: "歌词",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
];
