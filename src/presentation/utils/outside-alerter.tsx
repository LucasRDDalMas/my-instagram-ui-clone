import { useEffect } from 'react'

export function useOutsideAlerter (ref: React.MutableRefObject<any>, callback: () => void): void {
  useEffect(() => {
    /* istanbul ignore next */
    function handleClickOutside (event: any): void {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
