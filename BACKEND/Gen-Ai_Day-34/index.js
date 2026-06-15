import "dotenv/config";
import { ChatMistralAI } from "@langchain/mistralai";
import {HumanMessage, tool} from "langchain";
import * as z from "zod";
import readline from "readline/promises";
import { sendEmail } from "./mail.service.js";  

// Create interface for reading user input
const readLine = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};

// const rl = readLine(); // used so that we can use the question method to ask user for input from the terminal.
// rl.question("What is your name? ", (name) => {
//     console.log(`Hello, ${name}!`);
//     rl.close(); // used to close the readline interface after we are done with it.
// });

const rl = readLine();

const model = new ChatMistralAI({
  model: "mistral-medium-latest",
});

const messages = [];

while(true){
  const userInput = await rl.question("\x1b[32mYou:\x1b[0m ");

  messages.push(new HumanMessage(userInput));

  const response = await model.invoke(messages);

  messages.push(response);

  console.log(`\x1b[34mAI:\x1b[0m ${response.text}`);
}

rl.close();