<script setup>
import { computed, onMounted, ref } from 'vue';
import { defaultConfigs } from './config/index.js';
import { useScheduledStore } from './store/schedule.js';
import { formatDate, getNthDate } from './utils/date-format.js';

import Calendar from './components/Calendar.vue'
import ScheduleList from './components/ScheduleList.vue'
import Loader from './components/icons/Loader.vue'

const scheduledStore = useScheduledStore()
const { selectedClub, selectedCategory, weekdays } = defaultConfigs

const today = ref(new Date())
const isLoading = ref(false)
const selectedDate = ref(null)

const days = computed(() => {
  const arr = []
  for (let i = 0; i < weekdays; i++) {
    arr.push(getNthDate(i))
  }
  return arr
})
const lastDay = computed(() => getNthDate(days.value.length))
const scheduleList = computed(() => scheduledStore.scheduleLists[selectedDate.value] ?? '')

onMounted(() => {
  initComponent()
})

const initComponent = () => {
  getScheduleData()
}

const getScheduleData = () => {
  loading()
  scheduledStore.getScheduleLists({
    selectedClub,
    selectedCategory,
    dateFrom: formatDate(today.value),
    dateTo: formatDate(lastDay.value)
  })
    .then(() => handleSuccessGetScheduleData())
    .catch(() => loading())
}

const loading = () => {
  isLoading.value = !isLoading.value
}

const handleSuccessGetScheduleData = () => {
  loading()
  selectedDate.value = formatDate(today.value)
}

const handleCalendarClick = (date) => {
  selectedDate.value = formatDate(date)
}
</script>

<template>
  <div class="app">
    <div class="main-container">
      <div
        v-if="isLoading"
        class="main-container__loader"
      >
        <Loader />
      </div>
      <div v-else>
        <header class="main-container__calendar">
          <Calendar
            v-for="(day, index) in days"
            :key="index"
            :day="day"
            :selected-date="selectedDate"
            @click.native="handleCalendarClick(day)"
          />
        </header>
        <div class="main-container__schedule">
          <ScheduleList
            v-if="scheduleList"
            :schedule-list="scheduleList"
          />
          <div
            v-else
            class="main-container__empty"
          >
            No data to show.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

body {
  margin: 0;
  padding: 0;
}
.app {
  background-color: #ffffff;
  font-family: 'Rubik', sans-serif;;
}
.main-container {
  max-width: 100vw;
  background-color: #232D3F;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  min-height: 100vh;
  @media (min-width: 400px) {
    max-width: 480px;
  }
  &__loader {
    color: #ffffff;
    display: flex;
    justify-content: center;
    padding-top: calc(50vh - 24px);
  }
  &__calendar {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    @media (min-width: 400px) {
      padding: 8px 16px;
    }
  }
  &__schedule {
    padding: 16px;
    @media (min-width: 400px) { padding: 16px 32px; }
  }
  &__empty {
    color: #ffffff;
    text-align: center;
  }
}
</style>