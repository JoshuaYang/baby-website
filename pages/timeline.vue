<template lang="html">
  <div class="page-baby-timeline">
    <Row :gutter="32">
      <Col span="6">
        <Form>
          <FormItem label="出生日期">
            <DatePicker
              type="date"
              placeholder="請選擇"
              v-model="birthday"
            />
          </FormItem>
        </Form>

        <Alert class="alert-summary" v-if="shouldShowInfo">
          年齡：{{yearAge}}<br />
          月齡：{{monthAge}}<br />
        </Alert>
      </Col>

      <Col span="18">
        <Timeline pending v-if="shouldShowInfo">
          <TimelineItem v-for="(datas, monthAge) in timelineData" :key="monthAge">
            <div class="time">
              {{birthday | addMonthAge(monthAge)}}
              <Tag color="primary">{{monthAge}}月龄</Tag>
            </div>

            <div class="content">
              <Badge v-for="(data, dataIndex) in datas" :key="dataIndex"
                status="success"
                :text="data.title"
              />
            </div>
          </TimelineItem>

          <TimelineItem color="green">
            <Icon
              slot="dot"
              type="ios-woman"
            />

            <div class="time">
              today
            </div>
          </TimelineItem>

          <TimelineItem>...</TimelineItem>
        </Timeline>
      </Col>
    </Row>
  </div>
</template>

<script>
import dayjs from 'dayjs';

import timelineData from '@/assets/timelineData';

export default {
  data () {
    return {
      timelineData,
      birthday: '',
    };
  },
  computed: {
    shouldShowInfo () {
      return !!this.birthday;
    },
    yearAge () {
      if (!this.shouldShowInfo) return;

      const today = dayjs()
        .set('h', 0)
        .set('m', 0)
        .set('s', 0)
        .set('ms', 0);
      let birthday = dayjs(this.birthday);

      const year = today.diff(birthday, 'year');
      birthday = birthday.add(year, 'year');

      const month = today.diff(birthday, 'month');
      birthday = birthday.add(month, 'month');

      const day = today.diff(birthday, 'day');

      return `${Math.abs(year)}歲${Math.abs(month)}月${Math.abs(day)}天`;
    },
    monthAge () {
      if (!this.shouldShowInfo) return;

      const today = dayjs()
        .set('h', 0)
        .set('m', 0)
        .set('s', 0)
        .set('ms', 0);
      let birthday = dayjs(this.birthday);

      // const year = today.diff(birthday, 'year');
      // birthday = birthday.add(year, 'year');

      const month = today.diff(birthday, 'month');
      birthday = birthday.add(month, 'month');

      const day = today.diff(birthday, 'day');

      return `${Math.abs(month)}月${Math.abs(day)}天`;
    },
  },
  filters: {
    addMonthAge (value, monthAge) {
      return dayjs(value)
        .add(monthAge, 'month')
        .format('YYYY-MM-DD');
    },
  },
};
</script>

<style lang="scss">
.page-baby-timeline {
  .alert-summary {
    margin-top: 10px;
  }

  .ivu-timeline {
      margin-top: 20px;

      .time {
          font-size: 14px;
          font-weight: bold;

          .ivu-tag {
              margin-left: 10px;
          }
      }
      .content {
          margin-top: 10px;
          padding-left: 10px;

          .ivu-badge {
              display: block;
          }
      }
  }

}
</style>