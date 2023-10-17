import { defineStore } from 'pinia'
import scheduleApi from '../api/schedule.js'

export const useScheduledStore = defineStore('schedule', {
  state: () => ({
    scheduleLists: []
  }),
  getters: {
    schedulesData () {
      return this.scheduleLists ?? []
    }
  },
  actions: {
    getScheduleLists (data) {
      return scheduleApi.getScheduleLists(data).then(res => {
        this.scheduleLists = res.body
        return this.scheduleLists
      })
    }
  }
})