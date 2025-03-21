<template>
    <div class="skeleton-card">
        <div class="skeleton-img"></div>
        <div class="skeleton-content">
            <div class="skeleton-info">
                <div class="skeleton-title"></div>
                <div class="skeleton-price"></div>
            </div>
       
            <div class="skeleton-buttons">
                <div class="skeleton-button"></div>
                <div class="skeleton-button"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.skeleton-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    padding: 1rem;
    background: #f0feff;
    border-radius: 12px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
}

.skeleton-img {
    width: 100%;
    height: 150px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

.skeleton-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
}

.skeleton-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.skeleton-title {
    width: 95%;
    height: 20px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
}

.skeleton-price {
    width: 70%;
    height: 18px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
}

.skeleton-buttons {
    width: 100%;
    display: flex;
    gap: 0.5rem;
}

.skeleton-button {
    // width: 80px;
    flex: 1;
    height: 30px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 6px;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
</style>
