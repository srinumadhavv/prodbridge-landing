'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Tag,
  BookOpen,
  ExternalLink
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from './blogPosts'

export default function BlogPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const categories = ["All", "Security", "Technical", "Strategy"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-slate-900'
    }`}>
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Left side - Logo and Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode
                      ? 'from-violet-200 via-purple-300 to-indigo-200'
                      : 'from-violet-700 via-purple-800 to-indigo-700'
                  }`}>EPH</span>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent font-light text-3xl relative -top-0.5 ${
                    isDarkMode
                      ? 'from-violet-300 via-purple-200 to-violet-100'
                      : 'from-violet-600 via-purple-700 to-violet-800'
                  }`}>i</span>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode
                      ? 'from-purple-200 via-indigo-300 to-violet-200'
                      : 'from-purple-700 via-indigo-800 to-violet-700'
                  }`}>MERA</span>
                  <span className="text-sm ml-2 font-medium">Blog</span>
                </span>
              </Link>
            </motion.div>

            {/* Right side - Navigation Links and Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              {/* Navigation Links */}
              <Link
                href="/compare"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                }`}
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Compare
              </Link>

              <Link
                href="/features"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                }`}
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Features
              </Link>
              <motion.button
                onClick={toggleTheme}
                className={`relative flex items-center justify-center w-12 h-6 rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                    : 'bg-gray-200 border-gray-300 hover:bg-gray-300 shadow-[0_2px_8px_rgba(99,102,241,0.15)]'
                }`}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, -2, 2, 0],
                  transition: {
                    scale: { type: "spring", stiffness: 400, damping: 15 },
                    rotate: { duration: 0.3, ease: "easeInOut" }
                  }
                }}
                whileTap={{
                  scale: 0.92,
                  rotate: isDarkMode ? -10 : 10,
                  transition: { duration: 0.1 }
                }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? 'shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                      : 'shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  }`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className={`absolute w-5 h-5 rounded-full bg-gradient-to-r transition-all duration-300 flex items-center justify-center ${
                    isDarkMode
                      ? 'from-blue-500 to-purple-600 translate-x-3'
                      : 'from-yellow-400 to-orange-500 -translate-x-3'
                  }`}
                  layout
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: {
                      scale: { type: "spring", stiffness: 300 },
                      rotate: { duration: 0.6, ease: "easeInOut" }
                    }
                  }}
                >
                  <motion.div
                    key={isDarkMode ? 'moon' : 'sun'}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {isDarkMode ? (
                      <span className="text-white text-xs">🌙</span>
                    ) : (
                      <span className="text-white text-xs">☀️</span>
                    )}
                  </motion.div>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Badge className="mb-4 bg-violet-500/10 text-violet-400 border-violet-500/50">
              <BookOpen className="w-3 h-3 mr-1" />
              Technical Blog
            </Badge>
            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Secure Production{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-violet-400 via-purple-400 to-indigo-400'
                  : 'from-violet-600 via-purple-600 to-indigo-600'
              }`}>
                Insights
              </span>
            </h1>
            <p className={`text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Deep dives into secure production access, external team management, and modern DevOps practices.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? isDarkMode
                      ? 'bg-violet-500 text-white'
                      : 'bg-violet-600 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                    : 'bg-gray-200 text-slate-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid gap-8">
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ delay: index * 0.1 }}
                    className={`backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 group cursor-pointer ${
                      isDarkMode
                        ? 'bg-white/5 border border-white/10 hover:bg-white/8'
                        : 'bg-white/70 border border-gray-200/60 hover:bg-white/90 shadow-[0_4px_20px_0_rgba(71,85,105,0.08)] hover:shadow-[0_8px_32px_0_rgba(71,85,105,0.12)]'
                    }`}
                  >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Article Icon */}
                    <div className={`w-16 h-16 rounded-2xl p-4 flex-shrink-0 ${
                      post.category === 'Security' ? 'bg-red-500/20 text-red-400' :
                      post.category === 'Technical' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      <post.icon className="w-8 h-8" />
                    </div>

                    {/* Article Content */}
                    <div className="flex-1">
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>
                            {post.author}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>
                            {post.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title and Excerpt */}
                      <h2 className={`text-2xl lg:text-3xl font-bold mb-4 group-hover:text-violet-400 transition-colors ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                        {post.title}
                      </h2>

                      <p className={`text-base lg:text-lg leading-relaxed mb-6 ${
                        isDarkMode ? 'text-gray-300' : 'text-slate-700'
                      }`}>
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className={`text-xs ${
                              isDarkMode
                                ? 'border-white/20 text-gray-300 hover:bg-white/10'
                                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Read More Arrow */}
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`p-2 rounded-full ${
                          isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'
                        }`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                  </motion.article>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}