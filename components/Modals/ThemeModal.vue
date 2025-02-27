<template>

    <section class="modal lang-modal">
        <div class="modal-wrapper">
            <div class="title">
                <h2>
                    Оберіть тему
                </h2>
                <button @click="closeModal">Закрити</button>
            </div>
            <hr>
            <ul>
                <li v-for="(theme, idx) in themesStore" :key="idx" @click="setNewTheme(theme)">
                    {{ theme.name }}
                </li>
            </ul>
        </div>
    </section>
    
</template>

<script setup>
    import { useModalStore, useThemeStore } from "#imports";

    defineProps(['openModal', 'closeModal']);

    const modalStore = useModalStore();
    const themeStore = useThemeStore();

    const themesStore = themeStore.themes

    const setNewTheme = (theme) => {

        themeStore.setTheme(theme);
    }





</script>


<style lang="scss">

    .modal{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--dark-color);
        padding: 2em;
        border-radius: 1em;
        z-index: 100;
        .modal-wrapper{
            background: var(--bg-color);
            border-radius: 1em;
            padding: 2em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1em;
            h2{
                font-size: 1.5em;

            }
        }

        li{
            cursor: pointer;
        }
        li:hover{
            background: var(--dark-color);
        }
    }


</style>