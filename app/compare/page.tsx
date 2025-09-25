'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Check,
  X,
  AlertTriangle,
  Shield,
  Clock,
  DollarSign,
  Users,
  Database,
  Terminal,
  Eye,
  Settings,
  Zap,
  TrendingUp,
  ChevronDown,
  Star
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ComparePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedComparison, setSelectedComparison] = useState('manual')

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

  const comparisons = {
    manual: {
      title: "Manual SSH Access",
      subtitle: "Traditional credential sharing approach",
      icon: Terminal,
      color: "red"
    },
    competitors: {
      title: "Existing Solutions",
      subtitle: "BeyondTrust, CyberArk, Teleport",
      icon: Shield,
      color: "orange"
    }
  }

  const comparisonData = {
    manual: [
      {
        category: "Security",
        features: [
          {
            name: "Shared Credentials",
            manual: { status: "bad", text: "SSH keys & passwords shared" },
            ephimera: { status: "good", text: "Zero credential sharing" }
          },
          {
            name: "Session Recording",
            manual: { status: "bad", text: "No built-in recording" },
            ephimera: { status: "good", text: "Complete session capture" }
          },
          {
            name: "Access Expiration",
            manual: { status: "bad", text: "Manual revocation required" },
            ephimera: { status: "good", text: "Automatic time-based expiry" }
          },
          {
            name: "PII Protection",
            manual: { status: "bad", text: "Full data exposure" },
            ephimera: { status: "good", text: "Real-time data masking" }
          },
          {
            name: "Audit Trail",
            manual: { status: "warning", text: "Basic server logs" },
            ephimera: { status: "good", text: "Granular action logging" }
          }
        ]
      },
      {
        category: "Operations",
        features: [
          {
            name: "Setup Time",
            manual: { status: "bad", text: "Hours to days" },
            ephimera: { status: "good", text: "Under 30 seconds" }
          },
          {
            name: "Credential Management",
            manual: { status: "bad", text: "Manual rotation & sharing" },
            ephimera: { status: "good", text: "Fully automated" }
          },
          {
            name: "Network Configuration",
            manual: { status: "warning", text: "VPN/firewall changes" },
            ephimera: { status: "good", text: "No infrastructure changes" }
          },
          {
            name: "User Experience",
            manual: { status: "warning", text: "Complex setup process" },
            ephimera: { status: "good", text: "One-click access" }
          }
        ]
      },
      {
        category: "Compliance",
        features: [
          {
            name: "SOC 2 Ready",
            manual: { status: "bad", text: "Manual compliance work" },
            ephimera: { status: "good", text: "Built-in compliance" }
          },
          {
            name: "GDPR Compliance",
            manual: { status: "bad", text: "Data exposure risks" },
            ephimera: { status: "good", text: "Automatic PII handling" }
          },
          {
            name: "Access Reviews",
            manual: { status: "warning", text: "Manual quarterly reviews" },
            ephimera: { status: "good", text: "Real-time access tracking" }
          }
        ]
      }
    ],
    competitors: [
      {
        category: "Implementation",
        features: [
          {
            name: "Setup Complexity",
            manual: { status: "bad", text: "3-6 months implementation" },
            ephimera: { status: "good", text: "API-first, hours not months" }
          },
          {
            name: "Agent Requirements",
            manual: { status: "bad", text: "Agents on every server" },
            ephimera: { status: "good", text: "Zero agents required" }
          },
          {
            name: "Infrastructure Changes",
            manual: { status: "warning", text: "Significant architecture changes" },
            ephimera: { status: "good", text: "Works with existing setup" }
          }
        ]
      },
      {
        category: "Cost",
        features: [
          {
            name: "Licensing Model",
            manual: { status: "bad", text: "$50-200 per user per month" },
            ephimera: { status: "good", text: "Pay per session, not per user" }
          },
          {
            name: "Professional Services",
            manual: { status: "bad", text: "$50K-500K implementation" },
            ephimera: { status: "good", text: "Self-service deployment" }
          },
          {
            name: "Maintenance Overhead",
            manual: { status: "warning", text: "Dedicated team required" },
            ephimera: { status: "good", text: "Minimal ongoing maintenance" }
          }
        ]
      },
      {
        category: "User Experience",
        features: [
          {
            name: "External User Onboarding",
            manual: { status: "warning", text: "Complex multi-step process" },
            ephimera: { status: "good", text: "Share link, instant access" }
          },
          {
            name: "Mobile Support",
            manual: { status: "warning", text: "Limited mobile experience" },
            ephimera: { status: "good", text: "Full mobile debugging" }
          },
          {
            name: "Learning Curve",
            manual: { status: "bad", text: "Extensive training required" },
            ephimera: { status: "good", text: "Familiar tools, zero training" }
          }
        ]
      },
      {
        category: "Modern Features",
        features: [
          {
            name: "External Team Focus",
            manual: { status: "warning", text: "Built for employees" },
            ephimera: { status: "good", text: "Designed for external teams" }
          },
          {
            name: "Session Sharing",
            manual: { status: "bad", text: "No collaborative debugging" },
            ephimera: { status: "good", text: "Real-time session sharing" }
          },
          {
            name: "API Integration",
            manual: { status: "warning", text: "Complex API interfaces" },
            ephimera: { status: "good", text: "Simple REST API" }
          }
        ]
      }
    ]
  }

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'good':
        return <Check className="w-5 h-5 text-green-500" />
      case 'bad':
        return <X className="w-5 h-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'good':
        return isDarkMode ? 'bg-green-500/10 border-green-500/20' : 'bg-green-50 border-green-200'
      case 'bad':
        return isDarkMode ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-200'
      case 'warning':
        return isDarkMode ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-yellow-50 border-yellow-200'
      default:
        return ''
    }
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
                  <span className="text-sm ml-2 font-medium">Compare</span>
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/50">
              <TrendingUp className="w-3 h-3 mr-1" />
              Feature Comparison
            </Badge>
            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Why Choose{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-violet-400 via-purple-400 to-indigo-400'
                  : 'from-violet-600 via-purple-600 to-indigo-600'
              }`}>
                EPHIMERA
              </span>
            </h1>
            <p className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8 ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              See how EPHIMERA compares to traditional SSH access and existing enterprise solutions.
            </p>

            {/* Comparison Toggle */}
            <div className={`inline-flex rounded-xl p-1 ${
              isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
            }`}>
              {Object.entries(comparisons).map(([key, comp]) => (
                <button
                  key={key}
                  onClick={() => setSelectedComparison(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedComparison === key
                      ? isDarkMode
                        ? 'bg-violet-500 text-white shadow-lg'
                        : 'bg-violet-600 text-white shadow-lg'
                      : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  <comp.icon className="w-4 h-4" />
                  <span>{comp.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedComparison}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`backdrop-blur-xl rounded-3xl overflow-hidden border ${
              isDarkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-white/70 border-gray-200/60 shadow-[0_4px_20px_0_rgba(71,85,105,0.08)]'
            }`}
          >
            {/* Table Header */}
            <div className={`px-8 py-6 border-b ${
              isDarkMode ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className="grid grid-cols-3 gap-8 items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-500">Feature</h3>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    comparisons[selectedComparison as keyof typeof comparisons].color === 'red'
                      ? 'bg-red-500/10 text-red-400'
                      : 'bg-orange-500/10 text-orange-400'
                  }`}>
                    {(() => {
                      const IconComponent = comparisons[selectedComparison as keyof typeof comparisons].icon;
                      return <IconComponent className="w-4 h-4" />;
                    })()}
                    <span className="font-semibold">
                      {comparisons[selectedComparison as keyof typeof comparisons].title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {comparisons[selectedComparison as keyof typeof comparisons].subtitle}
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-violet-500/10 text-violet-400">
                    <Star className="w-4 h-4" />
                    <span className="font-semibold">EPHIMERA</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Modern ephemeral access</p>
                </div>
              </div>
            </div>

            {/* Comparison Categories */}
            {comparisonData[selectedComparison as keyof typeof comparisonData].map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className={`px-8 py-4 bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-white/5 to-white/10'
                    : 'from-gray-50 to-gray-100'
                }`}>
                  <h4 className={`font-semibold text-lg ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.category}
                  </h4>
                </div>

                {/* Features */}
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (featureIndex * 0.05) }}
                    className={`px-8 py-6 border-b grid grid-cols-3 gap-8 items-center hover:bg-white/5 transition-colors ${
                      isDarkMode ? 'border-white/5' : 'border-gray-100'
                    }`}
                  >
                    {/* Feature Name */}
                    <div>
                      <span className={`font-medium ${
                        isDarkMode ? 'text-gray-200' : 'text-slate-800'
                      }`}>
                        {feature.name}
                      </span>
                    </div>

                    {/* Current Method */}
                    <div className="text-center">
                      <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg border ${
                        getStatusBg(feature.manual.status)
                      }`}>
                        <StatusIcon status={feature.manual.status} />
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-slate-700'
                        }`}>
                          {feature.manual.text}
                        </span>
                      </div>
                    </div>

                    {/* EPHIMERA */}
                    <div className="text-center">
                      <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg border ${
                        getStatusBg(feature.ephimera.status)
                      }`}>
                        <StatusIcon status={feature.ephimera.status} />
                        <span className={`text-sm font-medium ${
                          isDarkMode ? 'text-gray-300' : 'text-slate-700'
                        }`}>
                          {feature.ephimera.text}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`mt-16 p-8 rounded-3xl text-center backdrop-blur-xl border ${
              isDarkMode
                ? 'bg-violet-500/5 border-violet-500/20'
                : 'bg-violet-50/70 border-violet-200/60'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Ready to Upgrade Your Access Management?
            </h3>
            <p className={`text-lg mb-6 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-slate-700'
            }`}>
              Join our waitlist to be among the first to experience the future of secure production access.
            </p>
            <Link
              href="/"
              className={`inline-flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 ${
                isDarkMode
                  ? 'bg-violet-500 text-white hover:bg-violet-600'
                  : 'bg-violet-600 text-white hover:bg-violet-700'
              }`}
            >
              <span>Join Waitlist</span>
              <Zap className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}