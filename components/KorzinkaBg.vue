<template>

    <div class="korzinka-bg">

        <img src="/public/img/korzinkaDog.png" alt="bg">
    </div>



</template>




<style lang="scss">
    .korzinka-bg {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        z-index: -10;
        top: 0;
        opacity: 0.12;

        img{
            border: 15px solid var(--primary-color);
            border-radius: 50%;
            padding: 5rem;

        };
    }

</style>