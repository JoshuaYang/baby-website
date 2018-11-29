<template lang="html">
  <div class="page-timeline">
    <v-flex xs12 sm6 md4>
      <v-dialog
        v-model="showModal"
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="birthday"
          label="出生日期"
          prepend-icon="event"
          readonly
        ></v-text-field>

        <v-date-picker
          v-model="birthday"
          @input="showModal = false"
        />
      </v-dialog>
    </v-flex>


    <v-timeline dense>
      <v-timeline-item
        v-for="(item, index) in timelineData"
        :key="index"
      >
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{birthday | addMonthAge(item.monthAge)}}
            <v-chip class="chip-monthage" color="primary" text-color="white">
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
  timelineData
} from '@/assets/timelineData'
console.log('==========', timelineData)

export default {
  data () {
    return {
      timelineData,
      birthday: dayjs().format('YYYY-MM-DD'),
      showModal: false
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
  }
}
</script>

<style lang="scss">
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
