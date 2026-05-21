// rest ოპერატორი გამოიყენება იმისთვის რომ რამდენიმე მნიშვნელობა ერთ მასივში შევაგროვოთ

function sum(...nums) {
    return nums[0] + nums[1]
}

console.log(sum(5, 3))

//spread ოპერატორი გამოყენება იმისთვის რომ: დაშალო, გააერთიანო კოდები

let fruits = ['apple', 'banana']
let moreFruits = ['orange', 'grape']

let allFruits = [...fruits, ...moreFruits]
console.log(allFruits)

\