<template>
    <div>
    <el-row>
        <el-col :span="24">
            <el-input
                    placeholder="javascript"
                    icon="search">
            </el-input>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <router-view></router-view>
        </el-col>
    </el-row>
    </div>
</template>
