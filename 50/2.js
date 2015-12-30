/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
/* 2если число делится на 3 то FIZZ, если число делится на 5 то BUZZ*/
for(var i= 1; i<= 100; i++){
    if ((i%3==0)&(i%5==0)){
        console.log('FizzBuzz');
    }
    if (i%3 == 0){
        console.log('Fizz');
    }
    else if(i%5 == 0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}
