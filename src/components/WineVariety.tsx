interface WineVarietyProps {
	variety: string
}

const WineVariety = (props: WineVarietyProps) => {
	return(
		<div className='py-3 text-xl font-medium'>
			{props.variety}
		</div>
	)
}

export default WineVariety