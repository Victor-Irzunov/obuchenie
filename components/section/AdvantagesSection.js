import Image from 'next/image'
import { BtnComp } from '../btn/BtnComp'

const AdvantagesSection = ({handleOrderClick}) => {
	return (
		<section className='pt-0 pb-20 relative'>
			<div className=''>
				<img src='/images/3.webp' alt='Преимущества образовательного центра' className='w-full' />
			</div>
			<div className='container mx-auto'>

				<div className='flex sd:flex-row xz:flex-col justify-center items-center mb-12'>
					<div className='sd:w-1/4 xz:w-full bg-[#4894b6] p-10 text-center flex flex-col justify-center items-center'>
						<div className='flex justify-center items-center bg-white p-5 rounded-full w-32 h-32'>
							<Image src='/svg/toys.svg' alt='Безопастность' width={80} height={80} />
						</div>
						<div className='text-white mt-5'>
							<p className='font-bold text-xl'>
								Безопастность
							</p>
							<p className='mt-3'>
								Пользуемся только экологичными и безопасными материалами.
							</p>
						</div>
					</div>

					<div className='sd:w-1/4 xz:w-full bg-[#65CA5A] p-10 text-center flex flex-col justify-center items-center'>
						<div className='flex justify-center items-center bg-white p-5 rounded-full w-32 h-32'>
							<Image src='/svg/elephant.svg' alt='Качество' width={80} height={80} />
						</div>
						<div className='text-white mt-5'>
							<p className='font-bold text-xl'>
								Качество
							</p>
							<p className='mt-3'>
								Работаем по авторским методикам, которые регулярно корректируем под потребности современных детей.
							</p>
						</div>
					</div>

					<div className='sd:w-1/4 xz:w-full bg-[#F4141D] p-10 text-center flex flex-col justify-center items-center'>
						<div className='flex justify-center items-center bg-white p-5 rounded-full w-32 h-32'>
							<Image src='/svg/bunny.svg' alt='Творчество' width={80} height={80} />
						</div>
						<div className='text-white mt-5'>
							<p className='font-bold text-xl'>
								Творчество
							</p>
							<p className='mt-3'>
								Наши уроки — это квест-сказки. Их педагоги вместе «живыми персонажами»: дракоша, слоненнок, медвежонок и другие.
							</p>
						</div>
					</div>

					<div className='sd:w-1/4 xz:w-full bg-[#F1C50E] p-10 text-center flex flex-col justify-center items-center'>
						<div className='flex justify-center items-center bg-white p-5 rounded-full w-32 h-32'>
							<Image src='/svg/tiger.svg' alt='Сотрудничество' width={80} height={80} />
						</div>
						<div className='text-white mt-5'>
							<p className='font-bold text-xl'>
								Сотрудничество
							</p>
							<p className='mt-3'>
								Мы всегда находимся в контакте с родителями, подсказываем направление развития ребенка.
							</p>
						</div>
					</div>
				</div>

				<div className='text-center'>
					<BtnComp title='Узнать стоимость обучения' red handleOrderClick={handleOrderClick} />
				</div>
			</div>
		</section>
	)
}

export default AdvantagesSection