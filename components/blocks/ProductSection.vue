<template>
    <section class="section product-section">
        <div class="container">
            <div class="title">
                <h1>Популярні товари</h1>
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
                    <h1>Виробники</h1>
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
    .product-list{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 50px;
        gap: 20px;
        .product-card{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            overflow: hidden;
            border-radius: 50px;
            background: linear-gradient(145deg, #cacaca, #f0f0f0);
            box-shadow:  20px 20px 60px #bebebe,
                        -20px -20px 60px #ffffff;
            padding: 20px;
            max-height: 200px;
            position: relative;
            cursor: pointer;
            transition: all ease 0.3s;
            
            span{
                @include  mixins.cardText;
                white-space: nowrap;
            }
            .img-wrapper{
                display: flex;
                align-items: end;
                justify-content: end;
                img{
                    max-width: 70%;
                    border-radius: 50px;
                }
            }
            &:hover {
                transform: scale(0.97);
                // box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
                box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff,
                    0px 0px 15px rgba(0, 0, 0, 0.2);
            }
            &:hover::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 200px;
                height: 200px;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                background: radial-gradient(circle, rgba(0, 0, 0, 0.1), transparent 80%);
                pointer-events: none;
            }

            &:active {
                transform: scale(0.95);
                box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
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
        ul{
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 20px;
        }
    }
    
</style>