<template lang="html">
  <div class="page-baby-timeline">
    <DatePicker
      type="date"
      placeholder="出生日期"
      style="width: 200px"
    />

    <Alert>An info prompt</Alert>

    <Timeline pending>
      <TimelineItem>
        <div class="time">
          2018-12-12
          <Tag color="primary">1月龄</Tag>
        </div>

        <div class="content">
          <Badge
            status="success"
            text="打针1"
          />

          <Badge
            status="success"
            text="打针2"
          />

          <Badge
            status="processing"
            text="打针3"
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

      <TimelineItem>
        <div class="time">
          2018-12-12
          <Tag color="primary">1月龄</Tag>
        </div>

        <div class="content">
          <Badge
            status="success"
            text="打针1"
          />

          <Badge
            status="success"
            text="打针2"
          />

          <Badge
            status="processing"
            text="打针3"
          />
        </div>
      </TimelineItem>

      <TimelineItem>
        <div class="time">
          2018-12-12
          <Tag color="primary">1月龄</Tag>
        </div>

        <div class="content">
          <Badge
            status="success"
            text="打针1"
          />

          <Badge
            status="success"
            text="打针2"
          />

          <Badge
            status="processing"
            text="打针3"
          />
        </div>
      </TimelineItem>

      <TimelineItem>
        <div class="time">
          2018-12-12
          <Tag color="primary">1月龄</Tag>
        </div>

        <div class="content">
          <Badge
            status="success"
            text="打针1"
          />

          <Badge
            status="success"
            text="打针2"
          />

          <Badge
            status="processing"
            text="打针3"
          />
        </div>
      </TimelineItem>

      <TimelineItem>...</TimelineItem>
    </Timeline>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page-baby-timeline {
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
