"use client"
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';

export default function Header() {

	return (
		<header className='bg-base-100 sticky top-0 z-50 w-full'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<Image src='/logo/logo.webp' alt='логотип' width={80} height={40} />
					</div>
					<div className="navbar-end">
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="cursor-pointer ">
								<Image src='/svg/menu.svg' alt='Кнопка меню' width={50} height={50} />
							</label>
							<ul
								tabIndex={0}
								className="text-black dropdown-content mt-1 w-52 menu   p-2 bg-white shadow rounded-box"
							>
								<li>
									<LinkScroll
										to="main"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
										
									>
										Главная
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="about"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
									>
										О нас
									</LinkScroll>
								</li>

								<li>
									<LinkScroll
										to="otzyvy"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
									>
										Отзывы
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="program"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
									>
										Программа
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="contacts"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}