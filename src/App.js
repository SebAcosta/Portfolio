import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { Proyectos } from './components/Proyectos';
import { Carosel } from './components/Carosel';
import samurai from "./assets/images/samurai-removebg-preview.png";
import bomb from "./assets/images/bomb-removebg-preview.png";
import chevron from "./assets/images/chevron-abajo.png";

const info = [
	{
		image:samurai,
		title:"Super Realistic Samurai Fight",
		desc:"Nisi reprehenderit do fugiat proident occaecat dolore et. Ut officia aute Lorem sunt anim pariatur magna qui tempor do minim. Duis velit aliquip in cillum cupidatat consequat Lorem culpa veniam ea incididunt fugiat dolore. Ad non ipsum laborum labore magna dolore ad reprehenderit nisi ex ullamco dolor ullamco sunt. Velit nostrud nostrud fugiat quis Lorem et anim fugiat aliqua. Aute magna proident sit veniam. Lorem id eu sint ad. Minim magna id eu ipsum consequat non anim.",
		video:"bla",
		chevron: chevron,
		proyecto:"160%"
	},
	{
		image:bomb,
		title:"Sigue hablando y nadie explota",
		desc:"Nisi reprehenderit do fugiat proident occaecat dolore et. Ut officia aute Lorem sunt anim pariatur magna qui tempor do minim. Duis velit aliquip in cillum cupidatat consequat Lorem culpa veniam ea incididunt fugiat dolore. Ad non ipsum laborum labore magna dolore ad reprehenderit nisi ex ullamco dolor ullamco sunt. Velit nostrud nostrud fugiat quis Lorem et anim fugiat aliqua. Aute magna proident sit veniam. Lorem id eu sint ad. Minim magna id eu ipsum consequat non anim.",
		video:"blabla",
		chevron: chevron,
		proyecto:"260%"
	}
]

function App() {
	return (
		<div className='todo'>
			<div className="App">
				<header className="App-header">
					<Banner/>
				</header>
			</div>
			<Proyectos info={info[0]}/>
			<Proyectos info={info[1]}/>
		</div>
	);
}

export default App;
