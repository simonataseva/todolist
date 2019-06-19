import React from "react"
import Equipment from "./Equipment.js"
import equipmentData from "./footballEquipment.js"

function App() {
  const equipmentComponents = equipmentData.map(item => <Equipment key={item.id} equipment={item}/>)
    
  return (
      <div>
        {equipmentComponents}  
      </div>
  )
}

export default App
