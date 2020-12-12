'use strict';
document.addEventListener('DOMContentLoaded', function() {
    class raykiriBlogContent extends HTMLElement {
        connectedCallback() {
            let html = this.innerHTML;
            const root = document.createElement('div');
            root.id = 'root';
            let content = document.createElement('div');
            content.classList.add('content');
            content.innerHTML = html;
            root.append(content);
            this.after(root);
            this.remove();

            let styleTag = document.createElement('style');
            let styles = `
                body {
                    background-image: url(https://cdn.discordapp.com/attachments/761842638579957781/773163957288566815/Wiki-background.png)
                }

                #root {
                    width: 800px;
                    background-color: white;
                    margin-top: 5%;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 15px;
                    font-family: system-ui;
                }

                #root .content {
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    text-align: center;
                }

                @media (max-width: 400px) {
                    #root {
                        width: 350px;
                    }
                }
            `;
            document.head.append(styleTag);
            styleTag.innerHTML = styles;
        };
    };
    customElements.define('raykiri-blog-content', raykiriBlogContent);
});