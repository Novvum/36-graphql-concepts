import Nav, { navItems } from './nav.html.jsx';
import Pagination from './pagination.html.jsx';
import { GitHub } from 'react-feather';
import Logo from './logo.html.jsx';
import { resolve as resolveURL } from 'url';

export default ({ children, currentPageID, environment, pages }) => {
	let currentPage = pages.find((page) => page.meta.id === currentPageID);
	let pageTitle =
		currentPageID === 'about'
			? '36 Concepts GraphQL'
			: `${currentPage.meta.title}`;
	let openGraphTitle =
		currentPageID === 'about'
			? '36 Concepts GraphQL'
			: `${currentPage.meta.title}`;
	let description =
		'Created with the intention of helping developers master their concepts in GraphQL';

	let baseURL = 'http://36-concepts-graphql.s3-us-west-1.amazonaws.com';
	let url = resolveURL(baseURL, currentPage.path);
	if (url.endsWith('/')) {
		url = url.slice(0, -1);
	}

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>{pageTitle}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta name="description" content={description} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={url} />
				<meta property="og:title" content={openGraphTitle} />
				<meta property="og:description" content={description} />

				<meta property="og:image" content={`${baseURL}/images/logomark.png`} />
				<meta property="og:image:type" content="image/png" />

				<meta property="og:site_name" content="36 Concepts GraphQL" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@novvumio" />
				<meta name="twitter:image" content={`${baseURL}/images/logomark.png`} />

				<link rel="canonical" href={url} />
				<link rel="icon" type="image/png" href="/images/favicon.png" />
				<link rel="stylesheet" href="/stylesheets/index.css" />
			</head>
			<body>
				<Nav currentPageID={currentPageID} pages={pages} />

				<main>
					{currentPageID === 'intro' ? (
						<div className="container">
							<Logo size={600} type="full" />
						</div>
					) : (
						<div className="mobile">
							<div className="small-logo">
								<div style={{ alignItems: 'center', display: 'flex' }}>
									<Logo size={32} />
								</div>
							</div>

							<div style={{ height: '2rem' }} />
						</div>
					)}

					<div className="container">{children}</div>

					<footer className="container">
						<Pagination currentPageID={currentPageID} pages={pages} />

						<div style={{ marginTop: '4rem' }}>
							<small>
								If you find any part of the docs confusing or insufficient
								please <a href="mailto:hello@novvum.io">let us know</a> so I can
								improve them!
							</small>
						</div>
					</footer>

					<a
						href="https://github.com/Novvum/36-graphql-concepts"
						className="github mobile">
						<GitHub width="32" height="32" />
					</a>
				</main>
			</body>
		</html>
	);
};
