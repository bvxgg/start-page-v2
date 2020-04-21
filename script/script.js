const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "twitter",
            [
                ["home", "https://twitter.com/home"],
                ["link", "https://twitter.com/messages"]
            ]
        ],
        [
            "youtube",
            [
                ["home", "https://www.youtube.com/?gl=FR&hl=fr"],
                ["followed", "https://www.youtube.com/feed/subscriptions"],
				["channel","https://www.youtube.com/channel/UClhRJzAB11xD-T6j5jWGa6A"]
            ]
        ],
        [
            "soundcloud",
            [
                ["stream", "https://soundcloud.com/stream"],
                ["likes", "https://soundcloud.com/you/likes"],
                ["profile", "https://soundcloud.com/bvxxx"]
            ]
        ],
        [
            "gmail",
            [
                ["inbox", "https://mail.google.com/mail/u/1/#inbox"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
