import React, { useContext } from 'react'

import GlobalContext from '../context/GlobalContext'

const useGlobalContextHook = () => {
  return (
    useContext(GlobalContext)
  )
}

export default useGlobalContextHook