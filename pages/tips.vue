<template lang="html">
  <div class="page-tips">
    <v-expansion-panel popout>

      <v-expansion-panel-content>
        <div slot="header">去黃疸</div>
        <v-card>
          <v-card-text>
            服用
            <v-tooltip top>
              <v-chip slot="activator">双歧杆菌三联活菌散</v-chip>
              <span>国药准字S10970105</span>
            </v-tooltip>
            ，若無效，則改用
            <v-tooltip top>
              <v-chip slot="activator">茵梔黃口服液</v-chip>
              <span>国药准字Z11020607</span>
            </v-tooltip>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <div slot="header">哭鬧</div>
        <v-card>
          <v-card-text>
            <v-list>
              <v-list-tile @click="">
                <v-list-tile-content>
                  拍嗝
                </v-list-tile-content>
              </v-list-tile>
              <v-divider />
              <v-list-tile @click="">
                <v-list-tile-content>
                  餵食
                </v-list-tile-content>
              </v-list-tile>
              <v-divider />
              <v-list-tile @click="">
                <v-list-tile-content>
                  大小便
                </v-list-tile-content>
              </v-list-tile>
              <v-divider />
              <v-list-tile @click="">
                <v-list-tile-content>
                  抓著手，給予安全感
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <div slot="header">上戶口</div>
        <v-card>
          <v-card-text>
            帶著
            <v-chip>父母雙方戶口本</v-chip>、
            <v-chip>雙方身份證</v-chip>、
            <v-chip>雙方結婚證</v-chip>、
            <v-chip>出生證明</v-chip>，
            去戶口所在派出所辦理
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>

    </v-expansion-panel>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.page-tips {

}
</style>
