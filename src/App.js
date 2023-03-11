import logo from './logo.svg';
import { Banner } from './components/Banner';
import { Proyectos } from './components/Proyectos';
import { Contacto } from './components/Contacto';
import { Carosel } from './components/Carosel';
import samurai from "./assets/images/samurai-removebg-preview.png";
import bomb from "./assets/images/bomb-removebg-preview.png";
import coi from "./assets/images/coi-logo.png";
import chevron from "./assets/images/chevron-abajo.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const info = [
	{
		image:samurai,
		title:"Super Realistic Samurai Fight",
		desc:"Nisi reprehenderit do fugiat proident occaecat dolore et. Ut officia aute Lorem sunt anim pariatur magna qui tempor do minim. Duis velit aliquip in cillum cupidatat consequat Lorem culpa veniam ea incididunt fugiat dolore. Ad non ipsum laborum labore magna dolore ad reprehenderit nisi ex ullamco dolor ullamco sunt. Velit nostrud nostrud fugiat quis Lorem et anim fugiat aliqua. Aute magna proident sit veniam. Lorem id eu sint ad. Minim magna id eu ipsum consequat non anim.",
		video:"5OrM-X2u17c",
		chevron: chevron,
		proyecto:"160%"
	},
	{
		image:bomb,
		title:"Sigue hablando y nadie explota",
		desc:"Nisi reprehenderit do fugiat proident occaecat dolore et. Ut officia aute Lorem sunt anim pariatur magna qui tempor do minim. Duis velit aliquip in cillum cupidatat consequat Lorem culpa veniam ea incididunt fugiat dolore. Ad non ipsum laborum labore magna dolore ad reprehenderit nisi ex ullamco dolor ullamco sunt. Velit nostrud nostrud fugiat quis Lorem et anim fugiat aliqua. Aute magna proident sit veniam. Lorem id eu sint ad. Minim magna id eu ipsum consequat non anim.",
		video:"l4RcqjGS0Mo",
		chevron: chevron,
		proyecto:"260%"
	},
	{
		image:coi,
		title:"COI - Control de Inventarios",
		desc:"Nisi reprehenderit do fugiat proident occaecat dolore et. Ut officia aute Lorem sunt anim pariatur magna qui tempor do minim. Duis velit aliquip in cillum cupidatat consequat Lorem culpa veniam ea incididunt fugiat dolore. Ad non ipsum laborum labore magna dolore ad reprehenderit nisi ex ullamco dolor ullamco sunt. Velit nostrud nostrud fugiat quis Lorem et anim fugiat aliqua. Aute magna proident sit veniam. Lorem id eu sint ad. Minim magna id eu ipsum consequat non anim.",
		video:"JURjSHVAFyY",
		chevron: chevron,
		proyecto:"360%"
	},
]

function App() {
	return (
		<div className='todo'>
			<div className="App">
				<header className="App-header">
					<Banner/>
				</header>
			</div>
			
			<section id="section1"> 
				<AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
					<Proyectos info={info[0]}/>
				</AnimationOnScroll>
			</section>
			
			<AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
				<Proyectos info={info[1]}/>
			</AnimationOnScroll>
			
			<AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
				<Proyectos info={info[2]}/>
			</AnimationOnScroll>
			
			<section id="section2">
				<AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
					<Contacto />
				</AnimationOnScroll>
			</section>
		</div>
	);
}

export default App;
