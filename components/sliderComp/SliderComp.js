"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-20 bg-[#E1F5E8]' id="otzyvy">
			<div className='container mx-auto'>

				<h4 className='text-center text-2xl sm:text-4xl font-bold mb-14 uppercase text-black'>
					Что говорят о нас клиенты
				</h4>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>

					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3 '>
								<p className='font-semibold mb-2'>
									Мигель Лариса
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Наша Машенька так радуется каждому дню в образовательном центре! Занятия для четырехлетнего ребенка оказались настоящим открытием. Веселые игры, творческие проекты и заботливые педагоги сделали обучение не только интересным, но и вдохновляющим для нашей малышки.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Сацук Мария
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Марат полностью влюблен в уроки в образовательном центре! Он не только осваивает новые знания, но и развивает творческие навыки. Видеть, как наш мальчик с удовольствием идет на занятия, наполняет нас радостью и уверенностью в правильном выборе образовательного учреждения.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Деркач Алеся
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Милана преобразилась с момента поступления в образовательный центр. Увлекательные уроки, инновационные методики и теплая атмосфера привнесли в ее образование яркость и радость. Благодарны педагогам за терпение и индивидуальный подход!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Ломач Алеся
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Образовательный центр стал для нас настоящим партнером в воспитании Матвея. Здесь, помимо академических знаний, наш сын развивает лидерские качества и учится самостоятельности. Гордимся тем, как он расцветает под внимательным ведением опытных учителей.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Лукашевич Татьяна
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									С каждым годом образовательный центр приносит все новые и новые плоды в развитии Самира. Увлекательные проекты, поддержка творческих инициатив, а также дружелюбная атмосфера делают это место настоящим домом знаний. Большое спасибо команде за вдохновение и профессионализм!
								</p>
							</div>
						</div>
					</div>


				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp