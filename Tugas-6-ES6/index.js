//soal 1
{
let a=5,b=7;
luas=(a,b)=> console.log(a*b)
luas(a,b);
keliling=(a,b)=>console.log((a+b)*2)
keliling(a,b);
}

//soal 2
{
newFunction = (firstName,lastName)=>{
    return{
        firstName,
        lastName,
        fullName:()=>{
          console.log(firstName+' '+lastName);
        }
    }
}
newFunction("William", "Imoh").fullName() 
}

//soal 3
{
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }

let {firstName, lastName, address, hobby}=newObject
console.log(firstName, lastName, address, hobby)  
}

//soal 4
{
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined=[...west,...east]
console.log(combined)
}

//soal 5
{
const planet = "earth" 
const view = "glass"
let after= `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`
console.log(after)
}