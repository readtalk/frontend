import { useEffect } from 'react'

const useTheme = (theme?: 'dark' | 'light') => {
  useEffect(() => {
    const html = document.querySelector('html')
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')

    
    if (theme === 'dark') {
      html?.classList.add('dark')
    } else if (theme === 'light' && html?.classList.contains('dark')) {
      html.classList.remove('dark')
    }

    
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff')
    }
  }, [theme])
}

export default useTheme
