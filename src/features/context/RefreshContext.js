import { createContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const refreshContext = createContext()

const RefreshContextProvider = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  const { allThreads, isLoading } = useSelector((state) => state.threads)
  const [refresh, setRefresh] = useState(false)
  const [localUser, setLocalUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    setRefresh(isLoading)
    setLocalUser(JSON.parse(localStorage.getItem('user')))
  }, [refresh, user, allThreads])

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
