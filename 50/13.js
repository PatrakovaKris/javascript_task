/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
/*13 ожидаемая продолжительность жизни*/

var ancestry = [
    {name: "Emma de Milliano", sex: "f",
        born: 1816, died: 1956,
        father: "Petrus de Milliano",
        mother: "Sophia van Damme"},

    {name: "Carolus Haverbeke", sex: "m",
        born: 1832, died: 1905,
        father: "Carel Haverbeke",
        mother: "Maria van Brussel"},

    {name: "Kventin Haverbeke", sex: "m",
        born: 1832, died: 1905,
        father: "Avgustin",
        mother: "Angellla van Brussel"},

    {name: " Serena Van Der Woodsen", sex: "f",
        born: 1932, died: 2005,
        father: "Den Van Der Woodsen",
        mother: "Celia Van Der Woodsen"},

    {name: "Blair Cornelia Waldorf", sex: "f",
        born: 1932, died: 2000,
        father: "Garold Waldorf",
        mother: "Eleonora Waldorf"},

    {name: "Charles Bartholomew Bass", sex: "m",
        born: 1932, died: 1995,
        father: "Bart Bass",
        mother: "Lily Bass"}
];

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
function groupBy(array, groupOf){
    var groups = {};
    array.forEach(function(element){
        var groupName = groupOf(element);
        if (groupName in groups)
            groups[groupName].push(element);
        else
            groups[groupName] = [element];
    });
    return groups;
}

var byCentry = groupBy(ancestry, function(person){
    return Math.ceil(person.died /100);
});

for (var century in byCentry){
    var ages =byCentry[century].map(function(person){
        return person.died - person.born;
    });
    console.log(century + ':' + average(ages));
}