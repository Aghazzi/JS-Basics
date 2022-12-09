
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", " ")
}
const concatString = (text1, text2) => {
    return text1 + text2
}
const showChar5 = (text) => {
    return text[4]
}
const showChar9 = (text) => {
    return text.substring(0,9)
}
const toCapitals = (text) => {
    return text.toUpperCase()
}
const toLowerCase = (text) => {
    return text.toLowerCase()
}
const removeSpaces = (text) => {
    return text.trim()
}
const IsString = (text) => {
    return (typeof text==="string")
}

const getExtension = (text) => {
    x=text.split(".").pop()
    return x
}
const countSpaces = (text) => {
    return text.split(" ").length -1;
}
const InverseString = (text) => {
    return text.split("").reverse().join("")
}

const power = (x, y) => {
    return Math.pow(x, y)
}
const absoluteValue = (num) => {
    return Math.abs(num)
}
const absoluteValueArray = (array) => {
    return array.map((num) => Math.abs(num))
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius)
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac)
}
const BMI = (weight, height) => {
    let result = ( weight / (height*height))
    return +result.toFixed(2)
}

const createLanguagesArray = () => {
    let languages = "Html,CSS,Java,PHP"
    let arr = languages.split(",")
    return arr
}

const createNumbersArray = () => {
    let nombres = [0,1,2,3,4,5]
    return nombres
}

const replaceElement = (languages) => {
     languages[2] = "Javascript"
    return languages
}

const addElement = (languages) => {
    languages.push("Ruby", "Python")
    return languages
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1)
    return numbers
}

const removeFirst = (languages) => {
    languages.shift("HTML")
    return languages
}

const removeLast = (languages) => {
    languages.pop("Python")
    return languages
}

const convertStrToArr = (social_arr) => {
    let social = social_arr.split(",")
    return social
}

const convertArrToStr = (languages) => {
    let lang = languages.join(",")
    return lang
}

const sortArr = (social_arr) => {
    let social = social_arr.sort()
    return social
}

const invertArr = (social_arr) => {
    let social = social_arr.reverse()
    return social
}