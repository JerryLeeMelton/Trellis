"use client"

import { motion } from "motion/react"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
}

interface AnimPageProps {
  children: React.ReactNode
  className?: string
}

interface AnimDivProps {
  children: React.ReactNode
  className?: string
}

export function AnimPage({ children, className }: AnimPageProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimDiv({ children, className }: AnimDivProps) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
export function AnimP({ children, className }: AnimDivProps) {
  return (
    <motion.p variants={item} className={className}>
      {children}
    </motion.p>
  )
}
export function AnimH1({ children, className }: AnimDivProps) {
  return (
    <motion.h1 variants={item} className={className}>
      {children}
    </motion.h1>
  )
}
export function AnimH2({ children, className }: AnimDivProps) {
  return (
    <motion.h2 variants={item} className={className}>
      {children}
    </motion.h2>
  )
}
export function AnimH3({ children, className }: AnimDivProps) {
  return (
    <motion.h3 variants={item} className={className}>
      {children}
    </motion.h3>
  )
}
export function AnimH4({ children, className }: AnimDivProps) {
  return (
    <motion.h4 variants={item} className={className}>
      {children}
    </motion.h4>
  )
}
