<!--
 * @Author: rentingting 1542078062@qq.com
 * @Date: 2023-12-14 21:27:01
 * @LastEditors: rentingting 1542078062@qq.com
 * @LastEditTime: 2023-12-31 17:04:20
 * @FilePath: /code/metaedit/src/pages/IndexPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <q-page class="flex flex-center" ref="gmpage">

    <div class="gm-view" ref="gm"/>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { editor } from "../edit/editor";

const gm = ref(null);
const gmpage = ref(null);


onMounted(_=>{

  let container = gm.value;

  // let container = gmpage.value.$el;
  let rect = container.getBoundingClientRect();

  console.log(rect);
  console.log(container);

  // container.style.width = "340px";
  // container.style.height = "90vh";
  editor.init({ container });

});


</script>

<style>

.gm-view{
  width: 360px;
  height: 740px;
  background-color: #aaa;
}

</style>
