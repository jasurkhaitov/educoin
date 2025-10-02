import { useNavigate } from 'react-router-dom'
import CoinImage from '../assets/slider/sliderItem1.png'

export default function RegisterPage() {
	const navigate = useNavigate()
	return (
		<div className='w-full max-w-sm m-auto min-h-screen flex flex-col justify-between items-center bg-gradient-to-tr from-[#8D67E4] to-[#683BCE] text-center px-6 py-10'>
			<div>
				<img src={CoinImage} alt='Educoin' className='w-52 h-52 mb-6 m-auto' />

				<h1 className='text-4xl font-semibold bg-gradient-to-r from-white to-[#C0AEEA] bg-clip-text text-transparent'>
					Educoin
				</h1>
				<p className='mt-2 text-[18px] px-5 bg-[linear-gradient(90deg,#FFFFFF_0%,#C0AEEA_100%)] bg-clip-text text-transparent'>
					Rag‘batlantirishni raqamlashtirish platformasi
				</p>
			</div>

			<div className='w-full flex flex-col gap-3.5'>
				<button
					onClick={() => navigate('/dashboard')}
					className='w-full py-4 cursor-pointer text-sm rounded-2xl border border-[#FFFFFF4D] text-white font-medium'
				>
					Ota-ona
				</button>
				<button
					onClick={() => navigate('/dashboard')}
					className='w-full py-4 cursor-pointer text-sm rounded-2xl border border-[#FFFFFF4D] text-white font-medium'
				>
					Farzand
				</button>
			</div>
		</div>
	)
}
