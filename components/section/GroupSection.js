import { BtnComp } from "../btn/BtnComp"


const GroupSection = ({handleOrderClick}) => {
	return (
		<section className="py-24 bg-[#65CA5A] ">
			<div className='container mx-auto'>

				<div className='flex flex-col justify-center items-center text-white'>
					<p className='mb-3 font-bold'>
						Наши педагоги
					</p>
					<h3 className="text-5xl font-bold">
						Коллектив
					</h3>
					<p className="py-6 text-center sd:text-base xz:text-sm">
						Говорить о высоких достижениях наших педагогов можно долго, но для нас важнее всего то, что мы - не просто коллектив, а настоящая дружная команда. Наши учителя обладают высшим образованием и богатым опытом, о чем свидетельствует целая гора дипломов и сертификатов. Однако, в центре нашего внимания - взаимодействие. Мы не просто работаем вместе, мы вместе отдыхаем, проводим педагогические советы, обмениваемся знаниями и вдохновляем друг друга. У нас царит атмосфера взаимопомощи и уважения, где каждое мнение имеет значение. Эта обстановка делает наше обучение не просто процессом, а настоящим взаимодействием и путеводной звездой для наших воспитанников и их родителей
					</p>
				</div>

				<div className='mt-8 text-center'>
					<BtnComp red title='Получить консультацию' handleOrderClick={handleOrderClick}/>
				</div>
			</div>
		</section>
	)
}

export default GroupSection