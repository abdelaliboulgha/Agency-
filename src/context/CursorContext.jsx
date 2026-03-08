import { createContext, useContext, useState } from 'react'

const CursorContext = createContext({
  isHovering: false,
  setIsHovering: () => {},
})

export function CursorProvider({ children }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  return useContext(CursorContext)
}
