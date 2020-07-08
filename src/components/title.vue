<template>
    <div class="titleeare">
        <div class="name">
            <link rel="stylesheet" type="image/x-icon" href="../image/format.ico">
            <p>网易云音乐</p>
        </div>
        <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            class="inputbox"
            @select="handleSelect">
            <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
                @click="handleIconClick">
            </i>
            <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
            </template>
        </el-autocomplete>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.titleeare{
    float: left;
}
.name{
    margin-left: 30px;
}
.titleeare img{
    float: left;
}
.titleeare p{
    float: left;
    color: white;
    font-size: 20px;
    font-family: fantasy;
}

/* li {
    line-height: normal;
    padding: 7px;
}
.name {
    text-overflow: ellipsis;
    overflow: hidden;
}
.addr {
    font-size: 12px;
    color: #b4b4b4;
}

.highlighted .addr {
    color: #ddd;
} */
input.el-input__inner{
    background-color: #A82828;
    border: 1px solid #A82828;
    height: 30px;
    border-radius: 15px;
}
</style>