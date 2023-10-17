const api = {
  schedule: 'https://asia-southeast2-thehub-965c7.cloudfunctions.net/prodtakananiumnv02/schedules/loadSchedulesPublic'
}

const defaultConfigs = {
  selectedClub: 'FIT HUB ARTERI PONDOK INDAH',
  selectedCategory: 'ALL',
  weekdays: 6,
  timeCategory: {
    morning: 'morning',
    evening: 'evening'
  },
  defaultImage: 'https://firebasestorage.googleapis.com/v0/b/thehub-965c7.appspot.com/o/classes%2FimageDetail%2Fbig-empty.jpg?alt=media&token=dfd6260f-f42e-407c-a0e9-fe7b2d5174e5'
}

export { api, defaultConfigs }