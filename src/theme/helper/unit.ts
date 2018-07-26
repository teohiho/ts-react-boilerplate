

const ratioXValue = 1

export const getEm = (baseUnit: number) => (value: number) => {
	const unit = baseUnit * ratioXValue
	return unit * value
}

