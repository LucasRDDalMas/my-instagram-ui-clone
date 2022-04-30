import { useEffect } from 'react'

export function useOutsideAlerter (ref: React.MutableRefObject<any>, callback: () => void): void {
  useEffect(() => {
    function handleClickOutside (event: any): void {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('file: outside-alerter.tsx ~ line 7 ~ handleClickOutside ~ event.target', event.target)
        console.log('file: outside-alerter.tsx ~ line 7 ~ handleClickOutside ~ ref.current', ref.current)
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
