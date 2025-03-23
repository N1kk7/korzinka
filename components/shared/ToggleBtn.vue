<template>
    <label class="label">
        <div class="toggle " >
            <input class="toggle-state" type="checkbox" name="check" value="check" @click.stop>
            <div class="indicator"></div>
        </div>
    </label>
</template>




<script setup>

</script>


<style scoped>

    .label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #394a56;
    }

    .label-text {
    margin-left: 16px;
    }

    .toggle {
    isolation: isolate;
    position: relative;
    height: 30px;
    width: 60px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: -8px -4px 8px 0px #ffffff,
        8px 4px 12px 0px #d1d9e6,
        4px 4px 4px 0px #d1d9e6 inset,
        -4px -4px 4px 0px #ffffff inset;
    }

    .toggle-state {
    display: none;
    }

    .indicator {
    height: 100%;
    width: 200%;
    background: #ecf0f3;
    border-radius: 15px;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow: -8px -4px 8px 0px #ffffff,
        8px 4px 12px 0px #d1d9e6;
    }

    .toggle-state:checked ~ .indicator {
    transform: translate3d(25%, 0, 0);
    }

 .dark .label {
    color: #e2e3e6;
}

.dark .toggle {
    background: var(--dark-grey);
    border: 1px solid var(--dark-border-color);
    box-shadow: inset -4px -4px 6px rgba(255, 255, 255, 0.1),
                inset 4px 4px 6px rgba(0, 0, 0, 0.6),
                -4px -4px 8px rgba(255, 255, 255, 0.05),
                4px 4px 8px rgba(0, 0, 0, 0.6);
}

.dark .indicator {
    background: #828282;
    box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.1),
                2px 2px 4px rgba(0, 0, 0, 0.6);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
}

.dark .toggle-state:checked ~ .indicator {
    background: #e2e3e6;
    box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.2),
                2px 2px 4px rgba(0, 0, 0, 0.6);
}








</style>