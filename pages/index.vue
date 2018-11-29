<template>
  <div class="page-test">
    <v-layout justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card>
          <v-card-title class="headline">
            <v-text-field
              label="添加條目"
              solo
              v-model="inputValue"
              @keydown.enter="addHandler"
            />
          </v-card-title>

          <v-card-text>
            <v-list v-if="list.length > 0">
              <template v-for="(item, index) in list">
                <v-list-tile @click="">
                  <v-list-tile-content>
                    {{item}}
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon
                      @click="deleteHandler(index)"
                    >
                      delete_forever
                    </v-icon>
                  </v-list-tile-action>
                </v-list-tile>

                <v-divider />
              </template>
            </v-list>

            <v-alert v-else
              :value="true"
              color="success"
              icon="check_circle"
              outline
            >
              暫無數據，請添加
            </v-alert>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="cleanHandler">清空</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    addHandler () {
      if (this.inputValue.trim() !== '') {
        this.list.push(this.inputValue)
        this.inputValue = ''
      }
    },
    cleanHandler () {
      this.list = []
    },
    deleteHandler (index) {
      this.list = this.list.filter((item, i) => i !== index)
    }
  }
}
</script>

<style lang="scss">
.page-test {
  .v-input__slot {
    margin-bottom: 0;
  }
  .v-text-field__details {
    display: none;
  }
}
</style>
