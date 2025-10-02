import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { sliderData } from '../util/data'
import FirstContent from '../components/browse/FirstContent'
import { ChevronRight } from 'lucide-react'

export default function Onboarding() {
	const [showSplash, setShowSplash] = useState(true)
	const [current, setCurrent] = useState(0)
	const navigate = useNavigate()

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false)
		}, 3000)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (!showSplash && current < sliderData.length - 1) {
			const interval = setInterval(() => {
				setCurrent(prev => (prev < sliderData.length - 1 ? prev + 1 : prev))
			}, 3000)
			return () => clearInterval(interval)
		}
	}, [showSplash, current])

	if (showSplash) return <FirstContent />

	const handleNext = () => {
		if (current < sliderData.length - 1) {
			setCurrent(current + 1)
		} else {
			navigate('/auth-flow')
		}
	}

	const handleSkip = () => {
		navigate('/auth-flow')
	}

	return (
		<div className="w-full max-w-sm m-auto min-h-screen flex flex-col justify-between items-center bg-[url('./assets/bg-coin.webp')] bg-bottom p-4 bg-no-repeat text-[#0E0D0D] bg-white">
			<div className='flex-1 flex flex-col justify-start pt-5 items-center'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={sliderData[current].id}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -40 }}
						transition={{ duration: 0.6 }}
						className='w-full'
					>
						<h1 className='text-xl font-normal mb-10'>
							{sliderData[current].title}
						</h1>
						<img
							className={`${
								sliderData[current].id === 1 ? 'w-[80%]' : 'w-[90%]'
							} m-auto`}
							src={sliderData[current].img}
							alt={sliderData[current].title}
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className='flex flex-col items-center justify-end px-6 mb-5 py-4'>
				<button
					onClick={handleNext}
					className='bg-white w-[50px] text-[linear-gradient(266.46deg, #8D67E4 0%, #683BCE 100%)] flex items-center justify-center py-3 cursor-pointer rounded-[10px]'
				>
					<ChevronRight />
				</button>
				<button
					onClick={handleSkip}
					className='text-sm font-medium text-white cursor-pointer hover:underline mt-7'
				>
					O‘tkazib yuborish
				</button>
			</div>

			<div className='flex gap-2'>
				{sliderData.map((_, i) => (
					<div
						key={i}
						className={`h-1 w-5 rounded-sm ${
							i === current ? 'bg-white' : 'bg-white/40'
						}`}
					/>
				))}
			</div>
		</div>
	)
}
