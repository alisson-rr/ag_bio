import React from 'react'
import { Sparkles, Smile, Heart, MessageCircle } from 'lucide-react'

function App() {
  const links = [
    {
      title: 'Clínicas de Estética',
      url: 'https://beautylab.devnoflow.com.br',
      icon: Sparkles,
      color: 'rose',
    },
    {
      title: 'Clínicas Odontológicas',
      url: 'https://smilelab.devnoflow.com.br',
      icon: Smile,
      color: 'teal',
    },
    {
      title: 'Clínicas Médicas',
      url: 'https://medlab.devnoflow.com.br',
      icon: Heart,
      color: 'rose',
    },
    {
      title: 'Fale Conosco',
      url: 'https://wa.me/5551994408307',
      icon: MessageCircle,
      color: 'teal',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-rose/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-2xl mx-auto px-6 py-12 sm:py-16">
        {/* Logo */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white rounded-full shadow-xl overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Agenda Magnética" 
              className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-full"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
            Agenda Magnética
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-md mx-auto">
            Tecnologia com calor humano
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 sm:space-y-5">
          {links.map((link, index) => {
            const Icon = link.icon
            const isRose = link.color === 'rose'
            
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group block w-full p-5 sm:p-6 rounded-2xl font-display text-lg sm:text-xl font-semibold
                  transition-all duration-300 ease-out
                  shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]
                  ${isRose 
                    ? 'bg-gradient-to-r from-rose to-rose-light text-white hover:from-rose-dark hover:to-rose' 
                    : 'bg-gradient-to-r from-teal to-teal-light text-white hover:from-teal-dark hover:to-teal'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`
                      p-2.5 rounded-xl bg-white/20 backdrop-blur-sm
                      group-hover:bg-white/30 transition-colors duration-300
                    `}>
                      <Icon className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <span className="text-left">{link.title}</span>
                  </div>
                  <svg 
                    className="w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-charcoal/50 text-sm font-sans">
            © 2025 Agenda Magnética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
