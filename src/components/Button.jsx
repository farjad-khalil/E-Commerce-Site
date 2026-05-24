/* eslint-disable react/prop-types */
function Button({ text, children, E_classes = '', onClick, variant = 'primary', type = 'button', disabled = false }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-200/40 disabled:cursor-not-allowed disabled:opacity-60'
  const variants = {
    primary: 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-white',
    ghost: 'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white hover:text-slate-950',
    dark: 'border border-slate-700 bg-slate-950 text-white hover:border-white/15 hover:bg-slate-900',
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant] ?? variants.primary} ${E_classes}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children ?? text}
    </button>
  )
}

export default Button
