import './SwitchButton.scss' // Import the CSS file for styling

function SwitchButton({ setWatermark, watermark }) {

	const toggleSwitch = () => {
		setWatermark(!watermark)
	}



	return (
		<div className={`switch ${watermark ? 'on' : 'off'}`} onClick={toggleSwitch}>
			<div className="switch-handle"></div>
		</div>
	)
}

export default SwitchButton
