import NepaliDate from 'nepali-date'

const date = new NepaliDate()

export const nepaliDay = date.getDate() // Get Nepali day
export const nepaliMonth = date.getMonth() // Get Nepali month
export const nepaliYear = date.getYear() // Get Nepali year

export const currentDateObj = {
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getYear()
}

export const currentNepaliDate = date.format('YYYY-M-D')
