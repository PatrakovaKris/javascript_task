/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
/*11 свертка*/
var arr = [[1, 2, 3], [4, 5], [6]];
result = arr.reduce(function(prev, cur){
    return prev.concat(cur);
    }, []);
console.log(result);