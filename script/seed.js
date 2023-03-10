"use strict";
const bcrypt = require("bcrypt");

const { db, User, Recipe } = require("../server/db");
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  //Creating Users
  const users = await Promise.all([
    User.create({
      firstName: "Phil",
      lastName: "McCraken",
      email: "phil@gmail.com",
      phoneNumber: "5055555555",
      password: await bcrypt.hash("phil", 10),
    }),
    User.create({
      firstName: "donny",
      lastName: "donowitz",
      email: "don@gmail.com",
      phoneNumber: "5055555555",
      password: await bcrypt.hash("don", 10),
    }),
  ]);

  Recipe.create({
    mealId: 71235,
    isBookmarked: true,
    isCooked: true,
  });

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

module.exports = seed;
