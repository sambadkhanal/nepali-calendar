<template>
  <header
    class="grid grid-cols-3 items-center justify-between border-b border-gray-200 py-4 lg:flex-none"
  >
    <button
      type="button"
      @click="onTodayClick"
      class="rounded-md w-fit bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      आज
    </button>
    <div class="flex items-center justify-center">
      <div class="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch gap-1">
        <button
          type="button"
          class="flex h-9 w-12 items-center justify-center rounded-full border border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          @click="handlePrevMonth"
        >
          <span class="sr-only">Previous month</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <Dropdown id="year-select" v-model="selectedYear" :items="years" @change="emitSelection" />
        <Dropdown
          id="month-select"
          v-model="selectedMonth"
          :items="months"
          @change="emitSelection"
        />

        <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
        <button
          type="button"
          class="flex h-9 w-12 items-center justify-center rounded-full border border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          @click="handleNextMonth"
        >
          <span class="sr-only">Next month</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <h1 class="text-base font-semibold leading-6 text-gray-900 text-right">
      <time datetime="2022-01">{{ getCurrentTime }}</time>
    </h1>
    <div class="relative ml-6 md:hidden">
      <button
        type="button"
        class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
        id="menu-0-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">Open menu</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
<script setup>
import { onMounted, ref, computed, reactive } from 'vue'
import { useCalenderStore } from '@/stores/calendar'
const store = useCalenderStore()
const emit = defineEmits(['todayClick', 'update:selectYear', 'update:selectMonth'])
import { monthsArray } from '@/helpers/constants'
import Dropdown from './Dropdown.vue'
import { currentDateObj } from '@/helpers/current-nepali-date'

const years = ref([])
const selectedYear = ref(2081)
const months = ref([])
const selectedMonth = ref(1)

onMounted(() => {
  selectedYear.value = currentDateObj.year
  selectedMonth.value = currentDateObj.month
  years.value = Array.from({ length: 91 }, (v, i) => ({
    key: 2000 + i,
    name: (2000 + i).toString()
  }))
  months.value = monthsArray
})

const getCurrentTime = computed(() => {
  const year = years.value.find((y) => y.key == selectedYear.value)
  const month = months.value.find((y) => y.key == selectedMonth.value)
  return `${month?.name} ${year?.name}`
})

const onTodayClick = (e) => {
  selectedMonth.value = currentDateObj.month
  selectedYear.value = currentDateObj.year
  emitSelection()
}

const handleNextMonth = () => {
  let nextMonth = selectedMonth.value + 1
  if (nextMonth > 12) {
    let nextYear = selectedYear.value + 1
    selectedYear.value = nextYear
    nextMonth = 1
  }
  selectedMonth.value = nextMonth
  emitSelection()
}

const handlePrevMonth = () => {
  let prevMonth = selectedMonth.value - 1
  if (prevMonth < 1) {
    let prevYear = selectedYear.value - 1
    selectedYear.value = prevYear
    prevMonth = 12
  }
  selectedMonth.value = prevMonth
  emitSelection()
}

const emitSelection = () => {
  emit('update:selectedYear', selectedYear.value)
  emit('update:selectedMonth', selectedMonth.value)
}
</script>
<style lang=""></style>
