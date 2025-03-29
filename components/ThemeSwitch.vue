<template>
    <label  class="label" @click="toggleTheme">
        <div class="toggle ">
            <!-- <img :src="DarkModeIcon" alt="theme" v-if="!themeState">
            <img :src="LightModeIcon" alt="theme" v-else> -->
            <img :src="themeIcon" alt="theme">

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

    // const themeState = ref();
    const isLoaded = ref(false)
    // const themeIcon = ref('')

    import { useThemeStore } from "#imports";

    const themeStore = useThemeStore();

    // watch(themeStore, () => {
    //     themeIcon.value = themeStore.darkMode ? '../public/light-mode.png' : '../public/dark-mode.png';
    //     themeState.value = themeStore.darkMode;

    // console.log(themeState.value, 'themeState');

    // });

    // const themeIcon = computed(() =>
    //   themeStore.darkMode ? "/light-mode.png" : "/dark-mode.png"
    // );

    const themeIcon = computed(() =>
      themeStore.darkMode ? "/light-mode.png" : "/dark-mode.png"
    );

    const toggleTheme = () => {

      themeStore.toggleTheme();

    }




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

  .dark .label{
    background: var(--dark-grey);
    border: 1px solid var(--main-accent);
    box-shadow: unset;
  }

</style>