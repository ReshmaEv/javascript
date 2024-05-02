let a = "https://jsonplaceholder.typicode.com/users"

let fetchdata = async() =>{

    let response = await fetch(a)
    let data = await response.json()
    
   console.log(data);

   
   let newList = document.createElement("ul")
    
   
    data.map((p)=>{
        
         let list = document.createElement("li")
        list.textContent = p.name+ "-" + p.email+"-"+ p.username
    

            newList.appendChild(list)
    
        
        // newElement.innerHTML=p.name
        // newElement.innerHTML=p.email
        
    document.body.appendChild(newList)
        
    })
    

    
  
   



}

fetchdata()
