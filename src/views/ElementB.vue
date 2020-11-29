<template>
  <div class="Element">
    <h1>Element</h1>  
    <hr/>
    
    <el-tabs class="tabs" v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane class="pane" label="我的信息" name="first">
        <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
          <p>Try Element</p>
        </el-dialog>
    </el-tab-pane>
      <el-tab-pane label="我的供给" name="second">
        配置管理
      </el-tab-pane>
      <el-tab-pane label="我的需求" name="third">
        角色管理
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
export default {
  data: function() {
    return {
      visible: false,
      activeIndex: '1',
      activeIndex2: '1',
      activeName: 'first'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
.Element{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
}
hr {
  max-width: 100vw;
  width: 600px;
  margin: 20px;
}

.tabs{
  margin: 0 auto;
  padding: 0 0 15px 0;
  width: 80%;
  background-color: #ffffff;
}
.pane{}
</style>