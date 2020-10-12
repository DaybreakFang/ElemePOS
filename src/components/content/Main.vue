<template>
  <div class="main">
    <el-row class="main-row">
      <el-col :span="7" class="order">
        <el-tabs type="card">
          <el-tab-pane label="点餐" style="width: 100%">
            <el-table
              
              :data="tableData"
              stripe
              border
              style="width: 100%"
            >
              <el-table-column
                prop="goodsName"
                label="商品名称"
              ></el-table-column>
              <el-table-column
                prop="count"
                width="50"
                label="数量"
                align='center'
              ></el-table-column>
              <el-table-column
                prop="price"
                width="50"
                label="金额"
                align='center'
              ></el-table-column>
              <el-table-column label="操作" width="143" fixed="right">
                <template slot-scope="scope">
                   <el-button
                    type="primary"
                    size="mini"
                    @click="addOrderList(scope.row)"
                    >增加</el-button
                  >
                  <el-button
                    type="danger"
                    size="mini"
                    @click="deleteGoods(scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="order-total">
              <span>数量：{{totalCount}} 件</span>
              <span>金额：{{totalPrice}} 元</span>
            </div>
            <div class="cal-btn">
              <el-button type="warning" round size="medium">挂单</el-button>
              <el-button type="danger" round size="medium" @click="deleteAll">清空</el-button>
              <el-button type="success" round size="medium" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单"> </el-tab-pane>
          <el-tab-pane label="外卖"> </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="17">
        <div class="often-goods">
          <div class="often-title">热销商品</div>
          <div class="often-goods-list">
            <ul>
              <li
                v-for="goods in oftenGoods"
                :key="goods.goodsId"
                @click="addOrderList(goods)"
              >
                <span>{{ goods.goodsName }}</span>
                <span class="o-price"> ¥ {{ goods.price }}</span>
              </li>
            </ul>
          </div>

          <div class="goods-type">
            <el-tabs type="card">
              <el-tab-pane label="汉堡">
                <div class="cooklist">
                  <ul>
                    <li
                      v-for="goods in type0Goods"
                      @click="addOrderList(goods)"
                      :key="goods.goodsId"
                    >
                      <el-card :body-style="{}" shadow="hover">
                        <img :src="goods.goodsImg" width="70%" />
                        <div style="padding: 10px">
                          <span>{{ goods.goodsName }}</span>
                          <span class="o-price"> ￥{{ goods.price }}</span>
                        </div>
                      </el-card>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <div class="cooklist">
                  <ul>
                    <li
                      v-for="goods in type1Goods"
                      @click="addOrderList(goods)"
                      :key="goods.goodsId"
                    >
                      <el-card :body-style="{}" shadow="hover">
                        <img :src="goods.goodsImg" width="70%" />
                        <div style="padding: 10px">
                          <span>{{ goods.goodsName }}</span>
                          <span class="o-price"> ￥{{ goods.price }}</span>
                        </div>
                      </el-card>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料"
                ><div class="cooklist">
                  <ul>
                    <li
                      v-for="goods in type2Goods"
                      @click="addOrderList(goods)"
                      :key="goods.goodsId"
                    >
                      <el-card :body-style="{}" shadow="hover">
                        <img :src="goods.goodsImg" width="70%" />
                        <div style="padding: 10px">
                          <span>{{ goods.goodsName }}</span>
                          <span class="o-price"> ￥{{ goods.price }}</span>
                        </div>
                      </el-card>
                    </li>
                  </ul>
                </div></el-tab-pane
              >
              <el-tab-pane label="套餐"
                ><div class="cooklist">
                  <ul>
                    <li
                      v-for="goods in type3Goods"
                      @click="addOrderList(goods)"
                      :key="goods.goodsId"
                    >
                      <el-card :body-style="{}" shadow="hover">
                        <img :src="goods.goodsImg" width="70%" />
                        <div style="padding: 10px">
                          <span>{{ goods.goodsName }}</span>
                          <span class="o-price"> ￥{{ goods.price }}</span>
                        </div>
                      </el-card>
                    </li>
                  </ul>
                </div></el-tab-pane
              >
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getOftenData, getTypeGoodsData } from "network/home";
export default {
  name: "Main",
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
    };
  },
  created() {
    getOftenData().then((res) => {
      this.oftenGoods = res.oftenGoods;
    }),
      getTypeGoodsData().then((res) => {
        this.type0Goods = res.data[0];
        this.type1Goods = res.data[1];
        this.type2Goods = res.data[2];
        this.type3Goods = res.data[3];
      });
  },
  computed: {
     totalCount() {
        return this.tableData.reduce((pre, goods) => {
          return pre + goods.count;
          } , 0)
      },
      totalPrice() {
        return this.tableData.reduce((pre, goods) => {
          return pre + goods.count * goods.price;
        }, 0)
      }
  },
  methods: {
    addOrderList(goods) {
      let isHave = false;
      let num = 0;
      for (let i = 0; i < this.tableData.length; i++) {
        if (goods.goodsId == this.tableData[i].goodsId) {
          isHave = true;
          num = i;
        }
      }

      if (isHave) {
        this.tableData[num].count++;
        this.tableData[num].prices =
          this.tableData[num].count * this.tableData[num].price;
      } else {
        let newgoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1,
          prices: goods.price,
        };
        this.tableData.push(newgoods);
      }
    },
    deleteGoods(goods) {
    this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);

  },
  deleteAll(){
    this.tableData = []
  },
  checkout(){
    if(this.totalCount != 0){
      this.tableData = [];
      this.$message({
          message: '恭喜你，结账成功',
          type: 'success'
        });
    }else{
        this.$message.error('还没有订单哦');
    }
  }
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
  display: flex;
  justify-content: center;
}
.order-total{
  background-color: #f4f7fa;
  height: 50px;
  line-height: 50px;
  /* padding: 10px; */
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content:space-around;
  border-bottom: 1px solid #d3dce6;
}

.often-goods {
  width: 100%;
}
.often-title {
  background-color: #f4f7fa;
  border-bottom: 1px solid #d3dce6;
  padding: 10px;
  width: 100%;
  color: #1d8ce0;
  font-weight: bold;
}

.often-goods-list ul li {
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  display: inline-block;
  cursor: pointer;
}
.o-price {
  border-radius: 50%;
  color: #1d8ce0;
  font-weight: bold;
}
.cooklist ul {
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 10px;
}
.cooklist li {
  width: 20%;
  padding: 10px;
  text-align: center;
  /* border: solid 1px #e5e9f2; */
  border-radius: 4px;
  cursor: pointer;
}
</style>