<script setup>
import { computed } from 'vue'
import {
  formatDate,
  getDateCalendarFormat,
  getDayCalendarFormat,
  getMonthYearCalendarFormat
} from '../utils/date-format.js'

const props = defineProps({
  day: Date,
  selectedDate: String
})

const dayFormat = computed(() => getDayCalendarFormat(props.day).toUpperCase())
const dateFormat = computed(() => getDateCalendarFormat(props.day))
const monthsFormat = computed(() => getMonthYearCalendarFormat(props.day))
const isActive = computed(() => props.selectedDate === formatDate(props.day))
</script>

<template>
  <div :class="['calendar__container', { 'active': isActive }]">
    <div class="calendar__day">
      {{ dayFormat }}
    </div>
    <div class="calendar__date">
      {{ dateFormat }}
    </div>
    <div class="calendar__months">
      {{ monthsFormat }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.calendar {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    color: #ffffff;
    &:hover,
    &.active {
      background-color: #FFEB3B;
      color: #232D3F;
      border-radius: 8px;
    }
    &:hover {
      cursor: pointer
    }
    @media (max-width: 321px) {
      padding: 8px 4px;
    }
    @media (min-width: 400px) {
      padding: 8px 12px;
      gap: 4px;
    }
  }
  &__day,
  &__date { font-weight: 600; }
  &__day {
    font-size: 12px;
    line-height: 16px;
    @media (min-width: 400px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  &__date {
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 400px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  &__months {
    font-size: 10px;
    line-height: 14px;
    @media (min-width: 400px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>