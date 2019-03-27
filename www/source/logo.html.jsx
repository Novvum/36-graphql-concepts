export default ({ size, type, ...rest }) => {
	switch (type) {
		case 'full':
			return (
				<img
					src="/images/fullLogo.png"
					alt={`36 Concepts– Full`}
					width={size}
					{...rest}
				/>
			);
		case 'fullWhite':
			return (
				<img
					src="/images/fullWhite.png"
					alt={`36 Concepts– Full`}
					width={size}
					{...rest}
				/>
			);
		case 'mini':
			return (
				<img
					src="/images/mini.svg"
					alt={`36 Concepts – Mini`}
					width={size}
					{...rest}
				/>
			);
		case 'alt':
			return (
				<img
					src="/images/alt.png"
					alt={`36 Concepts – Alt`}
					width={size}
					{...rest}
				/>
			);
		default:
			return (
				<img
					src="/images/logomark.png"
					alt={`36 Concepts`}
					width={size}
					{...rest}
				/>
			);
	}
};
