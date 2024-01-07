const quizQuestionns = [

    //Question 1
    {
        question: "Should you ever use var?",
        
        answers: {
            a: "yes",
            b: "no"
        },

        correctAnswer: "b"
    },

    //Question 2
    {
        question: "How do your write an output message in JS",
        
        answers: {
            a: "console.log('Hello world')",
            b: "print(Hello world)",
            c: "Console.Write('Hello world')"
        },

        correctAnswer: "a"

    },

    //Question 3
    {
        question: "What is interpolation",
        
        answers: {
            a: "console.log('Hello world')",
            b: "`${variable1} {variable2} {variable3}`",
            c: "variable1 + ' ' + variable2 + ' ' + variable3"
        },

        correctAnswer: "b"

    },

    //Question 4
    {
        question: "What are functions used for?",
        
        answers: {
            a: "Containers for storing information",
            b: "A block of code which only runs when it is called",
            c: "Organising a section of code"
        },

        correctAnswer: "c"

    },

    //Question 5
    {
        question: "What does undefined mean?",
        
        answers: {
            a: "It means 'nothing'",
            b: "It means that a variable or expression hasn't been assigned a value",
            c: "It means that there is an error"
        },

        correctAnswer: "b"

    },

    //Question 6
    {
        question: "What is the best practise when using scope?",
        
        answers: {
            a: "You should declare variables in the smallest scope that you can",
            b: "You should declare variables in the largest scope that you can",
        },

        correctAnswer: "a"

    },

    //Question 7
    {
        question: "Provide the letter of index 2: let variable = fruit",
        
        answers: {
            a: "f",
            b: "r",
            c: "u",
            d: "i",
            e: "t"
        },

        correctAnswer: "c"

    },

    //Question 8
    {
        question: "Why would an object be used?",
        
        answers: {
            a: "To store multiple data-type values together",
            b: "For ",
            c: "u",
            d: "i",
            e: "t"
        },

        correctAnswer: "c"

    },
    
    //Question 9
    {
        question: "Why should a for, while and foreach loop be used?",
        
        answers: {
            a: "For: , while: , foreach: ",
            b: "For: , while: , foreach: ",
            c: "For: , while: , foreach: "
        },

        correctAnswer: "c"

    },



    //Question 10


];






function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions (questions, quizContainer) {





    }
    
    function showResults (questions, quizContainer, resultsContainer) {
    
    
    
    
    }
    

    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
    }

};

