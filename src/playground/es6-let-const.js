var nameVar = 'Deno';
var nameVar= 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
console.log('nameConst',nameConst);

const fullName = 'Deno Jordaan';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);