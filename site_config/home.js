export default {
  'en-us': {
    brand: {
      briefIntroduction: 'an easy-to-use dynamic service discovery, configuration and service management platform for building cloud native applications',
      buttons: [
        {
          text: 'View on Github',
          link: 'https://github.com/alibaba/nacos',
          type: 'primary',
        },
        {
          text: 'Manual',
          link: '/en-us/docs/what-is-nacos.html',
          type: 'normal',
        },
      ],
      version: {
        text: 'V0.2.1-RC1',
        link: 'https://github.com/alibaba/nacos/releases',
      },
      note: {
        text: 'Release Note',
        link: 'https://github.com/alibaba/nacos/releases',
      },
      releaseDate: 'Released on Sept 21, 2018',
    },
    functions: {
      title: 'Features',
      list: [
        {
          img: '/img/dynamic_configuration.png',
          title: 'Dynamic Configuration Service',
          content: 'Dynamic Configuration Service allows you to manage configurations in all environments in a centralized, externalized, and dynamic approach. Dynamic configuration saves you from redeploying your applications and services when configuration is updated. You can implement stateless services and achieve on-demand scaling effortlessly.',
        },
        {
          img: '/img/service_discovery.png',
          title: 'Service Discovery and Management',
          content: 'Dynamic Service Discovery is key to service-centric (for example microservice or cloud-native) architectures. Nacos supports both DNS-based and RPC-based (Dubbo, gRPC) service discovery, and provides real-time service health checks to prevent routing requests from being sent to unhealthy hosts or service instances. With Nacos, you can also implement circuit breakers for your services with ease.',
        },
        {
          img: '/img/dynamic_DNS.png',
          title: 'Dynamic DNS Service',
          content: 'By supporting weighted routing, Dynamic DNS Service helps you implement mid-tier load balancing, more flexible routing, traffic control and DNS resolution services in the production environment within your data center. Dynamic DNS Service also makes it easier for you to implement DNS-based service discovery, which minimizes the risk of coupling to vendor-specific service discovery APIs.',
        },
      ],
    },
    features: {
      title: 'Why Nacos',
      list: [
        {
          img: '/img/feature_easy_to_use.png',
          title: 'Easy to use',
          content: [
            'One-stop solution for dynamic service discovery, configuration management and dynamic DNS service',
            '20+ out-of-the-box features for service-centric architectures',
            'Light-weight production-ready console',
          ],
        },
        {
          img: '/img/feature_adaptable.png',
          title: 'More adaptive to cloud architectures',
          content: [
            'Seamlessly support kubernetes and spring cloud',
            'Easier to deploy and run on popular public cloud (for example AliCloud and AWS)',
            'Support multi-tenants and multi-environments',
          ],
        },
        {
          img: '/img/feature_production_grade.png',
          title: 'Production grade',
          content: [
            'Originated from time-tested internal products from Alibaba Group',
            'Supports large-scale scenarios with millions of services',
            'Open-source product with enterprise-level SLA',
          ],
        },
        {
          img: '/img/feature_rich.png',
          title: 'Rich internet application scenarios affinity',
          content: [
            'Supports rate throttling, big promotion plans, and multi-region active-active architectures',
            'Supports a variety of relevant internet-based use cases directly or with slight extension',
            'Traffic scheduling & service governance',
          ],
        },
      ],
    },
  },
  'zh-cn': {
    brand: {
      briefIntroduction: '比特萌 · 信息，云计算服务提供商',
      buttons: [
        {
          text: '关于我们',
          link: '/zh-cn/community/',
          type: 'primary',
        },
        {
          text: '服务项目',
          link: '/zh-cn/docs/products-and-service.html',
          type: 'normal',
        },
      ],
      version: {
        text: '精工天下',
      },
      note: {
        text: '信达未来',
      },
      releaseDate: '始于公元2016年01月28日',
    },
    functions: {
      title: '企业文化',
      list: [
        {
          img: '/img/dynamic_DNS.png',
          title: '信·达未来',
          content: '“信·达未来”为我司企业经营理念，“信”，在中文中既能表达“信用”，也表达“信息”，取信息/信用通达未来之意；表达我司对信用时代信息技术未来的展望。本理念凸显我司对外客户利益至上，对内保障员工权益的理念。',
        },
        /*{
          img: '/img/dynamic_configuration.png',
          title: '对外关系，客户至上，信息通达未来',
          content: '动态服务发现对以服务为中心的（例如微服务和云原生）应用架构方式非常关键。Nacos支持DNS-Based和RPC-Based（Dubbo、gRPC）模式的服务发现。Nacos也提供实时健康检查，以防止将请求发往不健康的主机或服务实例。借助Nacos，您可以更容易地为您的服务实现断路器。',
        },
        {
          img: '/img/service_discovery.png',
          title: '对内关系，员工为王，信用通达未来',
          content: '通过支持权重路由，动态DNS服务能让您轻松实现中间层负载均衡、更灵活的路由策略、流量控制以及简单数据中心内网的简单DNS解析服务。动态DNS服务还能让您更容易地实现以DNS协议为基础的服务发现，以消除耦合到厂商私有服务发现API上的风险。',
        },*/
      ],
    },
    features: {
      title: '服务项目',
      list: [
        {
          img: '/img/feature_easy_to_use.png',
          title: '计算机软硬件开发、企业OEM定制服务',
          content: [
            'Raspberry Pi、Orange Pi、x86等硬件设计定制',
            '嵌入式操作系统开发、远程管理软件、企业即时通讯、企业电商产品开发',
            '自产软硬件产品对外提供OEM定制服务等等',
          ],
        },
        {
          img: '/img/feature_adaptable.png',
          title: '云计算服务应用及维护',
          content: [
            '传统物理计算机、阿里云、腾讯云等云主机操作系统及应用系统维护',
            'SSL、CDN、DNS、负载均衡、区块链、视频直播等云服务项目咨询维护',
            '企事业单位私有云服务方案的构建咨询及部署实施等',
          ],
        },
        {
          img: '/img/feature_production_grade.png',
          title: '云计算服务开发与实施',
          content: [
            '企业官网、项目官网、电子商务、现行服务架构微调与修正',
            '计算机软件开发、公众号、微信小程序、支付宝小程序',
            '为您推荐合适的云服务方案，如网络、主机、开发环境等。',
          ],
        },
        {
          img: '/img/feature_rich.png',
          title: '我们还会啥？您的需要，我们的使命！！！',
          content: [
            '您的需求，我们的使命！！！【重要的要来三次，o(∩_∩)o 】',
            '您的需求，我们的使命！！！',
            '您的需求，我们的使命！！！',
          ],
        },
      ],
    },
  },
};
