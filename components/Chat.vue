<template>
    <div 
        class="chat-wrapper"
        :style="{'right': chat ? '30px' : '-220px'}"
    >

                
  
        <!-- <div class="top-element">
            <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div class="coccoc-alo-ph-circle"></div>
                    <div class="coccoc-alo-ph-circle-fill"></div>
                    <div class="coccoc-alo-ph-img-circle"></div>
                </div>
            <div class="text-block">
                <h3>
                    Я тут щоб Вам допомгти!
                </h3>
            </div>
        </div> -->
        <div 
            class="top-element" 
            @click="openChat"
            :style="{'bottom': chat ? '80%' : '20%'}"
        >
            <div class="img-wrapper">
                <div class="img"></div>
                <div class="circle"></div>
                <div class="border"></div>
            </div>
            <!-- <div class="text-block">
                <h3>
                    Я тут щоб допомгти!
                </h3>
            </div> -->
        </div>
        <div class="chat-area">
            <div class="close-btn">
                <SvgIcon name="close-btn" size="micro" fill="var(--dark-color)"/>

            </div>
            <h3>
                    Я тут щоб допомгти!
                </h3>
            <div class="form">
                <textarea v-model="message" placeholder="Введіть Ваше запитання"></textarea>
            </div>
            <div class="button-group">
                <button
                    @click="message = ''"
                >
                    Очистити
                </button>
                <button
                >
                    Надіслати
                </button>
            </div>
        </div>

    </div>

</template>

<script setup>

    import { ref, onMounted } from 'vue';

    import SvgIcon from './shared/SvgIcon.vue';


    const chat = ref(false);
    // const message = ref('');
    const message = ref('');


    const openChat = () => {
        chat.value = !chat.value
        if(!chat.value){
            message.value = ''
        }
    }

    onMounted(() => {
        message.value = "";
    });



</script>











<style scoped lang="scss">
    .chat-wrapper{
        position: fixed;
        bottom: 20px;
        // right: -220px;
        transition: all ease 0.3s;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        z-index: 50;
        h3{
            white-space: nowrap;
            background: var(--bg-color);
            border-radius: 10px;
            padding: 5px;
        }
        .top-element{
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            transition: all ease-in-out 0.3s;
            gap: 20px;
            // top: 5px;
            left: -80px;
            .img-wrapper{
                position: relative;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                .circle{
                
                    background: var(--light-color);
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left:0;
                    z-index: -1;
                    // border: 1px solid var(--active-btn)
                }
                .border{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left:0;
                    z-index: -1;
                    border: 2px solid var(--dark-color);
                    animation:  circleAnim 1.5s infinite linear;
                }
                .img{
                    background: url(../public/img/only-dog.png) no-repeat center center;

                    background-size: cover;
                  
                    width: 40px;
                    height: 40px;
                    padding: 10px;

                }
            }
           
            .text-block{
                z-index: -1;
            }
        }
        .chat-area{
            background: var(--dark-color);
            height: 300px;
            padding: 10px 10px 15px;
            display: flex;
            justify-content: space-between;
            border-radius: 10px;
            align-items: flex-end;
            flex-direction: column;
            gap: 5px;
            h3{
                width: -webkit-fill-available;
                background: var(--dark-color);
                border: 1px solid var(--main-accent);
                color: var(--bg-color)
            }


            .close-btn{
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--bg-color);
                width: 20px;
                height: 20px;
                border-radius: 50%;
                padding: 5px;
                border: 1px solid var(--active-btn);

            }
            .form {
                width: 100%;
                height: -webkit-fill-available;
            margin-top: 15px;

                textarea{
                    background: var(--bg-color);
                    height: -webkit-fill-available;
                    border-radius: 10px;
                    padding: 10px;
                    resize: none;
                    color: var(--dark-color);
                    border: 1px solid transparent;

                    &::placeholder{
                        color: var(--secondary-color);
                        // position: absolute;

                        
                    }
                    &:focus{
                        outline: none;
                        border: 1px solid var(--active-btn);
                      
                    }
                }
            }

        }
        .button-group{
            width: -webkit-fill-available;
            height: fit-content;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            button{
                color: var(--bg-color);
                border: 1px solid var(--main-accent);
                border-radius: 10px;
                padding-inline: 5px;
            }
        }
    }
    

    @keyframes circleAnim {
        0% {
            transform: rotate(0) scale(1) skew(1deg);
            opacity: .1
        }
        15% {
            transform: rotate(0) scale(1) skew(1deg);
            opacity: .6
        }
        30% {
            transform: rotate(0) scale(1)  skew(1deg);
            opacity: 1
        }
   
        100% {
            transform: rotate(0) scale(1.3) skew(1deg);
            opacity: 0
        }
    }



    

</style> 


