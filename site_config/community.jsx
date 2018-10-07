import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [

          {
              img: 'https://cdn.nlark.com/lark/0/2018/png/11189/1537795153259-cc2c60c2-d7cb-431a-8858-cbd71b1c89e9.png',
              title: 'Nacos 计划发布v0.2版本，进一步融合Dubbo和SpringCloud生态',
              content: '在近期的Aliware Open Source 成都站的活动上，阿里巴巴高级工程师邢学超（于怀）分享了Nacos v0.2的规划和进度，并对Nacos v0.3的控制台进行了预览。Nacos v0.2将进一步融入Duboo和Spring Cloud生态，帮助开发者更好的在微服务场景下使用服务发现和动态配置管理。',
              dateStr: 'Sept 06，2018',
              link: '/en-us/blog/cengdu-dubbo.html',
          },
          {
              img: 'https://cdn.yuque.com/lark/0/2018/png/15914/1530083408486-b4698533-8e69-4e0a-9f3a-fdb1cdfbd290.png',
              title: 'Consul与kubernetes整合公告[翻译]',
              dateStr: 'Sept 2nd, 2018',
              content: '本文翻译了Consul对于Kubernetes的整合所发布的公告文章（[原文地址](https://www.hashicorp.com/blog/consul-plus-kubernetes)）。Consul通过支持Service Mesh，并提供对Kubernetes的无缝支持，与目前最受社区热捧的产品进行绑定，并通过功能预告的形式，来达到对产品宣传效果的最大化。',
              link: '/en-us/blog/consul-k8s.html',
          },
        // {
        //   img: '/img/kunyu.JPG',
        //   title: 'Nacos - 阿里巴巴注册中心和配置中心开源计划',
        //   content: '阿里巴巴计划开启一个名叫Nacos的新开源项目,坤宇介绍了这个开源项目的初衷，他表示 “将通过Nacos项目将阿里巴巴在建设共享服务体系中使用的服务发现、配置及服务管理平台贡献给开源社区"。',
        //   dateStr: 'March 06，2018',
        //   link: '/en-us/blog/Nacos-is-Coming.html',
        // },
          {
              img: 'https://cdn.yuque.com/lark/0/2018/png/7601/1525185700084-16f2c073-0c2b-49c0-b85b-ce2ca1163326.png',
              title: '微服务架构中基于DNS的服务注册与发现',
              content: '当前，微服务架构已经成为企业尤其是互联网企业技术选型的一个重要参考。微服务架构中涉及到很多模块，本文将重点介绍微服务架构的服务注册与发现以及如何基于DNS做服务发现。',
              dateStr: 'March 06，2018',
              link: '/en-us/blog/DNS-SD.html',
          },
      ]
    },
    contacts: {
      title: 'Talk To Us',
      desc: 'Nacos is an easy-to-use dynamic service discovery, configuration and service management platform for building cloud native application.',
      list: [
        {
          img: '/img/weibo.png',
          imgHover: '/img/weibo_hover.png',
          title: '@Nacos',
          link: 'https://weibo.com/u/6574374908',
        },
        {
          img: '/img/alibaba.png',
          imgHover: '/img/alibaba_hover.png',
          title: '#alibaba/Nacos',
          link: 'https://gitter.im/alibaba/nacos',
        },
        {
          img: '/img/segmentfault.png',
          imgHover: '/img/segmentfault_hover.png',
          title: 'Segment Fault',
          link: 'https://segmentfault.com/t/nacos',
        },
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: 'Mailing List',
          link: 'mailto:nacos_dev@linux.alibaba.com',
        },
      ],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'Want to contribute to Nacos?',
      list: [
        {
          img: '/img/mailinglist.png',
          title: 'Mailing List',
          content: <span>Be sure to follow our <a href="mailto:nacos_dev@linux.alibaba.com">our community addition guidelines</a></span>,
        },
        {
          img: '/img/issue.png',
          title: 'Issue',
          content: <span>Reporting issues via <a href="https://github.com/alibaba/nacos/issues">Github issues.</a></span>,
        },
        {
          img: '/img/documents.png',
          title: 'Documents',
          content: <span>Improve the <a href="https://github.com/xuechaos/nacos.io/tree/master/docs">documentation.</a></span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>Send your awesome enhancement via <a href="https://github.com/alibaba/nacos/pulls">Pull requests.</a></span>,
        },
      ],
    },
    ecos: {
      title: 'Open Source Ecology Corelated',
      list: [
        {
          title: 'Dubbo and Dubbo Mesh',
          content: <span>Dubbo and Nacos are the classic combination from production practice of Aibaba's large-scale micro-service. Compared to traditional registry centers such as ZooKeeper and configuration center solutions, when building a microservice application platform by using cloud native and Service Mesh paradigm, with the use of Nacos in Dubbo, all the power of Dubbo in the large-scale microservice management, traffic management, service integration and sharing can be fully released.</span>,
          tags: [
              {
                  text: 'Dubbo',
                  link: 'http://dubbo.io/',
                  bgColor: '#7A63FC',
              },
              {
                  text: 'Dubbo Mesh',
                  link: 'http://dubbo.io/',
                  bgColor: '#00D0D9',
              },
          ]
        },
        {
          title: 'Kubernetes and CNCF',
          content: <span>Nacos supports service discovery and dynamic configuration management required by Kubernetes and CNCF. Nacos can replace completely and seamlessly Kubernetes’ primary DNS-based Service Discovery solutions. Nacos is featured with providing more service governance, which includes management of service domain, service health and life cycle management, traffic management and intelligent routing strategy management and etc. Nacos also enhances the management of ConfigMap, including version configuration and gated launch and etc.</span>,
          tags: [
              {
                  text: 'Kubernetes',
                  link: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/',
                  bgColor: '#7A63FC',
              },
              {
                  text: 'CNCF',
                  link: 'https://www.cncf.io/',
                  bgColor: '#00D0D9',
              },
          ]
        },
        {
          title: 'Spring Cloud',
          content: <span>Nacos is fully compatible and seamlessly supports the relevant API and main related functions of Spring Cloud. You can use Nacos as a configuration service for Spring Cloud Config Server or a better alternative for product of service discovery such as Eureka/Consul/ZooKeeper and etc. Nacos brings many feature enhancements required by the production and micro-service governance in configuration management and service management.</span>,
          tags: [
              {
                  text: 'Spring Cloud',
                  link: 'http://projects.spring.io/spring-cloud/',
                  bgColor: '#7A63FC',
              },
              {
                  text: 'Microservice',
                  link: 'http://microservices.io/',
                  bgColor: '#00D0D9',
              },
          ],
        },
      ],
    },
  },
  'zh-cn': {
    barText: '关于我们',
    events: {
      title: '事件 & 新闻',
      list: [
          {
              img: 'https://cdn.nlark.com/lark/0/2018/png/11189/1537795153259-cc2c60c2-d7cb-431a-8858-cbd71b1c89e9.png',
              title: 'BitMOE 比特萌 品牌释义',
              content: '在近期的Aliware Open Source 成都站的活动上，阿里巴巴高级工程师邢学超（于怀）分享了Nacos v0.2的规划和进度，并对Nacos v0.3的控制台进行了预览。Nacos v0.2将进一步融入Duboo和Spring Cloud生态，帮助开发者更好的在微服务场景下使用服务发现和动态配置管理。',
              dateStr: 'Sept 06，2018',
              link: '/en-us/blog/cengdu-dubbo.html',
          },
          {
              img: 'https://cdn.yuque.com/lark/0/2018/png/15914/1530083408486-b4698533-8e69-4e0a-9f3a-fdb1cdfbd290.png',
              title: '比特萌公司开票信息及收款账户',
              dateStr: 'Sept 2nd, 2018',
              content: '本文翻译了Consul对于Kubernetes的整合所发布的公告文章（[原文地址](https://www.hashicorp.com/blog/consul-plus-kubernetes)）。Consul通过支持Service Mesh，并提供对Kubernetes的无缝支持，与目前最受社区热捧的产品进行绑定，并通过功能预告的形式，来达到对产品宣传效果的最大化。',
              link: '/en-us/blog/consul-k8s.html',
          },
           {
               img: 'https://cdn.yuque.com/lark/0/2018/png/15914/1530083408486-b4698533-8e69-4e0a-9f3a-fdb1cdfbd290.png',
               title: '比特萌公司云计算合作服务商',
               content: '本文详细回顾了阿里巴巴的服务注册中心ConfigServer产品从2008年建设元年至今经历的关键架构演进。通过这个文章你会对基于AP模式的注册中心在技术发展过程中将会碰到的问题有所感知。',
               dateStr: 'March 06，2018',
               link: '/zh-cn/blog/alibaba-configserver.html',
           },
           {
               img: '/img/kunyu.JPG',
               title: 'Nacos - 阿里巴巴注册中心和配置中心开源计划',
               content: '阿里巴巴计划开启一个名叫Nacos的新开源项目,坤宇介绍了这个开源项目的初衷，他表示 “将通过Nacos项目将阿里巴巴在建设共享服务体系中使用的服务发现、配置及服务管理平台贡献给开源社区"。',
               dateStr: 'March 06，2018',
               link: '/zh-cn/blog/Nacos-is-Coming.html',
           },
          {
              img: 'https://cdn.yuque.com/lark/0/2018/png/7601/1525185700084-16f2c073-0c2b-49c0-b85b-ce2ca1163326.png',
              title: '微服务架构中基于DNS的服务注册与发现',
              content: '当前，微服务架构已经成为企业尤其是互联网企业技术选型的一个重要参考。微服务架构中涉及到很多模块，本文将重点介绍微服务架构的服务注册与发现以及如何基于DNS做服务发现。',
              dateStr: 'March 06，2018',
              link: '/zh-cn/blog/DNS-SD.html',
          },
      ]
    },
      //contacts: {
      //    title: '联系我们',
      //    desc: '有问题需要反馈？请通过一下方式联系我们。',
      //    list: [
      //        {
      //            img: '/img/mailinglist.png',
      //            imgHover: '/img/mailinglist_hover.png',
      //            title: '企业总机：0755-33940020',
      //            link: 'mailto:nacos_dev@linux.alibaba.com'
      //        },
      //        {
      //            img: '/img/mailinglist.png',
      //            imgHover: '/img/mailinglist_hover.png',
      //            title: '电子信箱：service@bitmoe.com',
      //            link: 'https://gitter.im/alibaba/nacos',
      //        },
      //        {
      //            img: '/img/segmentfault.png',
      //            imgHover: '/img/segmentfault_hover.png',
      //            title: 'Segment Fault',
      //            link: 'https://segmentfault.com/t/nacos'
      //        },
      //        {
      //            img: '/img/weibo.png',
      //            imgHover: '/img/weibo_hover.png',
      //            title: '@Nacos',
      //            link: 'https://weibo.com/u/6574374908',
      //        },
      //    ],
      //},
      contributorGuide: {
          title: '联系我们',
          desc: '有问题需要反馈？您可以通过以下方式联系我们。',
          list: [
              {
                  img: '/img/mailinglist.png',
                  title: '企业总机',
                  content: <span>拨打 <a href="telto:0755-33940020">0755-33940020 </a> 客服电话</span>,
              },
              {
                  img: '/img/mailinglist.png',
                  title: '电子信箱',
                  content: <span>向 <a href="mailto:support@bitmoe.com">support@bitmoe.com </a>发邮件</span>,
              },
              {
                  img: '/img/documents.png',
                  title: '联系地址',
                  content: <span>南山电子商务创新服务基地<a href="http://nacos.io/zh-cn/docs/what-is-nacos.html"> G栋A603</a> </span>,
              },
              {
                  img: '/img/pullrequest.png',
                  title: '更多方式',
                  content: <span><a href="1 "> 客服QQ </a> <a href="2 "> 客服旺旺 </a> <a href="3 "> 更多。。。 </a></span>,
              },
          ],
      },
    ecos: {
      title: '公司纪事',
      list: [
        {
          title: '比特萌信息2017年度纳税总额较上年增长20倍计划完成',
          content: <span>Dubbo 及 Nacos是阿里巴巴大规模微服务生产实践中的经典组合，对比传统的如ZooKeeper等注册中心与配置中心解决方案，在使用云原生及Service Mesh范式构建微服务应用平台时，通过在Dubbo中使用Nacos，可以完全释放Dubbo在大规模微服务治理、流量管理、服务集成及共享上的所有威力。</span>,
          tags: [
            {
              text: '日期',
              //link: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/',
              bgColor: '#7A63FC',
            },
            {
              text: '2016年04月11日',
              link: '/',
              bgColor: '#00D0D9',
            },
          ]
        },
        {
          title: '比特萌信息公司与政府部门相关业务对接工作全部完成',
          content: <span>Dubbo 及 Nacos是阿里巴巴大规模微服务生产实践中的经典组合，对比传统的如ZooKeeper等注册中心与配置中心解决方案，在使用云原生及Service Mesh范式构建微服务应用平台时，通过在Dubbo中使用Nacos，可以完全释放Dubbo在大规模微服务治理、流量管理、服务集成及共享上的所有威力。</span>,
          tags: [
            {
              text: '日期',
              //link: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/',
              bgColor: '#7A63FC',
            },
            {
              text: '2016年04月11日',
              link: '/',
              bgColor: '#00D0D9',
            },
          ]
        },
        {
          title: '比特萌信息公司正式注册成立',
          content: <span>Nacos 支持Kubernetes 以及 CNCF所需要的服务发现及动态配置管理的需求，Nacos可以完全无缝的替代Kubernetes的原生的DNS-based Service Discovery 解决方案，Nacos 提供了更多的服务治理侧的特性，这包括服务的域名管理，服务健康及生命周期管理，流量管理及智能路由策略管理等，Nacos也增强了对ConfigMap的管理，这包括版本配置、灰度发布等。</span>,
          tags: [
            {
              text: '日期',
              //link: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/',
              bgColor: '#7A63FC',
            },
            {
              text: '2016年01月28日',
              link: '/',
              bgColor: '#00D0D9',
            },
          ]
        },
        {
          title: '比特萌联合创始人团队完成组建',
          content: <span>Nacos 完全兼容和无缝支持 Spring Cloud的相关API及主要相关功能，你可以将Nacos作为SpringCloud Config Server的配置服务或者Eureka/Consul/ZooKeeper等的服务发现产品的更好替代者，Nacos 在配置管理和服务管理上带来了很多面向生产及微服务治理所需要的特性增强。</span>,
          tags: [
            {
              text: '日期',
              //link: 'http://projects.spring.io/spring-cloud/',
              bgColor: '#7A63FC',
            },
            {
              text: '2015年11月23日',
              link: '',
              bgColor: '#00D0D9',
            },
          ],
        },
      ],
    },
  },
};
