'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Shield,
  Clock,
  Eye,
  Zap,
  Database,
  Terminal,
  Users,
  Settings,
  Lock,
  Activity,
  FileText,
  Globe,
  Smartphone,
  Code,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Star,
  Play
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function FeaturesPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedFeature, setSelectedFeature] = useState(0)

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

  const features = [
    {
      id: 'ephemeral-access',
      title: 'Ephemeral Access',
      subtitle: 'Time-limited, self-destructing sessions',
      icon: Clock,
      color: 'blue',
      description: 'Every access session automatically expires, eliminating the risk of forgotten credentials and permanent backdoors.',
      benefits: [
        'Sessions auto-expire in 1-24 hours',
        'No permanent credentials ever created',
        'Zero forgotten access cleanup',
        'Built-in security by design'
      ],
      technicalDetails: {
        implementation: 'JWT-based session tokens with built-in expiration',
        protocols: 'OAuth 2.0, OpenID Connect, SAML 2.0',
        encryption: 'AES-256 for data, TLS 1.3 for transport',
        performance: 'Sub-second token generation and validation'
      },
      useCases: [
        'Emergency production debugging',
        'Third-party security assessments',
        'Consultant troubleshooting sessions',
        'Vendor integration testing'
      ]
    },
    {
      id: 'session-recording',
      title: 'Complete Session Recording',
      subtitle: 'Every keystroke, command, and query captured',
      icon: Eye,
      color: 'green',
      description: 'Comprehensive recording of all user actions provides complete audit trails and enables post-incident analysis.',
      benefits: [
        'Terminal session playback',
        'Database query logging',
        'File access tracking',
        'API call monitoring'
      ],
      technicalDetails: {
        implementation: 'Real-time streaming with efficient compression',
        storage: 'Encrypted at rest with configurable retention',
        formats: 'Standard formats for SIEM integration',
        privacy: 'Smart redaction of sensitive data'
      },
      useCases: [
        'Compliance audit requirements',
        'Security incident investigation',
        'Training and knowledge transfer',
        'Quality assurance reviews'
      ]
    },
    {
      id: 'pii-masking',
      title: 'Automatic PII Masking',
      subtitle: 'Real-time data protection and redaction',
      icon: Shield,
      color: 'purple',
      description: 'Advanced pattern recognition automatically identifies and masks sensitive data in real-time, ensuring compliance.',
      benefits: [
        'Credit card number masking',
        'SSN and national ID protection',
        'Email address redaction',
        'Custom pattern detection'
      ],
      technicalDetails: {
        implementation: 'ML-powered pattern recognition engine',
        accuracy: '99.9% detection rate with <0.1% false positives',
        latency: 'Sub-millisecond processing delay',
        customization: 'Configurable rules and patterns'
      },
      useCases: [
        'GDPR compliance requirements',
        'HIPAA protected health information',
        'Financial data protection',
        'Customer data safety'
      ]
    },
    {
      id: 'granular-permissions',
      title: 'Granular Permissions',
      subtitle: 'Precise control over resource access',
      icon: Lock,
      color: 'orange',
      description: 'Fine-grained permission system allows you to specify exactly what resources each user can access and what actions they can perform.',
      benefits: [
        'Database-level access control',
        'Read/write permission scoping',
        'API endpoint restrictions',
        'Time-based permission changes'
      ],
      technicalDetails: {
        implementation: 'RBAC with attribute-based extensions',
        scalability: 'Supports 1M+ permission combinations',
        performance: 'Authorization decisions in <10ms',
        integration: 'Works with existing IAM systems'
      },
      useCases: [
        'Limited debugging access',
        'Read-only data analysis',
        'Specific service troubleshooting',
        'Graduated access levels'
      ]
    },
    {
      id: 'instant-setup',
      title: 'Instant Setup',
      subtitle: 'From request to access in under 30 seconds',
      icon: Zap,
      color: 'yellow',
      description: 'Streamlined onboarding process eliminates the traditional hours or days of access provisioning.',
      benefits: [
        'One-click access generation',
        'No IT ticket required',
        'Self-service portal',
        'Automated notifications'
      ],
      technicalDetails: {
        implementation: 'API-driven automation pipeline',
        integrations: 'Slack, Teams, email, webhooks',
        provisioning: 'Kubernetes, Docker, cloud platforms',
        monitoring: 'Real-time status updates'
      },
      useCases: [
        'Emergency incident response',
        'Time-sensitive debugging',
        'Contractor onboarding',
        'Quick vendor assessments'
      ]
    },
    {
      id: 'zero-infrastructure',
      title: 'Zero Infrastructure Changes',
      subtitle: 'Works with your existing setup',
      icon: Settings,
      color: 'indigo',
      description: 'Deploy EPHIMERA without modifying your current infrastructure, networking, or security configurations.',
      benefits: [
        'No agents to install',
        'No firewall changes',
        'No VPN configuration',
        'API-first integration'
      ],
      technicalDetails: {
        implementation: 'Reverse proxy architecture',
        compatibility: 'AWS, Azure, GCP, on-premises',
        deployment: 'Docker, Kubernetes, or SaaS',
        integration: 'REST APIs and webhooks'
      },
      useCases: [
        'Legacy system access',
        'Multi-cloud environments',
        'Compliance-restricted networks',
        'Rapid deployment scenarios'
      ]
    }
  ]

  const currentFeature = features[selectedFeature]

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
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5 mr-3" />
                <div className="flex flex-col">
                  <div className={`text-sm font-medium tracking-wider uppercase ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    By Ephimera
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">
                      <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                        isDarkMode
                          ? 'from-purple-300 via-pink-300 to-purple-300'
                          : 'from-purple-700 via-pink-700 to-purple-700'
                      }`}>Grant</span>
                    </span>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Features</span>
                  </div>
                </div>
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
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/50">
              <Star className="w-3 h-3 mr-1" />
              Deep Dive
            </Badge>
            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Powerful{" "}
              <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode
                  ? 'from-emerald-400 via-teal-400 to-cyan-400'
                  : 'from-emerald-600 via-teal-600 to-cyan-600'
              }`}>
                Features
              </span>
            </h1>
            <p className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-slate-600'
            }`}>
              Explore the comprehensive capabilities that make EPHIMERA the most advanced secure production access platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Selector & Detail View */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature List */}
            <div className="lg:col-span-1">
              <div className={`sticky top-24 backdrop-blur-xl rounded-2xl p-6 border ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/70 border-gray-200/60 shadow-lg'
              }`}>
                <h3 className={`text-xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                  Features
                </h3>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => setSelectedFeature(index)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                        selectedFeature === index
                          ? isDarkMode
                            ? 'bg-violet-500/20 border border-violet-500/30'
                            : 'bg-violet-50 border border-violet-200'
                          : isDarkMode
                          ? 'hover:bg-white/5 border border-transparent'
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-lg p-2 flex-shrink-0 ${
                          selectedFeature === index
                            ? 'bg-violet-500 text-white'
                            : feature.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                              feature.color === 'green' ? 'bg-green-500/20 text-green-400' :
                              feature.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                              feature.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                              feature.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-indigo-500/20 text-indigo-400'
                        }`}>
                          <feature.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold text-sm ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {feature.title}
                          </h4>
                          <p className={`text-xs mt-1 ${
                            isDarkMode ? 'text-gray-400' : 'text-slate-600'
                          }`}>
                            {feature.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Detail */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`backdrop-blur-xl rounded-2xl p-8 border ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white/70 border-gray-200/60 shadow-lg'
                  }`}
                >
                  {/* Feature Header */}
                  <div className="flex items-start space-x-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl p-4 ${
                      currentFeature.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                      currentFeature.color === 'green' ? 'bg-green-500/20 text-green-400' :
                      currentFeature.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                      currentFeature.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                      currentFeature.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-indigo-500/20 text-indigo-400'
                    }`}>
                      <currentFeature.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h2 className={`text-3xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                        {currentFeature.title}
                      </h2>
                      <p className={`text-lg ${
                        isDarkMode ? 'text-gray-400' : 'text-slate-600'
                      }`}>
                        {currentFeature.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Feature Description */}
                  <div className="mb-8">
                    <p className={`text-base leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                      {currentFeature.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                      Key Benefits
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentFeature.benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-start space-x-3 p-3 rounded-lg ${
                            isDarkMode ? 'bg-white/5' : 'bg-gray-50'
                          }`}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className={`text-sm ${
                            isDarkMode ? 'text-gray-300' : 'text-slate-700'
                          }`}>
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                      Technical Details
                    </h3>
                    <div className="grid gap-4">
                      {Object.entries(currentFeature.technicalDetails).map(([key, value]) => (
                        <div
                          key={key}
                          className={`p-4 rounded-lg border ${
                            isDarkMode
                              ? 'bg-white/5 border-white/10'
                              : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className={`font-medium text-sm mb-1 capitalize ${
                            isDarkMode ? 'text-gray-300' : 'text-slate-600'
                          }`}>
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                          <div className={`text-sm ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`} style={{ fontFamily: 'var(--font-poppins)' }}>
                      Use Cases
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentFeature.useCases.map((useCase, index) => (
                        <motion.div
                          key={useCase}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-start space-x-3 p-3 rounded-lg border ${
                            isDarkMode
                              ? 'bg-white/5 border-white/10'
                              : 'bg-white border-gray-200'
                          }`}
                        >
                          <Play className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                          <span className={`text-sm ${
                            isDarkMode ? 'text-gray-300' : 'text-slate-700'
                          }`}>
                            {useCase}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`mt-16 p-8 rounded-3xl text-center backdrop-blur-xl border ${
              isDarkMode
                ? 'bg-emerald-500/5 border-emerald-500/20'
                : 'bg-emerald-50/70 border-emerald-200/60'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`} style={{ fontFamily: 'var(--font-poppins)' }}>
              Experience These Features Firsthand
            </h3>
            <p className={`text-lg mb-6 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-slate-700'
            }`}>
              Join our waitlist to be among the first to experience the next generation of secure production access.
            </p>
            <Link
              href="/"
              className={`inline-flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 ${
                isDarkMode
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              <span>Join Waitlist</span>
              <TrendingUp className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}