export const roundNum = (value) => {
  const step = 0.5 || 1.0;
  let inv = 1.0/step;
  // let conversion = value/2
  let rating = Math.round(value * inv)/inv
  return rating
}

export const grabYear = (value) => {
  return value.substring(0,4)
}

export const grabCrewInfo = (data) => {;
  let crewArr = [];

  data.forEach(el => {
    let dept = el?.department;
    let job = el?.job;

    if(dept.toLowerCase() === "directing" && job.toLowerCase() === 'director'){
      let director = {
        id: el?.id,
        name:el?.name,
        job:el?.job
      }
      return crewArr.push(director);
    } else if(dept.toLowerCase() === "production" && job.toLowerCase() === 'producer'){
      let producer = {
        id: el?.id,
        name:el?.name,
        job:el?.job
      }

      return crewArr.push(producer)
    }
  })
  return crewArr
}

export const grabCastInfo = (data) => {
  let actorsArr = [];
  let actorsData = data.slice(0,3);

  actorsData.forEach(el => {
    // console.log(el)
    let actor = {
      id: el?.id,
      name: el?.name
    }

    return actorsArr.push(actor)
  })
  return actorsArr
}

export const convertRuntime = (n) => {
  let hours = (n/60);
  let roundedHours = Math.floor(hours);
  let minutes = Math.round((hours - roundedHours) * 60)
  return  roundedHours + 'hr ' + minutes + "min"
}

export const grabMediaRatings = (adult, genres) => {
  let genreIdArr = []
  genres.forEach((g) => genreIdArr.push(g.id))
  
  if(adult === true) {
    return 'R'
  }else if ((adult === false && genreIdArr.includes(10751)) || (adult === false && genreIdArr.includes(10762))) {
    return 'PG'
  } else {
    return 'PG-13'
  }
}