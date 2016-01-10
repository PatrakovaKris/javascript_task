/**
 * Created by Kristina_Patrakova on 12/30/2015.
 */
function  Vector(x, y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(b){
    var c = new Vector(this.x + b.x , this.y + b.y);
    return    c;
};

Vector.prototype.minus = function(b){
    var c = new Vector(this.x - b.x , this.y - b.y);
    return    c;
};

var a = new Vector(1, 2);
console.log(a.plus(new Vector(2, 3)));
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
