window.addEventListener('load', () =>{
    const form = document.querySelector("#formTask");
    const input = document.querySelector("#input");
    const list_el = document.querySelector("#tasks");
    
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;

        // if(!task){
        //     alert("please fill out the task");
        //     return;
        // }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_C_el = document.createElement("div");
        task_C_el.classList.add("content");
        //task_C_el.innerText = task;

         task_el.appendChild(task_C_el);

         const task_input = document.createElement("input");
         task_input.classList.add("text");
         task_input.type = "text";
         task_input.value = task;
         task_input.setAttribute("readonly" , "readonly");

         task_C_el.appendChild(task_input);

         const task_action = document.createElement("div");
         task_action.classList.add("action");
         
         const task_edit = document.createElement("button");
         task_edit.classList.add("edit");
         task_edit.innerHTML = 'Edit';

         const task_delete = document.createElement("button");
         task_delete.classList.add("delete");
         task_delete.innerHTML = 'Delete';

         task_action.appendChild(task_edit);
         task_action.appendChild(task_delete);

         task_el.appendChild(task_action);

        list_el.appendChild(task_el);

        input.value="";

        task_edit.addEventListener('click',(e) =>{
            if(task_edit.innerText.toLowerCase()=="edit"){
                task_edit.innerText = "Save";
                task_input.removeAttribute("readonly");
            }
            else{
                task_input.setAttribute("readonly","readonly");
                task_edit.innerText = "Edit";
            }
        });
        task_delete.addEventListener('click',(e) =>{
            list_el.removeChild(task_el);
        });
    })
})