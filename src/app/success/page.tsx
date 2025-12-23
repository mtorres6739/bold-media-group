export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-bounce">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-zinc-400 mb-8">
          Your payment was successful. We&apos;ll be in touch soon to get started on your podcast journey.
        </p>

        <div className="glass-card rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-2">What&apos;s Next?</h2>
          <ul className="text-left space-y-3 text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] mt-1">1.</span>
              <span>Check your email for a confirmation and receipt</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] mt-1">2.</span>
              <span>Our team will reach out within 24 hours to schedule your first session</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] mt-1">3.</span>
              <span>Get ready to create amazing content!</span>
            </li>
          </ul>
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#e5c04b] transition-colors"
        >
          Return Home
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
