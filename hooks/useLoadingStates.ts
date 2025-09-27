'use client'

import { useState, useEffect } from 'react'

interface LoadingStates {
  features: boolean
  techStack: boolean
  uiPreview: boolean
  problemSolution: boolean
  faq: boolean
  cta: boolean
  hero: boolean
  navigation: boolean
}

export function useLoadingStates() {
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    features: true,
    techStack: true,
    uiPreview: true,
    problemSolution: true,
    faq: true,
    cta: true,
    hero: true,
    navigation: true,
  })

  useEffect(() => {
    // Simulate different loading times for different sections with staggered approach
    const timers = [
      setTimeout(() => setLoadingStates(prev => ({ ...prev, navigation: false })), 100),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, hero: false })), 200),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, features: false })), 300),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, techStack: false })), 400),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, uiPreview: false })), 500),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, problemSolution: false })), 600),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, faq: false })), 700),
      setTimeout(() => setLoadingStates(prev => ({ ...prev, cta: false })), 800),
    ]

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  const setLoading = (section: keyof LoadingStates, isLoading: boolean) => {
    setLoadingStates(prev => ({ ...prev, [section]: isLoading }))
  }

  return { loadingStates, setLoading }
}