// object literal

const salon = {
    name: "Barksies",
    number: "301-301-1100",
    address:{
        street: "Street Ave",
        number: "111"
    },
    Hours:{
        days:"Mon-Fri",
        Open:"9:00 am",
        Close: "5:00 pm"
    },
    pets:[]
}

console.log(salon);

let {name,phone,address:{street,number},Hours:{days,Open,Close}}= salon;
var c=0;
class Pet{
    constructor(petName,age,gender,breed,service,ownerName,ownerContact){
        this.petName=petName;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.ownerContact=ownerContact;
        this.hunger=10;
        this.happiness=5;
        this.id='pet'+c;
        c+=1;
    }
    ownerInfo = function(){
        console.log("OwnerName:" + this.ownerName + "\n" + "Contact phone:" + this.ownerContact);
    }
    feed = function(){
        this.hunger-=5;
        this.happiness+=5;
        console.log("Feeding.." + this.petName);

    }
    status = function(){
        console.group("Hunger:" + this.hunger + "\n" + "Happiness:" + this.happiness);

    }
}

const pet1 = new Pet("Scooby",12,"male","Woofer","bath","Shaggy","321-654-1234");
const pet2 = new Pet("Woofie",1,"female","Doggo","hose","Mike","231-222-1234");
const pet3 = new Pet("Ringo",9,"female","Barker","Cut","Dave","111-222-3333");


/** 
pet1.ownerInfo();
pet2.ownerInfo();

console.log(pet1);
console.log(pet2);
console.log(pet3);

pet1.feed();
pet1.status();
*/
salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);



function register(){

/** 
    var textname = $("#txtname").val();
    var textage= $("#txtage").val();
    var textgender= $("#txtgender").val();
    var textbreed= $("#txtbreed").val();
    var textservice= $("#txtservice").val();
    var textownername= $("#txtOname").val();
    var textownercontact= $("#txtOContact").val();
*/
    var textname= document.getElementById("txtname").value;
    var textage= document.getElementById("txtage").value;
    var textgender= document.getElementById("txtgender").value;
    var textbreed= document.getElementById("txtbreed").value;
    var textservice= document.getElementById("txtservice").value;
    var textownername= document.getElementById("txtOname").value;
    var textownercontact= document.getElementById("txtOContact").value;


    const thePet = new Pet(textname,textage,textgender,textbreed,textservice,textownername,textownercontact);
    salon.pets.push(thePet);
    alert("You registerd a new pet.");
    display(thePet);
    clear();
}


function clear(){
    textname="";
    textage="";
    textgender="";
    textbreed="";
    textservice="";
    textownername="";
    textownercontact="";
}

function display(aPet){
    var tbody= document.getElementById('rowPet');

    var row = `<tr id= '${aPet.id}'>
                    <td> ${aPet.petName}</td>
                    <td> ${aPet.age}</td>
                    <td> ${aPet.gender}</td>
                    <td> ${aPet.breed}</td>
                    <td> ${aPet.service}</td>
                    <td> ${aPet.ownerName}</td>
                    <td> ${aPet.ownerContact}</td>
                    <td><button onclick="deletePet('${aPet.id}')">Delete</button></td>
    
            </tr>`;

    tbody.innerHTML+=row;

}

/** */
display(pet1);
display(pet2);
display(pet3);

function deletePet(petId){
    var tr = document.getElementById(petId);
    var indexDelete;

    //search the pet using id

    for(var i =0;i<salon.pets.length;i++){
        var selected = salon.pets [i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    salon.pets.splice(indexDelete,1);
    tr.remove();
}
// document.querySelector('.info').innerHTML =`Contact us${phone}, ${street}, ${number} <br> It's open from ${open} to ${close}`;

function Search(){
    var ss = document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();
    console.log(searchString);
    for(var j=0;j<salon.pets.length;j++){
        var searchPet=salon.pets[j];
        if(searchString==searchPet.petName.toLowerCase() || searchString==searchPet.id){
            thePet=j;
            document.getElementById('pet' + j).setAttribute('class','selected');
        }

    }

}