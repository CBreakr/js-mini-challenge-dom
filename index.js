/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "red";


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const playerContainer = document.querySelector(".player-container");
PLAYERS.map((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.setAttribute("class", "player");
    playerDiv.setAttribute("data-number", player.number);

    const h3 = document.createElement("h3");
    h3.innerHTML = `${player.name} (<em>${player.nickname}</em>)`;
    playerDiv.append(h3);

    const img = document.createElement("img");
    img.setAttribute("src", player.photo);
    img.setAttribute("alt", player.name);

    playerDiv.append(img);

    playerContainer.append(playerDiv);
});

/*
    number: 11,
    name: "Mo Salah",
    nickname: "The Egyptian King",
    photo: "https://cdn.cnn.com/cnnnext/dam/assets/190501145802-mo-salah-exlarge-169.jpg"
*/

/*
<div class="player" data-number="(Player Number)">
    <h3>
        {player name} (<em>{player nickname}</em>)
    </h3>
    <img src="{player image}" alt="{player name}">
</div>
*/

/***** Deliverable 4 *****/

const extra = document.querySelector("[data-number='7']");
extra.remove();