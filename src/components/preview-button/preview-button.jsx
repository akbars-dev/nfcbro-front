import PropTypes from 'prop-types';
import styles from './preview-button.module.scss';

const PreviewButton = ({label, bgColor, textColor, url, type, animation}) => {
    console.log(animation)

    if (type === 'oddiy') return <button style={{background: bgColor}} className={styles['preview-button']}>
        <a className={styles['button-link']} href="#">
            <dt className={styles['button-detail-item']}>
                <div className={styles['details']}>
                    <p style={{color: textColor}} className={styles['details-text']}>
                        {label}
                    </p>
                </div>
            </dt>
        </a>
    </button>
    else if (type === 'telefon') {
        return <button style={{background: bgColor}} className={styles['preview-button']}>
            <a className={styles['button-link']} href={`tel:${url}`}>
                <dt className={styles['button-detail-item']}>
                    <div className={styles['details']}>
                        <p style={{color: textColor}} className={styles['details-text']}>
                            {label}
                        </p>
                    </div>
                </dt>
            </a>
        </button>
    }

};


PreviewButton.propTypes = {
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired,
};

export default PreviewButton;
