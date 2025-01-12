<template>

    <div class="tooltip border-b-4 p-4 bg-red-200 border-red-600 text-red-600">
        <div class="text-wrapper">

        </div>
        <p class="font-bold">
            Success
            <!-- {{ tooltipStatus }} -->
        </p>
        <p>
            Congratulations, you are the best player.
            <!-- {{ tooltipMessage }} -->
        </p>
    </div>


</template>


<script setup lang="ts">

    import { ref, onMounted } from 'vue';


    const tooltipStyle = ref('');
    const tooltipType = ref('');

    const {tooltipStatus, tooltipMessage} = defineProps(['tooltipStatus', 'tooltipMessage']);

    // defineProps({
    //     tooltipStatus: {
    //         type: String,
    //         required: true,
    //     },
    //     tooltipMessage: {
    //         type: String,
    //         required: true,
    //     }
    // })

    const setTooltip = (type: string) => {

        switch(type) {
            case 'success':
                tooltipStyle.value = 'bg-green-200 border-green-600 text-green-600';
                return 'Success';
            break;
            case 'info':
                tooltipStyle.value = 'bg-blue-200 border-blue-600 text-blue-600';
                return 'Info';
            break;
            case 'warning':
                tooltipStyle.value = 'bg-yellow-200 border-yellow-600 text-yellow-600';
                return 'Warning';
            break;
            case 'error':
                tooltipStyle.value = 'bg-red-200 border-red-600 text-red-600';
                return 'Warning';
            break;
        }

    }

    onMounted(() => {
        tooltipType.value = setTooltip(tooltipStatus);
    })


</script>


<style lang="scss">
    .tooltip{
        height: fit-content;
        width: 100%;
        text-align: center;
        position: absolute;
        padding-left: 250px;
        top: 0;
        right: 0;

        // pos
    }

    @keyframes tooltipAnimation {
        10% {
            
        }
        
    }



</style>