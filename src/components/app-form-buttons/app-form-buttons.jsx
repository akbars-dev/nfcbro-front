import styles from './app-form-buttons.module.scss'
import Select from "../select/select.jsx";

function AppFormButtons() {
    return <div className={styles['app-form-buttons']}>
        <span className={styles['buttons-title']}>Tugmalar qoshing</span>
        <input
            className={styles['buttons-inp']}
            type="text"
            placeholder="Ismingizni yozing"
        />
        <input
            className={styles['buttons-inp']}
            type="text"
            placeholder="Ismingizni yozing"
        />
        <input
            className={styles['buttons-inp']}
            type="text"
            placeholder="Ismingizni yozing"
        />
        <input
            className={styles['buttons-inp']}
            type="text"
            placeholder="Ismingizni yozing"
        />
        <label htmlFor="">Tugma turini tanlang: </label>
        <Select
            options={[
                {value: "tugma", label: "Oddiy tugma"},
                {value: "telefon", label: "Telefon uchun tugma"},
            ]
            }/>
        <label htmlFor="">Animatsiya turini tanlang: </label>
        <Select
            options={[
                {value: "animation-1", label: "Animation 1"},
                {value: "animation-2", label: "Animation 2"},
                {value: "animation-3", label: "Animation 3"},
            ]
            }/>
        <button className={styles['buttons-btn']}>Tugma qoshish</button>
    </div>
}


export default AppFormButtons