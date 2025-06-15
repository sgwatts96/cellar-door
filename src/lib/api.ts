import Wines from "@/_wines/wineList.json"
import { WineVarieties } from "@/app/constants/wineVarieties"

export const getAllWines = () => {
	return Wines
}

export const getAllAperitifWines = () => {
	return Wines.filter((wine) => {
		return wine.variety === WineVarieties.CHARDONNAY
	})
}

export const getAllWinesSorted = () => {

	const wineVarietyOrder = {
		[WineVarieties.CHAMPAGNE as string]: 1,
		[WineVarieties.SPARKLING_WINE as string]: 2,
		[WineVarieties.CHARDONNAY as string]: 3,
		[WineVarieties.PINOT_GRIS as string]: 4,
		[WineVarieties.SAUVIGNON_BLANC as string]: 5,
		[WineVarieties.RIESLING as string]: 6,
		[WineVarieties.CABERNET_SAUVIGNON as string]: 7,
		[WineVarieties.GAMAY as string]: 8,
		[WineVarieties.GRENACHE as string]: 9,
		[WineVarieties.MALBEC as string]: 10,
		[WineVarieties.MERLOT as string]: 11,
		[WineVarieties.NEBBIOLO as string]: 12,
		[WineVarieties.PINOT_NOIR as string]: 13,
		[WineVarieties.SANGIOVESE as string]: 14,
		[WineVarieties.SHIRAZ as string]: 15,
		[WineVarieties.TEMPRANILLO as string]: 16,
		[WineVarieties.ZINFANDEL as string]: 17
	}
	
	return Wines.sort((a,b) => {

		//sort by variety first
		if(wineVarietyOrder[a.variety] < wineVarietyOrder[b.variety]) return -1
		if(wineVarietyOrder[a.variety] > wineVarietyOrder[b.variety]) return 1

		//then by vintage
		if(a.vintage < b.vintage) return -1
		if(a.vintage > b.vintage) return 1

		//then by name
		if(a.name < b.name) return -1
		if(a.name > b.name) return 1

		//else identical
		return 0
	})
}