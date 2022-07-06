import React from 'react'

export default function App() {
  const [formData, setFormData] = React.useState ("")
  const [formDataList, setFormDataList] = React.useState (["Allie", "Rob"])
  const orderList = formDataList.map((name, index) => {
      return (
          <li key={index}>{name}</li>
      )
  })      
  function handleChange(event) {
     setFormData(event.target.value)     
  }
  
    function handleSubmit(event) {
      event.preventDefault()
      setFormDataList(prevFormDataList =>[...prevFormDataList, formData])   
  }
  console.log(formData)
  
  return(
  <div>    
  <form onSubmit={handleSubmit} className="form">
  
          <input
          type="text"
          placeholder="Names"
          onChange={handleChange}
          name="names"
          value={formData.names}
          />
          
      <br />
      <h1>{formData}</h1>
      
      <button className='button'>add new name</button>
      <ul>
          {orderList}
      </ul>
          
      </form>
       
     </div> 
  )
}