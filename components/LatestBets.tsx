'use client'

import { useState } from 'react'

type Bet = {
  game: string
  player: string
  amount: string
  currency: string
  multiplier: string
  profit: string
  profitCurrency: string
}

const bets: Bet[] = [
  { game: 'Bonbon Bon...', player: 'KevinOrtega', amount: '$263', currency: 'S', multiplier: '1.73x', profit: '+454.99', profitCurrency: 'S' },
  { game: 'Pixel Paws', player: 'YaelSchmitt', amount: '762', currency: 'T', multiplier: '3.49x', profit: '+2659.38', profitCurrency: 'T' },
  { game: 'Stunning Cash', player: 'Xiaoliapiski24', amount: 'R$238', currency: 'RS', multiplier: '2.61x', profit: '+621.18', profitCurrency: 'RS' },
  { game: 'Haunted Reels', player: 'YingCollins', amount: 'R$561', currency: 'RS', multiplier: '1.55x', profit: '+869.55', profitCurrency: 'RS' },
  { game: 'Kokeshi Pop', player: 'HiroshiBraun', amount: '116', currency: 'T', multiplier: '4.52x', profit: '+524.32', profitCurrency: 'T' },
  { game: 'Lady Wolf ...', player: 'Andreaeki', amount: 'R$747', currency: 'RS', multiplier: '2.57x', profit: '+1919.79', profitCurrency: 'RS' },
  { game: 'Energy Stars', player: 'CarolinePetrova', amount: '€282', currency: 'EUR', multiplier: '2.73x', profit: '+769.86', profitCurrency: 'EUR' },
  { game: 'Secret Book...', player: 'LanGumundsson', amount: 'R$693', currency: 'RS', multiplier: '2.94x', profit: '+2037.42', profitCurrency: 'RS' },
  { game: 'In Jazz', player: 'IrinaGujnsson', amount: '716', currency: 'T', multiplier: '3.92x', profit: '+2806.72', profitCurrency: 'T' },
  { game: 'Wild Turkey ...', player: 'SitaMarkov99', amount: '$182', currency: 'S', multiplier: '4.98x', profit: '+906.36', profitCurrency: 'S' },
]

export default function LatestBets() {
  const [filter, setFilter] = useState<'all' | 'high'>('all')

  const filtered = bets.filter((b) => {
    if (filter === 'all') return true
    // naive "high roller" filter: profit numeric > 1500
    const num = Number(b.profit.replace(/[^0-9.-]/g, ''))
    return num > 1500
  })

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Latest bet & Race</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-md text-sm ${filter === 'all' ? 'bg-white/10 text-white' : 'bg-white/5 text-[var(--subtle)]'}`}
          >
            All bets
          </button>
          <button
            onClick={() => setFilter('high')}
            className={`px-3 py-1 rounded-md text-sm ${filter === 'high' ? 'bg-white/10 text-white' : 'bg-white/5 text-[var(--subtle)]'}`}
          >
            High Roller
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <table className="w-full text-sm text-gray-300">
          <thead className="bg-white/3 text-[var(--subtle)]">
            <tr>
              <th className="text-left px-4 py-3">Game</th>
              <th className="text-left px-4 py-3">Player</th>
              <th className="text-left px-4 py-3">Bet Amount</th>
              <th className="text-left px-4 py-3">Multiplier</th>
              <th className="text-left px-4 py-3">Profit</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b, idx) => (
              <tr key={idx} className="border-t border-white/5 hover:bg-white/3 transition">
                <td className="px-4 py-3">{b.game}</td>
                <td className="px-4 py-3">{b.player}</td>
                <td className="px-4 py-3">{b.amount} <span className="ml-2 inline-block px-2 py-0.5 text-[12px] rounded-full bg-white/5 muted">{b.currency}</span></td>
                <td className="px-4 py-3">{b.multiplier}</td>
                <td className="px-4 py-3 text-emerald-400">{b.profit} <span className="ml-2 inline-block px-2 py-0.5 text-[12px] rounded-full bg-white/5 muted">{b.profitCurrency}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
