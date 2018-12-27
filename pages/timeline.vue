<template lang="html">
  <div class="page-timeline">
    <v-timeline dense>
      <v-timeline-item
        v-for="(timelineItem, timelineIndex) in timelineData"
        :key="timelineIndex"
        color="pink"
      >
        <v-card>
          <v-toolbar color="pink" dark>
            <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

            <v-toolbar-title>
              {{$store.state.birthday | addMonthAge(timelineItem.monthAge)}}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-chip class="chip-monthage">
              {{timelineItem.monthAge}}月龄
            </v-chip>
          </v-toolbar>

          <v-list subheader>
            <template v-for="(categoryItem, categoryIndex) in timelineItem.categories">
              <v-subheader>{{categoryItem.name}}</v-subheader>

              <v-list-tile 
                v-for="(item, itemIndex) in categoryItem.items" 
                :key="item._id"
                @click="">

                <v-list-tile-action>
                  <v-checkbox v-model="item.checked" hide-details></v-checkbox>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{item.description}}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>


          </v-list>
        </v-card>

      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {
  parseTimelineData
} from '@/assets/utils'

import {
  queryTimelines
} from '@/assets/services/timeline'

export default {
  data () {
    return {
      timelineData: []
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

    this.timelineData = parseTimelineData(response.data.list)
  }
}
</script>

<style scoped lang="scss">
.page-timeline {
  .v-timeline {
  }
}
</style>
