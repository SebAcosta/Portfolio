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
		desc:"Es un videojuego para celulares basado en turnos, donde 2 jugadores tienen que adivinar el siguiente movimiento del enemigo para tener la ventaja; cada ronda se cambia el orden de elección de los jugadores. Fue hecho como un proyecto escolar donde se utilizó Unity con C# para la codificación del movimiento, turnos, posición y el minijuego que empieza una vez los jugadores se encuentran en el mismo lugar.",
		video:"5OrM-X2u17c",
		chevron: chevron,
		proyecto:"160%"
	},
	{
		image:bomb,
		title:"Sigue hablando y nadie explota",
		desc:"Hecho como proyecto final de la materia de sistemas inmersivos, es una reinterpretación del juego 'Keep taling and nobody explodes', pensado para poder ser jugado con tecnología inmersiva. El juego proyecta los 4 lados de una bomba a una pirámide invertida para dar realismo. Mientras un jugador ve la bomba, otro tiene un manual para desactivarla, pero no pueden ver lo que el otro está viendo. El juego termina cuando se ingrese la secuencia correcta... o se acabe el tiempo.",
		video:"l4RcqjGS0Mo",
		chevron: chevron,
		proyecto:"260%"
	},
	{
		image:coi,
		title:"COI - Control de Inventarios",
		desc:"Nisi reprehenderit do fugiat proident occaecat dolore et. Ut officia aute Lorem sunt anim pariatur magna qui tempor do minim. Duis velit aliquip in cillum cupidatat consequat Lorem culpa veniam ea incididunt fugiat dolore. Ad non ipsum laborum labore magna dolore ad reprehenderit nisi ex ullamco dolor ullamco sunt. Velit nostrud nostrud fugiat quis Lorem et anim fugiat aliqua. Aute magna proident sit veniam. Lorem id eu sint ad. Minim magna id eu ipsum consequat non anim.",
		desc:"Es una aplicación hecha en React Native pensada para ayudar en el control de inventarios de tiendas y de sus ventas. Se pueden crear etiquetas para poder encontrar los productos rápidamente, elegir favoritos, y modificar los datos creados. Está hecho con LocalStorage y SQLite como base de datos para asegurar la integridad y permanencia de los datos, y cada que se registre una venta, aparecerá el valor total a cobrar.",
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
