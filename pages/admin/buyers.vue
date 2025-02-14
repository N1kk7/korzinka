<template>
    <div class="head flex items-center justify-between px-5 py-5">
        <h1>
            Покупці
        </h1>
        <AdminBurger/>
    </div>
</template>

<script setup>
    import AdminBurger from '@/components/shared/AdminBurger.vue';
    definePageMeta({
        layout: 'admin'
    })

</script>