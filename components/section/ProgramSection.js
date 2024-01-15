import Image from "next/image"
import { BtnComp } from "../btn/BtnComp"


const ProgramSection = ({handleOrderClick}) => {
	return (
		<section className="py-20" id="program">
			<div className='container mx-auto'>

				<div className='mb-10 text-center'>
					<h4 className='sd:text-5xl xz:text-4xl font-bold'>
						Наша программа
					</h4>
				</div>

				<div className='flex sd:flex-row xz:flex-col'>
					<div className="card sd:mx-2 xz:mx-0 mb-5 bg-base-100 shadow-xl">
						<figure><img src="/images/girl.webp" alt="Программа 2,5-3,5 года" /></figure>
						<div className="card-body">
							<h2 className="card-title">
								Школа талантов
							</h2>
							<div className="rating rating-sm my-2">
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked onChange={()=>{}} />
							</div>
							<div className="badge badge-primary">2,5-3,5 года</div>
							<div className='my-2 sd:h-16 xz:h-auto'>
								<p className='text-gray-600 text-sm'>
									математика, развитие речи, рисование и теория музыки
								</p>
							</div>
							<div className='flex mt-3'>
								<div className='flex items-center'>
									<Image src='/svg/time-task.svg' alt='Продолжительность' width={30} height={30} />
									<span className='ml-1 text-[#36ab60] sd:text-balance xz:text-sm'>
										80 минут
									</span>
								</div>
								<div className='flex items-center ml-3'>
									<Image src='/svg/calendar.svg' alt='Количество уроков' width={25} height={25} />
									<span className='ml-1 text-[#36ab60] sd:text-balance xz:text-sm'>
										1 раз в неделю
									</span>
								</div>
							</div>
							<div className="card-actions justify-end mt-4">
								<BtnComp title='Записаться' handleOrderClick={handleOrderClick} />
							</div>
						</div>
					</div>
					<div className="card sd:mx-2 xz:mx-0 mb-5 bg-base-100 shadow-xl">
						<figure><img src="/images/child.webp" alt="Программа 3,5-6 лет" /></figure>
						<div className="card-body">
							<h2 className="card-title">
								Детская академия
							</h2>
							<div className="rating rating-sm my-2">
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked onChange={()=>{}} />
							</div>
							<div className="badge badge-primary">3,5-6 лет</div>
							<div className='my-2 sd:h-16 xz:h-auto'>
								<p className='text-gray-600 text-sm'>
									математика, риторика, ознакомление с окружающим миром, рисование/английский язык и становление характера, английский язык
								</p>
							</div>
							<div className='flex mt-3'>
								<div className='flex items-center'>
									<Image src='/svg/time-task.svg' alt='Продолжительность' width={30} height={30} />
									<span className='ml-1 text-[#36ab60] sd:text-balance xz:text-sm'>
										150 минут
									</span>
								</div>
								<div className='flex items-center ml-3'>
									<Image src='/svg/calendar.svg' alt='Количество уроков' width={25} height={25} />
									<span className='ml-1 text-[#36ab60] sd:text-balance xz:text-sm'>
										1 раз в неделю
									</span>
								</div>
							</div>
							<div className="card-actions justify-end mt-4">
								<BtnComp title='Записаться' handleOrderClick={handleOrderClick} />
							</div>
						</div>
					</div>
					<div className="card sd:mx-2 xz:mx-0 mb-5 bg-base-100 shadow-xl">
						<figure><img src="/images/girl2.webp" alt="Программа 7-12 лет" /></figure>
						<div className="card-body">
							<h2 className="card-title">
								Академик
							</h2>
							<div className="rating rating-sm my-2">
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked onChange={()=>{}} />
							</div>
							<div className="badge badge-primary">7-12 лет</div>
							<div className='my-2 sd:h-16 xz:h-auto'>
								<p className='text-gray-600 text-sm'>
									выражение мысли, красивая грамотная речь, русский язык, развитие памяти, внимания и мышления, становление характера, английский язык
								</p>
							</div>
							<div className='flex mt-3'>
								<div className='flex items-center'>
									<Image src='/svg/time-task.svg' alt='Продолжительность' width={30} height={30} />
									<span className='ml-1 text-[#36ab60] sd:text-balance xz:text-sm'>
										150 минут
									</span>
								</div>
								<div className='flex items-center ml-3'>
									<Image src='/svg/calendar.svg' alt='Количество уроков' width={25} height={25} />
									<span className='ml-1 text-[#36ab60] sd:text-balance xz:text-sm'>
										1 раз в неделю
									</span>
								</div>
							</div>
							<div className="card-actions justify-end mt-4">
								<BtnComp title='Записаться' handleOrderClick={handleOrderClick} />
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
	)
}

export default ProgramSection