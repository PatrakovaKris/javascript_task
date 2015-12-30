/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
/*8 Обращаем массив вспять*/
function reverseArray(arr){
    var arrayTemp =[];
    for(var i = 0; i <=arr.length -1; i++){
        arrayTemp.unshift(arr[i]);
    }
    return arrayTemp;
}
console.log(reverseArray([1,2,3,4,5,6,7]));