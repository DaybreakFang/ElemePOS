<template>
  <div class="main">
    <el-row class="main-row">
      <el-col :span="7" class="order">
        <el-tabs type="border-card">
          <el-tab-pane label="点餐" style="width: 100%">
            <el-table :data="tableData" stripe border style="width: 100%">
              <el-table-column
                prop="goodsName"
                label="商品名称"
              ></el-table-column>
              <el-table-column
                prop="price"
                width="50"
                label="数量"
              ></el-table-column>
              <el-table-column
                prop="count"
                width="70"
                label="金额"
              ></el-table-column>
              <el-table-column label="操作" width="90" fixed="right">
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">增加</el-button>
              </el-table-column>
            </el-table>
            <div class="cal-btn">
              <el-button type="warning" round size="medium">挂单</el-button>
              <el-button type="danger"  round size="medium">清空</el-button>
              <el-button type="success" round size="medium">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单"> </el-tab-pane>
          <el-tab-pane label="外卖"> </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col>dk</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      tableData: [
        {
          goodsName: "可口可乐",
          price: 8,
          count: 1,
        },
        {
          goodsName: "香辣鸡腿堡",
          price: 15,
          count: 1,
        },
        {
          goodsName: "爱心薯条",
          price: 8,
          count: 1,
        },
        {
          goodsName: "甜筒",
          price: 8,
          count: 1,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-row {
  height: 100vh;
}
.order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}
.cal-btn {
  margin-top: 15px;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  /* margin: 0 auto;
  text-align: center;
  display: inline-block */
}
</style>