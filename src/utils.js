const added = time => {
	let now = new Date()
	let add = new Date(time)
	let year = now.getFullYear() - add.getFullYear()
	let month = now.getMonth() - add.getMonth()
	let day = now.getDay() - add.getDay()
	let hours = now.getHours() -add.getHours()
	let minutes = now.getMinutes() - add.getMinutes()
	
	if( year ===1){
		return '1 year ago'
	} else if(year > 0){
		return `${year} years ago`
	} else if(month === 1) {
		return '1 month ago'
	} else if(month > 0) {
		return `${month} months ago`
	} else if(day === 1) {
		return '1 day ago'
	} else if(day > 0){
		return `${day} days ago`
	} else if(hours ===1){
		return '1 hour ago'
	}else if(hours > 0){
		return `${hours} hours ago`
	} else if(now === 1){
		return '1 minute ago'
	}else if(now > 0){
		return `${minutes} minutes ago`
	}else {
		return '30 seconds ago'
	}
}

export default added;
//console.log(added('2017-09-22T21:51:56.000Z'))
//new Date().getFullYear() - Number(el.created_at.slice(0, 4))