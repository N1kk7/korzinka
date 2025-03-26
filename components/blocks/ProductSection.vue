<template>
    <section class="section product-section">
        <div class="container">
            <div class="title ">
                <h1
                    class="border-b-[1px] dark:border-[var(--dark-border-color)] border-[var(--border-color)] pb-2"
                >Популярні товари</h1>
            </div>

            <ul class="product-list">
                <li class="product-card">
                    <span>
                        Пакет майка
                    </span>
                    <div class="img-wrapper">
                        <img src="~/public/icon-pack/plasticBag.png" alt="plastic-bag">
                    </div>
                </li>
                <li class="product-card">
                    <span>
                        Пакет для сміття
                    </span>
                    <div class="img-wrapper">
                        <img src="~/public/icon-pack/trashBag.png" alt="trash-bag">    
                    </div>
                </li>
                <li class="product-card">
                    <span>
                        Мішки
                    </span>
                    <div class="img-wrapper">
                        <img src="~/public/icon-pack/largeBag.png" alt="large-bag">    
                    </div>
                </li>
                <li class="product-card">
                    <span>
                        Стрейтч плівка
                    </span>
                    <div class="img-wrapper">
                        <img src="~/public/icon-pack/stretchCover.png" alt="stretch-cover">    
                    </div>
                </li>
                <li class="product-card">
                    <span>
                        Рукавички
                    </span>
                    <div class="img-wrapper">
                        <img src="~/public/icon-pack/gloves.png" alt="gloves">
                    </div>
                </li>
                <li class="product-card">
                    <span>
                        Зіп пакети
                    </span>
                    <div class="img-wrapper">
                        <img src="~/public/icon-pack/zip1.png" alt="zip">   
                    </div>
                </li>
                <li class="product-card">
                    <span>
                        Пакет майка
                    </span>
                    <div class="img-wrapper">
                        <img src="~/public/icon-pack/plasticBag.png" alt="plastic-bag">    
                    </div>
                </li>
            </ul>

            <div class="manufacture">
                <div class="title">
                    <h1
                        class="border-b-[1px] dark:border-[var(--dark-border-color)] border-[var(--border-color)] pb-2"
                    >{{ $t('index-page.manufacture') }}</h1>
                </div>
                <ul>
                    <li>
                        <img src="/public/comserv-logo.svg" alt="comserv">
                    </li>
                    <li>
                        <img src="/public/comserv-logo.svg" alt="comserv">
                    </li>
                    <li>
                        <img src="/public/comserv-logo.svg" alt="comserv">
                    </li>
                    <li>
                        <img src="/public/comserv-logo.svg" alt="comserv">
                    </li>
                    <li>
                        <img src="/public/comserv-logo.svg" alt="comserv">
                    </li>
                    <li>
                        <img src="/public/comserv-logo.svg" alt="comserv">
                    </li>
                    <li>
                        <img src="/public/comserv-logo.svg" alt="comserv">
                    </li>
                </ul>
            </div>
        </div>
       


       



    </section>
</template>

<style lang="scss">

@use ".//styles/mixins.scss" as mixins;

.dark {
    h1{
        color: var(--dark-font-color);  
    }
    .product-list .product-card {
        box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3), -6px -6px 20px rgba(0, 0, 0, 0.4);
        background: var(--dark-component-color);
        span{
            color: var(--dark-font-color);
        }
        span::before{
            background: var(--dark-border-color);
        }
        // &:hover{
        //     display: none;
        // }

    }
}

    h1{
        position: relative;
        z-index: 1;
    }
    .product-list{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30px;
        margin-bottom: 50px;
        gap: 20px;
        .product-card{
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            @include mixins.cardShadow;
            padding: 20px;
            position: relative;
            cursor: pointer;
            transition: all ease 0.3s;
            
            span{
                @include  mixins.cardText;
                white-space: nowrap;
                text-align: center;
                position: relative;
                padding-top: 10px;
                width: 100%;
                &::before{
                    content: '';
                    width: 100%;
                    height: 1px;
                    background: rgb(203, 202, 202);
                    position: absolute;
                    top: 0;
                    left: 0;
                }

            }
            .img-wrapper{
                flex: 1;
                img{
                    width: 100px;
                    border-radius: 50px;
                }
            }
        }
        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 380px) {
            grid-template-columns: 1fr;
            
        }
    }
    .manufacture{

        .title{
            margin-bottom: 30px;
        }
        ul{
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 20px;
        }
    }
    
</style>