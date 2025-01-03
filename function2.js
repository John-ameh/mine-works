// a function that takes array as input and displays all thw input of the array
function listArrayItem(arr){
    for( var i = 0 ; i<arr.length; i++){
        console.log( i , arr[i]);
    }    
    }
       

// creating an array of colors

var colors = ["yellow", "blue", "orange", "green","pink"];

// calling the function

listArrayItem(colors);