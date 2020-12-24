'use strict';
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#container > .raykiri-profile-card > .support-server').addEventListener('click', function() {
        document.location.href = 'https://discord.gg/EP7t3auvPm';
    });

    document.querySelector('#container > .raykiri-profile-card > .add').addEventListener('click', function() {
        document.location.href = 'https://discord.com/oauth2/authorize?client_id=716732523794792488&scope=bot&permissions=8';
    });

    document.querySelector('#container > .site-lang > .content > .ru').addEventListener('click', function() {
        document.location.href = '?lang=ru';
    });

    document.querySelector('#container > .site-lang > .content > .en').addEventListener('click', function() {
        document.location.href = '?lang=en';
    });

    document.querySelector('#container > .site-lang-for-mobile > .ru').addEventListener('click', function() {
        document.location.href = '?lang=ru';
    });

    document.querySelector('#container > .site-lang-for-mobile > .en').addEventListener('click', function() {
        document.location.href = '?lang=en';
    });

    document.querySelector('#container > .navpanel > .navpanelBtn').addEventListener('click', function() {
        document.location.href = '/site/navpanel/';
    });
});

//<Кнопки смены языка>
document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('#container > .site-lang > #q');
    let btn_action = 'open';
    let content = document.querySelector('#container > .site-lang > .content');
    btn.addEventListener('click', function() {
        if (btn_action == 'open') {
            content.animate({
                'marginLeft': '3px'
            }, 
            {
                'duration': 1000
            }).addEventListener('finish', function() {
                content.style.marginLeft = '3px';
                btn_action = 'close';
            });
        } else if (btn_action == 'close') {
            content.animate({
                'marginLeft': '50px'
            }, 
            {
                'duration': 1000
            }).addEventListener('finish', function() {
                content.style.marginLeft = '50px';
                btn_action = 'open';
            });
        };
    });
});
//</Кнопки смены языка>