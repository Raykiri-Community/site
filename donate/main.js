document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.qiwi', '.qiwi img').addEventListener('click', function() {
        document.location.href = '/site/---/?template=1&p=qiwi';
    });

    document.querySelector('.patreon', '.patreon img').addEventListener('click', function() {
        document.location.href = '/site/---/?template=1&p=patreon';
    });
});