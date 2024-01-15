"use client"
import Image from 'next/image';
import FormOrder from '../Form/Form';

export default function Footer() {
	return (
		<footer
			className="bg-[#e8b846] sd:mt-10 xz:mt-2 relative"
			id='contacts'
		>
			<div
				className={`hero min-h-[80vh] sd:bg-[url('/images/10.webp')] xz:bg-[url('/images/12.webp')]`}
				// style={{ backgroundImage: 'url("/images/10.webp")' }}
			>
				<div className='container mx-auto'>

					<div className='sd:static xz:absolute top-10'>
						<div className='sd:w-1/2 xz:w-full'>
							<div className='flex bg-white xz:py-2 sd:py-4 sd:px-10 xz:px-2 border-black border-2'>
								<Image src='/svg/phone.svg' alt='Телефон' width={30} height={30} />
								<p className='text-2xl ml-1 font-semibold'>
									+375 29 000-00-00
								</p>
							</div>
							<div className='flex mt-3 bg-white xz:py-2 sd:py-4 sd:px-10 xz:px-2 border-black border-2'>
								<Image src='/svg/location.svg' alt='Адрес' width={30} height={30} />
								<p className='text-xl ml-1 font-semibold'>
									г. Минск ул. Главная 100
								</p>
							</div>
							<div className='flex mt-3 bg-white xz:py-2 sd:py-4 sd:px-10 xz:px-2 border-black border-2'>
								<Image src='/svg/time2.svg' alt='Режим работы' width={28} height={28} />
								<p className='text-xl ml-1 font-semibold'>
									8:00-19:00 Пн-выходной
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>


			<aside className="h-20 pt-6 bg-[#333333]">
				<div className='container mx-auto text-center'>
					<p className='text-gray-200 xs:text-xs xz:text-[10px] font-light' >
						Copyright © 2024 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-500 underline'> VI:TECH</a>.
						{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</div>
			</aside>

		</footer >
	)
}