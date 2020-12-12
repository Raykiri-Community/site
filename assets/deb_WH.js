class WH {
    constructor(url) {
        this.url = url;
    };
    setBody(a) {
        let body = JSON.stringify(a);
        this.body = body;
    };
    send() {
        let url = this.url;
        let body = this.body;
        let method = 'POST';
        let contentType = 'application/json';
        fetch(url, {
            method: method,
            body: body,
            headers: {
                'Content-Type': contentType
            }
        });
    };
};