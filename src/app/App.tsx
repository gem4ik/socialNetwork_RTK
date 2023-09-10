import React, { useEffect } from "react"
import { dialogsAPI } from "features/dialogs/api/dialogsAPI"

function App() {

  useEffect(()=>{
    dialogsAPI.sortByData(27035, '2023-09-10T17:25:10.323')
      .then(res => {
        console.log(res)
      })
  },[])


  return (
    <div>
      ng
    </div>
  )
}

export default App