import Image from 'next/image'
import React from 'react'
import { BtnComp } from '../btn/BtnComp'

const AboutSection = ({handleOrderClick}) => {
	return (
		<section className='py-16' id='about'>
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col justify-between items-center'>
					<div className='sd:w-1/2 xz:w-full'>
						<h2 className='font-bold text-xl'>
							Немного о нас
						</h2>
						<p className='font-extrabold sd:text-4xl xz:text-3xl mt-3 mb-5'>
							Ваши дети - наше будующее
						</p>
						<p className='mb-9'>
							Мы заботимся о развитии детей от 1 года до 12 лет, встречая наших самых маленьких учеников еще на руках родителей. Поддерживаем их первые шаги в мире знаний, где с годами они становятся увереннее, читают книги, решают задачи, проводят эксперименты, а вся семья вместе наслаждается процессом обучения. Мы развиваем любовь к знаниям, открываем новые возможности и помогаем детям лучше понимать себя, играя и весело проводя время.
						</p>

						<BtnComp title='Заказать звонок' handleOrderClick={handleOrderClick} />
					</div>
					<div className='sd:w-1/2 xz:w-full sd:mt-0 xz:mt-10'>
						<img src='/images/1.webp' alt='О нас' className='mask mask-circle' />
					</div>
				</div>
				<div className='flex sd:flex-row xz:flex-col justify-between items-center mt-24'>
					<div className='sd:w-1/2 xz:w-full sd:mb-0 xz:mb-10'>
						<img src='/images/2.webp' alt='О нас' className='mask mask-circle' />
					</div>
					<div className='sd:w-1/2 xz:w-full'>
						<h2 className='font-bold text-xl'>
							Ещё немного о нас
						</h2>
						<p className='font-extrabold sd:text-4xl xz:text-3xl mt-3 mb-5'>
							Наша гордость - ваши талантливые дети
						</p>
						<p className='mb-9'>
							Наша история началась в 2018 году, и с тех пор мы не только стали первыми в своей стране, но и продолжаем оставаться лучшими. У нас есть множество успешных выпускников, и каждый год мы встречаем новых маленьких талантов, с которыми радостно растем. Давайте вместе путешествовать по пути взросления!
						</p>

						<BtnComp title='Заказать звонок' handleOrderClick={handleOrderClick} />
					</div>

				</div>
			</div>
		</section>
	)
}

export default AboutSection