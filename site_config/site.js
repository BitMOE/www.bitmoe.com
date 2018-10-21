export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/',
      },
      {
        key: 'service',
        text: 'SERVICE',
        link: '/zh-cn/service/products-and-service.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/zh-cn/blog/',
      },
      {
        key: 'about',
        text: 'ABOUT',
        link: '/zh-cn/about/',
      },
      // {
      //   text: 'ALI-SUPPORT',
      //   href: 'https://developer.aliyun.com/opensource/project/nacos',
      // },
    ],
    disclaimer: {
      title: 'Culture and Vision',
      content: 'The BITMOE Information Team started construction at the end of 2015. The “bit” in the enterprise font size “BitMOE” is taken from the basic unit of measurement of the computer “bit”, which means “information” technology, and the other is the “Book of Rites·Monthly” sentence. After the completion of the "MOE" in the "MOE", the words "MOE" are combined to form a new word; reflecting our confidence and vision for the future development of information technology. Our company is committed to the future with information/credit. The business philosophy of the company helps the market players in the world strengthen their information functions and win the future information war',
    },
    footerattention: {
      title: 'Follow us',
      list: [
        {
          text: 'DingDing',
          link: '/go/dd',
        },
        {
          text: 'Taobao',
          link: '/go/tb',
        },
        {
          text: 'Twitter',
          link: '/go/tw',
        },
      ],
    },
    footerjoinus: {
      title: 'Join us',
      list: [
        {
          text: 'Social recruitment',
          link: '/zh-cn/service/hr.html',
        },
        {
          text: 'Campus Recruiting',
          link: '/zh-cn/service/join.html',
        },
        {
          text: 'International recruitment',
          link: '/zh-cn/service/career.html',
        },
      ],
    },
    footercontact: {
      title: 'Contact us',
      list: [
        {
          text: 'Customer Service',
          link: '/zh-cn/service/service.html',
        },
        {
          text: 'Cooperation meeting',
          link: '/zh-cn/service/contactus.html',
        },
        {
          text: 'Service procurement',
          link: '/zh-cn/service/spd.html',
        },
      ],
    },
    footerlegal: {
      title: 'Legal info.',
      list: [
        {
          text: 'Service agreement',
          link: '/zh-cn/service/termsofservice.html',
        },
        {
          text: 'Privacy Policy',
          link: '/zh-cn/service/privacypolicy.html',
        },
        {
          text: 'Intellectual property',
          link: '/zh-cn/service/intellectualproperty.html',
        },
      ],
    },
    copyright: 'Copyright © 2015-2018 Shenzhen BitMOE Information Technology Co., Ltd. All rights reserved.',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/',
      },
      {
        key: 'service',
        text: '服务',
        link: '/zh-cn/service/products-and-service.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/',
      },
      {
        key: 'about',
        text: '关于',
        link: '/zh-cn/about/',
      },
    ],
    disclaimer: {
      title: '文化及愿景',
      content: '比特萌信息团队于2015年末开始筹建，企业字号“比特萌”中的“比特”取自计算机基本计量单位“比特”，寓意“信息”技术，，另取《礼记·月令》“句者毕出,萌者尽达”中的“萌”字（萌芽之意），合并组成一个新词语；体现我司对于信息技术发展未来的信心及愿景。 \n 我公司秉承 信息 / 信用，通达未来。的企业经营理念，助力天下各市场主体强化自身信息职能，打赢未来信息战争',
    },
    footerattention: {
      title: '关注我们',
      list: [
        {
          text: '钉钉主页',
          link: '/go/dd',
        },
        {
          text: '淘宝店铺',
          link: '/go/tb',
        },
        {
          text: '推特信息',
          link: '/go/tw',
        },
      ],
    },
    footerjoinus: {
      title: '加入我们',
      list: [
        {
          text: '社会招聘',
          link: '/zh-cn/service/hr.html',
        },
        {
          text: '校园招聘',
          link: '/zh-cn/service/join.html',
        },
        {
          text: '国际招聘',
          link: '/zh-cn/service/career.html',
        },
      ],
    },
    footercontact: {
      title: '联系我们',
      list: [
        {
          text: '客户服务',
          link: '/zh-cn/service/service.html',
        },
        {
          text: '合作洽谈',
          link: '/zh-cn/service/contactus.html',
        },
        {
          text: '服务采购',
          link: '/zh-cn/service/spd.html',
        },
      ],
    },
    footerlegal: {
      title: '法律信息',
      list: [
        {
          text: '服务协议',
          link: '/zh-cn/service/termsofservice.html',
        },
        {
          text: '隐私政策',
          link: '/zh-cn/service/privacypolicy.html',
        },
        {
          text: '知识产权',
          link: '/zh-cn/service/intellectualproperty.html',
        },
      ],
    },
    copyright: '版权所有 © 2015-2018 深圳比特萌信息技术有限公司 保留所有权利',
  },
};
