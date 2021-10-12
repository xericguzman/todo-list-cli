const prompt = require('prompt-sync')({sigint: true});


console.log('Welcome to the to do list');
const toDos = ['walk dog'];
const areToDosComplete= [true, false];

while (true){


    console.log('');
    console.log('==========');
    console.log('');


if (toDos.length === 0){
    console.log('Your to-do list is empty.');
}



else {
    console.log('You have ' + toDos.length + 'things to-do(s).');
    for (let i = 0; i < toDos.length; i++) {
        const todo = todos[i];
        const isComplete = areTodosComplete[i];
        const number = i + 1;
        console.log(number + '[incomplete]' + todos)
        if (isComplete) {
            console.log(number())
        }
    }
}


console.log('');
console.log('select an action');
console.log('[1] create');
console.log('[2] delete')
const input = Number(prompt('> '));



console.log('');


if (input === 1) {
    console.log('creatin new item');
    console.log('whats this item called');
    const toDoTitle = prompt ('> ');
    toDos.push(toDoTitle);
    areToDosComplete.push(false);
}


else if (input === 2){
    console.log('completin an item')
    console.log('which one do u wanna complete')
    const completeNumber = Number(prompt('> '));
    const completeIndex = completeNumber - 1;
    areTodosComplete[completeIndex] = true;
}


}