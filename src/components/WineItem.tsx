import { wine } from "@/lib/types"

interface WineItemsProps {
	key: string
	data: wine
}

const WineItem = (props: WineItemsProps) => {
	return(
		<section id={props.data.name}>
			<div className='flex flex-col pb-4 pl-6'>
				<section className='flex'>
					<span className="shrink flex-none font-primary font-semibold text-2xl">
						{props.data.name} - {props.data.location}
					</span>
					<span className="grow text-end text-l">
						{props.data.vintage}
					</span>
				</section>
				<section>
					{props.data.story}
				</section>
			</div>
		</section>
	)

}

export default WineItem