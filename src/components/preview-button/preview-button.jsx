import styles from './preview-button.module.scss'

const PreviewButton = ({
    label,
    bgColor,
    textColor,
    url,
    type,
    animation,
    update,
    removeButton,
    index,
    btnId,
    isUpdate
}) => {
    // Determine the animation class based on the animation prop
    const animationClass = animation === 'animation-1'
        ? styles['animation-1']
        : animation === 'animation-2'
            ? styles['animation-2']
            : ''

    return (
        <div
            style={{ background: textColor }}
            className={`${styles['preview-button']} ${animationClass}`}
        >
            <a className={styles['button-link']} href={type === 'telefon' ? `tel:${url}` : url}>
                <dt className={styles['button-detail-item']}>
                    <div className={styles['details']}>
                        <p style={{ color: bgColor }} className={styles['details-text']}>
                            {label}
                        </p>
                    </div>
                </dt>
            </a>

            {removeButton && (
                <button
                    style={{ color: bgColor, border: `1px solid ${bgColor}` }}
                    className={styles['del-btn']}
                    onClick={() => removeButton()}
                >
                    O'chirish
                </button>
            )}

            {isUpdate && (
                <button
                    style={{ color: bgColor, border: `1px solid ${bgColor}` }}
                    className={styles['del-btn']}
                    onClick={() => update(index)}
                >
                    Yangilash
                </button>
            )}
        </div>
    )
}

export default PreviewButton
