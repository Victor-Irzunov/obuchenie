import Image from "next/image";

const EducationSection = () => {
	return (
		<section className="sd:py-16 xz:py-6">
			<div className='container mx-auto'>
				<div className='flex sd:flex-row xz:flex-col'>

					<div className='bg-[#F1C71B] p-6 sd:w-1/4 xz:w-full my-3 mr-3 flex flex-col justify-center items-center'>
						<div className=''>
							<p className='font-bold text-2xl'>
								Обучение - это всё
							</p>
							<p className='mt-4'>
								Обучение играет ключевую роль в развитии ребенка, формируя не только знания, но и критическое мышление, социальные навыки и самостоятельность. Чрезвычайно важно предоставить малышу возможность учиться, чтобы он мог успешно адаптироваться к меняющемуся миру и раскрывать свой потенциал.
							</p>
						</div>
					</div>

					<div className='flex flex-col sd:w-3/4 xz:w-full'>
						<div className='flex justify-between'>
							<div className='w-1/2 m-3'>
								<Image src='/images/5.webp' alt='Обучение' width={626} height={396} />
							</div>
							<div className='w-1/2 m-3'>
								<Image src='/images/6.webp' alt='Обучение' width={626} height={396} />
							</div>
						</div>
						<div className='flex justify-between'>
							<div className='w-1/2 m-3 flex justify-center items-center'>
								<p className='font-bold text-xl'>
									Образование – ключ к успеху
								</p>
							</div>
							<div className='w-1/2 m-3'>
								<Image src='/images/7.webp' alt='Обучение' width={626} height={396} />
							</div>
						</div>
					</div>
				</div>

				<div className='flex sd:flex-row xz:flex-col mt-3'>
					<div className='sd:w-1/4 xz:w-full mr-3'>
						<Image src='/images/8.webp' alt='Обучение' width={626} height={396} />
					</div>
					<div className='bg-[#F4141D] sd:mx-3 xz:mx-0 p-6 sd:w-3/4 xz:w-full sd:mt-0 xz:mt-6 text-white'>
						<p className='font-bold xz:text-xl sd:text-2xl'>
							Веселое обучение, яркие впечатления!
						</p>
						<p className='mt-3'>
							В нашем образовательном центре дети обнаруживают, что учиться может быть настоящим приключением. Здесь каждый урок превращается в увлекательное путешествие по миру знаний, наполненному играми, творчеством и дружеской атмосферой.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default EducationSection;
