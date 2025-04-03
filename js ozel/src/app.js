let a=[1,2,3,4,5,6,8];
let b=[4,5,6,7,8,9];
let c = ortaqel(a,b);
function ortaqel(a,b) {
    return a.filter(k => b.includes(k));
    
}
console.log(c);
for (let v = 0; v < c.length; v++) {
    if (v % 2 == 0) {
    console.log("cutdur")
} 
else {
    console.log("tekdir")
    }
}



// for (let k = 0; k < a.length; k++) {
//     for (let j = 0; j < b.length; j++) {

        
//     }
// }
