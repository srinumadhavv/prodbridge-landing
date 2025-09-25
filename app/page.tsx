'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Zap,
  Terminal,
  Database,
  Cloud,
  Lock,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  Search,
  Activity,
  Layers,
  Github,
  Twitter,
  Linkedin,
  Sun,
  Moon,
  ChevronDown,
  HelpCircle,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function LandingPage() {
  // Light mode hover effects added
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCloud, setSelectedCloud] = useState('aws')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    // Clear error when user starts typing
    if (emailError) {
      setEmailError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email
    if (!email) {
      setEmailError('Email address is required')
      return
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 4000)
    } catch (error) {
      setEmailError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC2, HIPAA compliant with end-to-end encryption",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Limited Access",
      description: "Automatic session expiry with granular permissions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Safe Database Access",
      description: "Query production data with automatic PII masking",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Live metrics, logs, and performance insights",
      color: "from-orange-500 to-red-500"
    }
  ]

  const stats = [
    { value: "28min", label: "Avg Debug Time", trend: "-76%" },
    { value: "25x", label: "Customer ROI", trend: "+340%" },
    { value: "99.9%", label: "System Uptime", trend: "SLA" },
    { value: "1000+", label: "Concurrent Sessions", trend: "Scale" }
  ]

  const faqs = [
    {
      question: "Why do I need Ephimera?",
      answer: "If you work with external teams (consultants, contractors, vendors, partners) who need to debug production issues, Ephimera solves critical problems: eliminating shared credentials, providing complete audit trails, automatic PII masking, and instant access that expires automatically. It turns a risky, manual process into a secure, streamlined workflow."
    },
    {
      question: "How secure is Ephimera compared to traditional SSH access?",
      answer: "Ephimera provides enterprise-grade security with automatic session recording, PII masking, and time-limited access. Unlike SSH, every action is logged and audited, with no direct server access or permanent credentials."
    },
    {
      question: "What compliance standards does Ephimera meet?",
      answer: "Ephimera is designed to meet SOC 2 Type II, HIPAA, and GDPR requirements. All sessions are encrypted end-to-end, with complete audit trails and automatic data masking for sensitive information."
    },
    {
      question: "How quickly can external teams start debugging?",
      answer: "Sessions are ready in under 30 seconds. Simply share a secure link, and external teams get immediate access to the specific resources they need without any setup or credential sharing."
    },
    {
      question: "Can I control what external teams can access?",
      answer: "Yes, you have granular control. Set specific permissions for databases, logs, metrics, and services. Access is automatically time-limited and expires based on your security policies."
    },
    {
      question: "Does Ephimera work with my existing cloud setup?",
      answer: "Ephimera supports AWS, Azure, and Google Cloud. It integrates seamlessly with your existing infrastructure without requiring changes to your current setup."
    },
    {
      question: "How is pricing structured?",
      answer: "Pricing details will be announced closer to launch in Q1 2026. Join our waitlist to be among the first to learn about our pricing tiers and early-bird discounts."
    }
  ]

  return (
    <div className={`min-h-screen overflow-hidden relative transition-colors duration-500 ${
      isDarkMode
        ? 'bg-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-slate-50/80 to-gray-100/60 text-slate-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base Layer */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isDarkMode
            ? 'bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20'
            : 'bg-gradient-to-br from-gray-100/40 via-slate-100/20 to-gray-100/30'
        }`} />

        {/* Animated Orbs */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDarkMode ? [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ] : [
              'radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
              'radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)',
              'radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary Animated Layer */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDarkMode ? [
              'radial-gradient(circle at 70% 30%, rgba(147, 51, 234, 0.08) 0%, transparent 40%)',
              'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 40%)',
              'radial-gradient(circle at 70% 30%, rgba(147, 51, 234, 0.08) 0%, transparent 40%)',
            ] : [
              'radial-gradient(circle at 65% 35%, rgba(71, 85, 105, 0.04) 0%, transparent 50%)',
              'radial-gradient(circle at 35% 65%, rgba(99, 102, 241, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 65% 35%, rgba(71, 85, 105, 0.04) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Interactive Mouse Layer */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${isDarkMode ? 'opacity-30' : 'opacity-20'}`}
          style={{
            background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, ${
              isDarkMode
                ? 'rgba(59, 130, 246, 0.15)'
                : 'rgba(99, 102, 241, 0.05)'
            } 0%, transparent 50%)`
          }}
        />

        {/* Subtle Noise Texture */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode ? 'opacity-5' : 'opacity-5'}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 transition-all duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-80'}`} style={{
          backgroundImage: isDarkMode
            ? `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`
            : `linear-gradient(rgba(71, 85, 105, 0.06) 1px, transparent 1px),
               linear-gradient(90deg, rgba(71, 85, 105, 0.06) 1px, transparent 1px)`,
          backgroundSize: isDarkMode ? '50px 50px' : '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            {/* Ephimera Logo - Elegant Dissolving Particles */}
            <motion.div
              className="relative w-11 h-11"
              whileHover={{
                scale: 1.05,
                transition: {
                  scale: { type: "spring", stiffness: 400, damping: 25 }
                }
              }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
            >
              {/* Main container with elegant rounded corners */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-3xl shadow-xl" />

              {/* Ephemeral particle design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <svg width="30" height="30" viewBox="0 0 40 40" className="text-white">
                    <defs>
                      {/* Gradients for fading effect */}
                      <radialGradient id="centerParticle" cx="0.5" cy="0.5">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
                        <stop offset="70%" stopColor="currentColor" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6"/>
                      </radialGradient>
                      <radialGradient id="fadeParticle" cx="0.5" cy="0.5">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.7"/>
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.2"/>
                      </radialGradient>
                    </defs>

                    {/* Central core - represents the access point */}
                    <circle cx="20" cy="20" r="4" fill="url(#centerParticle)"/>

                    {/* Dissolving particles - represent ephemeral nature */}
                    <motion.g
                      animate={{
                        opacity: [0.8, 0.3, 0.8],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Outer ring of particles */}
                      <circle cx="12" cy="12" r="2" fill="url(#fadeParticle)" opacity="0.6"/>
                      <circle cx="28" cy="12" r="1.5" fill="url(#fadeParticle)" opacity="0.5"/>
                      <circle cx="32" cy="20" r="1.8" fill="url(#fadeParticle)" opacity="0.7"/>
                      <circle cx="28" cy="28" r="1.2" fill="url(#fadeParticle)" opacity="0.4"/>
                      <circle cx="12" cy="28" r="1.6" fill="url(#fadeParticle)" opacity="0.6"/>
                      <circle cx="8" cy="20" r="1.3" fill="url(#fadeParticle)" opacity="0.5"/>
                    </motion.g>

                    {/* Inner ring - more solid */}
                    <motion.g
                      animate={{
                        rotate: 360,
                        opacity: [0.9, 0.6, 0.9],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.8"/>
                      <circle cx="24" cy="16" r="1.2" fill="currentColor" opacity="0.7"/>
                      <circle cx="24" cy="24" r="1.3" fill="currentColor" opacity="0.8"/>
                      <circle cx="16" cy="24" r="1.1" fill="currentColor" opacity="0.6"/>
                    </motion.g>

                    {/* Connecting lines - represent temporary connections */}
                    <motion.g
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.3"
                      animate={{
                        opacity: [0.1, 0.4, 0.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path d="M16 16 L20 20" strokeLinecap="round"/>
                      <path d="M24 16 L20 20" strokeLinecap="round"/>
                      <path d="M24 24 L20 20" strokeLinecap="round"/>
                      <path d="M16 24 L20 20" strokeLinecap="round"/>
                    </motion.g>
                  </svg>
                </div>
              </div>

              {/* Elegant inner highlight */}
              <div className="absolute inset-[3px] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-2xl" />

              {/* Sophisticated outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-500 rounded-3xl blur-lg opacity-25 -z-10 scale-110" />

              {/* Ephemeral shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-3xl opacity-0"
                whileHover={{
                  opacity: [0, 0.2, 0],
                  transition: { duration: 1, ease: "easeInOut" }
                }}
              />

              {/* Gentle pulsing aura */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-500 rounded-3xl opacity-5 -z-5"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.05, 0.02, 0.05],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold tracking-wider relative" style={{ fontFamily: 'var(--font-poppins)' }}>
                {/* Main brand name with unique styling */}
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

                {/* Subtle particle dots after the name */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex space-x-1">
                  <motion.div
                    className={`w-1 h-1 rounded-full ${
                      isDarkMode ? 'bg-violet-400' : 'bg-violet-600'
                    }`}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className={`w-0.5 h-0.5 rounded-full ${
                      isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                    }`}
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className={`w-0.5 h-0.5 rounded-full ${
                      isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`}
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
              <div className={`text-[9px] font-medium tracking-[0.2em] uppercase transition-colors duration-500 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-600'
              }`} style={{ fontFamily: 'var(--font-inter)' }}>
                Secure Production Access
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            {/* Navigation Links */}
            <Link
              href="/blog"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-gray-100'
              }`}
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Blog
            </Link>

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

            {/* Theme Toggle */}
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
                    <Moon className="w-3 h-3 text-white" />
                  ) : (
                    <Sun className="w-3 h-3 text-white" />
                  )}
                </motion.div>
              </motion.div>
            </motion.button>

            <Badge variant="outline" className="border-blue-500/50 text-blue-400">
              Coming Q1 2026
            </Badge>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/50">
              <Zap className="w-3 h-3 mr-1" />
              Launching Soon
            </Badge>

            <h1 className={`text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Peek Into{" "}
              <span className={`inline-block ${
                isDarkMode
                  ? 'bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent'
              }`}>
                Production
              </span>
              <br />
              Without the{" "}
              <span className={`relative inline-block ${
                isDarkMode
                  ? 'bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent'
              }`}>
                Risk
                <motion.div
                  className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-pink-400 to-red-400'
                      : 'from-red-500 to-pink-500'
                  } rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </h1>

            <p className={`text-lg lg:text-xl mb-4 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`} style={{ fontFamily: 'var(--font-inter)' }}>
              Your secure window into production systems.{" "}
              <span className={`font-semibold ${
                isDarkMode ? 'text-blue-300' : 'text-indigo-700'
              }`}>
                Limited access, complete visibility, zero risk.
              </span>
              {" "}Enterprise-grade debugging for external teams.
            </p>

            <div className={`mb-8 max-w-3xl mx-auto p-4 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
              isDarkMode
                ? 'bg-green-500/10 border-green-400/20 text-green-300'
                : 'bg-green-50 border-green-200 text-green-800'
            }`}>
              <div className="flex items-center justify-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span style={{ fontFamily: 'var(--font-poppins)' }}>
                  Self-hosted deployment • Your data never leaves your infrastructure
                </span>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      duration: 0.2
                    }
                  }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  className={`backdrop-blur-xl rounded-2xl p-5 transition-all duration-500 relative overflow-hidden group cursor-pointer ${
                    isDarkMode
                      ? 'bg-white/5 border border-white/10'
                      : `bg-gray-50/80 border border-gray-200/60
                         shadow-[0_4px_16px_0_rgba(71,85,105,0.08)]
                         hover:shadow-[0_8px_24px_0_rgba(71,85,105,0.12),0_0_20px_0_rgba(99,102,241,0.1)]`
                  }`}
                >
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    isDarkMode ? 'bg-white/5' : 'bg-gradient-to-br from-indigo-50/80 via-blue-50/60 to-purple-50/80'
                  }`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`text-3xl font-bold transition-colors duration-300 bg-gradient-to-br bg-clip-text text-transparent ${
                      isDarkMode
                        ? 'from-white to-gray-300'
                        : 'from-slate-900 via-slate-700 to-slate-800'
                    }`}>{stat.value}</div>
                    <div className={`text-sm font-medium transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-slate-600'
                    }`}>{stat.label}</div>
                    <div className={`text-xs mt-1 font-semibold transition-colors duration-300 ${
                      isDarkMode ? 'text-green-400' : 'text-emerald-600'
                    }`}>{stat.trend}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Email Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="relative flex-1"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.2 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full h-12 px-4 transition-all duration-500 ${
                      emailError
                        ? isDarkMode
                          ? 'bg-red-500/10 border-red-400/50 text-white placeholder:text-gray-500 backdrop-blur-xl focus:bg-red-500/15 focus:border-red-400/70'
                          : 'bg-red-50/90 border-red-300/60 text-slate-900 placeholder:text-slate-500 backdrop-blur-xl focus:border-red-400/80 focus:bg-red-50/95'
                        : isDarkMode
                        ? 'bg-white/5 border-white/20 text-white placeholder:text-gray-500 backdrop-blur-xl focus:bg-white/10 focus:border-white/30'
                        : `bg-gray-50/90 border-gray-200/60 text-slate-900 placeholder:text-slate-500 backdrop-blur-xl
                           shadow-[0_2px_8px_0_rgba(71,85,105,0.08)]
                           focus:shadow-[0_4px_16px_0_rgba(71,85,105,0.12),0_0_20px_0_rgba(99,102,241,0.08)]
                           hover:shadow-[0_3px_12px_0_rgba(71,85,105,0.10),0_0_15px_0_rgba(99,102,241,0.06)]
                           focus:border-gray-300/80 focus:bg-gray-50/95 hover:bg-gray-50/100`
                    }`}
                    required
                    disabled={isSubmitting}
                  />

                  {emailError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`absolute top-full left-0 mt-2 text-sm ${
                        isDarkMode ? 'text-red-400' : 'text-red-600'
                      }`}
                    >
                      {emailError}
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 400, damping: 20, duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`h-12 px-8 font-semibold transition-all duration-300 relative overflow-hidden group ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed'
                        : `bg-slate-900 hover:bg-slate-800 text-white shadow-[0_2px_8px_0_rgba(15,23,42,0.3)] hover:shadow-[0_4px_16px_0_rgba(15,23,42,0.4)] disabled:opacity-50 disabled:cursor-not-allowed`
                    }`}
                  >
                    {/* Button hover shimmer effect */}
                    {!isSubmitting && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />}

                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                          />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          {isDarkMode ? (
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </motion.div>
                          ) : (
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
                          )}
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center justify-center text-green-400"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Thanks! We'll be in touch soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-xs text-gray-500 mt-4">
                Join 500+ engineering teams waiting for early access
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Enterprise-Grade{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-blue-400 via-indigo-400 to-purple-400'
                  : 'from-indigo-600 via-purple-600 to-indigo-700'
              }`}>
                Security
              </span>{" "}
              Meets
              <br />
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-purple-400 to-pink-400'
                  : 'from-purple-600 to-pink-600'
              }`}>
                Developer Experience
              </span>
            </h2>
            <p className={`text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`} style={{ fontFamily: 'var(--font-inter)' }}>
              Give external teams the debugging access they need without compromising{" "}
              <span className={`font-semibold ${
                isDarkMode ? 'text-blue-300' : 'text-indigo-700'
              }`}>
                security
              </span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 25
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    duration: 0.2
                  }
                }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              >
                <Card className={`backdrop-blur-xl p-6 h-full transition-all duration-500 relative overflow-hidden group ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10 hover:bg-white/10'
                    : `bg-gray-50/70 border border-gray-200/60 shadow-[0_4px_16px_0_rgba(71,85,105,0.08)] hover:shadow-[0_8px_24px_0_rgba(71,85,105,0.12),0_0_20px_0_rgba(99,102,241,0.08)]`
                }`}>
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    isDarkMode ? 'bg-white/5' : 'bg-gradient-to-br from-indigo-50/70 via-blue-50/50 to-purple-50/70'
                  }`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-2.5 mb-4 transition-all duration-200 ${
                      isDarkMode
                        ? 'group-hover:scale-105'
                        : 'shadow-[0_2px_8px_0_rgba(71,85,105,0.15)] group-hover:shadow-[0_4px_12px_0_rgba(71,85,105,0.2)] group-hover:scale-105'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-lg lg:text-xl font-bold mb-3 transition-colors duration-300 leading-tight ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`} style={{ fontFamily: 'var(--font-poppins)' }}>{feature.title}</h3>
                    <p className={`text-sm lg:text-base leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-slate-600'
                    }`} style={{ fontFamily: 'var(--font-inter)' }}>{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 lg:p-12 transition-all duration-500 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10'
                : 'bg-gradient-to-r from-blue-50/80 to-purple-50/80 border border-blue-200/50 shadow-2xl shadow-blue-100/20'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Reduce Debug Time by 76%
                </h3>
                <p className="text-gray-400 mb-6">
                  What used to take hours now takes minutes. Your external teams get the access they need, your team stays focused on building.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Session ready in under 30 seconds</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Support unlimited concurrent external teams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <span className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Enterprise compliance out of the box</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>25x ROI within first quarter</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`rounded-xl p-6 transition-all duration-500 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10'
                      : 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-blue-300/30 shadow-lg'
                  }`}
                >
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-green-400">$ session create --duration 2h</div>
                    <div className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>✓ Session created: sess_abc123</div>
                    <div className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>✓ Permissions: Lambda, CloudWatch, RDS</div>
                    <div className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>✓ Auto-masking: Enabled</div>
                    <div className="text-blue-400">→ Share link: ephimera.dev/s/abc123</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/50"
                >
                  Live Demo
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UI Preview Section */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/50">
              <Activity className="w-3 h-3 mr-1" />
              Live Interface
            </Badge>
            <h2 className={`text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Debug Like You{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-blue-400 via-cyan-400 to-purple-400'
                  : 'from-indigo-600 via-blue-600 to-purple-600'
              }`}>
                Own the System
              </span>
            </h2>
            <p className={`text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`} style={{ fontFamily: 'var(--font-inter)' }}>
              Intuitive interface designed for{" "}
              <span className={`font-semibold ${
                isDarkMode ? 'text-blue-300' : 'text-indigo-700'
              }`}>
                rapid debugging.
              </span>
              {" "}Every tool you need, nothing you don't.
            </p>
          </motion.div>

          {/* UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 ${
              isDarkMode
                ? 'bg-black/50 border border-white/10'
                : 'bg-gray-50/80 border border-gray-200/60 shadow-xl shadow-gray-200/20'
            }`}
          >
            {/* Top Bar */}
            <div className={`border-b px-6 py-4 transition-all duration-500 ${
              isDarkMode
                ? 'bg-gradient-to-r from-gray-900/90 to-black/90 border-white/10'
                : 'bg-gradient-to-r from-gray-100/90 to-gray-50/90 border-gray-200/60'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <span className="text-green-400">●</span> Connected to: production-us-east-1
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                    <Clock className="w-3 h-3 mr-1" />
                    47:23 remaining
                  </Badge>
                  <span className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>external team@debug.dev</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="h-[600px] flex flex-col">
              {/* Cloud Provider Tabs */}
              <div className={`border-b px-6 py-3 transition-all duration-500 ${
                isDarkMode ? 'border-white/10' : 'border-gray-200/50'
              }`}>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setSelectedCloud('aws')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCloud === 'aws'
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        : `transition-colors duration-300 ${
                          isDarkMode
                            ? 'text-gray-400 hover:text-white hover:bg-white/5'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                        }`
                    }`}
                  >
                    <Cloud className="w-4 h-4" />
                    <span>AWS</span>
                  </button>
                  <button
                    onClick={() => setSelectedCloud('azure')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCloud === 'azure'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : `transition-colors duration-300 ${
                          isDarkMode
                            ? 'text-gray-400 hover:text-white hover:bg-white/5'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                        }`
                    }`}
                  >
                    <Cloud className="w-4 h-4" />
                    <span>Azure</span>
                  </button>
                  <button
                    onClick={() => setSelectedCloud('gcp')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCloud === 'gcp'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : `transition-colors duration-300 ${
                          isDarkMode
                            ? 'text-gray-400 hover:text-white hover:bg-white/5'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                        }`
                    }`}
                  >
                    <Cloud className="w-4 h-4" />
                    <span>GCP</span>
                  </button>
                  <div className={`ml-4 text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-600'
                  }`}>
                    Region: {selectedCloud === 'aws' ? 'us-east-1' : selectedCloud === 'azure' ? 'East US' : 'us-central1'}
                  </div>
                </div>
              </div>

              {/* Main Panel */}
              <div className="flex-1 flex flex-col">
                {/* Tabs */}
                <div className={`flex items-center justify-between p-4 border-b transition-all duration-500 ${
                  isDarkMode ? 'border-white/10' : 'border-gray-200/50'
                }`}>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'overview'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Activity className="w-4 h-4" />
                      <span>Overview</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('logs')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'logs'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Terminal className="w-4 h-4" />
                      <span>Logs</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('query')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'query'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Database className="w-4 h-4" />
                      <span>Query</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('infrastructure')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === 'infrastructure'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Infrastructure</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span>Live</span>
                    </div>
                    <button className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded border border-white/20">
                      Export
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-4 overflow-auto">
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-lg p-3"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-blue-400">Active Services</div>
                              <div className="text-lg font-semibold text-white">47</div>
                            </div>
                            <Layers className="w-5 h-5 text-blue-400" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg p-3"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-green-400">Healthy</div>
                              <div className="text-lg font-semibold text-white">98.4%</div>
                            </div>
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-lg p-3"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-orange-400">Alerts</div>
                              <div className="text-lg font-semibold text-white">3</div>
                            </div>
                            <AlertCircle className="w-5 h-5 text-orange-400" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-lg p-3"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs text-purple-400">Requests/min</div>
                              <div className="text-lg font-semibold text-white">2.4K</div>
                            </div>
                            <TrendingUp className="w-5 h-5 text-purple-400" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Resource Groups */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-white">Compute Resources</h4>
                            <Badge className="bg-blue-500/10 text-blue-400">
                              {selectedCloud === 'aws' ? '8 services' : selectedCloud === 'azure' ? '5 resources' : '6 services'}
                            </Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            {selectedCloud === 'aws' && (
                              <>
                                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer">
                                  <div className="flex items-center space-x-2">
                                    <Zap className="w-4 h-4 text-orange-400" />
                                    <span className="text-gray-300">payment-processor</span>
                                  </div>
                                  <span className="text-green-400 text-xs">●</span>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer">
                                  <div className="flex items-center space-x-2">
                                    <Layers className="w-4 h-4 text-blue-400" />
                                    <span className="text-gray-300">api-cluster</span>
                                  </div>
                                  <span className="text-green-400 text-xs">●</span>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer">
                                  <div className="flex items-center space-x-2">
                                    <Database className="w-4 h-4 text-purple-400" />
                                    <span className="text-gray-300">prod-database</span>
                                  </div>
                                  <span className="text-yellow-400 text-xs">●</span>
                                </div>
                              </>
                            )}
                            {selectedCloud === 'azure' && (
                              <>
                                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer">
                                  <div className="flex items-center space-x-2">
                                    <Zap className="w-4 h-4 text-blue-400" />
                                    <span className="text-gray-300">payment-function</span>
                                  </div>
                                  <span className="text-green-400 text-xs">●</span>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer">
                                  <div className="flex items-center space-x-2">
                                    <Layers className="w-4 h-4 text-blue-400" />
                                    <span className="text-gray-300">container-apps</span>
                                  </div>
                                  <span className="text-green-400 text-xs">●</span>
                                </div>
                              </>
                            )}
                            {selectedCloud === 'gcp' && (
                              <>
                                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer">
                                  <div className="flex items-center space-x-2">
                                    <Zap className="w-4 h-4 text-green-400" />
                                    <span className="text-gray-300">payment-cloud-function</span>
                                  </div>
                                  <span className="text-green-400 text-xs">●</span>
                                </div>
                                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer">
                                  <div className="flex items-center space-x-2">
                                    <Layers className="w-4 h-4 text-green-400" />
                                    <span className="text-gray-300">gke-cluster</span>
                                  </div>
                                  <span className="text-green-400 text-xs">●</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-white">Recent Issues</h4>
                            <button className="text-xs text-gray-400 hover:text-white">View All</button>
                          </div>
                          <div className="space-y-2 text-sm">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start space-x-3 p-2 rounded-lg bg-red-500/5 border border-red-500/20"
                            >
                              <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-gray-300">Database timeout</div>
                                <div className="text-xs text-gray-500">payment-processor • 2m ago</div>
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="flex items-start space-x-3 p-2 rounded-lg bg-yellow-500/5 border border-yellow-500/20"
                            >
                              <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="text-gray-300">High memory usage</div>
                                <div className="text-xs text-gray-500">api-service • 15m ago</div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'logs' && (
                    <div className="space-y-2 font-mono text-sm">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-gray-500">14:32:15</span>
                        <span className="text-blue-400">[INFO]</span>
                        <span className="text-gray-300">Payment service initialized successfully</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-gray-500">14:32:18</span>
                        <span className="text-yellow-400">[WARN]</span>
                        <span className="text-gray-300">High memory usage detected: 85% of allocated</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start space-x-3 bg-red-500/10 border border-red-500/20 rounded-lg p-2"
                      >
                        <span className="text-gray-500">14:32:21</span>
                        <span className="text-red-400">[ERROR]</span>
                        <span className="text-gray-300">
                          Connection timeout to RDS instance
                          <div className="text-xs text-gray-500 mt-1">
                            RequestId: abc-123-def | User: user_***45 (masked) | Duration: 30,001ms
                          </div>
                        </span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-gray-500">14:32:24</span>
                        <span className="text-blue-400">[INFO]</span>
                        <span className="text-gray-300">Retry attempt 1/3 for database connection</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-gray-500">14:32:27</span>
                        <span className="text-green-400">[SUCCESS]</span>
                        <span className="text-gray-300">Database connection restored</span>
                      </motion.div>
                    </div>
                  )}

                  {activeTab === 'query' && (
                    <div className="space-y-4">
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-white/10">
                        <div className="font-mono text-sm text-gray-300">
                          SELECT payment_id, status, created_at<br />
                          FROM payments<br />
                          WHERE status = &apos;failed&apos;<br />
                          AND created_at &gt; NOW() - INTERVAL &apos;24 HOURS&apos;<br />
                          LIMIT 100;
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/50">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Query validated
                        </Badge>
                        <span className="text-gray-400">Est. cost: $0.03</span>
                        <span className="text-gray-400">PII fields: Auto-masked</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'infrastructure' && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Compute */}
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Zap className={`w-5 h-5 ${selectedCloud === 'aws' ? 'text-orange-400' : selectedCloud === 'azure' ? 'text-blue-400' : 'text-green-400'}`} />
                            <h4 className="font-semibold text-white">
                              {selectedCloud === 'aws' ? 'Lambda' : selectedCloud === 'azure' ? 'Functions' : 'Cloud Functions'}
                            </h4>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Functions</span>
                              <span className="text-white">12</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Invocations/min</span>
                              <span className="text-green-400">847</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Avg Duration</span>
                              <span className="text-blue-400">234ms</span>
                            </div>
                          </div>
                        </div>

                        {/* Storage */}
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Database className={`w-5 h-5 ${selectedCloud === 'aws' ? 'text-purple-400' : selectedCloud === 'azure' ? 'text-blue-400' : 'text-green-400'}`} />
                            <h4 className="font-semibold text-white">
                              {selectedCloud === 'aws' ? 'RDS' : selectedCloud === 'azure' ? 'SQL Database' : 'Cloud SQL'}
                            </h4>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Instances</span>
                              <span className="text-white">3</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Connections</span>
                              <span className="text-yellow-400">45/100</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Query Time</span>
                              <span className="text-green-400">12ms</span>
                            </div>
                          </div>
                        </div>

                        {/* Containers */}
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Layers className={`w-5 h-5 ${selectedCloud === 'aws' ? 'text-blue-400' : selectedCloud === 'azure' ? 'text-blue-400' : 'text-green-400'}`} />
                            <h4 className="font-semibold text-white">
                              {selectedCloud === 'aws' ? 'ECS' : selectedCloud === 'azure' ? 'Container Apps' : 'GKE'}
                            </h4>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Services</span>
                              <span className="text-white">8</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Running Tasks</span>
                              <span className="text-green-400">24/30</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">CPU Usage</span>
                              <span className="text-yellow-400">67%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Resource Map */}
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">Resource Topology</h4>
                        <div className="flex items-center justify-center space-x-8 py-6">
                          <div className="flex flex-col items-center space-y-2">
                            <div className={`w-12 h-12 rounded-full ${selectedCloud === 'aws' ? 'bg-orange-500/20 border-orange-500' : selectedCloud === 'azure' ? 'bg-blue-500/20 border-blue-500' : 'bg-green-500/20 border-green-500'} border-2 flex items-center justify-center`}>
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs text-gray-400">Load Balancer</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                          <div className="flex flex-col items-center space-y-2">
                            <div className={`w-12 h-12 rounded-full ${selectedCloud === 'aws' ? 'bg-blue-500/20 border-blue-500' : selectedCloud === 'azure' ? 'bg-blue-500/20 border-blue-500' : 'bg-green-500/20 border-green-500'} border-2 flex items-center justify-center`}>
                              <Layers className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs text-gray-400">App Services</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                          <div className="flex flex-col items-center space-y-2">
                            <div className={`w-12 h-12 rounded-full ${selectedCloud === 'aws' ? 'bg-purple-500/20 border-purple-500' : selectedCloud === 'azure' ? 'bg-blue-500/20 border-blue-500' : 'bg-green-500/20 border-green-500'} border-2 flex items-center justify-center`}>
                              <Database className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xs text-gray-400">Database</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                      <Search className="w-4 h-4 inline mr-1" />
                      Filter
                    </button>
                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                      Export
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">
                    Auto-refresh: ON | Showing last 5 minutes
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature callouts */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 mb-2">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className={`text-sm font-semibold mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Automatic PII Masking</h4>
              <p className={`text-xs transition-colors duration-300 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-600'
              }`}>Sensitive data automatically redacted in real-time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 mb-2">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className={`text-sm font-semibold mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Real-time Streaming</h4>
              <p className={`text-xs transition-colors duration-300 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-600'
              }`}>Sub-50ms latency for all log streams</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 text-green-400 mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className={`text-sm font-semibold mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Full Audit Trail</h4>
              <p className={`text-xs transition-colors duration-300 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-600'
              }`}>Every action logged for compliance</p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Problem/Solution Section */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/50">
              <AlertCircle className="w-3 h-3 mr-1" />
              Current Problem
            </Badge>
            <h2 className={`text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              External Team Access is{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-red-400 via-orange-400 to-yellow-400'
                  : 'from-red-600 via-orange-600 to-yellow-600'
              }`}>
                Broken Today
              </span>
            </h2>
            <p className={`text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`} style={{ fontFamily: 'var(--font-inter)' }}>
              Engineering teams face impossible choices when external teams need production access
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Current Problems */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ${
                isDarkMode
                  ? 'bg-red-500/5 border border-red-500/20'
                  : 'bg-red-50/70 border border-red-200/60 shadow-[0_4px_16px_0_rgba(239,68,68,0.08)]'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 p-3 mr-4">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`} style={{ fontFamily: 'var(--font-poppins)' }}>Current Reality</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Share SSH keys or permanent credentials",
                  "No audit trail of external team actions",
                  "Manual setup takes hours or days",
                  "PII exposed in production data",
                  "Compliance team nightmares",
                  "Security incidents waiting to happen"
                ].map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EPHIMERA Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ${
                isDarkMode
                  ? 'bg-emerald-500/5 border border-emerald-500/20'
                  : 'bg-emerald-50/70 border border-emerald-200/60 shadow-[0_4px_16px_0_rgba(16,185,129,0.08)]'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`} style={{ fontFamily: 'var(--font-poppins)' }}>EPHIMERA Solution</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Ephemeral access - automatically expires",
                  "Complete audit trail of every action",
                  "30-second external team onboarding",
                  "Automatic PII masking built-in",
                  "SOC2, HIPAA compliance ready",
                  "Zero permanent credentials ever"
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl p-8 rounded-2xl text-center transition-all duration-300 ${
              isDarkMode
                ? 'bg-violet-500/5 border border-violet-500/20'
                : 'bg-violet-50/70 border border-violet-200/60 shadow-[0_4px_16px_0_rgba(139,92,246,0.08)]'
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className={`text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                Be Part of the Solution
              </h3>
              <p className={`text-base lg:text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-slate-700'
              }`} style={{ fontFamily: 'var(--font-inter)' }}>
                Join our waitlist to be among the first teams to experience secure, ephemeral production access.
                Help us build the future of external team debugging workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/50">
              <HelpCircle className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className={`text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Frequently Asked{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-green-400 via-emerald-400 to-teal-400'
                  : 'from-green-600 via-emerald-600 to-teal-600'
              }`}>
                Questions
              </span>
            </h2>
            <p className={`text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`} style={{ fontFamily: 'var(--font-inter)' }}>
              Everything you need to know about{" "}
              <span className={`font-semibold ${
                isDarkMode ? 'text-green-300' : 'text-emerald-700'
              }`}>
                Ephimera's security and features
              </span>
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-white/5 border border-white/10 hover:bg-white/8'
                    : 'bg-gray-50/70 border border-gray-200/60 hover:bg-gray-50/90 shadow-[0_2px_8px_0_rgba(71,85,105,0.08)]'
                }`}
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left focus:outline-none"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`text-lg font-semibold pr-4 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-5 transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-slate-700'
                      }`} style={{ fontFamily: 'var(--font-inter)' }}>
                        <p className="leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-orange-500/10 rounded-full mb-4">
              <AlertCircle className="w-6 h-6 text-orange-400" />
            </div>

            <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Stop Wasting{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-orange-400 via-red-400 to-pink-400'
                  : 'from-orange-600 via-red-600 to-pink-600'
              }`}>
                Hours
              </span>
              {" "}on Production Issues
            </h2>

            <p className={`text-lg lg:text-xl leading-relaxed mb-8 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`} style={{ fontFamily: 'var(--font-inter)' }}>
              Join forward-thinking engineering teams{" "}
              <span className={`font-semibold ${
                isDarkMode ? 'text-blue-300' : 'text-indigo-700'
              }`}>
                revolutionizing production debugging
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`transition-all duration-300 ${
                  isDarkMode
                    ? 'border-white/40 text-white bg-transparent hover:bg-white/5 hover:border-white/60 hover:text-white'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 bg-white/50'
                }`}
              >
                View Documentation
              </Button>
            </div>

          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className={`relative z-10 px-6 py-12 lg:px-12 border-t transition-colors duration-500 ${
        isDarkMode ? 'border-white/10' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/* Small Ephimera Logo for Footer */}
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 40 40" className="text-white scale-75">
                    {/* Central core */}
                    <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.9"/>

                    {/* Outer particles */}
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                    <circle cx="28" cy="12" r="1" fill="currentColor" opacity="0.5"/>
                    <circle cx="32" cy="20" r="1.2" fill="currentColor" opacity="0.7"/>
                    <circle cx="28" cy="28" r="0.8" fill="currentColor" opacity="0.4"/>
                    <circle cx="12" cy="28" r="1.1" fill="currentColor" opacity="0.6"/>
                    <circle cx="8" cy="20" r="0.9" fill="currentColor" opacity="0.5"/>

                    {/* Inner ring */}
                    <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.8"/>
                    <circle cx="24" cy="16" r="0.8" fill="currentColor" opacity="0.7"/>
                    <circle cx="24" cy="24" r="0.9" fill="currentColor" opacity="0.8"/>
                    <circle cx="16" cy="24" r="0.7" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
              </div>
              <span className="text-sm text-gray-400">© 2026 Ephimera</span>
            </div>

            {/* Made in India with love */}
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span className="text-sm text-gray-400">Made in India with</span>
              <span className="text-red-500 text-lg">♥</span>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}