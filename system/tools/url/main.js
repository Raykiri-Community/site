'use strict';
let url = new purlURL();
let tool = url.params.get('tool');

function webhookSendMessageInfo() {
    let whUrl = url.params.get('wh.url');
    let lang = url.params.get('lang');
    let wh = new WH(whUrl);
    if (!lang) {
        url.params.set('lang', 'ru');
    } else if (lang == 'ru') {
        wh.setBody({
            username: 'Site info',
            avatar_url: 'https://cdn.discordapp.com/avatars/716732523794792488/8ca13b8f40cfd04d3ad37cd8dfee8ab3.png',
            content: 'Информация с `site.url`',
            embeds: [
                {
                    author: {
                        name: 'site.url'
                    },
                    color: '255',
                    title: 'Информация о сайте',
                    description: 'Информация об оффициальном сайте Raykiri',
                    fields: [
                        {
                            name: 'Site\'s version:',
                            value: '`0.0.5`',
                            inline: 'false'
                        },
                        {
                            name: '<:verified:710970919736311942>Разработчики:',
                            value: 'Debug_pro#5355 --- разработчик сайта\nАлый принц Масеро Кун#6666:gem: --- разработчик бота',
                            inline: 'false'
                        },
                        {
                            name: 'Дата создание:',
                            value: '`31.10.2020`',
                            inline: 'false'
                        }
                    ],
                    footer: {
                        text: 'Tool: webhook.send.message.info'
                    }
                },
                {
                    author: {
                        name: 'site.url'
                    },
                    title: 'Информация о Raykiri',
                    color: '711877',
                    description: ':robot:**Имя:** Raykiri:gem:#4028\n:desktop:**Создатель:** Алый принц Масеро кун#6666:gem:\n:atm:**Версия:** `1.0`\n:tongue:**Язык:** `Русский`\n:id:**ID бота:** `716732523794792488`\n:gear:**Кол-во команд:** `130`\n:dvd:**Префикс:** `/`\n:date:**Дата создания:** `2020-05-31`',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/712299145829941249/761898230224781332/PicsArt_09-29-12.24.32.jpg'
                    }
                }
            ]
        });
        wh.send();
    } else if (lang == 'en') {
        wh.setBody({
            username: 'Site info',
            avatar_url: 'https://cdn.discordapp.com/avatars/716732523794792488/8ca13b8f40cfd04d3ad37cd8dfee8ab3.png',
            content: 'Information from `site.url`',
            embeds: [
                {
                    author: {
                        name: 'site.url'
                    },
                    color: '255',
                    title: 'Site info',
                    description: 'A site info from official Raykiri\'s site',
                    fields: [
                        {
                            name: 'Site\'s version:',
                            value: '`0.0.5`',
                            inline: 'false'
                        },
                        {
                            name: '<:verified:710970919736311942>Developers:',
                            value: 'Debug_pro#5355 --- web-site developer\nАлый принц Масеро Кун#6666 --- bot developer',
                            inline: 'false'
                        },
                        {
                            name: 'Date of creating:',
                            value: '`31.10.2020`',
                            inline: 'false'
                        }
                    ],
                    footer: {
                        text: 'Tool: webhook.send.message.info'
                    }
                },
                {
                    author: {
                        name: 'site.url'
                    },
                    title: 'Information about Raykiri',
                    color: '711877',
                    description: ':robot:**Name:** Raykiri:gem:#4028\n:desktop:**Creator:** Алый принц Масеро кун#6666:gem:\n:atm:**Version:** `1.0`\n:tongue:**Language:** `Русский`\n:id:**Bot\'s id:** `716732523794792488`\n:gear:**Commands count:** `130`\n:dvd:**Prefix:** `/`\n:date:**Date of create:** `2020-05-31`',
                    image: {
                        url: 'https://cdn.discordapp.com/attachments/712299145829941249/761898230224781332/PicsArt_09-29-12.24.32.jpg'
                    }
                }
            ]
        });
        wh.send();
    } else {
        url.params.set('lang', 'ru');
    };
};

document.addEventListener('DOMContentLoaded', function() {
    if (tool) {
        if (tool == 'webhook.send.message.info') {
            webhookSendMessageInfo();
        };
    };
});