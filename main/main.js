'use strict';
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#container .raykiri-profile-card .support-server-ru', '#container .raykiri-profile-card .support-server-en').addEventListener('click', function() {
        document.location.href = 'https://discord.gg/EP7t3auvPm';
    });

    document.querySelector('#container .raykiri-profile-card .add-ru', '#container .raykiri-profile-card .add-en').addEventListener('click', function() {
        document.location.href = 'https://discord.com/oauth2/authorize?client_id=716732523794792488&scope=bot&permissions=8';
    });

    document.querySelector('#container .site-lang .content .ru').addEventListener('click', function() {
        $$.p().set('lang', 'ru');
    });

    document.querySelector('#container .site-lang .content .en').addEventListener('click', function() {
        $$.p().set('lang', 'en');
    });

    document.querySelector('#container .site-lang-for-mobile .ru').addEventListener('click', function() {
        $$.p().set('lang', 'ru');
    });

    document.querySelector('#container .site-lang-for-mobile .en').addEventListener('click', function() {
        $$.p().set('lang', 'en');
    });

    document.querySelector('#container .navpanel .navpanelBtn').addEventListener('click', function() {
        document.location.href = '/site/navpanel/';
    });
});

//<Язык страницы>
//Объявление функций смены языков
function langRu() {
    let btn_supp_ru = document.querySelector('#container .raykiri-profile-card .support-server-ru');
    btn_supp_ru.style.display = 'inherit';

    let btn_supp_en = document.querySelector('#container .raykiri-profile-card .support-server-en');
    btn_supp_en.style.display = 'none';

    let btn_add_ru = document.querySelector('#container .raykiri-profile-card .add-ru');
    btn_add_ru.style.display = 'inherit';

    let btn_add_en = document.querySelector('#container .raykiri-profile-card .add-en');
    btn_add_en.style.display = 'none';

    let desc_ru = document.querySelector('#container .raykiri-description .ru');
    desc_ru.style.display = 'inherit';

    let desc_en = document.querySelector('#container .raykiri-description .en');
    desc_en.style.display = 'none';

    let title = document.querySelector('head title');
    title.innerHTML = 'Raykiri - discord бот!';

    let l = document.querySelector('#container .site-lang .content .ru');
    l.style.opacity = '0.5';

    let le = document.querySelector('#container .site-lang .content .en');
    le.style.opacity = '1';

    let ll = document.querySelector('#container .site-lang-for-mobile .ru');
    ll.style.opacity = '0.5';

    let lle = document.querySelector('#container .site-lang-for-mobile .en');
    lle.style.opacity = '1';
    
    document.querySelector('#container .navpanel .navpanelBtn').innerHTML = 'Панель навигации';
};

function langEn() {
    let btn_supp_ru = document.querySelector('#container .raykiri-profile-card .support-server-ru');
    btn_supp_ru.style.display = 'none';

    let btn_supp_en = document.querySelector('#container .raykiri-profile-card .support-server-en');
    btn_supp_en.style.display = 'inherit';

    let btn_add_ru = document.querySelector('#container .raykiri-profile-card .add-ru');
    btn_add_ru.style.display = 'none';

    let btn_add_en = document.querySelector('#container .raykiri-profile-card .add-en');
    btn_add_en.style.display = 'inherit';

    let desc_ru = document.querySelector('#container .raykiri-description .ru');
    desc_ru.style.display = 'none';

    let desc_en = document.querySelector('#container .raykiri-description .en');
    desc_en.style.display = 'inherit';

    let title = document.querySelector('head title');
    title.innerHTML = 'Raykiri - the discord bot!';

    let l = document.querySelector('#container .site-lang .content .ru');
    l.style.opacity = '1';

    let le = document.querySelector('#container .site-lang .content .en');
    le.style.opacity = '0.5';

    let ll = document.querySelector('#container .site-lang-for-mobile .en');
    ll.style.opacity = '0.5';

    let lle = document.querySelector('#container .site-lang-for-mobile .ru');
    lle.style.opacity = '1';

    document.querySelector('#container .navpanel .navpanelBtn').innerHTML = 'Navigation panel';
};

//Проверка языка и его смена
document.addEventListener('DOMContentLoaded', function() {
    let lang = $$.p().get('lang');
    if (!lang) {
        $$.p().set('lang', 'ru');
    } else if (lang == 'ru') {
        langRu();
    } else if (lang == 'en') {
        langEn();
    } else {
        $$.p().set('lang', 'ru');
    }
});
//</Язык страницы>

//<Кнопки смены языка>
document.addEventListener('DOMContentLoaded', function() {
    let lang_btn = document.querySelector('#container .site-lang .open');
    let lang_c = document.querySelector('#container .site-lang .content');
    lang_btn.addEventListener('click', function() {
        $(lang_c).animate({
            'marginLeft': '3px'
        }, 
        {
            'duration': 1000,
            'complete': function() {
                lang_btn_.style.top = '0px';
                lang_btn_.style.display = 'inherit';
                lang_btn.style.display = 'none';
            }
        });
    });
    let lang_btn_ = document.querySelector('#container .site-lang .close'); 
    lang_btn_.addEventListener('click', function() {
        $(lang_c).animate({
            'marginLeft': '50px'
        },
        {
            'duration': 1000,
            'complete': function() {
                lang_btn.style.display = 'inherit';
                lang_btn_.style.top = '-54px';
                lang_btn_.style.display = 'none';
            }
        });
    });
});
//</Кнопки смены языка>

//<Сочетание клавиш для смены языка>
document.addEventListener('keydown', function(ee) {
    if (ee.code == 'KeyL') {
        document.addEventListener('keyup', function(e) {
            if (e.code == 'KeyR') {
                $$.p().set('lang', 'ru');
            } else if (e.code == 'KeyE') {
                $$.p().set('lang', 'en');
            };
        });
    }
});