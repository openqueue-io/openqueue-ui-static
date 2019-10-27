import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'OpenQueue',
      briefIntroduction: '一个开源的基于队列的Web应用访问速率控制系统',
      buttons: [
        {
          text: '快速体验',
          link: '/zh-cn/docs/demo1.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: 'https://github.com/openqueue-io/openqueue',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '简介',
      desc: 'OpenQueue提供通用型Web应用访问速率控制能力。通过简易松耦合的Web服务接口现有应用集成，无需单独部署和维护。通过排队的方式限制同时访问应用的用户数，将访问压力控制在网站系统能够承受范围之内。同时为等待的用户提供排队等候页面，显示实时排队信息，提升用户使用体验。',
      img: '/img/opq_flow_zh_cn.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_runtime.png',
          title: '高性能',
          content: '通过横向扩展机器，提供大容量队列接待能力，保证目标系统在高并发访问洪峰下的可用性',
        },
        {
          img: '/img/feature_transpart.png',
          title: '即插即用',
          content: '配置简单，现有系统只需做少量代码更改即可接入服务，适用于任意web应用，以及REST(RPC)接口',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '良好的用户体验',
          content: '为用户展示排队等候页面，显示实时队列信息，极大提升用户体验',
        },
        {
          img: '/img/feature_service.png',
          title: '动态队列调整',
          content: '可通过REST API动态创建关闭队列，以及调整队列参数',
        },
        {
          img: '/img/feature_hogh.png',
          title: '安全无风险',
          content: '非侵入式接入方式，无需了解接入系统业务逻辑，不会接触用户数据',
        }
      ],
    },
    start: {
      title: '开发者指南',
      desc: '',
      img: '/img/quick_start_zh_cn.png',
      button: {
        text: '查看教程',
        link: '/zh-cn/docs/demo1.html',
      },
    },
    users: {
      title: '',
      desc: <span></span>,
      list: [
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'OpenQueue',
      briefIntroduction: 'An open source queue-based access rate control system for any web applications.',
      buttons: [
        {
          text: 'Quick Trial',
          link: '/en-us/docs/demo1.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/openqueue-io/openqueue',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'Introduction',
      desc: 'Openqueue provides web application access rate control service. It integrates with your web application through simple and loose coupling web service interface, and doesn\'t need to deploy and maintain by yourself. By limiting the users access the application at the same time, the access pressure is controlled within the range that the application can hold. It also provides a waiting page for displaying real-time queue information to improve user experience.',
      img: '/img/opq_flow_us.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_runtime.png',
          title: 'High Performance',
          content: 'Provide million level queue reception capacity to ensure the availability under the pressure of high concurrent access.',
        },
        {
          img: '/img/feature_transpart.png',
          title: 'Plug and Play',
          content: 'Simple configuration. Only a few code changes. Suitable for any web application and rest (RPC) interface.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Good User Experience',
          content: 'Display the queuing page and real-time queuing status, greatly improving the user experience.',
        },
        {
          img: '/img/feature_service.png',
          title: 'Dynamic Queue Modification',
          content: 'Create, shutdown and modify the queue dynamically through REST API.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'Safe and Risk Free',
          content: 'Non-intrusive access mode, no need to know the business logic, no contact with user data.',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'Follow few steps to enable your application C1000K capability within 1 minute.',
      img: '/img/quick_start_us.png',
      button: {
        text: 'Read Tutorial',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
      title: '',
      desc: <span></span>,
      list: [
      ],
    },
  },
};
