<template>
    <label  class="label" @click="themeStore.toggleTheme">
        <div class="toggle " v-if="isLoaded">
            <img :src="DarkModeIcon" alt="theme" v-if="!themeState">
            <img :src="LightModeIcon" alt="theme" v-else>

            <!-- <input class="toggle-state" type="checkbox" name="check" value="check" @click.stop> -->
            <!-- <div class="indicator"></div> -->
        </div>
    </label>
</template>

<script setup>
    import SvgIcon from './shared/SvgIcon.vue';
    import LightModeIcon from '../public/light-mode.png'
    import DarkModeIcon from '../public/dark-mode.png'
    import { ref, watch, onMounted } from "vue";

    const themeState = ref();
    const isLoaded = ref(false)

    import { useThemeStore } from "#imports";

    const themeStore = useThemeStore();

    watch(themeStore, () => {
        themeState.value = themeStore.darkMode;
    console.log(themeState.value, 'themeState');

    });

    onMounted(() => {
        themeState.value = themeStore.darkMode;
        isLoaded.value = true;
    })





</script>

<style lang="scss" scoped>

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.3em 0.7em;
    border-radius: 0.5em;
    background: #e8e8e8;
    cursor: pointer;
    color: #666;
    font-size: 0.8em;
    border: 1px solid #e8e8e8;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
    position: relative;
    width: fit-content;
    flex-grow: 0;

    height: auto;
  }
  img{
    width: 20px;
    height: 20px;
  }
  .toggle{
    width: 20px;
    height: 20px;
  }

// .label {
//     display: inline-flex;
//     align-items: center;
//     cursor: pointer;
//     color: #394a56;
//     }

//     .label-text {
//     margin-left: 16px;
//     }

//     .toggle {
//     isolation: isolate;
//     position: relative;
//     height: 30px;
//     width: 60px;
//     border-radius: 15px;
//     overflow: hidden;
//     box-shadow: -8px -4px 8px 0px #ffffff,
//         8px 4px 12px 0px #d1d9e6,
//         4px 4px 4px 0px #d1d9e6 inset,
//         -4px -4px 4px 0px #ffffff inset;
//     }

//     .toggle-state {
//     display: none;
//     }

    // .indicator {
    // height: 100%;
    // width: 200%;
    // background: #ecf0f3;
    // border-radius: 15px;
    // transform: translate3d(-75%, 0, 0);
    // transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    // box-shadow: -8px -4px 8px 0px #ffffff,
    //     8px 4px 12px 0px #d1d9e6;
    // }

    // .toggle-state:checked ~ .indicator {
    // transform: translate3d(25%, 0, 0);
    // }


</style>