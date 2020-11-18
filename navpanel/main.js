document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.container .btn-container .main').addEventListener('click', function() {
        document.location.href = '/site/main/';
    });

    document.querySelector('.container .btn-container .commands').addEventListener('click', function() {
        document.location.href = '/site/commands/';
    });

    document.querySelector('.container .btn-container .developers').addEventListener('click', function() {
        document.location.href = '/site/developers/';
    });

    document.querySelector('.container .btn-container .donate').addEventListener('click', function() {
        document.location.href = '/site/donate/';
    });
});