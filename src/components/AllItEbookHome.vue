<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-input
                        placeholder=""
                        icon="search"
                        v-model="input2"
                        :on-icon-click="handleIconClick">
                </el-input>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>