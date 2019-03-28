export default (props) => {
	return (
		<div className={props.className ? `card ${props.className}` : 'card'}>
			<img src={props.image} />
			<a href={props.url} target="_blank">
				<h2>{props.title}</h2>
				<p>{props.details}</p>
			</a>
		</div>
	);
};
