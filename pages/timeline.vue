<template lang="html">
  <div class="page-timeline">
    <v-timeline dense>
      <v-timeline-item
        v-for="(item, index) in timelineData"
        :key="index"
        color="pink"
      >
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{$store.state.birthday | addMonthAge(item.monthAge)}}
            <v-chip class="chip-monthage" color="pink" text-color="white">
              {{item.monthAge}}月龄
            </v-chip>
          </v-card-title>
          <v-card-text>
            <v-subheader>分類</v-subheader>
            <div v-for="(data, dataIndex) in item.data" :key="dataIndex">
              <v-checkbox
                :label="data.title"
                v-model="data.checked"
              ></v-checkbox>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import dayjs from 'dayjs'

import {
  queryTimelines
} from '@/assets/services/timeline'

import {
  timelineData
} from '@/assets/timelineData'
// console.log('==========', timelineData)

export default {
  data () {
    return {
      timelineData
    }
  },
  filters: {
    addMonthAge (value, monthAge) {
      if (monthAge < 1) {
        return dayjs(value)
          .add(monthAge * 30, 'day')
          .format('YYYY-MM-DD')
      }
      return dayjs(value)
        .add(monthAge, 'month')
        .format('YYYY-MM-DD')
    }
  },
  async mounted () {
    const response = await queryTimelines()

    console.log('==========', response.data)
  }
}
</script>

<style scoped lang="scss">
.page-timeline {
  .v-timeline {
    .chip-monthage {
      margin-left: 15px;
    }

    .v-input--selection-controls {
      margin-top: 0;
      padding-top: 0;

      .v-input__slot {
        margin-bottom: 0;
      }
    }

    .v-input--is-label-active {
      label {
        text-decoration: line-through;
      }
    }
  }
}
</style>
