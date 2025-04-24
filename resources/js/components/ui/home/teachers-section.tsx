import React from "react"
import { motion, AnimationControls } from "framer-motion"

interface TeachersSectionProps {
  teachersRef: React.RefObject<HTMLElement | null>
  teachersControls: AnimationControls
}

export function TeachersSection({ teachersRef, teachersControls }: TeachersSectionProps) {
  return (
    <section id="teachers" ref={teachersRef} className="relative z-20 py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate={teachersControls}
          className="text-center mb-16"
        >
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-blue-300 text-xl mb-4"
          >
            TIM PENGAJAR
          </motion.h3>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl font-bold text-white mb-6"
          >
            Guru-Guru Luar Biasa Kami
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="w-24 h-1 bg-yellow-500 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={teachersControls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <TeacherCard
            image="/placeholder.svg?height=300&width=300"
            name="Budi Santoso"
            role="Kepala Sekolah"
            description="Berpengalaman 15 tahun dalam pendidikan anak usia dini dengan pendekatan berbasis eksplorasi."
          />
          <TeacherCard
            image="/placeholder.svg?height=300&width=300"
            name="Siti Rahayu"
            role="Guru Sains"
            description="Spesialis dalam mengajarkan konsep sains kepada anak-anak dengan cara yang menyenangkan dan interaktif."
          />
          <TeacherCard
            image="/placeholder.svg?height=300&width=300"
            name="Ahmad Hidayat"
            role="Guru Matematika"
            description="Ahli dalam membuat matematika menjadi menyenangkan melalui permainan dan aktivitas praktis."
          />
          <TeacherCard
            image="/placeholder.svg?height=300&width=300"
            name="Dewi Lestari"
            role="Guru Seni"
            description="Seniman berbakat yang menginspirasi kreativitas anak-anak melalui berbagai media seni."
          />
        </motion.div>
      </div>
    </section>
  )
}

interface TeacherCardProps {
  image: string
  name: string
  role: string
  description: string
}

function TeacherCard({ image, name, role, description }: TeacherCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-blue-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-800/50 hover:border-blue-600/50 transition-all hover:transform hover:-translate-y-2 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-yellow-300 text-sm">{role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-blue-200">{description}</p>
        <div className="flex gap-3 mt-4">
          <div className="w-8 h-8 rounded-full bg-blue-800/70 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-200"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-800/70 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-200"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-800/70 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-200"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 