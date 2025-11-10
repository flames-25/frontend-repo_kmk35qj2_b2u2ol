import { CloudSun, Camera, MessageSquare, BarChart3, MapPin, PiggyBank } from 'lucide-react';

const items = [
  {
    icon: Camera,
    title: 'Crop Health Scanner',
    desc: 'Upload leaf images to detect diseases and get treatments instantly.'
  },
  {
    icon: CloudSun,
    title: 'Smart Weather & Alerts',
    desc: 'Hyperlocal forecasts with irrigation, pest and frost warnings.'
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    desc: 'Track expenses, yields and income with visual dashboards.'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot + Experts',
    desc: 'Ask questions in your language and get expert help when needed.'
  },
  {
    icon: PiggyBank,
    title: 'Market Prices',
    desc: 'See mandi prices, set alerts and maximize profits.'
  },
  {
    icon: MapPin,
    title: 'Smart Crop Suggestion',
    desc: 'Choose the best crops based on soil, water and weather.'
  }
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Everything you need to farm smarter</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-300">
          A modern, multilingual platform designed for farmers, experts and admins.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gray-900/60 p-6 ring-1 ring-white/5 transition hover:bg-gray-900">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/20">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
