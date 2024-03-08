// IMPORTANT: Before we start,
// create a new branch in git.
// If you don't know how to do this, 
// re-watch the video or ask a friend, teacher, or TA.

// Part 1
// Remember that i++ mean "increment"
// it takes the variable i up by 1.

let i = 0;

console.log("**** Incrementing i ****");
console.log(`i starts as ${i}`);

i++;
console.log(`i++ brings i to ${i}`);

i++;
console.log(`i++, again, brings i to ${i}`);

// TODO: increment i to 3
console.log(`i++, again, brings i to ${i}`);

// TODO: increment i to 4
console.log(`i++, again, brings i to ${i}`);

// TODO: increment i to 5
console.log(`i++, again, brings i to ${i}`);

// TODO: increment i to 10.
// Then log out that value to the console.

// Part 2
// For loops can take care of this in just 3 lines!
console.log("**** Introducing the for-loop! ****");
// TODO: change the for loop to iterate up to 10.
for (let i = 0; i < 3; i++) {
  console.log(`Now, i is ${i}.`);
}

// TODO: make a for loop that counts up to 25.

// TODO: make a for loop that counts up to 50.

// TODO: make a for loop that counts up to 100.

// TODO: make a for loop that counts up to 1001.

// TODO: Add, Commit, Push!
// TODO: Comment out the above so that they don't bother you as you do the rest of the assignment.

// Part 3
// THINK: What else runs from 0 to n?

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// Think....

// That's right: arrays!

let animals = ["aardvark", "buffalo", "cat", "dingo"];
console.log("**** Animals ****");
// Let use console.log to print each item in order.
for (let i = 0; i < 4; i++) {
  console.log(animals[i]);
}

// TODO: make a new array of zooAnimals. Use a loop to print them all to the console.
// Bonus: Can you think of a use for array.length in the for loop?

// TODO: make a new array of sports teams. Use a loop to print them all to the console.
// Bonus: Can you think of a use for array.length in the for loop?

// TODO: make a new array of anything else. Use a loop to print them all to the console.
// Bonus: Can you think of a use for array.length in the for loop?

// TODO: Add, Commit, Push!

// Part 4: Setting values
console.log("**** (Re-)Setting values ****");
// Example: we can set all the values in the array if we want. Let's say we really like cats...
for (let i = 0; i < animals.length; i++) {
  animals[i] = "cat";
}
console.log(animals);

// TODO: Use a for loop to reset the tic-tac-toe board,
// so all the values are "-".
let board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
for (let i = 0; i < board.length; i++) {
  board[i] = "-";
}
console.log(board);


// TODO: Use a for loop to reset the battlship board so all the values are open ocean. ("o")
board = [
  "o", "D", "D", "o",
  "S", "o", "o", "o",
  "S", "C", "C", "C",
  "S", "o", "o", "o",
];
for (let i = 0; i < board.length; i++) {
  board[i] = "o"
}
console.log(board);

// TODO: Add, Commit, Push!

// Part 5: resetting specific values

board = [
  "o", "D", "D", "o",
  "S", "o", "o", "o",
  "S", "C", "C", "C",
  "S", "o", "o", "o",
];

// Example: We can use a while loop in a for loop.
// Just nest them and make sure you
// open and close your {} brackets.

// Let's sink the Submarine,
// but only the Submarine.
// Try this first, then scroll down for an answer...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Think...

// Did you get it?

console.log("**** Setting specific items ****");
for (let i = 0; i < board.length; i++) {
  if (board[i] === "S") {
    board[i] = "X";
  }
}
console.log(board);

// TODO: Sink the Destroyer (D)

// TODO: Sink the Cruiser (C)

// TODO: reset the board to open ocean again.

// Bonus: Think of a new application of what we did today. Write a TODO for yourself. It should be similar to what we did, but add your own twist. Try it out, and lets us know how it when with a quick message in the Slack channel!
