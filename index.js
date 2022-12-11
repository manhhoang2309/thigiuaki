for ( var i = 1; i < 2; i++) {
    console.log (1)
}
for ( var i = 1; i < 2; i++) {
    console.log (111)
}
for ( var i = 1; i < 2; i++) {
    console.log (11111)
}
for ( var i = 1; i < 2; i++) {
    console.log (1111111)
}
for ( var i = 1; i < 2; i++) {
    console.log (111111111) 
}


var numbers = [9, 7, 9, 0, 7, 8, 387, 123, 456]
for (let i = 0; i < 10; i=i+2) {
	console.log (numbers[i]);

}var oddNumbers = numbers.filter (findOdd)
function findOdd (value) {
    if (value % 2 == 0) {
        return false;
}   else {
        return true;
    }
}
