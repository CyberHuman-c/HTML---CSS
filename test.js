//example 1 : tests
/*
console.log("Hello Engineers");

const studentName = 'Mahmoud Emad';
console.log(studentName);

let completedSessions = 4;
console.log(completedSessions);
console.log(`After today, You will have completed ${completedSessions + 1} sessions.`);

















//example 2 : ID

const name = 'Anwar';
const age = 18;
const isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

console.log(age + 5);

const ageString = '18';
console.log(ageString + 5);
console.log(Number(ageString) + 5);










//example 3 : Payment

const productPrice = 200;
const productQuantity = 3;

const subtotal = productPrice * productQuantity;
const deliveryFee = 30;
const totalPrice = subtotal + deliveryFee;

console.log(totalPrice);

console.log(totalPrice >= 500);
console.log(totalPrice < 500);









//example 4 : calculation

console.log(10 > 5);
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 >= 5);
console.log(10 == 5);
console.log(10 != 5);

let num = 20;
console.log(num == 20);







//example 5: conditions {part 1}

const score = '75';

if (score >= 60)
    console.log('You passed the exam!');
else
    console.log('DO BETTER!');

if (score >= 90)
    console.log('A');
else if (score >= 80)
    console.log('B');
else if (score >= 70)
    console.log('C');
else if (score >= 60)
    console.log('D');
else
    console.log('FAILURE');


//example 5: conditions {part 2: 'AND' operation}

const total = 600;
const hasCoupon = true;

if (total >= 500 && hasCoupon){
    console.log('Discount');
    console.log('price: ...');
}
else
    console.log('No Discount'); 


//example 5: conditions {part 3: 'OR' operation}

const ISstudent = false;
const hasInvitation = true;

if (ISstudent || hasInvitation)
    console.log('Free entry');
else
    console.log('Paid entry');


const hour='12';
let greeting;

if (hour < 12)
    greeting = 'Good Morning';
else if (hour < 18)
    greeting = 'Good Afternoon';
else
    greeting = 'Good evening';

console.log(greeting);

const results = hour <= 11 ;
console.log(results);


//example 5: conditions {part 4: switch/case operation}
const language = 'es' ;

switch (language){
    case 'en':
        console.log('hello');
    case 'ar':
        console.log('مرحبا');
    case 'es':
        console.log('hola');
    default:
        console.log('unavailable language');
}













//example 6: functions
function calculatePercentage(score, total){
    return (score/total)*100;
}

const result = calculatePercentage(8, 10);
console.log(result);

function addDouble(number){
    console.log(number * 2);
}

const Result = addDouble(4);
console.log(Result);


function getFeedBack(isCorrect){
    if (isCorrect) return true;
    return false;
}

const feedBack = getFeedBack(true);
console.log(feedBack);
















//example 7: Objects
const task = {
    id: 1,
    title: "practical js",
    completed: false
};
console.log(task.completed);
task.completed = true;
console.log(task.completed);

const tasks = [
    {id: 1, title: "practical js", completed: false}, //0
    {id: 2, title: "practical css", completed: true}, //1
    {id: 3, title: "practical html", completed: false}, //2
];
console.log(tasks[0].title);


const { title, completed} = task;
console.log(title, completed);

const updatedTask = {...task, completed: true };
const moreTasks = [
    ...tasks,
    {id: 4, title: "practice node", completed: false}
]
*/

/*
const hour = new Date().getHours();

let greeting;

if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good evening";
}

*/
const greetingElement = document.querySelector("#greeting");
greetingElement.textContent = greeting;

const themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark");
  themeButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const feedback = document.querySelector("#form-feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (name === "") feedback.textContent = "please enter your name";
  else if (name.length < 3)
    feedback.textContent = "name must be at least 3 characters long";
  else feedback.textContent = `thank you, ${name}!`;
});
