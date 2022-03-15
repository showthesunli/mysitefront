<template>
    <button @click="changeperper">改变它的prop</button>
  <setup :collectionName="col">我的书库</setup>
</template>

<script>
import setup from "../src/components/Setup.vue"

export default{
    data(){
        return{
            col:"你的书苦苦"
        }
    },
    components:{
        setup
    },
    methods:{
        changeperper(){
            this.col = this.col + 1;
        }
    }
}
</script>