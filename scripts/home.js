console.log("home.js is connected with home.html")

const btnAll = document.getElementById("btn-all");
const btnOpen = document.getElementById("btn-open");
const btnClosed = document.getElementById("btn-closed");


const cardContainer = document.getElementById("card-container");
const modalContainer = document.getElementById('modal-container');
const issueModal = document.getElementById('issue_modal');



// Date Converter Function
function createDate(createdAt){
    const date = new Date(createdAt);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    return(formattedDate); 
}

//Image Resource Locator
const statusImage = {
  open: "./assets/Open-Status.png",
  closed: "./assets/Closed- Status.png"
};

const btnActive =(id)=>{
    btnAll.classList.remove('btn-primary');
    btnOpen.classList.remove('btn-primary');
    btnClosed.classList.remove('btn-primary');

    id.classList.add("btn-primary");
}


//labels dynamic function
const labelIcons = {
  "bug": "fa-bug",
  "help wanted": "fa-life-ring",
  "enhancement": "fa-wand-magic-sparkles",
  "good first issue": "fa-star"
};


// MOdal Function
async function createModal(id){

    const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const data = await response.json();
    const issue = data.data;

    

    let priorityClass = "";
    if(issue.priority.toLowerCase() === "high") priorityClass = "high";
    else if(issue.priority.toLowerCase() === "medium") priorityClass = "medium";
    else priorityClass = "low";

    const labelsHTML = issue.labels.map(label => {

        const icon = labelIcons[label.toLowerCase()] || "fa-tag";

        return `
        <div class="badge border-2 ${label.replaceAll(" ","-")} flex items-center">
            <i class="fa-solid ${icon} text-xs"></i>
            ${label.toUpperCase()}
        </div>
        `;

    }).join("");

    const modalElement = document.createElement("div");
    modalContainer.innerHTML="";
    modalElement.classList.add("space-y-4","rounded-xl");

    modalElement.innerHTML = `

    <h2 class="font-semibold text-xl">${issue.title}</h2>

    <div class="flex items-center gap-4"> <div class="badge badge-success">${issue.status}</div>
    
    <div><ul class="flex gap-4 items-center list-disc list-inside text-xs text-gray-400"><li>Opened by  ${issue.author.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}</li><li>${createDate(issue.createdAt)}</li></ul></div></div>

     <div class="flex items-center text-xs gap-2">
        ${labelsHTML}
    </div>

    <p class="text-xs  text-[#64748B]">
        ${issue.description}
    </p>

<div class="bg-gray-200 p-4 flex justify-between rounded-xl">
   
    <div>
      <p>Assignee:</p>

      <h2 class="font-semibold">${issue.assignee?.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</h2>

      </div>

    <div>
       <p>Priority:</p>
        <div class="badge ${priorityClass} font-medium text-xs">
            ${issue.priority.toUpperCase()}
        </div>
    </div>

</div>

   <form method="dialog" class="text-right"><button class="btn btn-primary">Close</button>
    
    `;

    
    modalContainer.append(modalElement);

    issueModal.showModal();
}


// Display Issues
async function displayIssue(issues){

    cardContainer.innerHTML="";

    issues.forEach(issue => {
    
        const card= document.createElement("div");


    // Create badge Dynamic
    let priorityClass = ""; 
    if(issue.priority.toLowerCase() === "high") priorityClass = "high";
    else if(issue.priority.toLowerCase() === "medium") priorityClass = "medium";
    else priorityClass = "low";

    
 //Badge Image Dynamic
    card.classList.add("card","bg-white","p-4",
"rounded-md","border-t-5","open-border","space-y-3","cursor-pointer"
);

//Badge Dynamic

if(issue.status.toLowerCase()==="closed"){
 card.classList.add("closed-border");
 card.classList.remove("open-border");
}


//labels dynamic function call
const labelsHTML = issue.labels.map(label => {

  const icon = labelIcons[label.toLowerCase()] || "fa-tag";

  return `
  <div class="badge border-2 ${label.replaceAll(" ","-")} flex items-center">
      <i class="fa-solid ${icon} text-xs"></i>
      ${label.toUpperCase()}
  </div>
  `;

}).join("");

const imgSrc = statusImage[issue.status.toLowerCase()];






card.innerHTML=`
<div class="flex justify-between" cursor-pointer onclick="createModal(${issue.id})">
            <div><img  src="${imgSrc}" /></div>
            <div class="badge ${priorityClass}  font-medium text-xs">${issue.priority.toUpperCase()}</div>
          </div>
          <h2 class="font-semibold text-sm line-clamp-1">${issue.title}</h2>
          <p class="text-xs line-clamp-2 text-[#64748B]">
            ${issue.description}
          </p>
          <div class="flex items-center justify-left text-xs overflow-hidden whitespace-nowrap gap-2">
   ${labelsHTML}
</div>

          <div class="divider"></div>
          <p class="text-xs text-[#64748B] p-0">#${issue.id} by ${issue.author}</p>
          <p class="text-xs text-[#64748B]">${createDate(issue.createdAt)}</p>
`
cardContainer.appendChild(card);

    });
}

async function loadAllIssues(){
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data =  await response.json();
    displayIssue(data.data);
}

async function loadOpenIssues() {
    const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data =  await response.json();
    console.log("loadOpenIssues was loaded");
    const openIssues = data.data.filter((issue)=>issue.status==="open")
    displayIssue(openIssues);
}

btnAll.addEventListener("click",()=>{
    btnActive(btnAll);

    loadAllIssues();
})

btnOpen.addEventListener("click",()=>{
    btnActive(btnOpen);

    console.log("Open Button Was clicked");
    loadOpenIssues();

})

btnClosed.addEventListener("click",()=>{
    btnActive(btnClosed);
})

loadAllIssues();