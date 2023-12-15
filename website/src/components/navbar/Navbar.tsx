import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
	return (
		<section className="navbar">
			<div className="contactinfo">
				<div className="infoItem">
					<i className="icon fa-solid fa-phone"></i>
					<span className="text">07719 123456</span>
				</div>
				<div className="infoItem">
					<i className="icon fa-solid fa-envelope"></i>
					<span className="text">info@smithandwilliamson.com</span>
				</div>
			</div>
			<div className="underneath">
				<div className="logo">
					<span className="logoText">Smith And Williamson</span>
				</div>
				<div className="links">
					<Link to="/" className="link">
						<span className="linkTitle">Home</span>
					</Link>
					<Link to="/about" className="link">
						<span className="linkTitle">About</span>
					</Link>
					<Link to="/case" className="link">
						<span className="linkTitle">Case Studies</span>
					</Link>
					<Link to="/contact" className="link">
						<span className="linkTitle">Contact</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
