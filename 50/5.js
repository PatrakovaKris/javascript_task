/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
/*5 рекурсия*/
var isEven = function(a){
    if (a<0){
        return isEven(a+2);
    }else{
        if (a===0)
            return true;
        if (a===1)
            return false;
        return isEven(a-2);
    }
}
console.log (isEven(-55));