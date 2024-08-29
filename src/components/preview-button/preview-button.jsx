import styles from './preview-button.module.scss'

const PreviewButton = ({ label, bgColor, textColor, url, type, animation, removeButton, index }) => {


    if (type === 'tugma') return <button style={{ background: textColor }} className={styles['preview-button']}>
        <a className={styles['button-link']} href={url}>
            <dt className={styles['button-detail-item']}>
                <div className={styles['details']}>
                    <p style={{ color: bgColor }} className={styles['details-text']}>
                        {label}
                    </p>
                </div>
            </dt>
        </a>

        {removeButton && <button style={{ color: bgColor, border: `1px solid ${bgColor}` }} className={styles['del-btn']}>O'chirish</button>}
    </button>
    else if (type === 'telefon') {
        return <button style={{ background: textColor }} className={styles['preview-button']}>
            <a className={styles['button-link']} href={`tel:${url}`}>
                <dt className={styles['button-detail-item']}>
                    <div className={styles['details']}>
                        <p style={{ color: bgColor }} className={styles['details-text']}>
                            {label}
                        </p>
                    </div>
                </dt>
            </a>


            {removeButton && <button style={{ color: bgColor, border: `1px solid ${bgColor}` }} className={styles['del-btn']}>O'chirish</button>}
        </button>
    }

}




export default PreviewButton
