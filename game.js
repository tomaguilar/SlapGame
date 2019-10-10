let player = {
    health: 100,
    name: "fighter",
    hit: 0,
    currentStatus: "well",
    status: {
        well: "https://image1.masterfile.com/getImage/NjMwLTAzNDgwMzYzZW4uMDAwMDAwMDA=AGycoM/630-03480363en_Masterfile.jpg",
        bloody: "https://imageproxy.themaven.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fmaven-user-photos%2Fbjpenn%2Fmma-news%2FX3HosD41PkGPxtoupWxbaQ%2FabGnjFuu50KMtUQIsCbK1w",
        dying: "https://ftks732kpvy18zwzc2s17egw-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/nate_diaz_punched-500x445.jpg",
        done: "https://i.imgflip.com/1pazu0.jpg",

    },
    items: []
};

let items = {
    fire: { name: 'Fire', modifier: 3, description: 'IT BURNS!' },
    lighting: { name: 'Lighting', modifier: 1, description: 'THUNDERSTRUCK!' },
    ice: { name: 'Ice', modifier: 2, description: 'CAUGHT A COLD!' }
}

function addMods() {
    let modDamage = 0
    for (let index = 0; index < player.items.length; index++) {
        let item = player.items[index];
        modDamage += item.modifier;
    }
    return modDamage
}

function update() {
    checkStatus();
    let healthElem = document.getElementById("health");
    let hitElem = document.getElementById("hit");
    let nameElem = document.getElementById("fighter-name");
    let itemsElem = document.getElementById("items")
    let imageElem = document.getElementById("fighter-img");

    healthElem.innerText = player.health;
    hitElem.innerText = player.hit;
    nameElem.innerText = player.name;
    itemsElem.innerText = player.items;
    imageElem.src = player.status[player.currentStatus];
}


function slap() {
    player.hit++;
    player.health -= 1 + addMods();
    update();
    console.log(player.health);
}
function punch() {
    player.health -= 5 + addMods();
    player.hit++;
    update();
}
function kick() {
    player.health -= 10 + addMods();
    player.hit++;
    update();
}
function giveFire() {
    player.items.push(items.fie)
    update();
}
function giveLighting() {
    player.items.push(items.lighting)
    update();
}
function giveIce() {
    player.items.push(items.ice)
    update();
}
function giveStatus() {
    if (player.health == 0) {
        alert("Fighter's trainer throws in the white towel");
    }
    player.health -= 10;
    if (player.health < 0) {
        player.health = 0;
    }
    update();
}

function checkStatus() {
    if (player.health >= 70) {
        player.currentStatus = "well";
    } else if (player.health >= 40) {
        player.currentStatus = "bloody";
    } else if (player.health >= 10) {
        player.currentStatus = "dying";
    } else {
        player.currentStatus = "done";
    }
}


update()
