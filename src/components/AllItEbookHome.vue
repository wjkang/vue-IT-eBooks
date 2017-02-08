<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-input
                        placeholder="请选择日期"
                        icon="search"
                        v-model="input2"
                        :on-icon-click="handleIconClick">
                </el-input>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>