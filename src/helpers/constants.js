export const nepaliMonths = [
  'बैशाख',
  'जेठ',
  'असार',
  'साउन',
  'भदौ',
  'असोज',
  'कात्तिक',
  'मंसिर',
  'पुष',
  'माघ',
  'फागुन',
  'चैत'
]
export const monthsArray = nepaliMonths.map((name, index) => ({
  key: index + 1,
  name: name
}))

export const nepaliWeekDays = [
  'आइतवार',
  'सोमवार',
  'मङ्गलवार',
  'बुधवार',
  'बिहिवार',
  'शुक्रवार',
  'शनिवार'
]

export const nepaliWeekDaysAbbr = ['आइत', 'सोम', 'मङ्गल', 'बुध', 'बिहि', 'शुक', 'शनि']

export const englishWeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const weekDaysArray = nepaliWeekDays.map((day, index) => ({
  key: index + 1,
  neDay: day,
  enDay: englishWeekDays[index],
  mobileDay: nepaliWeekDaysAbbr[index]
}))


export const current = {
    month: 5,
    year: 2081
}