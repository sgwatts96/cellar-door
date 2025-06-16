'use client'
import { wine } from "@/lib/types"
import { useState } from "react"
import MenuPage from "@/components/MenuPage";
import IsMobile from "./IsMobile";
import MenuCover from "./MenuCover";

interface MenuLayoutProps {
	data: wine[]
}
const itemsPerPage = 2;

const MenuLayout = (props: MenuLayoutProps) => {
	const isMobile = IsMobile();
	const [wineIndex, setWineIndex] = useState({mobile: 0, left: 0, right: itemsPerPage});
	const [showCover, setShowCover] = useState(true);
	const [isFrontCover, setIsFrontCover] = useState(true)

	const handlePageChange = (direction: string) =>{
		if(direction === 'forward' && ((wineIndex.mobile+itemsPerPage >= props.data.length) || (wineIndex.right+itemsPerPage >= props.data.length))){
			setShowCover(!showCover)
			if(isFrontCover) setIsFrontCover(false)
		} else if(direction === 'back' && ((wineIndex.mobile === 0 && isMobile) || (!isMobile && wineIndex.left === 0))){
			setShowCover(!showCover)
			if(!isFrontCover) setIsFrontCover(true)
		} else if(isMobile && direction === 'forward'){
			setWineIndex({...wineIndex, mobile: wineIndex.mobile+itemsPerPage})
		} else if(isMobile && direction === 'back'){
			setWineIndex({...wineIndex, mobile: wineIndex.mobile-itemsPerPage})
		} else if(direction === 'forward'){
			setWineIndex({...wineIndex, left: wineIndex.left+(itemsPerPage*2), right: wineIndex.right+(itemsPerPage*2)})
		} else{
			setWineIndex({...wineIndex, left: wineIndex.left-(itemsPerPage*2), right: wineIndex.right-(itemsPerPage*2)})
		}
	}

	if(showCover){
		//isFrontCover={(!isMobile && wineIndex.left === 0) || (isMobile && wineIndex.mobile === 0)}
		return <MenuCover isFrontCover={isFrontCover} handleCoverPageTurn={() => setShowCover(!showCover)}/>
	}
	
	return(
		<div className="p-4 rounded-xs bg-[#450000] min-h-dvh md:min-h-[90vh]">
			<div className="bg-menu rounded-md text-slate-800 min-h-[95dvh] md:min-h-[90vh]">
				{!isMobile
					?
						<div className="grid grid-cols-201">
							<div className='col-span-100'>
								<MenuPage data={props.data.slice(wineIndex.left, wineIndex.left+itemsPerPage)} isLeft={true} handlePageChange={handlePageChange}/>
							</div>
							<div className='col-span-1 bg-gradient-to-r from-[#e2d8d2] via-gray-800 to-[#e2d8d2]' />
							<div className='col-span-100'>
								<MenuPage data={props.data.slice(wineIndex.right, wineIndex.right+itemsPerPage)} isRight={true} handlePageChange={handlePageChange}/>
							</div>
						</div>
					:
						<MenuPage data={props.data.slice(wineIndex.mobile, wineIndex.mobile+itemsPerPage)} isMobile={true} handlePageChange={handlePageChange}/>
				}
				
			</div>
		</div>
	)
}

export default MenuLayout