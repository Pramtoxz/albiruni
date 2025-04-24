import React from "react"
import { motion, AnimationControls } from "framer-motion"
import { Button } from "@/components/ui/button"
import Logo from '@/assets/home/logoalbiruni.webp'

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement | null>
  heroControls: AnimationControls
}

export function HeroSection({ heroRef, heroControls }: HeroSectionProps) {
  return (
    <section id="home" ref={heroRef} className="relative z-20 pt-20 pb-32 px-6">
      <div className="container mx-auto">
        <div className="relative mb-8 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <img
              src={Logo}
              alt="Logo Albiruni"
              className="w-full h-full object-contain scale-200"
            />
          </div>
        </div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate={heroControls}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Embark on an educational journey through space and beyond with our innovative kindergarten program
            designed for young explorers ages 3-6. At Birini, we combine play-based learning with cosmic adventures!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 md:px-8 md:py-6 text-lg rounded-full">
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-200 hover:bg-blue-900/30 px-6 py-5 md:px-8 md:py-6 text-lg rounded-full"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 