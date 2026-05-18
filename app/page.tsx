export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-purple-100 text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center text-white font-black text-xl">
              A
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-tight">
                AfroSpeech
              </h1>

              <p className="text-xs text-slate-500">
                AI Voice Technology
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-purple-600 transition">
              Features
            </a>

            <a href="#beta" className="hover:text-purple-600 transition">
              Beta
            </a>

            <a href="#about" className="hover:text-purple-600 transition">
              About
            </a>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
            Join Beta
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Building AI for African Languages
          </div>

          <h2 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">

            Speak.
            <br />

            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Translate.
            </span>

            <br />
            Create.

          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600 max-w-xl">
            AfroSpeech transforms Luganda and African languages into text,
            translations, emails, SMS, and professional documents using advanced AI voice technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition">
              Join the Beta
            </button>

            <button className="border border-slate-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition">
              Watch Demo
            </button>

          </div>

        </div>

        {/* MOCKUP CARD */}

        <div className="relative">

          <div className="absolute inset-0 bg-purple-400 blur-3xl opacity-20 rounded-full"></div>

          <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-2xl">

            <div className="flex items-center justify-between mb-6">

              <div>
                <p className="text-sm text-slate-500">
                  AfroSpeech Live
                </p>

                <h3 className="text-2xl font-bold">
                  Voice Assistant
                </h3>
              </div>

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg">
                🎤
              </div>

            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">

              <div className="flex justify-between text-sm text-slate-500 mb-6">
                <span>Luganda</span>
                <span>→ English</span>
              </div>

              <div className="space-y-5">

                <div>
                  <p className="text-xs uppercase tracking-wide text-purple-600 font-semibold mb-2">
                    Original Speech
                  </p>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    “Mpandiikire email eri manager wange.”
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-orange-500 font-semibold mb-2">
                    Translation
                  </p>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    “Write an email to my manager.”
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-green-600 font-semibold mb-2">
                    AI Generated Email
                  </p>

                  <div className="bg-white rounded-2xl p-4 border border-slate-200 text-sm leading-relaxed text-slate-600">
                    Subject: Leave Request
                    <br />
                    <br />
                    Dear Manager,
                    <br />
                    I hope you are well...
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section id="features" className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-5xl font-black">
            Everything You Need
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            AfroSpeech combines translation, speech recognition,
            and AI writing assistance into one multilingual productivity platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {[
            {
              title: 'Speech-to-Text',
              icon: '🎤',
              desc: 'Convert speech into accurate digital text instantly.'
            },

            {
              title: 'Translation',
              icon: '🌍',
              desc: 'Translate Luganda and African languages globally.'
            },

            {
              title: 'AI Writing',
              icon: '✉️',
              desc: 'Generate emails, SMS, and documents using voice.'
            },

            {
              title: 'Text-to-Speech',
              icon: '🔊',
              desc: 'Listen to translations and generated responses naturally.'
            }

          ].map((feature) => (

            <div
              key={feature.title}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
            >

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* BETA */}

      <section id="beta" className="max-w-5xl mx-auto px-6 py-24">

        <div className="bg-gradient-to-r from-purple-100 to-orange-100 border border-purple-200 rounded-[2rem] p-12 text-center">

          <h2 className="text-5xl font-black">
            Join the AfroSpeech Beta
          </h2>

          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Help shape the future of African language AI technology.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <input
              placeholder="Your Email"
              className="px-6 py-4 rounded-2xl border border-slate-300 w-full md:w-96 outline-none focus:border-purple-500"
            />

            <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Join Beta
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}