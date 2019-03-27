import Logo from './logo.html.jsx';
import { GitHub, AlignCenter } from 'react-feather';

export const navItems = [
	{
		id: 'intro',
		name: 'Intoduction'
	},
	{
		id: 'toc',
		name: 'Table of Contents'
	},
	{
		id: 'specs',
		name: 'Specs'
	},
	{
		id: 'server',
		name: 'Server'
	},
	{
		id: 'client',
		name: 'Client'
	},
	{
		id: 'best-practices',
		name: 'Best Practices'
	},
	{
		id: 'contributors',
		name: 'Contributors'
	}
];

export default ({ currentPageID, pages }) => {
	let links = navItems.map((navItem) => {
		let page = pages.find((page) => page.meta.id === navItem.id);
		let className = page.meta.id === currentPageID ? 'active' : '';

		return (
			<a className={className} key={page.path} href={page.path}>
				{navItem.name}
			</a>
		);
	});

	return (
		<nav>
			<div
				style={{
					alignItems: 'center',
					display: 'flex',
					marginLeft: '2em',
					marginBottom: '1em'
				}}>
				<Logo size={60} />
			</div>
			{links}

			<a href="https://github.com/Novvum/36-graphql-concepts">
				<GitHub />
			</a>
		</nav>
	);
};
