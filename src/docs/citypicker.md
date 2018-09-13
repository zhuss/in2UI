<script>
import dataSource from './area.json'
export default {
    data(){
        return {
            value1:0,
            value2:0,
            value3:0,
            dataSource:dataSource
        }
    },
    methods:{
        changeValue1(value){
            this.value2=0;
            this.value3=0;
        },
        changeValue2(value){
            this.value3=0;
        },
        getValue(){
            this.$message(this.value1+";"+this.value2+";"+this.value3);
        }
    }
}
</script>
# Citypicker 案例
---
<div class="demo-block">
    <in-select style="width:300px" v-model="value1" @change="changeValue1">
        <in-option :value="index" :label="item.name" v-for="(item,index) in dataSource" :key="index"></in-option> 
    </in-select>
    <in-select style="width:300px" v-model="value2" @change="changeValue2">
        <in-option :value="index" :label="item.name" v-for="(item,index) in dataSource[value1].city" :key="index"></in-option>
    </in-select>
    <in-select style="width:300px" v-model="value3">
        <in-option :value="index" :label="item" v-for="(item,index) in dataSource[value1].city[value2].area" :key="index"></in-option>
    </in-select>
    <br>
    <in-button @click="getValue">获取</in-button>
</div>