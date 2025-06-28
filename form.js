let fetchData=async()=>{
    let url='http://localhost:3000/multiplex'
    let res= await fetch(url,{method:'GET'})
    let data=await res.json()
    DataShow(data)
}
   let searchh= async()=>{
      let searchinp=document.querySelector("#searchin").value.toLowerCase()
      let url='http://localhost:3000/multiplex'
      let res=await fetch(url)
      let data=await res.json()
      let FilterData=data.filter((e)=>{
        return e.name.toLowerCase().includes(searchinp)|| e.age.toString().includes(searchinp)
      })
      DataShow(FilterData)
   }
    let DataShow=(data)=>{

    
    let show=document.querySelector("#display")
    show.innerHTML=""
    data.map((e)=>{

        show.innerHTML+=`
        <tr>
        <td>${e.name} </td>
        <td>${e.age}</td>
        <td>${e.mobilno}</td>
        <td>${e.city}</td>
        <td>${e.date}</td>
        <td>${e.time}</td>
        <td>${e.seats}</td>
        <td>${ e.total *e.seats}</td>
        <td onclick="Del('${e.id}')">Delete</td>
        <td onclick="update('${e.id}')">update</td>

       </tr>

  `
    })
}
  let Del=(id)=>{
    let url =`http://localhost:3000/multiplex/${id}`
    fetch(url,{method:"DELETE"})
    
}
let insertData=()=>{
    let url='http://localhost:3000/multiplex'
    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name:document.querySelector("#name").value,
            age:document.querySelector("#age").value,
            mobilno:document.querySelector("#mobil").value,
            city:document.querySelector("#city").value,
            date:document.querySelector("#date").value,
            time:document.querySelector("#time").value,
            seats:document.querySelector("#seats").value,
            total:300
        })

    })
    
}
fetchData()

let update=async(id)=>{
    let url=''
}

     
        
        
        
        
        
        
        






