<template>
    <div class="head flex items-center justify-between px-5 py-5">
        <h1>
            Повідомлення
        </h1>
        <DashBurger/>
    </div>
</template>

<script setup>
    import DashBurger from '@/components/shared/DashBurger.vue';

    definePageMeta({
        layout: 'admin'
    })

</script>