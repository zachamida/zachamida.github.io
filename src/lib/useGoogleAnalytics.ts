import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as gtag from './gtag'

export const useGoogleAnalytics = () => {
  const pathname = usePathname()

  useEffect(() => {
    const url = pathname
    gtag.pageview(url)
  }, [pathname])
}
