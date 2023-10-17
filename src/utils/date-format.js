const getNthDate = (nthDate) => {
  let date = new Date()
  return new Date(date.setDate(date.getDate() + nthDate))
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-ca').replace(/-/g,'')
}

const getCalendarFormat = (date, index) => {
  return date.toLocaleDateString('en-ca').split('-')[index]
}

const getDateCalendarFormat = (date) => {
  return getCalendarFormat(date, 2)
}

const getDayCalendarFormat = (date) => {
  return date.toString().split(' ')[0]
}

const getMonthYearCalendarFormat = (date) => {
  return `${getCalendarFormat(date, 1).toUpperCase()}/${getCalendarFormat(date, 0)}`
}

export {
  getNthDate,
  formatDate,
  getDateCalendarFormat,
  getDayCalendarFormat,
  getMonthYearCalendarFormat
}