import { useState } from 'react'
import './SwitchButton.scss' // Import the CSS file for styling

function SwitchButton() {
	const [isOn, setIsOn] = useState(false)

	const toggleSwitch = () => {
		setIsOn(!isOn)
	}

	return (
		<div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
			<div className="switch-handle"></div>
		</div>
	)
}

export default SwitchButton
