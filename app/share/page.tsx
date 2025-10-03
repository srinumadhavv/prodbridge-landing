'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Zap,
  Users,
  QrCode,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Sun,
  Moon,
  ArrowLeft,
  Calendar,
  UserCheck,
  Lock,
  Share2,
  Terminal,
  TrendingUp,
  Activity,
  Building2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function EphimeraSharePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-slate-50 to-white'
    }`}>
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl transition-colors duration-500 ${
          isDarkMode ? 'bg-purple-900/20' : 'bg-purple-200/30'
        }`} />
        <div className={`absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl transition-colors duration-500 ${
          isDarkMode ? 'bg-pink-900/20' : 'bg-pink-200/30'
        }`} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Left side - Back to Home */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDarkMode
                      ? 'from-purple-300 via-pink-300 to-purple-300'
                      : 'from-purple-700 via-pink-700 to-purple-700'
                  }`}>Share</span>
                  <span className={`text-sm ml-2 font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>By Ephimera</span>
                </span>
              </Link>
            </motion.div>

            {/* Right side - Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <motion.button
                onClick={toggleTheme}
                className={`relative flex items-center justify-center w-12 h-6 rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 shadow-[0_2px_8px_rgba(168,85,247,0.2)]'
                    : 'bg-gray-200 border-gray-300 hover:bg-gray-300 shadow-[0_2px_8px_rgba(168,85,247,0.15)]'
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
                      ? 'shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                      : 'shadow-[0_0_20px_rgba(236,72,153,0.4)]'
                  }`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className={`absolute w-5 h-5 rounded-full bg-gradient-to-r transition-all duration-300 flex items-center justify-center ${
                    isDarkMode
                      ? 'from-purple-500 to-pink-600 translate-x-3'
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
      <section className="relative z-10 px-6 py-20 lg:py-32 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Branding */}
              <div className="space-y-1">
                <div className={`inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase ${
                  isDarkMode ? 'text-gray-500' : 'text-slate-400'
                }`}>
                  <div className={`w-8 h-[1px] ${isDarkMode ? 'bg-gray-700' : 'bg-slate-300'}`}></div>
                  By Ephimera
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-none">
                  <span className={`bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-purple-400 via-pink-400 to-purple-500'
                      : 'from-purple-600 via-pink-600 to-purple-700'
                  } bg-clip-text text-transparent`}>
                    Share
                  </span>
                </h1>

                <div className="space-y-3">
                  <h2 className={`text-3xl lg:text-4xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Cloud Access in Seconds
                  </h2>

                  <div className={`flex flex-wrap gap-3 justify-center lg:justify-start ${
                    isDarkMode ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    <span className="inline-flex items-center gap-2 text-lg font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      No Setup
                    </span>
                    <span className="inline-flex items-center gap-2 text-lg font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      No Credentials
                    </span>
                    <span className="inline-flex items-center gap-2 text-lg font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Auto-Cleanup
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`text-lg lg:text-xl leading-relaxed max-w-xl ${
                isDarkMode ? 'text-gray-400' : 'text-slate-600'
              }`}>
                Give workshop attendees instant <span className={`font-semibold bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-purple-400 to-pink-400'
                    : 'from-purple-600 to-pink-600'
                } bg-clip-text text-transparent`}>cloud access</span> with a QR code. No setup required. Auto-cleanup when the session ends.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className={`px-8 py-6 text-lg rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'border-purple-500/50 text-purple-400 hover:bg-purple-500/10'
                    : 'border-purple-300 text-purple-700 hover:bg-purple-50'
                }`}>
                  Watch Demo
                </Button>
              </div>

              {/* Trust Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                isDarkMode
                  ? 'bg-green-500/10 border border-green-400/20 text-green-300'
                  : 'bg-green-50 border border-green-200 text-green-800'
              }`}>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Ready in 60 seconds</span>
              </div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isDarkMode
                    ? 'from-purple-500/20 via-pink-500/20 to-purple-500/20'
                    : 'from-purple-300/30 via-pink-300/30 to-purple-300/30'
                } rounded-full blur-3xl`} />

                {/* Animated Circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`absolute w-96 h-96 rounded-full border-2 ${
                    isDarkMode ? 'border-purple-500/30' : 'border-purple-400/40'
                  }`}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`absolute w-72 h-72 rounded-full border-2 ${
                    isDarkMode ? 'border-pink-500/30' : 'border-pink-400/40'
                  }`}
                />

                {/* Center QR Code */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`relative z-10 w-40 h-40 rounded-2xl bg-gradient-to-br ${
                    isDarkMode
                      ? 'from-purple-600 to-pink-600'
                      : 'from-purple-500 to-pink-500'
                  } p-0.5 shadow-2xl`}
                >
                  <div className={`w-full h-full rounded-2xl ${isDarkMode ? 'bg-white' : 'bg-slate-900'} p-4 flex items-center justify-center`}>
                    <div className="grid grid-cols-21 gap-[1px] w-full h-full">
                      {(() => {
                        // QR code pattern (21x21 grid)
                        const pattern = [
                          // Row 0-6: Top-left finder pattern
                          [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
                          [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
                          [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
                          [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1],
                          [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
                          [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
                          [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
                          [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
                          // Middle rows with data pattern
                          [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                          [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
                          [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                          [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
                          [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                          [0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0],
                          // Bottom rows with finder patterns
                          [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1],
                          [1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0],
                          [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1],
                          [1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0],
                          [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1],
                          [1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0],
                          [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1],
                        ];

                        return pattern.flat().map((pixel, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: i * 0.001,
                              type: "spring",
                              stiffness: 200
                            }}
                            className={`rounded-[0.5px] ${
                              pixel === 1
                                ? isDarkMode ? 'bg-slate-900' : 'bg-white'
                                : isDarkMode ? 'bg-white' : 'bg-slate-900'
                            }`}
                          />
                        ));
                      })()}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [-3, 3, -3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-10 right-4 px-5 py-3 rounded-2xl ${
                    isDarkMode ? 'bg-purple-500/20 border border-purple-400/30' : 'bg-purple-100 border border-purple-300'
                  } backdrop-blur-md shadow-xl`}
                >
                  <div className="flex items-center gap-2">
                    <Zap className={`w-5 h-5 ${isDarkMode ? 'text-purple-300' : 'text-purple-600'}`} />
                    <span className={`text-base font-semibold ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                      Instant
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [3, -3, 3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className={`absolute bottom-10 left-4 px-5 py-3 rounded-2xl ${
                    isDarkMode ? 'bg-pink-500/20 border border-pink-400/30' : 'bg-pink-100 border border-pink-300'
                  } backdrop-blur-md shadow-xl`}
                >
                  <div className="flex items-center gap-2">
                    <Shield className={`w-5 h-5 ${isDarkMode ? 'text-pink-300' : 'text-pink-600'}`} />
                    <span className={`text-base font-semibold ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>
                      Secure
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className={`absolute top-32 left-0 px-4 py-2 rounded-xl ${
                    isDarkMode ? 'bg-green-500/20 border border-green-400/30' : 'bg-green-100 border border-green-300'
                  } backdrop-blur-md shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${isDarkMode ? 'text-green-300' : 'text-green-600'}`} />
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-green-300' : 'text-green-700'}`}>
                      2h
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className={`relative z-10 px-6 py-20 lg:px-12 ${
        isDarkMode ? 'bg-slate-900/30' : 'bg-slate-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              How It Works
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Get started in under 60 seconds
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-1 ${
              isDarkMode ? 'bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500' : 'bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400'
            } hidden lg:block`} style={{ left: '50%', transform: 'translateX(-50%)' }} />

            <div className="space-y-12">
              {[
                {
                  step: '01',
                  icon: QrCode,
                  title: 'Create Your Session',
                  description: 'Name your event, set duration (1 hour to 7 days), choose cloud provider (AWS/Azure/GCP), and configure permissions. Click generate.',
                  time: '15 seconds',
                  align: 'left'
                },
                {
                  step: '02',
                  icon: Share2,
                  title: 'Share Access',
                  description: 'Display the QR code on your presentation, share the URL link, or announce the 6-digit session code. Participants can use any method.',
                  time: '5 seconds',
                  align: 'right'
                },
                {
                  step: '03',
                  icon: Clock,
                  title: 'Auto-Cleanup',
                  description: 'When your session ends, all credentials instantly expire. No manual revocation, no forgotten accounts, zero security risk.',
                  time: '0 seconds',
                  align: 'left'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className={`flex items-center gap-8 ${item.align === 'right' ? 'flex-row-reverse' : ''}`}>
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl font-bold text-white">{item.step}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <Card className={`p-8 border-2 ${
                        isDarkMode
                          ? 'bg-slate-800/50 border-purple-500/30'
                          : 'bg-white border-purple-200'
                      }`}>
                        <div className="flex items-start gap-6">
                          <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center`}>
                            <item.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className={`text-2xl font-bold ${
                                isDarkMode ? 'text-white' : 'text-slate-900'
                              }`}>
                                {item.title}
                              </h3>
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                                {item.time}
                              </Badge>
                            </div>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Share - Combined Section */}
      <section className={`relative z-10 px-6 py-20 lg:px-12 overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-br from-purple-950/20 to-pink-950/20' : 'bg-gradient-to-br from-purple-50/50 to-pink-50/50'
      }`}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Trusted by speakers worldwide
            </Badge>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Why Share?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              The fastest way to give cloud access without compromising security
            </p>
          </motion.div>

          {/* Use Cases */}
          <div className="mb-20">
            <h3 className={`text-2xl font-bold text-center mb-10 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Perfect For Every Event
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Calendar,
                  title: 'Conference Workshops',
                  description: 'Give attendees hands-on cloud access during technical sessions without the hassle of credential distribution.',
                  stats: ['2-hour sessions', 'Up to 500 participants', 'Live demos'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Terminal,
                  title: 'Training Programs',
                  description: 'Provide students with temporary AWS/Azure/GCP access for practical exercises that expire when class ends.',
                  stats: ['Custom durations', 'Full audit logs', 'Multi-cloud'],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Share2,
                  title: 'Product Demos',
                  description: 'Let prospects experience your cloud solution live without sharing long-term credentials or creating accounts.',
                  stats: ['Instant access', 'Revoke anytime', 'Zero setup'],
                  color: 'from-pink-500 to-rose-500'
                },
                {
                  icon: UserCheck,
                  title: 'Team Training',
                  description: 'Onboard new team members with sandbox environments that automatically clean up after training sessions.',
                  stats: ['Role-based access', 'Zero cleanup', 'Auto-expire'],
                  color: 'from-indigo-500 to-purple-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className={`p-6 h-full border relative overflow-hidden group ${
                    isDarkMode
                      ? 'bg-slate-900/70 border-slate-700/50 hover:border-purple-500/50'
                      : 'bg-white/90 border-slate-200 hover:border-purple-400'
                  } backdrop-blur-sm transition-all duration-300`}>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}>
                        <item.icon className="h-7 w-7 text-white" />
                      </div>

                      <h3 className={`text-xl font-bold mb-3 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h3>

                      <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.stats.map((stat, idx) => (
                          <Badge key={idx} variant="outline" className={`text-xs ${
                            isDarkMode ? 'border-purple-500/30 text-purple-300' : 'border-purple-300 text-purple-700'
                          }`}>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {stat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'QR Code Access',
                'Auto-Cleanup',
                'Multi-Cloud',
                'Secure by Default',
                'No Setup Required',
                'Instant Access'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-6 py-3 rounded-full border-2 ${
                    isDarkMode
                      ? 'border-purple-500/30 bg-purple-500/10 text-purple-300'
                      : 'border-purple-300 bg-purple-50 text-purple-700'
                  } font-medium`}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Traditional vs <span className={`bg-gradient-to-r ${
                isDarkMode
                  ? 'from-purple-400 via-pink-400 to-purple-500'
                  : 'from-purple-600 via-pink-600 to-purple-700'
              } bg-clip-text text-transparent`}>Share</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              See how Share eliminates the hassle of traditional credential sharing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`overflow-hidden rounded-2xl border-2 ${
              isDarkMode ? 'border-purple-500/30' : 'border-purple-300'
            }`}>
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Traditional Method</th>
                    <th className="px-6 py-4 text-center font-bold">Share</th>
                  </tr>
                </thead>
                <tbody className={isDarkMode ? 'bg-slate-900/50' : 'bg-white'}>
                  {[
                    { feature: 'Setup Time', traditional: '30-60 minutes', ephimera: '< 1 minute', winner: 'ephimera' },
                    { feature: 'Account Creation', traditional: 'Required for each user', ephimera: 'None', winner: 'ephimera' },
                    { feature: 'Credential Distribution', traditional: 'Email/Slack/Manual', ephimera: 'QR Code', winner: 'ephimera' },
                    { feature: 'Cleanup', traditional: 'Manual deletion', ephimera: 'Auto-expire', winner: 'ephimera' },
                    { feature: 'Security Risk', traditional: 'Forgotten credentials', ephimera: 'Zero risk', winner: 'ephimera' },
                    { feature: 'Scalability', traditional: 'Limited', ephimera: '1000+ users', winner: 'ephimera' }
                  ].map((row, index) => (
                    <tr key={index} className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {row.feature}
                      </td>
                      <td className={`px-6 py-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                        {row.traditional}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-2 font-semibold ${
                          isDarkMode ? 'text-purple-300' : 'text-purple-700'
                        }`}>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          {row.ephimera}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bridge to Ephimera for Organizations */}
      <section className={`relative z-10 px-6 py-16 lg:px-12 ${
        isDarkMode ? 'bg-slate-900/30' : 'bg-slate-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden rounded-xl p-8 lg:p-10 border-l-4 ${
              isDarkMode
                ? 'bg-slate-800/30 border-l-purple-500'
                : 'bg-white border-l-purple-600'
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div className="flex-1">
                <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  <Building2 className="w-3 h-3 mr-1" />
                  For Teams & Organizations
                </Badge>
                <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Need more than events?
                </h3>
                <p className={`text-base lg:text-lg ${
                  isDarkMode ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  For ongoing team-based cloud credential management, explore <span className={`font-semibold bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-purple-400 to-pink-400'
                      : 'from-purple-600 to-pink-600'
                  } bg-clip-text text-transparent`}>Grant</span> with team access control, enterprise security, and multi-cloud support.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                    Explore Grant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className={`p-8 lg:p-12 border-2 text-center ${
              isDarkMode
                ? 'bg-slate-900 border-purple-500/30'
                : 'bg-white border-purple-300'
            }`}>
              <div>
                <div className={`inline-block px-6 py-2 rounded-full mb-6 ${
                  isDarkMode
                    ? 'bg-green-500/20 border border-green-500/30'
                    : 'bg-green-100 border border-green-300'
                }`}>
                  <span className={`text-sm font-bold ${
                    isDarkMode ? 'text-green-400' : 'text-green-700'
                  }`}>
                    100% FREE • NO CREDIT CARD
                  </span>
                </div>

                <h2 className={`text-4xl lg:text-5xl font-black mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Start Running Workshops
                  <br />
                  <span className={`bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-purple-400 via-pink-400 to-purple-500'
                      : 'from-purple-600 via-pink-600 to-purple-700'
                  } bg-clip-text text-transparent`}>
                    In Minutes
                  </span>
                </h2>

                <p className={`text-lg mb-10 max-w-2xl mx-auto ${
                  isDarkMode ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  Perfect for educators, trainers, and workshop leaders
                </p>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto mb-1.5 flex items-center justify-center border-2 ${
                        isDarkMode
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-purple-600 bg-purple-100'
                      }`}>
                        <span className={`text-lg font-bold ${
                          isDarkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>2</span>
                      </div>
                      <div className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                        Sessions/Month
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto mb-1.5 flex items-center justify-center border-2 ${
                        isDarkMode
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-purple-600 bg-purple-100'
                      }`}>
                        <span className={`text-lg font-bold ${
                          isDarkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>25</span>
                      </div>
                      <div className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                        Participants
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto mb-1.5 flex items-center justify-center border-2 ${
                        isDarkMode
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-purple-600 bg-purple-100'
                      }`}>
                        <span className={`text-lg font-bold ${
                          isDarkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>3hr</span>
                      </div>
                      <div className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                        Per Session
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 self-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-slate-500'}`}>
                  Start in 60 seconds • No commitment • Cancel anytime
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 px-6 py-12 border-t ${
        isDarkMode ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-white/50'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>
            © 2025 Ephimera. Built with ❤️ for the developer community.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <Link href="/" className={`hover:underline ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Grant
            </Link>
            <Link href="/features" className={`hover:underline ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Features
            </Link>
            <Link href="/blog" className={`hover:underline ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
