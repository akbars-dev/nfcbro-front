import './Select.scss'

// eslint-disable-next-line react/prop-types
function CustomSelect({ options, onChange, disabled }) {
	return (
		<div className="custom-select-container">
			<select
				className="custom-select"
				onChange={onChange}
				disabled={disabled}
			>
				{/* eslint-disable-next-line react/prop-types */}
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}
						className="custom-option"
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default CustomSelect
