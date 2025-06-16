
// One Piece Story Mode - Combined mod.js
// Includes: devil fruit logic, Berry system, XP tiers, NPC behavior, ship movement

// Player data setup
var player = {
  data: {
    hasFruit: false,
    devilFruit: null,
    berry: 0,
    xp: 0,
    level: 1
  },
  health: 20,
  sendMessage: function (msg) {
    console.log("[Player Message] " + msg);
  }
};

// Example: Eat a Devil Fruit
function eatFruit(fruitName) {
  if (player.data.hasFruit) {
    player.sendMessage("You already ate a fruit!");
  } else {
    player.data.hasFruit = true;
    player.data.devilFruit = fruitName;
    player.sendMessage("You consumed the " + fruitName + "!");
  }
}

// Example: Gain Berry from selling a fruit
function sellFruit() {
  if (player.data.hasFruit) {
    player.data.berry += 1000;
    player.data.hasFruit = false;
    player.data.devilFruit = null;
    player.sendMessage("You sold your fruit for 1000 Berry!");
  } else {
    player.sendMessage("You have no fruit to sell.");
  }
}

// Example: XP Tiers and leveling
function addXP(amount) {
  player.data.xp += amount;
  player.sendMessage("You gained " + amount + " XP!");
  if (player.data.xp >= player.data.level * 100) {
    player.data.level++;
    player.sendMessage("Level up! You are now level " + player.data.level);
  }
}

// Example ship movement (placeholder)
function attachHelmAndFloaters() {
  console.log("Ship movement activated! Use controls to steer.");
}

// Add your NPC spawn logic, enemy waves, etc. below
