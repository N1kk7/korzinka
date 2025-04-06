<template>
    <div class="language-component">
        <button>
                <SvgIcon name="lang-icon" size="micro" :fill="!themeStore.darkMode ? 'var(--dark-color)' : 'var(--main-accent)'  "/>
            <div class="separator"></div>
            <div class="text">
                <p>
                    {{ $i18n.locale.toUpperCase() }}
                </p>
            </div>
        </button>
    </div>
</template>

<script setup>
    import SvgIcon from './SvgIcon.vue';
// import { I18N } from '@splidejs/splide/src/js/constants/i18n';
    import { useThemeStore } from "#imports";

    const themeStore = useThemeStore();

</script>

<style lang="scss">

    .language-component {
        button {
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

            .separator{
                width: 1px;
                align-self: stretch;
                background: var(--dark-color);
            }

            &:active {
                color: #444;
                box-shadow: inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff;
                transform: scale(0.95);
                cursor: pointer;
            }

        }
    }
    .dark .language-component button{
        background: var(--dark-border-color);
        border: 1px solid var(--main-accent);
        box-shadow: unset;
        color: var(--border-color);
        .separator {
        background: var(--border-color);
        }
    }

</style>