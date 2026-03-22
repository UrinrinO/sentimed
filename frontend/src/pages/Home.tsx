import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Droplets,
  Activity,
  Stethoscope,
  ArrowRight,
} from 'lucide-react'
import logo from '../assets/logo.png'
import bgImage from '../assets/background2.jpg'

const categories = [
  { id: 'skin',      label: 'Skin & Dermatology', Icon: Droplets    },
  { id: 'pain',      label: 'Pain & Discomfort',  Icon: Activity    },
  { id: 'general',   label: 'General Check-up',   Icon: Stethoscope },
]

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleStart = () => {
    if (selected) navigate(`/chat/${selected}`)
  }

  return (
    <div className="hero-page">

      <div className="hero-image-panel">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover object-bottom-right"
        />
        <div className="absolute inset-0 fade-from-left" />
        <div className="absolute inset-0 fade-from-top" />
        <div className="absolute bottom-0 left-0 right-0 h-40 fade-from-bottom" />
      </div>

      <div className="hero-body">
        <div className="hero-content">

          <div className="mb-8">
            <span className="badge-pill">
              <img src={logo} alt="" className="w-4 h-4 mix-blend-multiply" />
              Powered by SentiMed Advanced AI
            </span>
          </div>

          <h1 className="text-[72px] font-extrabold leading-[1.05] tracking-[-2px] text-navy mb-4">
            Your AI<br />
            <span className="text-muted/90">Health Companion</span>
          </h1>

          <p className="text-base text-gray-500 leading-relaxed mb-9">
            Select a category below to begin your conversation.
          </p>
          <div className="mb-7">
            <span className="section-label">What brings you in today?</span>
            <div className="grid grid-cols-3 gap-2.5" style={{ maxWidth: '460px' }}>
              {categories.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelected(id)}
                  className={`category-card ${selected === id ? 'selected' : ''}`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                  <span className="text-xs font-semibold leading-snug">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-5">
            <button
              onClick={handleStart}
              disabled={!selected}
              className={selected ? 'btn-spark' : 'btn-outline'}
            >
              Start Conversation
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
