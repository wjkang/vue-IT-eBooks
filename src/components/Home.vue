<template>
    <div>
        <el-menu theme="dark" default-active="/itebook" mode="horizontal" router>
            <el-menu-item index="/itebook">It-EBooks</el-menu-item>
            <el-menu-item index="/allitebook">AllItEBooks</el-menu-item>
        </el-menu>
        <el-row>
            <el-col :span="24">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
