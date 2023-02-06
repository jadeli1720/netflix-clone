import React from "react";
import './jumbotron.scss';

function Jumbotron() {
	return (
		<>
			{/* 1 */}
			<div className="jumboContainer">
				<div className="jumboTron">
					<div className="content">
						<h1>Enjoy on your TV.</h1>
						<h2>
							Watch on smart TVs, PlayStation, Xbox, Chromecast,
							Apple TV, Blu-ray players and more.
						</h2>
					</div>
					<div className="content" id="tv" >
						{/* may need the full tag to get it to play */}
						<img src="/images/misc/tv.png" alt="Tv on tv table" />
						<div className="tvContainer">
							<video
								className="tvVideo"
								autoPlay
								playsInline
								muted
								loop
								data-video="0"
							>
								<source
									src="/videos/video-tv.m4v"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
				</div>
			</div>
			{/* 2 */}
			<div className="jumboContainer">
				<div className="jumboTron" >
					<div className="content">
						<h1>Watch everywhere.</h1>
						<h2>
							Stream unlimited movies and TV shows on your phone,
							tablet, laptop, and TV without paying more.
						</h2>
					</div>
					<div className="content" id="watch">
						<img
							src="/images/misc/imac.png"
							alt="Imac, tablet, and mobile phone"
						/>
            <div className="imacContainer">
              <video
                autoPlay
								playsInline
								muted
								loop
								data-video="1"
              >
                <source
                  src="/videos/strangerThings_animation.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
					</div>
				</div>
			</div>
      {/* 3 */}
			<div className="jumboContainer">
				<div className="jumboTron" >
				<div className="content">
						<h1>Create profiles for kids</h1>
						<h2>
							Send kids on adventures with their favorite
							characters in a space made just for them—free with
							your membership.
						</h2>
					</div>
					<div className="content" id="kids">
						<img
							src="/images/misc/kidsValueProp.png"
							alt="Kids cartoon"
						/>
					</div>

				</div>
			</div>
			{/* 4 */}
			<div className="jumboContainer">
				<div className="jumboTron" >
					<div className="content">
						<h1>Download your shows to watch offline.</h1>
						<h2>
							Save your favorites easily and always have something
							to watch
						</h2>
					</div>
					<div className="content" id="download">
						<img
						className="mobile"
							src="/images/misc/mobile.jpg"
							alt="Watch on mobile"
						/>
            <div className="downloadContainer">
              <img src="/images/misc/strangerThings_poster.png" alt="Stranger Things poster"/>
              <p>Downloading...</p>
              <div className="animation"></div>
            </div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Jumbotron;
