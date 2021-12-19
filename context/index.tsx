import { useState, useCallback, createContext, useContext } from 'react'

import { AppContextProps, INITIAL_STATE, userData } from './context.types'

const AppCopntenxt = createContext<AppContextProps>(INITIAL_STATE)

const AppContenxtProvider = (props: any) => {
  const { children } = props
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE.isLoggedIn)
  const [activeUser, setActiveUser] = useState(INITIAL_STATE.activeUser)

  const handleActiveUser = useCallback((newUser: userData) => {
    setActiveUser(newUser)
  }, [])

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true)
  }, [isLoggedIn])

  return (
    <AppCopntenxt.Provider value={{ isLoggedIn, handleLogin, handleActiveUser, activeUser }}>
      { children }
    </AppCopntenxt.Provider>
  )
}

const customUseContext = () => useContext(AppCopntenxt)

export { AppContenxtProvider, customUseContext }
