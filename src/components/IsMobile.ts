'use client'

import { useMediaQuery } from 'react-responsive'

const IsMobile = () => { 
	return useMediaQuery({
		query: '(max-width: 768px)'
	})
	
}

export default IsMobile