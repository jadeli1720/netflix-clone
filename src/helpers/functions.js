export const convertRuntime = (n) => {
	let hours = n / 60;
	let roundedHours = Math.floor(hours);
	let minutes = Math.round((hours - roundedHours) * 60);
	return roundedHours + "hr " + minutes + "min";
};

export const grabCastInfo = (data) => {
	let actorsArr = [];
	let actorsData = data.slice(0, 3);

	actorsData.forEach((el) => {
		// console.log(el)
		let actor = {
			id: el?.id,
			name: el?.name,
		};

		return actorsArr.push(actor);
	});
	return actorsArr;
};

export const grabCreators = (data) => {
	let creatorsArr = [];

  data.forEach( el => {
    let creator = {
      id: el?.id,
      name: el?.name,
    };
    return creatorsArr.push(creator)
  })


  return creatorsArr
};

export const grabCrewInfo = (data) => {
	let directorArr = [];
	let producerArr = [];

	data.forEach((el) => {
		let dept = el?.department;
		let job = el?.job;

		if (
			dept.toLowerCase() === "directing" &&
			job.toLowerCase() === "director" 
		) {
			let director = {
				id: el?.id,
				name: el?.name,
				job: el?.job,
			};
			return directorArr.push(director);
		} else if (
			dept.toLowerCase() === "production" &&
			job.toLowerCase() === "producer" &&
			dept.toLowerCase() !== "directing" &&
			job.toLowerCase() !== "director"
		) {
			let producer = {
				id: el?.id,
				name: el?.name,
				job: el?.job,
			};
			return producerArr.push(producer);
		}
	});

	if (directorArr.length) {
		return directorArr;
	} else {
		return producerArr;
	}
};

//Not working for now. All the movies say false
export const grabMediaRatings = (adult, genres) => {
	let genreIdArr = [];
	genres.forEach((g) => genreIdArr.push(g.id));

	if (adult === true) {
		return "R";
	} else if (
		(adult === false && genreIdArr.includes(10751)) ||
		(adult === false && genreIdArr.includes(10762))
	) {
		return "PG";
	} else {
		return "PG-13";
	}
};

//NOTE:does not work from here - future get trailer data instead of using bunny video
export const grabMediaTrailer = (trailerData) => {
	let keyArr = [];

	let officialTrailerString = "official trailer";
	let trailerString = "trailer";

	trailerData.forEach((el) => {
		let trailerName = el?.name;
		let trailerType = el?.type;

		if (
			trailerName.toLowerCase().includes("official trailer") &&
			trailerType.toLowerCase().includes("trailer") &&
			trailerName.length === officialTrailerString.length
		) {
			console.log("inside if 1", el);

			let trailerObj = {
				id: el?.id,
				key: el?.key,
				site: el?.site,
			};
			console.log("inside if 2", trailerObj);

			return trailerObj;
		}
		//(trailerName.toLowerCase().includes("trailer") && trailerType.toLowerCase().includes("trailer"))

		// console.log("Result 3", )

		// return trailerObj
	});
};

export const grabYear = (value) => {
	return value.substring(0, 4);
};

export const roundNum = (value) => {
	const step = 0.5 || 1.0;
	let inv = 1.0 / step;
	let rating = Math.round(value * inv) / inv;
	return rating;
};
