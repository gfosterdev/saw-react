import "./home.scss";

import cardImage from "../../res/images/ref2.jpeg";

const Home = () => {
	return (
		<div className="home">
			<section className="splash">
				<div className="title">
					<div className="top">Smith and</div>
					<div className="bottom">Williamson</div>
				</div>
				<div className="subtext">
					<ul className="subtextList">
						<li>Conservatories</li>
						<li>Fascias</li>
						<li>Guttering</li>
						<li>Building Works</li>
					</ul>
				</div>
			</section>
			<section className="about">
				<span className="title">About Us</span>
				<div className="info">
					<div className="left">
						<span>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Molestias perferendis repellendus dolor et,
							nam, reiciendis sapiente quibusdam quaerat repellat
							illo nesciunt qui est, culpa eius expedita a fugit.
							Dignissimos, animi?
						</span>
						<span>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Quisquam officiis non architecto hic porro,
							cumque obcaecati cum minima blanditiis quis!
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Optio autem consectetur vero nulla. Optio
							aperiam ratione praesentium quidem consectetur! Ab
							minus vel est ex sunt beatae harum inventore dolorem
							quisquam.
						</span>
					</div>
					<div className="right">
						<div className="heading">What you can expect:</div>
						<ul>
							<li>
								<div className="rightItem">
									<i className="fa-solid fa-check"></i>
									<span>Lorem ipsum dolor sit amet.</span>
								</div>
							</li>
							<li>
								<div className="rightItem">
									<i className="fa-solid fa-check"></i>
									<span>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Neque.
									</span>
								</div>
							</li>
							<li>
								<div className="rightItem">
									<i className="fa-solid fa-check"></i>
									<span>
										Lorem ipsum dolor sit amet consectetur.
									</span>
								</div>
							</li>
							<li>
								<div className="rightItem">
									<i className="fa-solid fa-check"></i>
									<span>
										Lorem ipsum dolor sit amet consectetur
										adipisicing.
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="casestudies">
				<div className="heading">
					<span className="main">Case Studies</span>
					<span className="sub">
						A glimpse into what Smith & Williamson can provide for
						your customers
					</span>
				</div>
				<div className="cards">
					<div className="card">
						<img src={cardImage} alt="" className="thumbnail" />
						<span className="description">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Unde soluta nobis ipsa! Maiores repudiandae
							praesentium illo ea culpa! Minima quas incidunt
							nostrum labore! Magnam pariatur consequatur sunt.
							Commodi tenetur natus nemo mollitia obcaecati atque
							molestiae, iusto eos beatae eius eligendi!
						</span>
					</div>
					<div className="card">
						<img src={cardImage} alt="" className="thumbnail" />
						<span className="description">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Unde soluta nobis ipsa! Maiores repudiandae
							praesentium illo ea culpa! Minima quas incidunt
							nostrum labore! Magnam pariatur consequatur sunt.
							Commodi tenetur natus nemo mollitia obcaecati atque
							molestiae, iusto eos beatae eius eligendi!
						</span>
					</div>
					<div className="card">
						<img src={cardImage} alt="" className="thumbnail" />
						<span className="description">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Unde soluta nobis ipsa! Maiores repudiandae
							praesentium illo ea culpa! Minima quas incidunt
							nostrum labore! Magnam pariatur consequatur sunt.
							Commodi tenetur natus nemo mollitia obcaecati atque
							molestiae, iusto eos beatae eius eligendi!
						</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
