'use strict';
document.addEventListener('DOMContentLoaded', function() {
    class langManager {
        constructor(langs, trsList) {
            let lgs = langs;
            let tsl = trsList;
            let url = new URL(document.location.href);
            let lang;

            lang = url.searchParams.get('lang');

            if (!lang) {
                url.searchParams.set('lang', lgs[0]);
                document.location.href = url.href;
            } else if (lgs.includes(lang)) {
                cont();
            } else if (!lgs.includes(lang)) {
                url.searchParams.set('lang', lgs[0]);
                document.location.href = url.href;
            };

            function cont() {
                for (let item in tsl) {
                    let elem = document.querySelectorAll(tsl[item].id);
                    elem = Array.of(elem);
                    elem.forEach(function(i) {
                        i[0].innerHTML = tsl[item].translations[lang];
                    });
                };
            };
        };
    };



























    let translationsList = {};
    translationsList['support-server'] = {
        'id': '.support-server',
        'translations': {
            'ru': 'Сервер поддержки',
            'en': 'Support server',
            'uk': 'Сервер підтримки'
        }
    };

    translationsList.add = {
        'id': '.add',
        'translations': {
            'ru': 'Добавить бота',
            'en': 'Add bot',
            'uk': 'Додати бота'
        }
    };

    translationsList.description = {
        'id': '.raykiri-description > p',
        'translations': {
            'ru': `
                <span class="a">● Если ты здесь, значит тебя заинтересовал мой бот... Ну чтож, вот немного о нём.</span>
                <br><span class="b">P.s Не забудь проголосовать и оставить добрый комментарий</span>

                <br><br>Особенности:

                <br><br>Более 160 серверов и 98-и тысяч человек используют бота!

                <br><br>Бот 24/7 Онлайн без перебоев!

                <br><br>Модерация (бан, Кик, варн, снять варн, лист варнов, заблокировать канал и т.д)

                <br><br>Реакции! (обнять, поцеловать, дать вкусняшку и т.д)

                <br><br>Мемы (К примеру написать от лица Clyde, лого в стиле порнхаб и похожие команды и не только)

                <br><br>Можно отключать все команды в определённых каналах!

                <br><br>Есть система тикетов, обращение на сервер саппорта через команду (мы сами к вам прийдем),  писать от лица бота как в ЛС так и в канал!

                <br><br>В скоре появится экономика, музыка, система лвла, репутация, клубы и  многое другое!


                <br><br>Много других и очень полезных команд! (к примеру создать/удалить канал, выдать роль, получить любую эмодзи и добавить ее на сервер и т.д)


                <br><br><span class="a">● Скорее пригласи бота к себе на сервер!</span>

                <br><br>Если вам нужна помощь/нашли баг/есть ошибки, то просьба воспользоваться командой /support причина
            `,
            'en': `
                <span class="a">If you are here, then you are interested in my bot ... Well, here's a little about it.</span>
                <br><span class="b">P.sDon't forget to vote and leave a kind comment</span>

                <br><br>Features:

                <br><br>More than 160 servers and 98 thousand people use the bot!

                <br><br>Bot 24/7 Online without interruption!

                <br><br>Moderation (ban, kick, warn, remove warn, list of warns, block channel, etc.)

                <br><br>Reactions! (hug, kiss, give a treat, etc.)

                <br><br>Memes (For example, write on behalf of Clyde, pornhub-style logos and similar commands and not only)

                <br><br>You can turn off all commands in certain channels!

                <br><br>There is a ticket system, contacting the support server through the command (we will come to you ourselves), write on behalf of the bot both in the LAN and in the channel!

                <br><br>Economy, music, level system, reputation, clubs and much more will appear soon!


                <br><br>Many other and very useful commands! (for example, create / delete a channel, issue a role, get any emoji and add it to the server, etc.)


                <br><br><span class="a">● Rather, invite the bot to your server!</span>

                <br><br>If you need help / found a bug / have errors, please use the command /support reason
            `,
            'uk': `
                <span class = "a">● Якщо ти тут, значить тебе зацікавив мій бот ... Ну що ж, ось трохи про нього. </ Span>
                <br><span class="b">P.s Не забудь проголосувати і залишити добрий коментар</span>

                <br><br>Особливості:

                <br><br>Більше 160 серверів і 98-і тисяч людей використовують бота!

                <br><br>Бот 24/7 Онлайн без перебоїв!

                <br><br>Модерація (бан, Кік, варн, зняти варн, лист варн, заблокувати канал і т.д)

                <br><br>Реакції! (Обійняти, поцілувати, дати вкусняшку і т.д)

                <br><br>Меми (Наприклад написати від імені Clyde, лого в стилі порнхаб і схожі команди і не тільки)

                <br><br>Можна відключати всі команди в певних каналах!

                <br><br>Є система тікетів, звернення на сервер саппорта через команду (ми самі до вас прийдемо), писати від імені бота як в ЛС так і в канал!

                <br><br>У скоре з'явиться економіка, музика, система лвла, репутація, клуби та багато іншого!


                <br><br>Багато інших і дуже корисних команд! (Наприклад створити / видалити канал, видати роль, отримати будь-яку емодзі і додати її на сервер і т.д)


                <br><br><span class = "a">● Швидше запроси бота до себе на сервер! </span>

                <br><br> Якщо вам потрібна допомога / знайшли баг / є помилки, то прохання скористатися командою /support причина
            `
        }
    };

    translationsList.navpanel = {
        'id': '.navpanelBtn',
        'translations': {
            'ru': 'Навигационная панель',
            'en': 'Navpanel',
            'uk': 'Навігаціонная панель'
        }
    };


















    new langManager(['ru', 'en', 'uk'], translationsList);
});