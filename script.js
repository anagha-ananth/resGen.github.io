//hometoformbutton
document.getElementById("start-resume-creator").addEventListener("click", function() {
    window.location.href = "create_generator.html";
});

function addNewSKField()
{

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows','1');
    newNode.setAttribute('placeholder','Enter here');

    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);

}

function addNewAQField()
{

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows','1');
    newNode.setAttribute('placeholder','Enter here');

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

function addNewWEField()
{

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows','1');
    newNode.setAttribute('placeholder','Enter here');

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

//generating resume
function generateResume()
{
 
/*
    let nameField=
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
*/
    //direct personal info
    document.getElementById("nameT1").innerHTML=document.getElementById("nameField").value;
    document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("emailT").innerHTML=document.getElementById("mailField").value;
    //Social profile
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinField").value;
    //OBJECTIVE5
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    //acadimic quali
    let aqs = document.getElementsByClassName("aqField");
    let str = "";
    for(let e of aqs)
    {
        str +=`<li>${e.value}</li>`;
    }   
    document.getElementById("aqT").innerHTML=str;

    //skills
    let sks = document.getElementsByClassName("skField");
    let str1 = "";
    for(let e of sks)
    {
        str1 += `<li>${e.value}</li>`;
    }   
    document.getElementById("skT").innerHTML=str1;

    //we
    let wes = document.getElementsByClassName("weField");
    let str2 = "";
    for(let e of wes)
    {
        str2 += `<li>${e.value}</li>`;
    }   
    document.getElementById("weT").innerHTML=str2;

    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
}

//print resume
function printResume(){
    window.print();
}