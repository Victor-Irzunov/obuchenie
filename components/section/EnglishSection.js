import { BtnComp } from "../btn/BtnComp"


const EnglishSection = ({handleOrderClick}) => {
	return (
		<section className="sd:pb-20 xz:pb-6">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col justify-between items-center sd:mt-24 xz:mt-10'>
					<div className='sd:w-1/2 xz:w-full sd:mb-0 xz:mb-10'>
						<img src='/images/9.webp' alt='Изучаем английский' className='mask mask-circle' />
					</div>
					<div className='sd:w-1/2 xz:w-full'>
						<h2 className='font-bold text-xl'>
							Английский язык
						</h2>
						<p className='font-extrabold sd:text-4xl xz:text-3xl mt-3 mb-5'>
							Изучаем английский с удовольствием
						</p>
						<p className='mb-9'>
							В нашем образовательном центре английский язык становится не просто предметом, а увлекательным путешествием в мир новых слов, языковых игр и ярких впечатлений. Специально разработанные программы и креативные методики делают процесс обучения интересным и доступным для каждого ребенка. Наши маленькие ученики с удовольствием погружаются в английскую среду, развивая навыки общения и любовь к языку в дружелюбной и вдохновляющей атмосфере.
						</p>

						<BtnComp title='Записаться на обучение' handleOrderClick={handleOrderClick} />
					</div>

				</div>
			</div>
		</section>
	)
}

export default EnglishSection