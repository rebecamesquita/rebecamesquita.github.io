import Arrow from './Arrow'
import ExternalArrow from './ExternalArrow'
import styles from './Button.module.css'

function Button({ children, href, onClick, variant = 'dark', as }) {
  const className = `${styles.button} ${styles[variant]}`
  const Icon = variant === 'dark' ? Arrow : ExternalArrow
  const iconClassName =
    variant === 'dark' ? `${styles.arrow} ${styles.diagonal}` : styles.arrow
  const content = (
    <>
      <span>{children}</span>
      <Icon className={iconClassName} />
    </>
  )

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        className={className}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button
