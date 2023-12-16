import "./footer.scss";

const Footer = () => {
	return (
		<section className="contact">
			<span className="heading">Contact Us</span>
			<div className="container">
				<span className="main">Mobile:</span>
				<span className="subtext">0123456789</span>
			</div>
			<div className="container">
				<span className="main">Email:</span>
				<span className="subtext">contact@smithandwilliamson.com</span>
			</div>
			<div className="container">
				<span className="main">Address:</span>
				<span className="subtext">
					12 Example Road, King's Lynn, Norfolk, PE30 1AD
				</span>
			</div>
			<div className="copyright">
				<i className="icon fa-regular fa-copyright"></i>
				<span className="copyrighttext">Smith & Williamson 2023</span>
			</div>
		</section>
	);
};

export default Footer;
