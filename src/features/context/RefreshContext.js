import { createContext, useState, useEffect } from 'react'

export const refreshContext = createContext()

const RefreshContextProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false)
  const [localUser, setLocalUser] = useState('')

  useEffect(() => {
    setRefresh(false)
    setLocalUser(JSON.parse(localStorage.getItem('user')))
  }, [refresh])

  return (
    <refreshContext.Provider value={{ refresh, setRefresh, localUser }}>
      {children}
    </refreshContext.Provider>
  )
}

export default RefreshContextProvider
