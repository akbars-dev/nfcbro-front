import { useState } from 'react'
import Select from "../select/select.jsx"
import styles from './app-form-buttons.module.scss'

function AppFormButtons({ setButtons, createPage, updatePage, update }) {

    // Manage the buttons state locally
    const [buttons, updateButtons] = useState([])

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

        // Update the local buttons array and the parent state
        const updatedButtons = [...buttons, newButton]
        updateButtons(updatedButtons)
        setButtons(updatedButtons)

        // Clear the input fields after adding the button
        setLabel("")
        setUrl("")
        setBgColor("")
        setTextColor("")
        setType("tugma")
        setAnimation("animation-1")
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
                    { value: "animation-1", label: "Animation 1" },
                    { value: "animation-2", label: "Animation 2" },
                    { value: "animation-3", label: "Animation 3" },
                ]}
                onChange={(e) => setAnimation(e.target.value)}
            />
            <button onClick={addButton} className={styles['buttons-btn']}>Tugma qo'shish</button>
            {update ?
                <button onClick={(e) => updatePage()} className={styles['create-btn']}>Yangilash</button> :
                <button onClick={(e) => createPage()} className={styles['create-btn']}>Yaratish</button>
            }

        </div>
    )
}

export default AppFormButtons
