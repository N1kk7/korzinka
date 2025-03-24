<template>
    <button
    
    @click.stop
    class="shadow-btn flex items-center justify-center px-4 py-2 rounded-md font-semibold cursor-pointer 
    text-gray-700 bg-[#ecf0f3] border border-[#d1d9e6] 
    shadow-[-8px_-4px_8px_#ffffff,8px_4px_12px_#d1d9e6,4px_4px_4px_#d1d9e6_inset,-4px_-4px_4px_#ffffff_inset] 
    transition-all duration-300
    hover:bg-[#f0f2f5] hover:shadow-[-6px_-3px_6px_#ffffff,6px_3px_9px_#d1d9e6,3px_3px_3px_#d1d9e6_inset,-3px_-3px_3px_#ffffff_inset] 
    active:bg-[#e2e6eb] active:shadow-[-4px_-2px_4px_#ffffff,4px_2px_6px_#d1d9e6,2px_2px_2px_#d1d9e6_inset,-2px_-2px_2px_#ffffff_inset] active:scale-95
    dark:text-gray-300 dark:bg-[var(--dark-grey)] dark:border dark:border-[var(--dark-border-color)] 
    dark:shadow-[inset_-4px_-4px_6px_rgba(255,255,255,0.1),inset_4px_4px_6px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05),4px_4px_8px_rgba(0,0,0,0.6)] 
    dark:hover:bg-[rgba(255,255,255,0.05)] dark:hover:shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.15),inset_3px_3px_5px_rgba(0,0,0,0.5)] 
    dark:active:bg-[rgba(255,255,255,0.1)] dark:active:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_4px_rgba(0,0,0,0.5)] dark:active:scale-95"
    >
    <slot></slot>
    </button>
</template>

<style scoped>
    .shadow-btn{
        font-size: clamp(10px, 1.5vw, 16px)
    }
</style>