import './styles/global.scss';

import mainImg from './assets/main-img.jpeg';

export function App() {
	return(
		<>
			<main id="main">
				<header id="header">
						<h1 id="title">Aracy Guimarães Rosa</h1>
	 					<p>A brasileira que salvou judeus do holocausto</p>
	 			</header>

 				<figure id="img-div">
 					<img src={mainImg} alt="Imagem da Aracy Guimarães Rosa" id="image"/>
 					<figcaption id="img-caption">
 						Na foto Aracy Guimarães ao lado do seu marido João Guimarães, eles foram casados por 20 anos.
 					</figcaption>
 				</figure>

	 			<section id="tribute-info">
	 				<h2>Biografia</h2>

	 				<p>Paranaense, nasceu em Rio Negro, filha de pai português e mãe alemã e ainda criança foi morar com os pais em São Paulo. Em 1930, Aracy casou-se com o alemão Johann Eduard Ludwig Tess, com quem teve o filho Eduardo Carvalho Tess, mas cinco anos depois se separou, indo morar com uma irmã de sua mãe na Alemanha. Por falar quatro línguas (português, inglês, francês e alemão), conseguiu uma nomeação no consulado brasileiro em Hamburgo, onde passou a ser chefe da Seção de Passaportes.
	 					<br/>No ano de 1938, entrou em vigor, no Brasil, a Circular Secreta 1.127, que restringia a entrada de judeus no país. Aracy ignorou a circular e continuou preparando vistos para judeus, permitindo sua entrada no Brasil. Como despachava com o cônsul geral, ela colocava os vistos entre a papelada para as assinaturas. Para obter a aprovação dos vistos, Aracy simplesmente deixava de pôr neles a letra "J", que identificava quem era judeu.
						<br/>Desse modo, Aracy livrou muitos judeus da prisão e do Holocausto.
					</p>

	 				<p>
	 					Se quiser conhecer mais sobre ela, consulte o <a href="https://pt.wikipedia.org/wiki/Aracy_de_Carvalho_Guimar%C3%A3es_Rosa" id="tribute-link" target="_blank">Artigo da Wi<wbr/>ki<wbr/>pe<wbr/>dia</a>.
	 				</p>
	 				
	 			</section>
			</main>
		</>
	);
}