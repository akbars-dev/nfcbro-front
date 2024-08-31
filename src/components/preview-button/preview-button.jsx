import styles from './preview-button.module.scss'

const PreviewButton = ({ label, bgColor, textColor, url, type, animation, removeButton, index }) => {
    return (
        <div style={{ background: textColor }} className={styles['preview-button']}>
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
                    onClick={() => removeButton(index)}
                >
                    O'chirish
                </button>
            )}
        </div>
    )
}

export default PreviewButton
