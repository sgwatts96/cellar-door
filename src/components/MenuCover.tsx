'use client'

interface MenuCoverProps {
  isFrontCover: boolean
  handleCoverPageTurn: () => void
}

const MenuCover = (props: MenuCoverProps) => {
	return(
		<div className='flex m-auto bg-[#450000] w-full md:max-w-175 min-h-dvh md:min-h-[95vh]' onClick={props.handleCoverPageTurn}>
			{props.isFrontCover
				?
					<div className='m-auto px-3 text-5xl md:text-7xl font-primary text-center text-[#806a22]'>
						<div>Puskus-Watts</div><div>Cellar Door</div>
					</div>
				:
					<div className='m-auto px-3 text-7xl font-primary text-center text-[#806a22]'>Fin</div>
			}
		</div>
	)
}

export default MenuCover