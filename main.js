const prompt = require('prompt-sync')({sigint: true});

function displayToDos(todoList, areToDoListComplete) {
    


        console.log('');
        console.log('==========');
        console.log('');
    
    
    if (todoList.length === 0){
        console.log('Your to-do list is empty.');
    }
    
    
    
    else {
        console.log('You have ' + todoList.length + 'things to-do(s).');
        for (let i = 0; i < todoList.length; i++) {
            const todo = todoList[i];
            const isComplete = areToDoListComplete[i];
            const number = i + 1;
            console.log(number + '[incomplete]' + toDos)
            if (isComplete) {
                console.log(number())
            }
        }
    }
    
}

function getInput() {
    console.log('');
console.log('select an action');
console.log('[1] create');
console.log('[2] delete')
const input = Number(prompt('> '));
return input;

}

function handleInput(userInput, todoList, areToDoListComplete) {
    console.log('');


if (input === 1) {
    console.log('creating new item');
    console.log('whats this item called');
    const toDoTitle = prompt ('> ');
    toDos.push(toDoTitle);
    areToDosComplete.push(false);
}


else if (input === 2){
    console.log('completing an item')
    console.log('which one do u wanna complete')
    const completeNumber = Number(prompt('> '));
    const completeIndex = completeNumber - 1;
    areTodosComplete[completeIndex] = true;
}


}



console.log('Welcome to the to do list');
const toDos = ['walk dog', 'go to store'];
const areToDosComplete= [true, false];

while (true){

displayToDos(toDos, areToDosComplete);

const input = getInput();

handleInput(input, todos, areToDosComplete)
}
