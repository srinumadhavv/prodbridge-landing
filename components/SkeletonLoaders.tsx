'use client'

import { Skeleton } from "@/components/ui/skeleton"

// Feature Card Skeleton
export function FeatureCardSkeleton({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border ${
      isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-start space-x-4">
        <Skeleton className={`w-12 h-12 rounded-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />
        <div className="flex-1 space-y-3">
          <Skeleton className={`h-6 w-3/4 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          <Skeleton className={`h-4 w-full ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          <Skeleton className={`h-4 w-2/3 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
        </div>
      </div>
    </div>
  )
}

// FAQ Item Skeleton
export function FAQSkeleton({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={`p-6 rounded-xl border ${
      isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <div className="flex justify-between items-center">
        <Skeleton className={`h-6 w-3/4 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />
        <Skeleton className={`w-6 h-6 rounded ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />
      </div>
    </div>
  )
}

// Console Dashboard Skeleton
export function ConsoleSkeleton({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={`rounded-xl border shadow-2xl overflow-hidden ${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      {/* Header */}
      <div className={`px-4 py-3 border-b flex items-center justify-between ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex items-center space-x-3">
          <Skeleton className={`w-6 h-6 rounded ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`} />
          <Skeleton className={`h-5 w-32 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`} />
        </div>
        <Skeleton className={`h-5 w-20 ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
        }`} />
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            <Skeleton className={`h-6 w-1/2 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`} />
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Skeleton className={`w-6 h-6 rounded-sm ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`} />
                  <Skeleton className={`h-4 w-24 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Skeleton className={`h-6 w-1/3 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`} />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={`p-3 rounded border ${
                  isDarkMode ? 'border-gray-800' : 'border-gray-200'
                }`}>
                  <Skeleton className={`h-4 w-full mb-2 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`} />
                  <Skeleton className={`h-3 w-2/3 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Blog Post Card Skeleton
export function BlogCardSkeleton({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={`rounded-xl border overflow-hidden ${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <Skeleton className={`w-full h-48 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
      }`} />
      <div className="p-6 space-y-3">
        <Skeleton className={`h-6 w-3/4 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />
        <Skeleton className={`h-4 w-full ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />
        <Skeleton className={`h-4 w-2/3 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className={`h-4 w-20 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          <Skeleton className={`h-4 w-16 ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
        </div>
      </div>
    </div>
  )
}

// Navigation Skeleton
export function NavSkeleton({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <nav className={`px-6 py-4 border-b ${
      isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Skeleton className={`h-8 w-32 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />

        <div className="hidden md:flex items-center space-x-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className={`h-5 w-16 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`} />
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <Skeleton className={`h-9 w-20 rounded-md ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          <Skeleton className={`h-9 w-24 rounded-md ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
        </div>
      </div>
    </nav>
  )
}

// Hero Section Skeleton
export function HeroSkeleton({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <Skeleton className={`h-4 w-24 mx-auto mb-6 rounded-full ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`} />

        <div className="space-y-4 mb-8">
          <Skeleton className={`h-12 w-3/4 mx-auto ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          <Skeleton className={`h-12 w-2/3 mx-auto ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
        </div>

        <div className="space-y-3 mb-8 max-w-3xl mx-auto">
          <Skeleton className={`h-6 w-full ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          <Skeleton className={`h-6 w-4/5 mx-auto ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className={`h-12 w-36 rounded-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          <Skeleton className={`h-12 w-40 rounded-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
        </div>
      </div>
    </section>
  )
}

// Generic loading state for entire sections
export function SectionSkeleton({ isDarkMode, title = false }: { isDarkMode: boolean; title?: boolean }) {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className="text-center mb-12">
            <Skeleton className={`h-8 w-64 mx-auto mb-4 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`} />
            <Skeleton className={`h-5 w-96 mx-auto ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
            }`} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <FeatureCardSkeleton key={i} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </div>
  )
}