const toCamelCase = (str) => {
    let strArr = str.split(/[-_]/)
    let finalArr = []
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i]
        if (i > 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        finalArr.push(word)
    }
    return finalArr.join('')
}

console.log(toCamelCase("the_stealth_warrior")) // theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior")) // TheStealthWarrior
