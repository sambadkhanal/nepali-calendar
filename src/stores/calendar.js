import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCalenderStore = defineStore('calendar', {
  state: () => ({
    yearData: []
  }),
  getters: {
    getYearData: (state) => state.yearData,
    getMonthData: (state) => (month) => {
      const monthData = state.yearData.find((m) => m.month === parseInt(month))
      return monthData ? monthData.days : null
    },
    getDayData: (state) => (month, dayInEn) => {
      const monthData = state.yearData.find((m) => m.month === month)
      return monthData ? monthData.days.find((d) => d.dayInEn === dayInEn) : null
    }
  },
  actions: {
    async fetchYearData(value) {
      try {
        const response = await fetch(`/years/${value}.json`)
        this.yearData = await response.json()
      } catch (error) {
        console.error(`Error while fetching year ${value}`, error)
        return error
      }
    }
  }
})
