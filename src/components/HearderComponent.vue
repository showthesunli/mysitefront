<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-container>
        <el-header class="header">
          <el-menu
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">健康</el-menu-item>

            <el-menu-item index="3" disabled>时尚</el-menu-item>
            <el-menu-item index="4">游戏</el-menu-item>
            <el-menu-item index="5">数码</el-menu-item>
            <el-menu-item index="6">金融</el-menu-item>
          </el-menu>
        </el-header>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
export default {
    
}
</script>