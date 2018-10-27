<template>
<div>
  <Layout>
    <Header :style="{position: 'fixed', width: '100%', zIndex: 1}">
      <Menu
        mode="horizontal"
        theme="dark"
        @on-select="gotoPage"
        >
        <MenuItem name="/">
          <Icon type="ios-home" />
          首頁
        </MenuItem>

        <MenuItem name="/timeline">
          <Icon type="ios-navigate" />
          成長時間線
        </MenuItem>
      </Menu>
    </Header>

    <Content :style="{margin: '88px 20px 0', padding: '25px', background: '#fff', minHeight: '500px'}">
      <nuxt />
    </Content>

    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
  </Layout>
</div>
</template>

<script>
export default {
  methods: {
    gotoPage (link) {
      this.$router.push(link);
    },
  },
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
