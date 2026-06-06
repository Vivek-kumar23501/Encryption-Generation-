const env=import.meta.env

import axios from 'axios'

axios.defaults.baseURL=env.VITE_SERVER


const App=()=>{

  const reset=(e)=>{
    const result=document.getElementById('result')
    const form=document.getElementById('form')

    result.innerHTML="your encrypted text here"
    form.reset()
    

  }



const generate= async (e)=>{
  try {
    e.preventDefault()
  const form =e.target
  const result =document.getElementById("result")
  
  const payload={
    data:form[0].value
  }

 const {data}= await axios.post("/",payload)
 console.log(data)
 result.innerHTML=data.data 
  
    
  } catch (err) {
    alert(err.message)

    
    
  }
}


return(
<div className="bg-gray-300 h-screen flex justify-center items-center" >
  <div className="bg-white p-8 shadow-lg w-87.5 rounded-xl  space-y-8">

    <h1 className=" text-2xl  font-bold "  >Bcrypt Generator</h1>

    <form  id="form" className="flex flex-col  gap-5" onSubmit={generate}>
    <input 
    required
    name="data"
    placeholder="enter string here" className="border p-3 rounded border-gray-300"/>

    <button  className="bg-indigo-600 py-3 px-8 text-white rounded " > Generate</button>

      <button   type ="button" onClick={reset} className="bg-rose-600 py-3 px-8 text-white rounded " > reset</button>

    </form>

    <div   id='result' className="text-white bg-green-400  px-6 py-3   break-all" > your encrypted here </div>


  </div>
</div>

)
}

export default App