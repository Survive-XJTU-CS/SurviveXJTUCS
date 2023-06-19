const htmlModules = require('./config/htmlModules.js');

module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "SurviveXJTUCS",
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: 'img/xjtu2.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'vuepress,theme,blog,vdoing' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/', items:[
        { text: '写在前面', link: '/pages/af30f0/'},
        { text: '如何成为贡献者', link: '/pages/b6d855/'},
      ] },
      {
        text: '思想意识', link: '/pages/98b006/', items: [
          { text: '摆脱惯性思维', link: '/pages/98b006/' },
          { text: '培养独立思考能力', link: '/pages/c463db/' },
          { text: '相信与不相信', link: '/pages/5665f0/' },
          { text: '尊重一切', link: '/pages/0b10be/' },
          { text: '摆脱焦虑', link: '/pages/2d830b/' },
          { text: '为自己而生活', link: '/pages/28a222/' },
        ]
      },
      {
        text: '课程学习', link: '/pages/a788a8/', items: [
          { text: '如何成为一个计算机知识体系完整的毕业生', link: '/pages/440670/'},
          { text: '校内课程', link: '/pages/a788a8/', items: [
            { text: '程序设计基础', link: '/pages/a788a8/'},
            { text: '操作系统', link: '/pages/659db1/'},
            { text: '数据结构与算法', link: '/pages/ecdf36/'}
          ]
        },
          { text: '校外优质课程', link: '/pages/85b2d4/', items: [
            { text: '程序设计基础', link: '/pages/85b2d4/'},
            { text: '操作系统', link: '/pages/336aed/'},
          ]
        },
        ]
      },
      {
        text: '科研状态', link: '/pages/384e2a/', items: [
          { text: '寻找方向', link: '/pages/384e2a/' },
          { text: '验证自我', link: '/pages/cc6a3b/' },
          { text: '科研的态度', link: '/pages/720602/' },
          { text: '科研的底线', link: '/pages/8f0ad2/' },
          { text: '遇到阻力', link: '/pages/e2fa79/' },
          { text: '止损还是前进？', link: '/pages/93b43a/' },
        ]
      },
      {
        text: '毕业之后', link: '/pages/d69141/', items: [
          { text: '谈谈保研', link: '/pages/d69141/' },
          { text: '谈谈考研', link: '/pages/f68786/' },
          { text: '谈谈留学', link: '/pages/6ac0b7/' },
          { text: '谈谈工作', link: '/pages/b33474/' },
        ]
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/xjtu-logo.png', // 导航栏logo
    repo: '/Survive-XJTU-CS/SurviveXJTUCS', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。


    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'Siyuan Luo', // 必需
      href: 'https://github.com/siyuanluo' // 可选的
    },
    footer: { // 页脚信息
      createYear: 2021, // 博客创建年份
      copyrightInfo: '@xugaoyi | MIT License', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
      thirdparty: [ // 可选，默认 []
        {
          title: '在GitHub中搜索',
          frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在npm中搜索',
          frontUrl: 'https://www.npmjs.com/search?q=',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q='
        }
      ]
    }],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],
}
