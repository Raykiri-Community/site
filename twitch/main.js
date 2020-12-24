'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.append(root);

    let html = `
        <div id="twitch-embed">
        </div>
        <div id="twitch-embed-mobile">
        </div>
    `;
    root.innerHTML = html;

    let styleTag = document.createElement('style');
    let style = `
        body {
            margin: 0px;
        }

        #root {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            margin: 0px;
        }

        #root > #twitch-embed {
            margin-top: 5%;
            margin-left: auto;
            margin-right: auto;
            width: 800px;
            height: 500px;
        }

        #root > #twitch-embed-mobile {
            width: 350px;
            height: 250px;
            margin-top: 5%;
            margin-left: auto;
            margin-right: auto;
            display: none;
        }

        @media (max-width: 400px) {
            #root > #twitch-embed {
                display: none;
            }

            #root > #twitch-embed-mobile {
                display: block;
            }
        }
    `;
    document.head.append(styleTag);
    styleTag.innerHTML = style;

    let twitch = new Twitch.Player('twitch-embed', {
        width: '800px',
        height: '500px',
        channel: 'masero01'
    });

    let twitchMobile = new Twitch.Player('twitch-embed-mobile', {
        width: '350px',
        height: '250px',
        channel: 'masero01'
    });
});