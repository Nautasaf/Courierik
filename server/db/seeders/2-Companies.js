"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [
      {
        name: 'ВкусВилл',
        path: '/vkusvill',
        description: 'Сеть магазинов полезных продуктов и сервис доставки для здорового питания.',
        logo_url: 'https://static.tildacdn.com/tild6531-6363-4037-b837-636531653130/_-1_.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Самокат',
        path: '/samokat',
        description: 'Сервис быстрой доставки товаров на велосипедах за 15–30 минут.',
        logo_url: 'https://static.tildacdn.com/tild3630-3639-4338-b566-353565396539/noroot.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Яндекс Еда',
        path: '/yandex-eda',
        description: 'Сервис доставки еды из ресторанов и кафе.',
        logo_url: 'https://u.9111s.ru/uploads/202312/05/4cc1f07fe4bbc7dd149b89c3835c547d.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Delivery Club',
        path: '/delivery-club',
        description: 'Платформа для заказа и доставки еды из ресторанов и магазинов.',
        logo_url: 'https://avatars.mds.yandex.net/i?id=69d8c8314d6c6082750ad19b1eac2a443a492fc9-10231550-images-thumbs&n=13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Лента Онлайн',
        path: '/lenta-online',
        description: 'Интернет-магазин продуктов и товаров для дома от сети гипермаркетов "Лента".',
        logo_url: 'https://avatars.mds.yandex.net/i?id=8a8b4260bc19458cce0d83f5f1d2268f_l-7716203-images-thumbs&n=13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ашан',
        path: '/auchan',
        description: 'Крупная сеть гипермаркетов с широким ассортиментом товаров.',
        logo_url: 'https://legion-yug.ru/wp-content/uploads/elementor/thumbs/logo-auchan-p1cx9y1dqb4638bbc0yp9i9ll1sqfcssr9mrvabisc.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сбер Маркет',
        path: '/sbermarket',
        description: 'Онлайн-сервис доставки продуктов и товаров из магазинов-партнеров.',
        logo_url: 'https://ekogradmoscow.ru/images/000/0202/1-2048x1290-1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  },
};

