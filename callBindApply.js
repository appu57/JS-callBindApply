let value = {
    name:'Javascript',
    language:'Scripting',
    display:function(){
        console.log(this.name +"\n"+this.language);
    }
};

console.log(value.display());

function updateLanguage(name,language)
{
    this.name=name;                   //this is used to point global variable so we use call,bind,apply to enable the function updateLanguage to point global variables
    this.language=language;
}

updateLanguage.call(value,'HTML','structured language'); //send arguements one by one
value.display();

let details = ['CSS','Styling language'];
updateLanguage.apply(value,details); //takes array of object
value.display();

let bindCall = updateLanguage.bind(value,'NodeJS','framework'); //creates a function which will be called later as an function
bindCall();


const obj = { name: 'John' };

function greet() {
    console.log(`Hello, ${this.name}!`);
}

const boundGreet = greet.bind(obj); 
boundGreet(); //these methods (call, apply, bind) are used to manipulate the context (this) of functions in JavaScript, allowing you to specify the object on which the function operates , bind a value and u can verify based on condition written in function like arg1 and arg2 is the variable and condition is arg2>arg1 now each time bind/call/apply(1,2) and check if 2>1

"###############################################################################################################################################################"

const a ={
    count :1,
    getCount:function(){
        console.log(this.count);
    }
}

const getCount = a.getCount.bind({count:2});

getCount(); //2

"###############################################################################################################################################################"


