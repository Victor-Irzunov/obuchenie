"use client"

export const BtnComp = ({ handleOrderClick, title, red }) => {
	

	return (
		<>
			<button
				className={`btn ${!red ? 'btn-primary' : 'bg-[#F4141D]'} border-none hover:bg-green-600 shadow-2xl rounded-full font-bold uppercase text-white`}
				onClick={() => handleOrderClick(title)}
			>
				{title}
			</button>
		</>
	)
}
