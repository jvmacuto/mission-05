#!/usr/bin/env node

// Import required modules
const { Command } = require("commander");
const inquirer = require("inquirer");

const {
  addItem,
  findItem,
  updateItem,
  removeItem,
  listItems,
} = require("./index"); // Ensure this is correctly imported

const program = new Command();
const prompt = inquirer.createPromptModule();

// Define questions for adding an item
const addItemQuestions = [
  {
    type: "input",
    name: "title",
    message: "Enter item title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter item description",
  },
  {
    type: "input",
    name: "starting_price",
    message: "Enter starting price",
  },
  {
    type: "input",
    name: "reserve_price",
    message: "Enter reserve price",
  },
];

// Program version
program.version("1.0.0").description("Auction CLI");

// Add item command
program
  .command("add")
  .alias("a")
  .description("Add an item")
  .action(() => {
    prompt(addItemQuestions).then((answers) => addItem(answers));
  });

// Find item command
program
  .command("find <title>")
  .alias("f")
  .description("Find an item by title")
  .action((title) => {
    findItem(title);
  });

//update
program
  .command("update <_id>")
  .alias("u")
  .description("Update an item by id")
  .action((_id) => {
    prompt(addItemQuestions).then((answers) => updateItem(_id, answers));
  });

//remove item
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove an item by id")
  .action((_id) => {
    removeItem(_id);
  });

//list items
program
  .command("list")
  .alias("l")
  .description("List all items")
  .action(() => {
    listItems();
  });

// Parse arguments
program.parse(process.argv);