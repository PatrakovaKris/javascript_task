/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
/* 10 глубокое сравнение*/
function deepEqual(obj1, obj2){
    if(typeof obj1 == typeof obj1){
        if(typeof obj1 == "object" && obj1 != null){
            var equals = true;
            for(var property in obj1){
                if(obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)){
                    if(!deepEqual(obj1[property], obj2[property])){
                    equals = false;
                    }
                } else {
                    equals = false;
                }
            }
            return equals;
        } else {
            return obj1 === obj2;
        }
    } else {
        return false;
    }
}
 console.clear();
 var obj = {here: {is: "an"}, object: 2};
 console.log(deepEqual(obj, obj));
 console.log(deepEqual(obj, {here: 1, object: 2}));
 console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));