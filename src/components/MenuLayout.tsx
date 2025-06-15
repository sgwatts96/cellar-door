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

	const handlePageChange = (direction: string) =>{
		if(direction === 'forward' && ((wineIndex.mobile+itemsPerPage >= props.data.length) || (wineIndex.right+itemsPerPage >= props.data.length))){
			setShowCover(!showCover)
		} else if(direction === 'back' && ((wineIndex.mobile === 0 && isMobile) || (!isMobile && wineIndex.left === 0))){
			setShowCover(!showCover)
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
		return <MenuCover isFrontCover={(!isMobile && wineIndex.left === 0) || (isMobile && wineIndex.mobile === 0)} handleCoverPageTurn={() => setShowCover(!showCover)}/>
	}
	
	if(!isMobile){
		return(
			<div className="p-4 rounded-xs bg-[#450000] min-h-[95vh] md:min-h-[90vh]">
				<div className="bg-menu rounded-md text-slate-800 min-h-[90vh]">
					<div className="grid grid-cols-201">
						<div className='col-span-100'>
							<MenuPage data={props.data.slice(wineIndex.left, wineIndex.left+itemsPerPage)} isLeft={true} handlePageChange={handlePageChange}/>
						</div>
						<div className='col-span-1 bg-gradient-to-r from-[#e2d8d2] via-gray-800 to-[#e2d8d2]' />
						<div className='col-span-100'>
							<MenuPage data={props.data.slice(wineIndex.right, wineIndex.right+itemsPerPage)} isRight={true} handlePageChange={handlePageChange}/>
						</div>
					</div>
				</div>
			</div>
			// <div className="grid grid-cols-201">
			// 	<div className='col-span-100'>
			// 		<MenuPage data={props.data.slice(wineIndex.left, wineIndex.left+itemsPerPage)} isLeft={true} handlePageChange={handlePageChange}/>
			// 	</div>
			// 	<div className='col-span-1 bg-gradient-to-r from-[#e2d8d2] via-gray-800 to-[#e2d8d2]' />
			// 	<div className='col-span-100'>
			// 		<MenuPage data={props.data.slice(wineIndex.right, wineIndex.right+itemsPerPage)} isRight={true} handlePageChange={handlePageChange}/>
			// 	</div>
			// </div>
		)
	} else{
		return(
			<div className="p-4 rounded-xs bg-[#450000] min-h-[95vh] md:min-h-[90vh]">
				<div className="bg-menu rounded-md text-slate-800 min-h-[90vh]">
					<MenuPage data={props.data.slice(wineIndex.mobile, wineIndex.mobile+itemsPerPage)} isMobile={true} handlePageChange={handlePageChange}/>
				</div>
			</div>
		)
	}
}

export default MenuLayout