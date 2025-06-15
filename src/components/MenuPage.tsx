'use client'

import { wine } from "@/lib/types";
import WineItem from "@/components/WineItem";
import WineVariety from "./WineVariety";
import MenuCorner from "@/components/MenuCorner";
import MenuHeader from "@/components/MenuHeader";
import { ForwardIcon } from "@heroicons/react/24/outline";
import { BackwardIcon } from "@heroicons/react/24/outline";

interface MenuPageProps {
  isLeft?: boolean
  isRight?: boolean
  isMobile?: boolean
  data: wine[]
  handlePageChange: (event: string) => void
}

const getWineItems = (props: MenuPageProps) => {
  const handleClick = (direction: string) => {
    props.handlePageChange(direction)
  }

  return(<>
    <MenuCorner location="TopLeft" handlePageChange={handleClick} isLeft={props.isLeft} isRight={props.isRight} isMobile={props.isMobile}/>
    <MenuCorner location="TopRight" handlePageChange={handleClick} isLeft={props.isLeft} isRight={props.isRight} isMobile={props.isMobile}/>
    <div className="p-8 min-h-[90vh]">
      <MenuHeader />
      {props.data.map((item, index) => {
        if(index == 0 || (index > 0 && item.variety !== props.data[index-1].variety)) {
          return(
          <span key={item.name}>
            <WineVariety variety={item.variety}/>
            <WineItem key={item.name} data={item}/>
          </span>
          ) 
        }
        else{
          return <WineItem key={item.name} data={item}/>
        }
      })}
    </div>
    {/* {props.isMobile
      ?
        <div className='flex justify-center pb-3'>
          <div>
            <BackwardIcon className="inline size-8 pb-1 pr-3"/>
            swipe left or right 
            <ForwardIcon className="inline size-8 pb-1 pl-3"/>
          </div>
        </div>
      :
        null
    } */}
    
    <MenuCorner location="BottomLeft" handlePageChange={handleClick} isLeft={props.isLeft} isRight={props.isRight} isMobile={props.isMobile}/>
    <MenuCorner location="BottomRight" handlePageChange={handleClick} isLeft={props.isLeft} isRight={props.isRight} isMobile={props.isMobile}/>
  </>)
}

const MenuPage = (props: MenuPageProps) => {
  if(props.isLeft){
    return(
      <div className='shadow-[0_0_50px_rgba(0,0,0,0.7)] h-full'>
        {getWineItems(props)}
      </div>
    )
  }
  if(props.isRight){
    return(
      <div className='shadow-[0_0_50px_rgba(0,0,0,0.7)] h-full'>
        {getWineItems(props)}
      </div>
    )
  }
  if(props.isMobile){
    return(
      <div className='h-full'>
        {getWineItems(props)}
      </div>
    )
  }
}

export default MenuPage