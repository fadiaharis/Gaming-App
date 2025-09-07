'use client'

import { useCallback, useEffect, useState } from 'react'

export function useHashModal() {
  const [modal, setModal] = useState<'signin' | 'signup' | null>(null)

  const sync = useCallback(() => {
    if (typeof window === 'undefined') return
    const h = window.location.hash.replace('#', '')
    if (h === 'signin' || h === 'signup') setModal(h)
    else setModal(null)
  }, [])

  useEffect(() => {
    sync()
    const onHash = () => sync()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [sync])

  const close = useCallback(() => {
    if (typeof window === 'undefined') return
    history.replaceState(null, '', window.location.pathname + window.location.search)
    setModal(null)
  }, [])

  return { modal, close }
}
