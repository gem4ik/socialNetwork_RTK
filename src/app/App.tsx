import React, { useEffect } from "react"
import { Login } from "features/auth/ui/Login"
import { Users } from "features/users/ui/Users"

function App() {

  useEffect(() => {

  }, [])

  return (
    <div>
      <Login />
      ---------------------------------------------------
      <Users />
    </div>
  )
}

export default App