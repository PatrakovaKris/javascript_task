/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
/*9 списки*/
function arrayToList(array) {
    var list = {};
    var lastRest = list;
    array.forEach(function(elem){
        lastRest.value = elem;
        lastRest.rest = {};
        lastRest = lastRest.rest;
    });
    lastRest.rest = null;
    return list;
}

function listToArray(list, array)
{
    array = array || [];
    if(list.rest != null){
        array.push(list.value);
        list = list.rest;
        return listToArray(list, array);
    } else {
        return array;
    }
}

function prepend(elem, list) {
    return {value: elem, rest: list};
}

function nth(list, index, current){
    current = current || 0;
    if(index == current){
        return list.value;
    } else {
        if(list != null) {
            return nth(list.rest, index, current + 1);
        }else {
            return undefined;
        }
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));