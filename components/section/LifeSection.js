import { BtnComp } from "../btn/BtnComp"

const LifeSection = ({handleOrderClick}) => {
	return (
		<section className="py-16">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col justify-between items-center'>
					<div className='sd:w-1/2 xz:w-full'>
						<h2 className='font-bold text-xl'>
							Наша школьная жизнь
						</h2>
						<p className='font-extrabold sd:text-4xl xz:text-3xl mt-3 mb-5'>
							Зажигательные моменты в развитии вашего ребенка
						</p>
						<p className='mb-9'>
							В нашем образовательном центре дети погружаются в захватывающий мир обучения и творчества. Наша программа не только сосредотачивается на академическом успехе, но также внимательно сбалансирована, чтобы вдохновлять детей на исследование, творчество и личностный рост.

							В уютной и дружелюбной атмосфере наши маленькие ученики преодолевают новые вызовы, общаются, создают и открывают для себя удивительные знания. С каждым днем они развивают креативность, социальные навыки и осваивают фундаментальные знания, которые положат основу для успешного будущего.

							Приглашаем вас стать частью этого захватывающего путешествия, где образование превращается в увлекательное приключение!
						</p>


						<BtnComp title='Записаться на пробный урок' handleOrderClick={handleOrderClick} />
					</div>
					<div className='sd:w-1/2 xz:w-full sd:mt-0 xz:mt-10'>
						<img src='/images/11.webp' alt='Жизнь в нашем образовательном центре' className='mask mask-circle' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default LifeSection