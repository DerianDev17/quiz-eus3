import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgLogico,
	imgVocacional,
	imgNumerico,
	imgVerbal,
	imgTecnologia,
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			{/* Category Link Razonamiento Logico*/}
			<CategoryCard
				category={categories.razonamientoLogico}
				src={imgLogico}
				alt={`Categoría ${categories.razonamientoLogico}`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			{/* Category Link Orientacion vocacional */}
			<CategoryCard
				category={categories.orientacionVocacional}
				src={imgVocacional}
				alt={`Categoría ${categories.orientacionVocacional}`}
				gradientColor='from-lime-400 to-teal-700'
			/>
			{/* Category Link Razonamiento Numérico */}
			<CategoryCard
				category={categories.razonamientoNumerico}
				src={imgNumerico}
				alt={`Categoría ${categories.razonamientoNumerico}`}
				gradientColor='from-red-400 to-zinc-400'
			/>
			{/* Category Link Razonamiento Verbal */}
			<CategoryCard
				category={categories.razonamientoVerbal}
				src={imgVerbal}
				alt={`Categoría ${categories.razonamientoVerbal}`}
				gradientColor='from-amber-400 to-emerald-600'
			/>
			{/* Category Link Tecnologia */}
			<CategoryCard
				category={categories.tecnologia}
				src={imgTecnologia}
				alt={`Categoría ${categories.tecnologia}`}
				gradientColor='from-violet-900 to-rose-500 '
			/>
		</div>
	);
};
