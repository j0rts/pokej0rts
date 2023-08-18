const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, Intents, MessageEmbed } = require("discord.js");
const express = require("express");
const app = express();
const Database = require("@replit/database")

const db = new Database()

// CARDS //

// Common Cards //

const Bill = { "name": "Bill", "pokedex": "9999", "rarity": "Common", "img": "https://i.ibb.co/0fZqNJz/bill.png", "requestedby": "RybotTwitch", "requestedon": "05/04/2022", "quantity": 1 };

const Clefairy = { "name": "Clefairy", "pokedex": "0035", "rarity": "Common", "img": "https://i.ibb.co/qjyPfrw/clefairy.png", "requestedby": "RidleyPWizard", "requestedon": "05/09/2022", "quantity": 1 };

const Cubone = { "name": "Cubone", "pokedex": "0104", "rarity": "Common", "img": "https://i.ibb.co/QY4Stt8/cubone.png", "requestedby": "RidleyPWizard", "requestedon": "04/27/2022", "quantity": 1 };

const Tangela = { "name": "Tangela", "pokedex": "0114", "rarity": "Common", "img": "https://i.ibb.co/rGwy7gt/tangela.png", "requestedby": "cpttmrw", "requestedon": "04/20/2022", "quantity": 1 };

const Bulbasaur = { "name": "Bulbasaur", "pokedex": "0001", "rarity": "Common", "img": "https://i.ibb.co/dBSj3Hq/bulbasaur.png", "requestedby": "itsnative", "requestedon": "05/02/2022", "quantity": 1 };

const Pinsir = { "name": "Pinsir", "pokedex": "0127", "rarity": "Common", "img": "https://i.ibb.co/BTbZkQX/pinsir.png", "requestedby": "RybotTwitch", "requestedon": "06/23/2021", "quantity": 1 };

const Raticate = { "name": "Raticate", "pokedex": "0020", "rarity": "Common", "img": "https://i.ibb.co/gthj1TX/raticate.png", "requestedby": "SuperGustadolph", "requestedon": "06/29/2022", "quantity": 1 };

const Charmeleon = { "name": "Charmeleon", "pokedex": "0005", "rarity": "Common", "img": "https://i.ibb.co/dWsC5yt/charmeleon.png", "requestedby": "zomber82", "requestedon": "06/01/2022", "quantity": 1 };


const commonCards = [Bill, Clefairy, Cubone, Tangela, Bulbasaur, Pinsir, Raticate, Charmeleon];



// Uncommon Cards //

const Jynx = { "name": "Jynx", "pokedex": "0124", "rarity": "Uncommon", "img": "https://i.ibb.co/F4GSn4w/jynx.png", "requestedby": "RybotTwitch", "requestedon": "06/23/2021", "quantity": 1 };

const Kangaskhan = { "name": "Kangaskhan", "pokedex": "0115", "rarity": "Uncommon", "img": "https://i.ibb.co/M5YDY77/kangaskhan.png", "requestedby": "nshine", "requestedon": "03/02/2022", "quantity": 1 };

const Lickitung = { "name": "Lickitung", "pokedex": "0108", "rarity": "Uncommon", "img": "https://i.ibb.co/cQRcR1c/lickitung.png", "requestedby": "ttv_jumpie", "requestedon": "02/21/2022", "quantity": 1 };

const Scyther = { "name": "Scyther", "pokedex": "0123", "rarity": "Uncommon", "img": "https://i.ibb.co/S555XSr/scyther.png", "requestedby": "kenway1776", "requestedon": "06/02/2021", "quantity": 1 };

const Ninetales = { "name": "Ninetales", "pokedex": "0038", "rarity": "Uncommon", "img": "https://i.ibb.co/HPk4YY6/ninetales.png", "requestedby": "itsnative", "requestedon": "05/09/2022", "quantity": 1 };

const Machoke = { "name": "Machoke", "pokedex": "0067", "rarity": "Uncommon", "img": "https://i.ibb.co/LYgTQfM/machoke.png", "requestedby": "sana14m", "requestedon": "06/08/2022", "quantity": 1 };

const Magmar = { "name": "Magmar", "pokedex": "0126", "rarity": "Uncommon", "img": "https://i.ibb.co/Qmd18bK/magmar.png", "requestedby": "cpttmrw", "requestedon": "05/18/2022", "quantity": 1 };


const uncommonCards = [Jynx, Kangaskhan, Lickitung, Scyther, Ninetales, Machoke, Magmar];


// Rare Cards //

const Alakazam = { "name": "Alakazam", "pokedex": "0065", "rarity": "Rare", "img": "https://i.ibb.co/42vMQyk/alakazam.png", "requestedby": "CoinFuryTV", "requestedon": "04/18/2022", "quantity": 1 };

const Goodra = { "name": "Goodra", "pokedex": "0706", "rarity": "Rare", "img": "https://i.ibb.co/tMnBDsg/goodra.png", "requestedby": "SuperGustadolph", "requestedon": "05/04/2022", "quantity": 1 };

const Nidoqueen = { "name": "Nidoqueen", "pokedex": "0031", "rarity": "Rare", "img": "https://i.ibb.co/jbnwMSj/nidoqueen.png", "requestedby": "cpttmrw", "requestedon": "04/04/2022", "quantity": 1 };

const Slowbro = { "name": "Slowbro", "pokedex": "0080", "rarity": "Rare", "img": "https://i.ibb.co/HVHrDNj/slowbro.png", "requestedby": "cpttmrw", "requestedon": "05/04/2022", "quantity": 1 };

const Muk = { "name": "Muk", "pokedex": "0089", "rarity": "Rare", "img": "https://i.ibb.co/mDqXnQ8/muk.png", "requestedby": "Dr_Tainted", "requestedon": "06/01/2022", "quantity": 1 };

const Vaporeon = { "name": "Vaporeon", "pokedex": "0134", "rarity": "Rare", "img": "https://i.ibb.co/Ttg6hnZ/vaporeon.png", "requestedby": "SuperGustadolph", "requestedon": "05/18/2022", "quantity": 1 };

const Jolteon = { "name": "Jolteon", "pokedex": "0135", "rarity": "Rare", "img": "https://i.ibb.co/CsKckgk/jolteon.png", "requestedby": "itsnative", "requestedon": "06/01/2022", "quantity": 1 };


const rareCards = [Alakazam, Goodra, Nidoqueen, Slowbro, Muk, Vaporeon, Jolteon];



// Epic Cards //

const Blastoise = { "name": "Blastoise", "pokedex": "0009", "rarity": "Epic", "img": "https://i.ibb.co/JnrKPJ2/blastoise.png", "requestedby": "ttv_jumpie", "requestedon": "01/19/2022", "quantity": 1 };

const Charizard = { "name": "Charizard", "pokedex": "0006", "rarity": "Epic", "img": "https://i.ibb.co/StnzBWC/charizard.png", "requestedby": "ttv_jumpie", "requestedon": "01/05/2022", "quantity": 1 };

const Gengar = { "name": "Gengar", "pokedex": "0094", "rarity": "Epic", "img": "https://i.ibb.co/CbfY92z/gengar.png", "requestedby": "ttv_jumpie", "requestedon": "01/24/2022", "quantity": 1 };

const Arcanine = { "name": "Arcanine", "pokedex": "0059", "rarity": "Epic", "img": "https://i.ibb.co/4jz8mNP/arcanine.png", "requestedby": "Dr_Tainted", "requestedon": "06/22/2022", "quantity": 1 };

const Dragonite = { "name": "Dragonite", "pokedex": "0149", "rarity": "Epic", "img": "https://i.ibb.co/rFTCK02/dragonite.png", "requestedby": "RidleyPWizard", "requestedon": "05/18/2022", "quantity": 1 };

const epicCards = [Blastoise, Charizard, Gengar, Arcanine, Dragonite];



// Legendary Cards //

const Mewtwo = { "name": "Mewtwo", "pokedex": "0150", "rarity": "Legendary", "img": "https://i.ibb.co/0mYYDCW/mewtwo.png", "requestedby": "Faaaantastic", "requestedon": "08/11/2021", "quantity": 1 };

const Mew = { "name": "Mew", "pokedex": "0151", "rarity": "Legendary", "img": "https://i.ibb.co/wzwmjGW/mew.png", "requestedby": "RidleyPWizard", "requestedon": "06/01/2022", "quantity": 1 };

const Zapdos = { "name": "Zapdos", "pokedex": "0145", "rarity": "Legendary", "img": "https://i.ibb.co/zRqDXmd/zapdos.png", "requestedby": "RidleyPWizard", "requestedon": "06/22/2022", "quantity": 1 };


const legendaryCards = [Mewtwo, Mew, Zapdos];

const allCardRarities = [];
allCardRarities.push(commonCards, uncommonCards, rareCards, epicCards, legendaryCards);
const allCards = allCardRarities.flat();


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


// ---------------------------------- //

// INIT //


db.delete("pokej0rts").then(() => { })


app.listen(3000, () => {
  console.log("Project is running!")
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!");
});

const COOLDOWN = 180  // in minutes
const CARDS_PER_PACK = 3



// ---------------------------------- //

// FUNCTIONS //

function determineRarity() {
  cardsRarity = commonCards;
  raritySquare = ":white_large_square:";
  rarityRNG = randomIntFromInterval(1, 100)
  if (rarityRNG >= 1 && rarityRNG <= 45) {
    cardsRarity = commonCards;
    raritySquare = ":white_large_square:";
  }
  else if (rarityRNG >= 46 && rarityRNG <= 75) {
    cardsRarity = uncommonCards;
    raritySquare = ":green_square:";
  }
  else if (rarityRNG >= 76 && rarityRNG <= 90) {
    cardsRarity = rareCards;
    raritySquare = ":blue_square:";
  }
  else if (rarityRNG >= 91 && rarityRNG <= 97) {
    cardsRarity = epicCards;
    raritySquare = ":purple_square:";
  }
  else if (rarityRNG >= 98) {
    cardsRarity = legendaryCards;
    raritySquare = ":orange_square:";
  }
  rarity = { "cardsRarity": cardsRarity, "raritySquare": raritySquare };
  return rarity;
}

function updateUser(user, newCard, isLastCard) {
  isDupCard = false;
  lastOpen = user.lastOpen;
  if (user.cards) {
    user.cards.forEach((card, index) => {
      if (card.name === newCard.name) {
        user.cards[index].quantity++;
        isDupCard = true;
      }
    });
    if (!isDupCard) {
      user.cards.push(cardToOpen);
    }
  }
  if (isLastCard) {
    lastOpen = Date.now();
  }
  newUserValue = {
    "username": username,
    "cards": user.cards,
    "lastOpen": lastOpen
  }
  db.set(username, newUserValue).then(() => { })
}

function pullCard(message, user, cardsRemaining) {
  rarity = determineRarity();
  cardToOpen = rarity.cardsRarity[Math.floor(Math.random() * rarity.cardsRarity.length)];

  isLastCard = false;
  cardsRemaining--;
  footerText = 'You can open ' + cardsRemaining + ' more cards!'

  if (cardsRemaining == 1) {
    footerText = 'You can open 1 more card!'
  }
  if (cardsRemaining == 0) {
    footerText = 'You can open your next pack in ' + COOLDOWN + ' minutes'
    isLastCard = true;
  }
  updateUser(user, cardToOpen, isLastCard);

  let embed = new MessageEmbed()
    .setTitle("Congrats " + username + ", you got a " + cardToOpen.name + "!")
    .setDescription("**#" + cardToOpen.pokedex + " - " + cardToOpen.name + "**\nRarity: " + cardToOpen.rarity + " " + rarity.raritySquare + "\n\nRequested by: " + cardToOpen.requestedby + " (" + cardToOpen.requestedon + ")")
    .setImage(cardToOpen.img)
    .setFooter({ text: footerText + '\n\nYou can view your collection by typing "!collection"' })
  message.channel.send({ embeds: [embed] });
}

function addNewUserToDB(message, username) {
  newUserValue = {
    "username": username,
    "cards": [],
    "lastOpen": null
  }
  db.set(username, newUserValue).then(() => {
    db.get(username).then(value => {
      pullCard(message, value, CARDS_PER_PACK);
    })
  });
}



// ---------------------------------- //

// MESSAGE HANDLER //


client.on("messageCreate", async message => {
  username = message.author.username;
  author = message.author.toString();
  channel = message.channel.name;

  if (channel == "pokej0rts") {

    if (message.content === "!open") {

      db.get(username).then(value => {

        // if user already exists in db
        if (value) {
          cardsRemaining = CARDS_PER_PACK - ((value.cards.reduce((acc, card) => acc + parseInt(card.quantity), 0) + CARDS_PER_PACK) % CARDS_PER_PACK);

          // if user is ready to open a new pack
          if (cardsRemaining == CARDS_PER_PACK) {

            // if user has already opened a full pack of cards in the past
            if (value.lastOpen) {
              const timeDiffDays = (Date.now() - value.lastOpen) / (1000 * 60 * 60 * 24);
              const timeDiffHours = (Date.now() - value.lastOpen) / (1000 * 60 * 60);
              const timeDiffMinutes = (Date.now() - value.lastOpen) / (1000 * 60);
              const timeDiffSeconds = (Date.now() - value.lastOpen) / (1000);

              // if cooldown is finished
              if (timeDiffMinutes >= COOLDOWN) {
                pullCard(message, value, cardsRemaining);
              }
              else {
                message.channel.send(author + ", you can open a new pack in: " + (COOLDOWN - Math.floor(timeDiffMinutes)).toString() + " minutes");
              }
            }
          }

          // if user hasn't finished opening full pack yet
          else if (cardsRemaining < CARDS_PER_PACK) {
            pullCard(message, value, cardsRemaining);
          }
        }

        // new user (add to db)
        else {
          addNewUserToDB(message, username);
        }
      });
    }

    if (message.content === "!collection") {
      db.get(username).then(value => {
        if (value) {
          if (value.cards) {
            cardsListString = ""
            sortedCards = value.cards.sort((a, b) => Number(a.pokedex) - Number(b.pokedex));
            sortedCards.forEach((card) => {
              if (card.rarity == "Common") {
                raritySquare = ":white_large_square:";
              }
              if (card.rarity == "Uncommon") {
                raritySquare = ":green_square:";
              }
              if (card.rarity == "Rare") {
                raritySquare = ":blue_square:";
              }
              if (card.rarity == "Epic") {
                raritySquare = ":purple_square:";
              }
              if (card.rarity == "Legendary") {
                raritySquare = ":orange_square:";
              }

              cardsListString += raritySquare + " #" + card.pokedex + " - [" + card.name + "](" + card.img + ") (" + card.quantity + ")\n";
            });
            let embed = new MessageEmbed()
              .setTitle(username + "'s Collection")
              .setDescription("Cards Collected: (" + value.cards.length + "/" + allCards.length + ")\n\n" + cardsListString)
            message.channel.send({ embeds: [embed] });
          }
        }
        else {
          message.channel.send(author + ', you don\'t have any cards yet! Type "!open" to get your first card.');
        }
      });
    }

  }
});

client.login(process.env.TOKEN);