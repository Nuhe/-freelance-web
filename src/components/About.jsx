import FoxMark from './FoxMark'

const skills = [
  { label: 'Automatización de procesos', value: 90 },
  { label: 'Bots e IA aplicada', value: 85 },
  { label: 'Integraciones y APIs', value: 82 },
  { label: 'Desarrollo web y paneles', value: 88 },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* ── Texto ── */}
          <div>
            <span className="section-label">Quién hay detrás</span>
            <h2 className="section-title">Sobre FoxOps</h2>

            <div className="space-y-4 text-sm text-zinc-500 leading-relaxed max-w-xl">
              <p>
                Soy desarrollador especializado en automatización de procesos, integración de
                sistemas y soluciones web para operaciones de negocio.
              </p>
              <p>
                Trabajo con pymes, estudios contables, consultorios y equipos administrativos
                que necesitan operar con más eficiencia y menos errores. No con más herramientas
                genéricas que nadie termina de usar.
              </p>
              <p>
                Entiendo el problema primero. Después propongo lo que funciona y construyo lo que
                se usa de verdad. Mi foco está en automatización, IA aplicada e integraciones que
                resuelvan operaciones concretas, no en tecnología por la tecnología.
              </p>
              <p className="text-zinc-400">
                No ofrezco transformaciones digitales ni diagnósticos de consultora. Ofrezco
                soluciones que reducen el trabajo repetitivo, los errores y el desorden
                operativo de tu equipo.
              </p>
            </div>

            {/* Valores de trabajo */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {[
                { label: 'Claridad antes que tecnología', sub: 'Primero entiendo el problema' },
                { label: 'Soluciones que se usan', sub: 'No entrego proyectos que se archivan' },
                { label: 'Adaptado a tu contexto', sub: 'Sin plantillas ni atajos genéricos' },
                { label: 'Directo al punto', sub: 'Sin procesos de agencia ni capas de aprobación' },
              ].map((v) => (
                <div key={v.label} className="flex gap-3 p-3 rounded-lg border border-zinc-800/60 hover:border-zinc-700/60 transition-colors">
                  <span className="w-0.5 h-full min-h-[24px] bg-orange-600/40 rounded-full shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-300">{v.label}</div>
                    <div className="text-[11px] text-zinc-600 mt-0.5">{v.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-8">
              <a href="https://github.com/Nuhe" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 rounded-lg px-4 py-2 text-xs transition-colors font-mono">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/Nuhe" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 rounded-lg px-4 py-2 text-xs transition-colors font-mono">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── Card de skills ── */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-12 rounded-xl bg-orange-600/10 border border-orange-600/20 flex items-center justify-center">
                <FoxMark className="w-6 h-7" />
              </div>
              <div>
                <div className="font-bold text-white text-sm tracking-wide">FOXOPS</div>
                <div className="text-zinc-600 text-[11px] font-mono mt-0.5">Automatización · IA · Web</div>
              </div>
            </div>

            <div className="space-y-5">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-400">{s.label}</span>
                    <span className="text-zinc-600 font-mono">{s.value}%</span>
                  </div>
                  <div className="h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t border-zinc-800 text-[11px] text-zinc-700 font-mono leading-relaxed">
              Cada proyecto es diferente. Cada solución se construye para el contexto
              específico del cliente, no sobre una plantilla.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
