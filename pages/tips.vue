<template lang="html">
  <div class="page-tips">
    <Collapse>
      <Panel>
        去黃疸
        <div slot="content" class="collapse-content">
          <p>
            服用
            <Tooltip
              placement="top"
              content="小培菲康">
              <Tag>双歧杆菌</Tag>
            </Tooltip>
            ，若無效，則改用
            <Tag>茵梔黃口服液</Tag>
          </p>
        </div>
      </Panel>

      <Panel>
        哭鬧
        <div slot="content" class="collapse-content">
          <Badge
            status="success"
            text="是否需要餵食"
          />
          <Badge
            status="success"
            text="是否有大小便"
          />
          <Badge
            status="success"
            text="抓著手，給予安全感"
          />
        </div>
      </Panel>
    </Collapse>
  </div>

</template>

<script>
export default {
};
</script>

<style lang="scss">
.page-tips {
  .collapse-content {
    p {
      display: flex;
      align-items: center;

      .ivu-tag {
        margin-left: 4px;
      }
    }

    .ivu-badge-status {
      display: block;
    }
  }
}
</style>
