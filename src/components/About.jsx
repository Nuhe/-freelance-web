const skills = [
  { label: 'Automatización', value: 90 },
  { label: 'Bots e IA', value: 85 },
  { label: 'Desarrollo Web', value: 90 },
  { label: 'Integraciones', value: 80 },
]

const FoxMark = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500" aria-hidden="true">
    <path
      d="M3 14 L8 2 L12 9 L16 2 L21 14 Q21 22 12 23 Q3 22 3 14 Z"
      fill="currentColor"
    />
    <ellipse cx="9.5" cy="15.5" rx="1.1" ry="1" fill="#09090b" />
    <ellipse cx="14.5" cy="15.5" rx="1.1" ry="1" fill="#09090b" />
  </svg>
)

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: skill card */}
          <div className="order-2 lg:order-1">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <FoxMark />
                </div>
                <div>
                  <div className="font-bold text-white">FoxOps</div>
                  <div className="text-zinc-600 text-xs font-mono mt-0.5">Automatización · IA · Web</div>
                </div>
              </div>

              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-zinc-400">{skill.label}</span>
                      <span className="text-zinc-600 font-mono">{skill.value}%</span>
                    </div>
                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-3">
                {[
                  { label: 'Automatización', icon: '⚙' },
                  { label: 'IA & Bots', icon: '◈' },
                  { label: 'Web', icon: '◻' },
                ].map((item) => (
                  <div key={item.label} className="bg-zinc-800/50 rounded-lg py-3 text-center">
                    <div className="text-orange-400 text-base mb-1">{item.icon}</div>
                    <div className="text-xs text-zinc-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title">Quién está detrás de FoxOps</h2>
            <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
              <p>
                Soy desarrollador con foco en automatización, integración de sistemas y soluciones
                web orientadas a negocio.
              </p>
              <p>
                Trabajo con pymes, estudios, consultorios y equipos que necesitan mejorar sus
                procesos sin depender de software genérico que no se adapta a su realidad.
              </p>
              <p>
                No ofrezco plantillas ni soluciones de caja. Construyo herramientas a medida,
                pensadas para los flujos reales de tu operación.
              </p>
              <p>
                Mi objetivo no es vender tecnología. Es que vos y tu equipo trabajen mejor,
                con menos fricción y más resultados.
              </p>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href="https://github.com/Nuhe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-lg px-4 py-2 text-xs transition-colors font-mono"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/Nuhe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-lg px-4 py-2 text-xs transition-colors font-mono"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
