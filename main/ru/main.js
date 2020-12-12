'use strict';
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#container .raykiri-profile-card .support-server').addEventListener('click', function() {
        document.location.href = 'https://discord.gg/EP7t3auvPm';
    });

    document.querySelector('#container .raykiri-profile-card .add').addEventListener('click', function() {
        document.location.href = 'https://discord.com/oauth2/authorize?client_id=716732523794792488&scope=bot&permissions=8';
    });

    document.querySelector('#container .site-lang .content .ru').addEventListener('click', function() {
        document.location.href = '/site/main/ru/';
    });

    document.querySelector('#container .site-lang .content .en').addEventListener('click', function() {
        document.location.href = '/site/main/en/';
    });

    document.querySelector('#container .site-lang-for-mobile .ru').addEventListener('click', function() {
        document.location.href = '/site/main/ru/';
    });

    document.querySelector('#container .site-lang-for-mobile .en').addEventListener('click', function() {
        document.location.href = '/site/main/en/';
    });

    document.querySelector('#container .navpanel .navpanelBtn').addEventListener('click', function() {
        document.location.href = '/site/navpanel/';
    });
});

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