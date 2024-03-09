import inquirer from "inquirer";


let weightkg:any= await inquirer.prompt([{
 name:"weight",
type : "number",
message :"kindly enter your weight"

}])

let heightmeter:any = await inquirer.prompt([{
    name :"height",
    type: "number",
    message : "now kindly enter you height in meters"
}])

let bmi=( weightkg.weight/(heightmeter.height*heightmeter.height))

console.log(`your bmi is ${bmi}`)

// let weight:number= 45
// let height:number= 1.75
// console.log(weight/(height*height))