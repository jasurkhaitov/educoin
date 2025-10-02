import {
	Home,
	ClipboardList,
	Bell,
	Gift,
	Lightbulb,
	Plus,
	CoinsIcon,
	Link2,
	Calendar,
} from 'lucide-react'
import User from '../assets/user.png'
import Girl from '../assets/girl.png'
import Target from '../assets/icon/icon.svg'

export default function DashboardPage() {
	return (
		<div className='w-full border-x-0 xs:border-x relative max-w-md m-auto min-h-screen bg-white px-6 py-5 pb-30 flex flex-col'>
			<div className='flex items-center justify-between mb-7'>
				<div className='flex items-center gap-2.5'>
					<img src={User} alt='User Avatar' className='w-12 h-12 rounded-xl' />
					<div>
						<p className='text-[#0E0D0D] font-medium text-sm'>Salom,</p>
						<p className='font-semibold text-[#0E0D0D] text-sm'>Anvarjon</p>
					</div>
				</div>

				<div className='flex items-center gap-2.5'>
					<button className='p-2 border border-gray-200 rounded-2xl'>
						<Lightbulb className='w-6 h-6 text-[#0E0D0D]' />
					</button>
					<button className='p-2 border border-gray-200 rounded-2xl'>
						<Bell className='w-6 h-6 relative text-[#0E0D0D]' />
					</button>
				</div>
			</div>

			<div>
				<p className='text-sm text-[#999999] mb-2.5'>Farzandlarim:</p>
				<div className='flex gap-4 items-center'>
					<div className='flex flex-col items-center'>
						<img src={User} alt='Akromjon' className='w-12 h-12' />
						<p className='text-xs mt-2 text-[#0E0D0D]'>Akromjon</p>
					</div>
					<div className='flex flex-col items-center'>
						<img src={Girl} alt='Osiyo' className='w-12 h-12' />
						<p className='text-xs mt-2 text-[#0E0D0D]'>Osiyo</p>
					</div>

					<div className='flex flex-col items-center'>
						<button className='w-12 h-12 flex items-center justify-center rounded-[18px] border border-gray-300 text-gray-500'>
							<Plus className='w-5 h-5' />
						</button>
						<p className='text-xs mt-2 text-[#0E0D0D]'>Qo‘shish</p>
					</div>
				</div>
			</div>

			<div className='mt-4 bg-[#F8F8F8] p-3 rounded-3xl'>
				<div className='flex items-center justify-between mb-3'>
					<div className='flex items-center gap-1 justify-center'>
						<img src={Target} className='-translate-y-1' alt='' />
						<p className='font-normal text-sm text-[#0E0D0D]'>Vazifalar :</p>
					</div>
					<button className='w-8 h-8 flex items-center justify-center rounded-[8px] border border-gray-300 text-gray-500'>
						<Plus className='w-3 h-3 text-[#8D67E4]' />
					</button>
				</div>
				<div className='bg-white rounded-2xl shadow p-2 flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img src={User} alt='Akromjon' className='w-10 h-10' />
						<div>
							<p className='font-medium text-gray-800'>Akromjon</p>
							<span className='flex items-center gap-1 text-yellow-500 font-medium'>
								<CoinsIcon />
								10 coin
							</span>
						</div>
					</div>
					<div className='flex items-center gap-3'>
						<p className='text-xs text-gray-500'>3 Aprel, 2025</p>
						<button className='text-red-500 font-bold'>✕</button>
					</div>
				</div>
			</div>

			<div className="mt-4.5 flex items-center justify-between gap-1 bg-[url('./assets/bg-div.png')] bg-center bg-cover p-4 bg-no-repeat">
				<div className='flex flex-col items-start justify-between gap-1'>
					<p className='text-sm text-white font-medium'>100+ Coin oling</p>
					<p className='text-xs text-white mt-1'>
						Do‘stlaringiz va yaqinlaringiz bilan ulashing
					</p>
				</div>

				<button className='p-1.5 flex items-center justify-center rounded-[8px] border-[0.5px] border-[#FFFFFF1A] text-white'>
					<Link2 className='w-6 h-6' />
				</button>
			</div>

			<div className='mt-4'>
				<p className='font-medium mb-3'>Analitika:</p>
				<div className='grid grid-cols-3 gap-3'>
					<div className='bg-white rounded-xl gap-6 border border-[#0000001A] p-3 flex items-start justify-between flex-col'>
						<p className='text-xs text-[#999999]'>Bajarilgan:</p>
						<p className='text-lg text-[#0E0D0D] font-semibold'>0</p>
					</div>
					<div className='bg-white rounded-xl gap-6 border border-[#0000001A] p-3 flex items-start justify-between flex-col'>
						<p className='text-xs text-[#999999]'>Reyting:</p>
						<p className='text-lg text-[#0E0D0D] font-semibold'>0</p>
					</div>
					<div className='bg-white rounded-xl gap-6 border border-[#0000001A] p-3 flex items-start justify-between flex-col'>
						<p className='text-xs text-[#999999]'>Title:</p>
						<p className='text-lg text-[#0E0D0D] font-semibold'>0</p>
					</div>
				</div>
			</div>

			<div className='absolute w-full bottom-0 right-0 bg-white border-t flex justify-around rounded-xl pt-4 pb-9'>
				<button className='flex flex-col gap-2 items-center text-purple-600'>
					<Home className='w-6 h-6' />
					<span className='text-xs font-medium'>Asosiy</span>
				</button>
				<button className='flex flex-col gap-2 items-center text-gray-500'>
					<ClipboardList className='w-6 h-6' />
					<span className='text-xs font-medium'>Vazifalar</span>
				</button>
				<button className='flex flex-col gap-2 items-center text-gray-500'>
					<Calendar className='w-6 h-6' />
					<span className='text-xs font-medium'>Eslatmalar</span>
				</button>
				<button className='flex flex-col gap-2 items-center text-gray-500'>
					<Gift className='w-6 h-6' />
					<span className='text-xs font-medium'>Sovg‘alar</span>
				</button>
			</div>
		</div>
	)
}
