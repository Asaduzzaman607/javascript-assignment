//1. feet to Mile conversion

function feetToMile(feet){
    if(feet<0){
        return "Invalid";
    }
    else{
        var mile = feet/5280; // 1 mile is equal to 5280 feet
    return mile.toFixed(5);

    }   
}

var mileConversion = feetToMile(5);
console.log(mileConversion, 'mile');

//2. wood calculator

function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed <0){
        return "Invalid";

    }
    else{
        wood = 1*chair + 3*table + 5*bed;
        return wood;

    }
}

var woodAmount = woodCalculator(1,3,5);
console.log(woodAmount, 'Cubic feet');


//Brick calculator

function brickCalculator(number){
    if(number<0){
        return "Invalid"
    }
    else if(number<=10){
        brick=number*15000;
        return brick;

    }
    else if(number>10 &&number<=20){
        var tenPlus = (number-10)*12000;
        brick = tenPlus + 150000 ;
        return brick;

    }
    else{
        var twentyPlus =(number-20)*10000;
        brick = twentyPlus + 120000+ 150000 ;
        return brick;

    }

}

var brickAmount = brickCalculator(30);
console.log(brickAmount, 'Bricks');

// Find out tiny name of friends

function tinyFriend(names){
    if(names.length === 0){
        return 'Invalid ';
    }
    else{
        for(i=0;i<names.length;i++){
            if(names[i].length===0){
                return 'Invalid Input';
            }
        }
        var small = names[0];
        for(i=0;i<names.length;i++){
        if(small.length>names[i].length){
        small = names[i];
        }

    }
        return small;

    }
}

namesArray = ['Asad' , 'Sara' ,'Sajeeb', 'Shanto', 'Mim'];
var tinyName = tinyFriend(namesArray);
console.log('Tiny Friend is', tinyName);

