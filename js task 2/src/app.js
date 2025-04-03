// let a=[1,2,3,4,5];
// let b=[4,5,6,7,8,9];
// let c = ortaqel();
// function ortaqel() {
//     return a.filter(k => b.includes(k));


// }
// console.log(c);

// for (let v = 0; v < c.length; v++) {
//     if (c[v] % 2 == 0) {
//     console.log("cutdur")
// } 
// else {
//     console.log("tekdir")
//     }
// }

// Artan sira
let a = [0, 2, 4, 5, 7, -1, -4, -5, -20, -6, -100, -98, -12];
let c = []
for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        c.push(a[i])
    }
    c.sort((a, b) => b - a)
}
console.log (c)