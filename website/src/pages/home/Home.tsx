import "./home.scss";

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
		</div>
	);
};

export default Home;
