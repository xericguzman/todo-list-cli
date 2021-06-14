# Hints

## Phase 1: Set up

Start off by creating your `main.js` file.

After that, get `prompt-sync` working. To do this, first install `prompt-sync` using `npm`, then import it into your `main.js` file using a `require` statement.

Start off your project by creating a loop that loops forever (use a while loop). Inside this loop you'll want to do three things:
1. Display content to the user
2. Prompt the user for an action
3. Handle that action accordingly

Start off by adding comment for each of these describing what you intend to do.

This is also a good time to make your first commit in git.

## Phase 3: Storing To-Dos

Now it's time to allow a user to add a new to-do item.

To do this, start by creating an empy array above the start of our loop that will contain the to-do items' titles. When the user adds a new to-do item, we'll add it to this array.

Now, inside your while loop, add some `console.log` statements that show the user a list of actions they can take. These actions can be as simple as having one to add a new to-do item and one action to complete an existing to-do item. Check out the `README.md` for an example of what this might look like.

After these `console.log` statements but still inside of your while loop, prompt the user for an action and store their choice in a variable.

Beneath this (and still within the while loop), determine whether the user decided to add a new to-do (use an if statement). If they did, prompt them once more for the title of the to-do. Store this title in a variable. 

And finally, add this title string to the array of to-do items.

Now, at the beginning of your while loop you can `console.log` out each item in the to-do list. Some kind of for-loop would be best for this (this for loop should be nested inside of the while loop).

## Phase 4: Completing To-Dos

Now let's allow the user to complete a to-do. To do this, we'll create a second array that will contain boolean values of whether each to-do is completed or not.

Here's an exmample of how this would work:

#### Data

```
const todos = ['Go to store', 'Buy a bike'];
const areTodosComplete = [false, true];
```

#### Result

```
You have 2 to-dos:
1. [incomplete] Go to store
2. [complete] Buy a bike
```

In order to loop through these two arrays at the same time, you could use a standard for loop as follows
```
for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];
  const isComplete = areTodosComplete[i];
}
```

## Phase 5: Finishing up

At this point, there will still be a few things left to do from the "requirements" section of the README like displaying the number of to-do items and displaying a message if there are no to-do items. We'll leave these tasks up to you! You can do it!
