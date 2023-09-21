import { createContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const refreshContext = createContext()

const RefreshContextProvider = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  const [refresh, setRefresh] = useState(false)
  const [localUser, setLocalUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    setRefresh(false)
    setLocalUser(JSON.parse(localStorage.getItem('user')))
  }, [refresh, user])

  const clearContext = () => {
    setLocalUser('')
    localStorage.removeItem('user')
  }

  return (
    <refreshContext.Provider value={{ refresh, setRefresh, localUser, clearContext }}>
      {children}
    </refreshContext.Provider>
  )
}

export default RefreshContextProvider
