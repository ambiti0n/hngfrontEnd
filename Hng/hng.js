const inputBtn = document.getElementById("input-btn");
const roleEl = document.getElementById("role-el");
const nameEl = document.getElementById("name-el");
const eduEl = document.getElementById("edu-el");
const skillsEl = document.getElementById("skills-el");
const certEl = document.getElementById("cert-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
let myLeads = [];


 
inputBtn.addEventListener("click", function(){ 
    let fullName = nameEl.value
    let role = roleEl.value
    let skills = skillsEl.value
    let cert = certEl.value
    let edu = eduEl.value
  
    myLeads.push(fullName,role,skills,cert,edu)
    nameEl.value = ""
    roleEl.value = ""
    skillsEl.value = ""
    certEl.value = ""
    eduEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads)
})

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

let deleteBtn = document.querySelector("#delete-btn");

deleteBtn.addEventListener("click", function(){
localStorage.clear();
myLeads = [];
render(myLeads);

});

function render(myleads){
    let listItems = "";
    for(let i = 0; i < myleads.length; i++){
        listItems =` 
             <li>
                    <h4>Name : ${myleads[0]} </h4>
             </li>
             <li>
                    <h4>Role : ${myleads[1]} </h4> 
             </li>
             <li>
                     <h4>Skills : ${myleads[2]} </h4>
             </li>
             <li>
                    <h4>Certifications : ${myleads[3]} </h4> 
             </li>
             <li>
                    <h4> Education : ${myleads[4]} </h4> 
             </li>
                ` 
    }
    ulEl.innerHTML = listItems;
    
}