/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
function countChar(string, ch) {
    var counted = 0;
    for (var i = 0; i < string.length; i++)
        if (string.charAt(i) == ch)
            counted += 1;
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBBB"));
