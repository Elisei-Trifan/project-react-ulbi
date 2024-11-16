/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

export function useObserver(ref, canLoad, isLoading, callback) {
  const observer = useRef
  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    const callb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(callb)
    observer.current.observe(ref.current)
  }, [isLoading])
}
