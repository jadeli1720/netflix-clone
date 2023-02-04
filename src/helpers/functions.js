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

export const grabYear = (value) => {
	return value.substring(0, 4);
};

export const roundNum = (value) => {
	const step = 0.5 || 1.0;
	let inv = 1.0 / step;
	let rating = Math.round(value * inv) / inv;
	return rating;
};
