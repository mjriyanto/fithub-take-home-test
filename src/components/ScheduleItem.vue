<script setup>
import { computed } from 'vue';
import { defaultConfigs } from '../config/index.js';
import Level from './Icons/Level.vue'

const props = defineProps({
  classData: Object
})

const backgroundImage = computed(() => props.classData.backgroundImage || defaultConfigs.defaultImage)
const timeSchedule = computed(() => props.classData.timeSchedule ?? '')
const className = computed(() => props.classData.className ?? '')
const instructor = computed(() => props.classData.instructor.toUpperCase() ?? '')
const classDifficulty = computed(() => props.classData.classDifficulty.toUpperCase() ?? '')
const classDuration = computed(() => `${props.classData.classDuration} MIN` ?? '')
</script>

<template>
  <div
    class="schedule-item"
    :style="{ backgroundImage:`url(${backgroundImage})` }"
  >
    <div class="schedule-item__container">
      <div class="schedule-item__time-schedule">
        {{ timeSchedule }}
      </div>
      <div class="schedule-item__class-name">
        {{ className }}
      </div>
      <div class="schedule-item__instructor">
        {{ instructor }}
      </div>
      <div class="schedule-item__class-footer">
        <div class="schedule-item__class-difficulty">
          <Level height="16" width="16" />
          <span>{{ classDifficulty }}</span>
        </div>
        <div class="schedule-item__class-duration">
          {{ classDuration }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.schedule-item {
  display: block;
  border-radius: 16px;
  background-size: cover;
  background-position: center center;
  height: 120px;
  width: auto;
  padding: 16px 12px;
  &__container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
  }
  &__time-schedule {
    font-size: 16px;
    line-height: 20px;
    text-align: right;
  }
  &__class-name {
    font-size: 22px;
    line-height: 26px;
  }
  &__instructor {
    font-size: 12px;
    line-height: 16px;
  }
  &__class-footer {
    display: flex;
    padding-top: 8px;
    justify-content: space-between;
  }
  &__class-difficulty {
    display: flex;
    align-items: baseline;
    gap: 8px;
    span {
      font-size: 12px;
      line-height: 20px;
    }
  }
  &__class-duration {
    padding: 4px 8px;
    background-color: #ffffff;
    border-radius: 8px;
    color: #232D3F;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }
}
</style>