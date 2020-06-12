addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const init = {
        headers: {
            'content-type': type,
        },
    };
    let su = new URL(request.url);
    var path = su.pathname.split('/')

    if (path[1] == 'dog') {
        req = await dog(request, path);
    } else if (path[1] == 'cat') {
        req = await cat(request, path);
    } else if (path[1] == 'sum') {
        req = await sumf(request, path);
    } else if (path[1] == 'pig') {
        req = await fnd(request, path);
    } else if (path[1] == 'zig') {
        req = 'doge';
    } else {
        req = "cat";
    }
    response = new Response(req, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', "*")
    return response;
}
const type = 'application/json;charset=UTF-8';
const url2 = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/';
const url4 = 'https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/';
const url5 = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/';
const url6 = 'https://api.steampowered.com/ISteamUser/GetFriendList/v0001/'
const stkey = "YOUR STEAM WEB API KEY";
const stid = "76561198343712334";

async function dog(resdog1, resdog2) {
    let path = resdog2;
    let stid2 = (resdog2[2])
    let url3 = `?key=${stkey}&steamid=${stid2}&format=json&include_appinfo=true`;
    let suit = {
        headers: {
            'content-type': type,
        },
    };
    const sde = await fetch(url2 + url3, suit)
    return await sde.text();
}

async function cat(resdog1, resdog2) {
    let path = resdog2;
    let stid2 = (resdog2[2])
    let url3 = `?key=${stkey}&steamid=${stid2}&format=json&include_appinfo=true`;
    let suit = {
        headers: {
            'content-type': type,
        },
    };
    const sde = await fetch(url4 + url3, suit)
    return await sde.text();
}

async function sumf(resdog1, resdog2) {
    let stid2 = (resdog2[2])
    let url3 = `?key=${stkey}&steamids=${stid2}&format=json`;
    let suit = {
        method: 'GET',
        headers: {
            'content-type': type,
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/83.0.4103.61 Chrome/83.0.4103.61 Safari/537.36'
        },
    };
    const sde = await fetch(url5 + url3, suit)
    return await sde.text();
}
async function fnd(resdog1, resdog2) {
    let stid2 = (resdog2[2])
    let url3 = `?key=${stkey}&steamid=${stid2}&format=json`;
    let suit = {
        method: 'GET',
        headers: {
            'content-type': type
        },
    };
    const dddr = await fetch(url6 + url3, suit)
    return await dddr.text();
}