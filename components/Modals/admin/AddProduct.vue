<template>

    <div class="add-product-wrapper">
        <div class="add-image">
            <div class="picture-container">
                <div class="picture first"> </div>
                <div class="picture second"> </div>
                <div class="picture third"> </div>
            </div>
            <h2 class="img-title">
                Завантажте файли зображення
            </h2>
            <span>
                Зображення повинні бути в форматі .jpg, .png, .jpeg
            </span>
            <button>
                Вибрати
            </button>

        </div>
        <div class="add-info">
            <div class="header-description">
                <h2>
                    Основна інформація картки товару
                </h2>
            </div>
            <div class="options">
                <div class="option">
                    <h4 class="option-title">
                        Назва товару
                    </h4>
                    <span>
                        Введіть назву товару
                    </span>
                    <input type="text">
                </div>
                <div class="option">
                    <h4 class="option-title">
                        Опис товару
                    </h4>
                    <span>
                        Введіть опис товару максимум 500 символів
                    </span>
                    <input type="text">
                </div>
                <div class="option">
                    <h4 class="option-title">
                        Опис товару
                    </h4>
                    <span>
                        Введіть опис товару максимум 500 символів
                    </span>
                    <input type="text">
                </div>
                <div class="price-option">
                    <div class="el">
                        <h4>
                            Роздрібна ціна
                        </h4>
                        <span>
                            Введіть роздрібну ціну товару.
                        </span>
                        <input type="text">
                    </div>
                    <div class="el">
                        <h4>
                            Оптова ціна
                        </h4>
                        <span>
                            Введіть оптову ціну товару.
                        </span>
                        <input type="text">
                    </div>
                    <div class="el">
                        <h4>
                            Оптова ціна діє від ...
                        </h4>
                        <span>
                            Введіть кількість від якої оптова ціна діє
                        </span>
                        <input type="text">
                        <select name="wholesaleType" id="wholesaleType">
                            <option value="Bag">Мішок</option>
                            <option value="Role">Рулон</option>
                            <option value="Package">Упаковка</option>



                        </select>
                        <span>
                            Введіть примітку для оптової ціни
                        </span>
                        <input type="text">
                        
                    </div>
                </div>
            </div>
          

        </div>
    </div>

</template>

<script>

</script>


<style>
</style>