import { useState } from 'react'
import Select from "../select/select.jsx"
import styles from './app-form-buttons.module.scss'

function AppFormButtons({ setButtons, buttons, createPage, updatePage, update, loading }) {
    const [label, setLabel] = useState("")
    const [url, setUrl] = useState("")
    const [bgColor, setBgColor] = useState("")
    const [textColor, setTextColor] = useState("")
    const [type, setType] = useState("tugma")
    const [animation, setAnimation] = useState("animation-1")
    const [error, setError] = useState({
        label: false,
        url: false,
        bgColor: false,
        textColor: false
    })

    const addButton = () => {
        const newErrorState = {
            label: label.length === 0,
            url: url.length === 0,
            bgColor: bgColor.length === 0,
            textColor: textColor.length === 0
        }

        setError(newErrorState)

        if (Object.values(newErrorState).includes(true)) {
            return
        }

        const newButton = { label, url, bgColor, textColor, type, animation }

        const updatedButtons = [...buttons, newButton]
        setButtons(updatedButtons)

        setLabel("")
        setUrl("")
        setBgColor("")
        setTextColor("")
        setType(type)
        setAnimation(animation)
    }

    return (
        <div className={styles['app-form-buttons']}>
            <span className={styles['buttons-title']}>Tugmalar qo'shing</span>
            <input
                style={{ borderColor: error.label ? 'red' : 'initial' }}
                className={styles['buttons-inp']}
                type="text"
                placeholder="Tugma nomini yozing"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
            />
            <input
                style={{ borderColor: error.url ? 'red' : 'initial' }}
                className={styles['buttons-inp']}
                type="text"
                placeholder="Tugma url manzilini yozing"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <input
                style={{ borderColor: error.bgColor ? 'red' : 'initial' }}
                className={styles['buttons-inp']}
                type="text"
                placeholder="Tugma uchun text rangini yozing"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
            />
            <input
                style={{ borderColor: error.textColor ? 'red' : 'initial' }}
                className={styles['buttons-inp']}
                type="text"
                placeholder="Tugma uchun orqa fon rangini yozing"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
            />
            <label>Tugma turini tanlang: </label>
            <Select
                options={[
                    { value: "tugma", label: "Oddiy tugma" },
                    { value: "telefon", label: "Telefon uchun tugma" },
                ]}
                onChange={(e) => setType(e.target.value)}
            />
            <label>Animatsiya turini tanlang: </label>
            <Select
                options={[
                    { value: "animation-1", label: "Tada animation" },
                    { value: "animation-2", label: "Blink animation" },
                ]}
                onChange={(e) => setAnimation(e.target.value)}
            />
            <button onClick={addButton} className={styles['buttons-btn']}>Tugma qo'shish</button>
            {update ?
                (loading ?
                    <button className={styles['create-btn']} disabled>Yangilanish...</button> :
                    <button onClick={updatePage} className={styles['create-btn']}>Yangilash</button>)
                : (loading ?
                    <button className={styles['create-btn']} disabled>Yaratilmoqda...</button> :
                    <button onClick={createPage} className={styles['create-btn']}>Yaratish</button>)
            }
        </div>
    )
}

export default AppFormButtons
