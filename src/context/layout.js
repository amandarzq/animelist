import { createContext, useState, useEffect } from 'react';

export const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [desktopView, setDesktopView] = useState(false)

  useEffect(() => {
    const hideFooterMenu = () => {
      if (window.innerWidth > 768 && desktopView) {
       setDesktopView(false)
      }
      else {
        setDesktopView(true)
      }
    }

    window.addEventListener('resize', hideFooterMenu)

    return () => {
      window.removeEventListener('resize', hideFooterMenu)
    }
  }, [desktopView])

  return (
    <LayoutContext.Provider
      value={{desktopView}}>
      {children}
    </LayoutContext.Provider>
  );
}
