<template>
    <div class="section page pay-delivery-section">
        <div class="container">
            <LinkBlock pageName="Оплата і доставка"/>
            <div class="page-title border-b-[1px] border-[#d9dbe0] py-2">
                <h1
                    class="
                    text-[var(--dark-color)]
                    font-bold
                    text-2xl
                    mb-5
                    "
                >
                    Оплата і доставка
                </h1>
                <p class="text-[var(--dark-color)] font-medium text-lg mb-2">
                    Дякуємо, що обрали наш магазин! Ми прагнемо забезпечити комфортний і швидкий процес оплати та доставки. 
                    У цьому розділі ви знайдете всю необхідну інформацію про способи оплати, варіанти доставки та терміни отримання замовлення.
                </p>
                
            </div>
           
            
        </div>
        <div class="mobile-bar">
            <ul >
                <li>
                    <span>
                        Оплата
                    </span>
                </li>
                <li>
                    <span >
                        Доставка
                    </span>
            
                </li>
                <li>
                    <span>
                        Умови доставки
                    </span>
                </li>

            </ul>
        </div>
        <div class="container">
            <div class="content-wrapper grid grid-cols-[2fr_1fr] mt-10 mb-14 w-full gap-5 max-md:block">
                    <div class="info-blocks ">
                        <div class="text-block mb-5">
                            <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
                                Оплата
                            </h2>
                            <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
                                Ми пропонуємо кілька способів оплати для вашої зручності:
                            </p>

                            <div class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2">
                                <p>
                                    <span class="font-semibold">Банківська картка:</span> Оплата онлайн за допомогою Visa, MasterCard або інших карток, що підтримують платежі в інтернеті. Усі транзакції захищені сучасними стандартами безпеки.
                                </p>
                                <p>
                                    <span class="font-semibold">Електронні гаманці:</span> Оплата через популярні платіжні системи, такі як PayPal, Google Pay, Apple Pay або інші доступні у вашому регіоні.
                                </p>
                                <p>
                                    <span class="font-semibold">Безготівковий розрахунок:</span> Для юридичних осіб можлива оплата на розрахунковий рахунок. Зв'яжіться з нами для оформлення рахунку.
                                </p>
                                <p>
                                    <span class="font-semibold">Післяоплата:</span> Ви можете оплатити замовлення при отриманні в пункті видачі або у кур'єра (додаткова комісія може стягуватися).
                                </p>
                            </div>

                        </div>
                        <div class="text-block mb-5">
                            <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
                                Доставка

                            </h2>
                            <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
                                Ми співпрацюємо з надійними логістичними компаніями, щоб забезпечити швидку та якісну доставку.

                            </p>

                            <div class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2">
                                <p>
                                    <span class="font-semibold">Кур'єрська доставка:</span> Доставка до дверей у будь-який населений пункт. Терміни залежать від вашого розташування та складають від 1 до 7 робочих днів.
                                </p>
                                <p>
                                    <span class="font-semibold">Пункти видачі:</span> Заберіть замовлення у зручний час з найближчого пункту самовивезення. Ви можете вибрати пункт під час оформлення замовлення.
                                </p>
                                <p>
                                    <span class="font-semibold">Поштова доставка:</span> Для віддалених регіонів доступна відправка через пошту. Термін доставки уточнюється під час оформлення.
                                </p>
                            </div>


                            <div class="delivery-company flex justify-between items-stretch gap-5 bg-[var(--dark-color)] py-5 px-8 rounded-xl my-5">
                                <div class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center">
                                    <img src="@/public/img/ukrpost.png" alt="delivery">
                                </div>
                                <div class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center">
                                    <img src="@/public/img/delAuto-transparent.png" alt="delivery">
                                </div>
                                <div class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center">
                                    <img src="@/public/img/nova-post.png" alt="delivery">
                                </div>
                                <div class="company bg-[var(--bg-color)] p-2 rounded-xl flex justify-center items-center">
                                    <img src="@/public/img/van-transparent.png" alt="delivery">
                                </div>
                            </div>
                        </div>
                        <div class="text-block mb-5">
                            <h2 class="text-[var(--dark-color)] font-bold text-xl mb-4 border-b-[1px] border-[#d9dbe0]">
                                Умови доставки
                            </h2>
                            <p class="text-[var(--dark-color)] font-medium text-lg mb-3">
                                Ми пропонуємо кілька способів оплати для вашої зручності:
                            </p>
                            <div class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ml-2">
                                <p>
                                    <span class="font-semibold">Терміни обробки замовлення:</span> Всі замовлення обробляються протягом 1-2 робочих днів.
                                </p>
                                <p>
                                    <span class="font-semibold">Вартість доставки:</span> Вартість залежить від способу доставки та вашого регіону. Точна сума буде розрахована під час оформлення замовлення.
                                </p>
                                <p>
                                    <span class="font-semibold">Безкоштовна доставка:</span> Ми пропонуємо безкоштовну доставку для замовлень від [вставте суму, наприклад, 5000 ₽].
                                </p>
                                <p>
                                    <span class="font-semibold">Статус замовлення:</span> Після відправлення замовлення ви отримаєте номер для відстеження посилки.
                                </p>
                            </div>

                        </div>
                        <div class="block-paragraph text-[var(--dark-color)] font-normal text-base leading-relaxed ">
                            <p>
                                Якщо у вас є додаткові питання, будь ласка, зв'яжіться з нашою службою підтримки за телефоном <span class="font-semibold">[вставте номер телефону]</span> або напишіть на email <span class="font-semibold">[вставте адресу електронної пошти]</span>.
                            </p>
                        </div>
                        



                    </div>
                    <div class="links sticky top-[75px] w-full h-fit pb-8 flex flex-col gap-5 max-md:hidden">

                        <ul 
                            class="links-block border-[1px] bg-white border-[var(--dark-color)] py-8 px-5 rounded-xl
                            flex flex-col gap-5
                            "
                        >
                            <li class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300">
                                <span class="text-[var(--dark-color)] font-normal text-base leading-relaxed  ">
                                    Оплата
                                </span>
                                <SvgIcon name="arrow-right" size="micro" fill="var(--dark-color)"/>
                            </li>
                            <li class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300">
                                <span class="text-[var(--dark-color)] font-normal text-base leading-relaxed ">
                                    Доставка
                                </span>
                                <SvgIcon name="arrow-right" size="micro" fill="var(--dark-color)"/>
                            </li>
                            <li class="border-b-[1px] border-[#d9dbe0] cursor-pointer flex justify-between items-center hover:bg-[var(--light-color)] py-2 px-4 hover:rounded-xl transition-all hover:transition-all duration-300 hover:duration-300">
                                <span class="text-[var(--dark-color)] font-normal text-base leading-relaxed ">   
                                    Умови доставки
                                </span>
                                <SvgIcon name="arrow-right" size="micro" fill="var(--dark-color)"/>
                            </li>


                        </ul>

                        <div class="page-img bg-[var(--primary-color)] rounded-xl">
                            <img src="/public/img/cash-delivery.png" alt="cash-delivery">
                        </div>

                    </div>

            </div>
        </div>
       
    </div>
</template>

<script setup>

    // components
    import LinkBlock from '@/components/shared/LinkBlock.vue';
    import SvgIcon from '@/components/shared/SvgIcon.vue';

</script>


<style scoped lang="scss">

    @use './/styles/mixins.scss' as mixins;

    @include mixins.mobileBar(768px);
</style>