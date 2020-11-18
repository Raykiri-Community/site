document.addEventListener('DOMContentLoaded', function() {
    let hostname = document.location.hostname;
    let protocol = document.location.protocol;
    if (hostname == 'localhost') {
        return;
    }
    else if (protocol == 'http:') {
        document.location.href = `https://${document.location.host}${document.location.pathname}`;
    }
});