'use client'

import menuCornerSVG from '../../public/menu-corner.svg'
import Image from 'next/image';

type AllowedLocations = 'TopRight'|'TopLeft'|'BottomRight'|'BottomLeft'

type MenuCornerProps = {
	isLeft?: boolean
	isRight?: boolean
	isMobile?: boolean
	location: AllowedLocations
	handlePageChange: (direction: string) => void
}

const MenuCorner = (props: MenuCornerProps) => {
	const handleClick = () => {
		if(props.isRight){
			props.handlePageChange('forward')
		}
		if(props.isMobile && (props.location === 'TopRight' || props.location === 'BottomRight')){
			props.handlePageChange('forward')
		}
		if(props.isLeft){
			props.handlePageChange('back')
		}
		if(props.isMobile && (props.location === 'TopLeft' || props.location === 'BottomLeft')){
			props.handlePageChange('back')
		}
	}
	const imageDetails = () => {
		return (
			<Image
				priority
				src={menuCornerSVG}
				alt='corner'
				height={80}
				onClick={handleClick}
			/>
		)
	}

	const getPosition = () => {
		switch(props.location){
			case 'TopRight':
				if(props.isLeft){
					return (
						<div className='absolute top-0 right-0 rotate-90 pointer-events-none'>
							{imageDetails()}
						</div>
					)
				}else{
					return (
						<div className='absolute top-0 right-0 rotate-90'>
							{imageDetails()}
						</div>
					)
				}
			case 'TopLeft':
				if(props.isRight){
					return (
						<div className='absolute top-0 left-0 pointer-events-none'>
							{imageDetails()}
						</div>
					)
				}else{
					return (
						<div className='absolute top-0 left-0'>
							{imageDetails()}
						</div>
					)
				}
			case 'BottomRight':
				if(props.isLeft){
					return (
						<div className='absolute bottom-0 right-0 rotate-180 pointer-events-none'>
							{imageDetails()}
						</div>
					)
				}else{
					return (
						<div className='absolute bottom-0 right-0 rotate-180'>
							{imageDetails()}
						</div>
					)
				}
			default:
				if(props.isRight){
					return (
						<div className='absolute bottom-0 left-0 rotate-270 pointer-events-none'>
							{imageDetails()}
						</div>
					)
				}else{
					return (
						<div className='absolute bottom-0 left-0 rotate-270'>
							{imageDetails()}
						</div>
					)
				}
		}
	}
	
	return(
		<div className='relative'>
			{getPosition()}
		</div>
	)
}

export default MenuCorner