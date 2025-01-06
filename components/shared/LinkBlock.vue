<template>

    <div class="link-block pb-2 border-b-[1px] border-[#d9dbe0]">
        <SvgIcon name="home-icon" size="small" fill="var(--dark-color)"/>
        <NuxtLink :to="localePath('/')"> Головна </NuxtLink>
        <SvgIcon name="arrow-right" size="micro" fill="var(--dark-color)"/>
        <span>{{ pageName }}</span>
    </div>
    

</template>




<script lang="ts" setup>
    import SvgIcon from '@/components/shared/SvgIcon.vue';

    const localePath = useLocalePath();


    defineProps({
        pageName: {
            type: String,
            required: true
        },
    })


</script>



<style lang="scss">

    @use ".//styles/mixins.scss" as mixins;

    .link-block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-block: 1rem;
        gap: 7px;
        a{
            @include mixins.descriptionText(500, var(--dark-color));
        }
        span {
            @include mixins.descriptionText(400, var(--dark-color));
        }
    }


</style>