import React from "react"
import { motion, AnimationControls } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLElement | null>
  aboutControls: AnimationControls
}

export function AboutSection({ aboutRef, aboutControls }: AboutSectionProps) {
  return (
    <section id="about" ref={aboutRef} className="relative z-20 py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            initial="hidden"
            animate={aboutControls}
            className="relative"
          >
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-2 border border-blue-700/50">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Children learning about space"
                width={600}
                height={500}
                className="rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-full p-4 shadow-lg">
              <Star className="w-8 h-8 text-blue-900" />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
              },
            }}
            initial="hidden"
            animate={aboutControls}
          >
            <h3 className="text-blue-300 text-xl mb-4">TENTANG KAMI</h3>
            <h2 className="text-4xl font-bold text-white mb-6">TK Luar Angkasa untuk Bintang Kecil</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-8"></div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Di Birini Kindergarten & Day Care, kami percaya bahwa setiap anak adalah bintang yang bersinar dengan
              potensi tak terbatas. Kurikulum bertema luar angkasa kami dirancang untuk menumbuhkan rasa ingin tahu
              dan kecintaan belajar sejak usia dini.
            </p>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Pendidik berpengalaman kami menciptakan lingkungan yang aman dan mendukung di mana anak-anak dapat
              bermimpi setinggi bintang dan mengembangkan keterampilan yang mereka butuhkan untuk kesuksesan di masa
              depan.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 