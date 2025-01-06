<template>
    <div class="language-component">
        <button>
            <SvgIcon name="lang-icon" size="micro" />
        <div class="separator"></div>
        <div class="text">
            <p>RU</p>
        </div>
    </button>

    </div>
    
    
</template>

<script lang="ts" setup>
    import SvgIcon from '@/components/shared/SvgIcon.vue';

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
        // .language-list {
        //         display: none;
        //     }
    }

</style>