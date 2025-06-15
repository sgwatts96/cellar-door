'use client'

interface MenuCoverProps {
  isFrontCover: boolean
  handleCoverPageTurn: () => void
}

const MenuCover = (props: MenuCoverProps) => {
	return(
		<div className='flex m-auto bg-[#450000] w-95/100 md:max-w-125 min-h-[95vh] md:min-h-[95vh]' onClick={props.handleCoverPageTurn}>
			{props.isFrontCover
				?
					<div className='m-auto px-3 text-5xl md:text-7xl font-primary text-center text-[#806a22]'>Puskus-Watts Cellar Door</div>
				:
					<div className='m-auto px-3 text-7xl font-primary text-center text-[#806a22]'>Fin</div>
			}
		</div>
	)
}

export default MenuCover