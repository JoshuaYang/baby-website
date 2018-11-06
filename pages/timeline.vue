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
          <TimelineItem v-for="(item, index) in timelineData" :key="index">
            <div class="time">
              {{birthday | addMonthAge(item.monthAge)}}
              <Tag color="primary">{{item.monthAge}}月龄</Tag>
            </div>

            <div class="content">
              <div class="content-item" v-for="(data, dataIndex) in item.data" :key="dataIndex">
                <Poptip
                  v-if="!!data.description"
                  trigger="hover"
                  placement="right"
                  :content="data.description">
                  <Badge
                    status="success"
                    :text="data.title"
                  />
                </Poptip>
                <Badge
                  v-else
                  status="success"
                  :text="data.title"
                />
              </div>
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

      return `${year}歲${month}月${day}天`;
    },
    monthAge () {
      if (!this.shouldShowInfo) return;

      const today = dayjs()
        .set('h', 0)
        .set('m', 0)
        .set('s', 0)
        .set('ms', 0);
      let birthday = dayjs(this.birthday);

      const month = today.diff(birthday, 'month');
      birthday = birthday.add(month, 'month');

      const day = today.diff(birthday, 'day');

      return `${month}月${day}天`;
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
          font-size: 16px;
          font-weight: bold;

          .ivu-tag {
            margin-left: 10px;
          }
      }
      .content {
          margin-top: 15px;
          padding-left: 10px;

          .content-item {
            margin: 8px 0;
          }
          .ivu-badge {
            display: block;
          }
          .ivu-badge-status-text {
            font-size: 15px;
          }
      }
  }

}
</style>
