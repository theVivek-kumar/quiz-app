window.onload = function(){
    show(0);
}


let questions = [
    {
        id: 1,
        question: "Commonly used data types DO NOT include:",
        answer: "alerts",
        options: ["strings", "booleans", "alerts", "numbers"],
        
    },
    {
        id: 2,
        question: "The condition in an if / else statement is enclosed within ____.",
        answer: "parentheses",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        
    },
    
    {
        id: 3,
        question: "Data is stored in localStorage as _____.",
        answer: "strings",
        options: ["strings", "objects", "arrays", "all of the above"],
       
    },
    {
        id: 4,
        question: "Which of the following is NOT a method to call an element with class 'example'?",
        answer: "document.body.example;",
        options: ["document.getElementsByClassName( 'example');", "document.body.example;", "document.querySelector( '.example')", "document.querySelectorAll( '.example')[0]"],
       
    },
    {
        id: 5,
        question: "Arrays in JavaScript can be used to store ______.",
        answer: "All of the Above",
        options: ["strings", "numbers", "objects", "All of the Above"],
     
    },
    {
        id: 5,
        question: "Undefined does NOT mean that _______.",
        answer: "the variable is assigned no value",
        options: ["the variable in the code doesn't exist", "the variable is not assigned to a value", "the variable is assigned no value", "the property doesn't exist"],
       
    }
];

function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["username"].value;
    //store player name//
    location.href="quiz.html";
    sessionStorage.setItem("name",name);
    location.href =" quiz.html";
}

let question_count = 0;
let point = 0;

function next() {

    if(question_count == questions.length - 1) {
        location.href = "end.html";
        return 0;
    }
    let user_answer=document.querySelector("li.option.active").innerHTML;

   if(user_answer== questions[question_count].answer)
   {
     point+=10;
     sessionStorage.setItem("points",point);
   }
    question_count++;
    show(question_count);
}
     function show(count){
         let question = document.getElementById("questions");

        // question.innerHTML ="<h2>" + questions[count].question + "</h2>";
         question.innerHTML= `
         <h2>Q:${questions[count].question}</h2>
                <ul class="option_group">
                   <li class="option ">${questions[count].options[0]}</li>
                   <li class="option">${questions[count].options[1]}</li>
                   <li class="option">${questions[count].options[2]}</li>
                   <li class="option">${questions[count].options[3]}</li>
                </ul>
         
         
         
         
         `;

         toggleActive();
     
}
function toggleActive(){
    let option =document.querySelectorAll("li.option")
    for(let i=0;i<option.length;i++){
        option[i].onclick = function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active")
        }
    }
}
