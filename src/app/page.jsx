export default function Home() {
	return (
		<div className='container'>
			<div className='grid grid-cols-7 gap-1 [&>div]:p-2'>
				<div className='bg-gray-200'></div>
				<div className='bg-gray-200'>Monday</div>
				<div className='bg-gray-200'>Tuesday</div>
				<div className='bg-gray-200'>Wednesday</div>
				<div className='bg-gray-200'>Thursday</div>
				<div className='bg-gray-200'>Friday</div>
				<div className='bg-gray-200'>Saturday</div>

				<div className='bg-gray-200'>John Doe</div>
				<div className='bg-green-500 relative'>Online</div>
				<div className='bg-red-500'>Off</div>
				<div className='bg-orange-500'>Pending</div>
				<div className='bg-yellow-500'>-</div>
				<div className='bg-gray-200'>10:00 - 18:00</div>
				<div className='bg-gray-200'>9:00 - 15:00</div>

				<div className='bg-gray-200'>Celia Carlson</div>
				<div className='bg-green-500 relative'>Online</div>
				<div className='bg-red-500'>Off</div>
				<div className='bg-orange-500'>Pending</div>
				<div className='bg-yellow-500'>-</div>
				<div className='bg-gray-200'>9:00 - 15:00</div>
				<div className='bg-gray-200'>10:00 - 18:00</div>
			</div>
		</div>
	)
}
