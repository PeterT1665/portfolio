// A picture slot. With `src` it is a real picture; without, it is a plain marked
// slot that says which file to drop into photos/ (then run `npm run images`).
export function Photo({
  src,
  alt,
  label,
  note,
  className = '',
  width = 1200,
  height = 1500,
}: {
  src?: string
  alt?: string
  label: string
  note?: string
  className?: string
  width?: number
  height?: number
}) {
  if (src)
    return (
      <img
        className={`photo ${className}`}
        src={`${src}-800.webp`}
        srcSet={`${src}-800.webp 800w, ${src}-1600.webp 1600w`}
        sizes="(max-width: 768px) 90vw, 40vw"
        alt={alt ?? label}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    )
  return (
    <div className={`photo photo--empty ${className}`} role="img" aria-label={`${label} (coming soon)`}>
      <span>{label}</span>
      {note && <span className="photo__note">{note}</span>}
    </div>
  )
}
