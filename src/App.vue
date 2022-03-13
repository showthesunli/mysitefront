<template>
  <el-row >
    <el-col :span="18" :offset="3">
      <el-container>
        <el-header class="header">
          <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" >
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

  <el-row>
    <el-col :span="18" :offset="3">
      <el-container>
        <el-main>
          <el-row
            :gutter="20"
            :key="n"
            v-for="n in 10"
            style="margin-bottom: 20px"
          >
            <el-col :key="n" v-for="n in 3" :span="8">
              <el-card shadow="hover">
                <template #header>
                  <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" type="text"
                      >Operation button</el-button
                    >
                  </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                  {{ "List item " + o }}
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
        <el-aside style="padding: 20px;">
          <el-affix position="top">
            <el-space direction="vertical" :size="60">
              <el-card shadow="always" :key="n" v-for="n in 2" style="width: 260px; height: 300px">
                <div v-for="o in 4" :key="o" class="text item">
                  {{ "List item " + o }}
                </div>
              </el-card>
            </el-space>
          </el-affix>
        </el-aside>
      </el-container>
    </el-col>
  </el-row>
</template>

<style>
</style>