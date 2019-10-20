import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'OpenQueue',
      briefIntroduction: '一个基于云的引流排队系统，让你的网站系统从容应对百万级高并发访问，提升用户体验。',
      buttons: [
        {
          text: '一分钟快速体验',
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
      title: '产品介绍',
      desc: 'OpenQueue提供第三方云排队服务，采用简易的，非侵入的Web服务方式，接入现有网站系统。通过控制并发访问用户数，让你的网站系统从容应对百万级高并发访问。同时为用户提供排队等候页面，让用户实时了解排队信息，提升用户体验。',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_runtime.png',
          title: '高性能',
          content: '提供百万级队列接待能力，保证目标系统在高并发访问洪峰下的可用性',
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
        },
        {
          img: '/img/feature_maintenance.png',
          title: '低成本',
          content: '零维护成本，按流量计费，经济实惠',
        },
      ],
    },
    start: {
      title: '开发者指南',
      desc: '在简单几个步骤的引导下，开通服务并接入现有应用，即刻拥有应对高并发能力。',
      img: '/img/quick_start.png',
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
      briefIntroduction: 'A cloud-based queuing system which enables C1000K capability for any web applications.',
      buttons: [
        {
          text: 'Give A Try',
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
      title: 'OpenQueue introduction',
      desc: 'A cloud-based queuing system which enables C1000K capability for any web applications.',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'feature1',
          content: 'feature description',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'feature2',
          content: 'feature description',
        },
        {
          img: '/img/feature_service.png',
          title: 'feature3',
          content: 'feature description',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'feature4',
          content: 'feature description',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'feature5',
          content: 'feature description',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'feature6',
          content: 'feature description',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'Enable your application C1000K capability within one minute!',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
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
