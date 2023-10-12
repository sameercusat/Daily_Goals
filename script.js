const title = document.getElementById("title");
const desc = document.getElementById("desc");
const form =document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showAllTasks();

function showAllTasks()
{
    tasks.forEach((value,index) => 
    {
        const div =document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv=document.createElement("div");
        div.append(innerDiv);
        const p=document.createElement("p");
        p.innerText=value.title;
        innerDiv.append(p);
        const de=document.createElement("span");
        de.innerText=value.description;
        innerDiv.append(de);
        const btn =document.createElement("button");
        btn.setAttribute("class","debtn");
        btn.innerText="-";
        btn.addEventListener('click',() =>
        {
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTasks();
        }); 
        div.append(btn);
        container.append(div);
    })
}
function removeTasks()
{
    tasks.forEach(() =>{
        const div =document.querySelector(".task");
        div.remove();
        //showAllTasks();
    })
};
 
form.addEventListener('submit',(e) =>
{
    e.preventDefault();
    removeTasks();
    tasks.push({title: title.value, description: desc.value});
    localStorage.setItem("tasks",JSON.stringify(tasks));
    console.log(tasks);
    showAllTasks();
});
