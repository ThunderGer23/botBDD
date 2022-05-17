'use strict'

const {Telegraf} = require('telegraf');

const bot = new Telegraf('5384395652:AAF1TtpcwYMp1V9uMPShNkx9HOQKU414DfE');

bot.start((ctx) => {
    ctx.reply('Welcome');
});

bot.command('hola',(ctx) => {
  ctx.replyWithDocument({
      url: 'https://gifimage.net/wp-content/uploads/2017/06/just-do-it-gif-11.gif',
      filename: 'shia.gif'
    });
});

bot.command('Programming', (ctx) => {
  ctx.reply('I am dev');
});

bot.command('Shmebulock',(ctx)=>{
  ctx.replyWithDocument({
      url: 'https://i.gifer.com/3v9z.gif',
      filename: 'nomo.gif'
  });
});

bot.launch();
