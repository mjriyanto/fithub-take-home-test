<script setup>
import { computed } from 'vue'
import { defaultConfigs } from '../config/index.js'
import ScheduleItem from './ScheduleItem.vue'

const props = defineProps({
  scheduleList: Array
})

const morningClasses = computed(() => {
  return props.scheduleList.filter(schedule => schedule.timeCategory === defaultConfigs.timeCategory.morning) ?? []
})

const eveningClasses = computed(() => {
  return props.scheduleList.filter(schedule => schedule.timeCategory === defaultConfigs.timeCategory.evening) ?? []
})
</script>

<template>
  <div class="schedule-list">
    <div
      v-if="morningClasses.length"
      class="schedule-list__container"
    >
      <span class="schedule-list__title">
        MORNING
      </span>
      <ScheduleItem
        v-for="morningClass in morningClasses"
        :class-data="morningClass"
      />
    </div>
    <div
      v-if="eveningClasses.length"
      class="schedule-list__container"
    >
      <span class="schedule-list__title">
        EVENING
      </span>
      <ScheduleItem
        v-for="eveningClass in eveningClasses"
        :class-data="eveningClass"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  &__title {
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 400px) { gap: 20px; }
  }
}
</style>