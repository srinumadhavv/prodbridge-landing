'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Tag,
  BookOpen
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '../blogPosts'

export default function BlogDetailPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const post = blogPosts.find(p => p.id === id)

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

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'
      }`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-violet-500 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-white">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }

      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-white">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }

      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <div key={index} className="font-semibold mb-3 text-violet-400">
            {paragraph.replace(/\*\*/g, '')}
          </div>
        )
      }

      if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className={`ml-4 mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-slate-700'
          }`}>
            {paragraph.replace('- ', '')}
          </li>
        )
      }

      if (paragraph.startsWith('| ')) {
        return (
          <div key={index} className="my-4">
            <div className={`bg-slate-800/50 rounded-lg p-4 font-mono text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-slate-700'
            }`}>
              {paragraph}
            </div>
          </div>
        )
      }

      if (paragraph.trim() === '') {
        return <div key={index} className="mb-4"></div>
      }

      return (
        <p key={index} className={`mb-4 leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-slate-700'
        }`}>
          {paragraph}
        </p>
      )
    })
  }

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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/blog" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg font-medium">Back to Blog</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
                }`}
              >
                Home
              </Link>

              <motion.button
                onClick={toggleTheme}
                className={`relative flex items-center justify-center w-12 h-6 rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/10 border-white/20 hover:bg-white/20'
                    : 'bg-gray-200 border-gray-300 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <motion.div
                  className={`absolute w-5 h-5 rounded-full bg-gradient-to-r transition-all duration-300 flex items-center justify-center ${
                    isDarkMode
                      ? 'from-blue-500 to-purple-600 translate-x-3'
                      : 'from-yellow-400 to-orange-500 -translate-x-3'
                  }`}
                  layout
                >
                  <motion.div
                    key={isDarkMode ? 'moon' : 'sun'}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
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

      {/* Article Content */}
      <article className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className={`w-16 h-16 rounded-2xl p-4 mb-8 ${
              post.category === 'Security' ? 'bg-red-500/20 text-red-400' :
              post.category === 'Technical' ? 'bg-blue-500/20 text-blue-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              <post.icon className="w-8 h-8" />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
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

            <h1 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              {post.title}
            </h1>

            <p className={`text-lg lg:text-xl leading-relaxed mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-slate-700'
            }`}>
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
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
          </motion.div>

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`prose prose-lg max-w-none ${
              isDarkMode
                ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300'
                : 'prose-slate'
            }`}
          >
            <div className="article-content">
              {formatContent(post.content)}
            </div>
          </motion.div>

          {/* Back to Blog Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <Link
              href="/blog"
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                isDarkMode
                  ? 'bg-violet-600 hover:bg-violet-500 text-white'
                  : 'bg-violet-600 hover:bg-violet-700 text-white'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Back to All Posts</span>
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  )
}