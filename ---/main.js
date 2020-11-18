function qiwi() {
    let root = document.createElement('div');
    document.body.append(root);

    let text = document.createElement('p');
    root.append(text);
    text.innerHTML = 'Пожалуйста, укажите ваш ник на discord сервере в комментарии к платежу!';
    text.style.fontSize = '15px';
    text.style.fontFamily = 'system-ui';
    text.style.color = 'red';
    text.style.fontWeight = '900';

    let btn = document.createElement('button');
    root.append(btn);
    btn.innerHTML = 'Ссылка';
    btn.style.width = '150px';
    btn.style.height = '35px';
    btn.style.borderRadius = '15px';
    btn.style.borderWidth = '3px';
    btn.style.borderStyle = 'solid';
    btn.style.borderColor = '#0Adcc5';
    btn.style.backgroundColor = 'transparent';
    btn.style.cursor = 'pointer';
    btn.addEventListener('mouseenter', function() {
        btn.style.backgroundColor = '#0Adcc5';
    });
    btn.addEventListener('mouseleave', function() {
        btn.style.backgroundColor = 'transparent';
    });
    btn.addEventListener('mousedown', function() {
        btn.style.backgroundColor = 'blue';
    });
    btn.addEventListener('mouseup', function() {
        btn.style.backgroundColor = '#0Adcc5';
    });
    btn.addEventListener('click', function() {
        document.location.href = 'https://qiwi.com/n/MASERO';
    });
};

function patreon() {
    let root = document.createElement('div');
    document.body.append(root);

    let text = document.createElement('p');
    root.append(text);
    text.innerHTML = 'Пожалуйста, привижите ваш discord аккаунт к Patreon!';
    text.style.fontSize = '15px';
    text.style.fontFamily = 'system-ui';
    text.style.color = 'red';
    text.style.fontWeight = '900';

    let btn = document.createElement('button');
    root.append(btn);
    btn.innerHTML = 'Ссылка';
    btn.style.width = '150px';
    btn.style.height = '35px';
    btn.style.borderRadius = '15px';
    btn.style.borderWidth = '3px';
    btn.style.borderStyle = 'solid';
    btn.style.borderColor = '#0Adcc5';
    btn.style.backgroundColor = 'transparent';
    btn.style.cursor = 'pointer';
    btn.addEventListener('mouseenter', function() {
        btn.style.backgroundColor = '#0Adcc5';
    });
    btn.addEventListener('mouseleave', function() {
        btn.style.backgroundColor = 'transparent';
    });
    btn.addEventListener('mousedown', function() {
        btn.style.backgroundColor = 'blue';
    });
    btn.addEventListener('mouseup', function() {
        btn.style.backgroundColor = '#0Adcc5';
    });
    btn.addEventListener('click', function() {
        document.location.href = 'https://www.patreon.com/raykiribot?fan_landing=true';
    });
};

function err() {
    let text = document.createElement('h1');
    document.body.append(text);
    text.innerHTML = 'ERROR';
    text.style.fontSize = '100px';
    text.style.color = 'red';
};

document.addEventListener('DOMContentLoaded', function() {
    let template = $$.p().get('template');
    let p = $$.p().get('p');
    if (template) {
        if (template == '1') {
            if (p) {
                if (p == 'qiwi') {
                    qiwi();
                } else if (p == 'patreon') {
                    patreon();
                } else {
                    err();
                };
            } else {
                err();
            };
        } else {
            err();
        };
    } else {
        err();
    };
});