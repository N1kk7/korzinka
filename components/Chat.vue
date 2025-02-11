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
                    // background: url(.//public/img/only-dog.png) no-repeat center center;
                    background: url(../public/img/only-dog.png) no-repeat center center;

                    background-size: cover;
                  
                    width: 40px;
                    height: 40px;
                    padding: 10px;

                }
            }
           
            .text-block{
                z-index: -1;
                // h3{
                //     white-space: nowrap;
                //     background: var(--bg-color);
                //     border-radius: 10px;
                //     padding: 5px;
                // }
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
        // 80%{
        //     transform: rotate(0) scale(1.15) skew(1deg);
        //     opacity: .2
        // }
        100% {
            transform: rotate(0) scale(1.3) skew(1deg);
            opacity: 0
        }
    }




//     .coccoc-alo-ph-circle {
//     width: 160px;
//     height: 160px;
//     top: 20px;
//     left: 20px;
//     position: absolute;
//     background-color: transparent;
//     -webkit-border-radius: 100%;
//     -moz-border-radius: 100%;
//     border-radius: 100%;
//     border: 2px solid rgba(30, 30, 30, 0.4);
//     opacity: .1;
//     -webkit-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
//     -moz-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
//     -ms-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
//     -o-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
//     animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
//     animation-iteration-count: 3;

//     -webkit-transition: all .5s;
//     -moz-transition: all .5s;
//     -o-transition: all .5s;
//     transition: all .5s;
// }

// .coccoc-alo-phone {
//     background-color: transparent;
//     width: 200px;
//     height: 200px;
//     cursor: pointer;
//     z-index: 200000 !important;
//     -webkit-backface-visibility: hidden;
//     -webkit-transform: translateZ(0);
//     -webkit-transition: visibility .5s;
//     -moz-transition: visibility .5s;
//     -o-transition: visibility .5s;
//     transition: visibility .5s;
//     right: 150px;
//     top: 30px;
// }

// .coccoc-alo-phone.coccoc-alo-green .coccoc-alo-ph-circle-fill {
//     background-color: rgba(44, 78, 114, 0.5);
//     opacity: .75 !important;
// }

// .coccoc-alo-ph-circle-fill {
//     width: 100px;
//     height: 100px;
//     top: 50px;
//     left: 50px;
//     position: absolute;
//     background-color: #000;
//     -webkit-border-radius: 100%;
//     -moz-border-radius: 100%;
//     border-radius: 100%;
//     border: 2px solid transparent;
//     opacity: .1;
//     -webkit-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
//     -moz-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
//     -ms-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
//     -o-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
//     animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
//     animation-iteration-count: 1;

//     -webkit-transition: all .5s;
//     -moz-transition: all .5s;
//     -o-transition: all .5s;
//     transition: all .5s;
// }

// .coccoc-alo-ph-img-circle {
//     width: 60px;
//     height: 60px;
//     top: 70px;
//     left: 70px;
//     position: absolute;
//     background: rgba(30, 30, 30, 0.1) url(@/public/img/only-dog.png) no-repeat center center;
//     background-size: cover;
//     -webkit-border-radius: 100%;
//     -moz-border-radius: 100%;
//     border-radius: 100%;
//     border: 2px solid transparent;
//     opacity: .7;
//     -webkit-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
//     -moz-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
//     -ms-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
//     -o-animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
//     animation: coccoc-alo-circle-img-anim 1s infinite ease-in-out;
//     animation-iteration-count: 3;
// }

// .coccoc-alo-phone.coccoc-alo-green .coccoc-alo-ph-img-circle {
//     background-color: white;
// }

// .coccoc-alo-phone.coccoc-alo-green .coccoc-alo-ph-circle {
//     border-color: white;
//     opacity: .5;
// }

// .coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-circle,
// .coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-circle {
//     border-color: #75eb50;
//     opacity: .5;
// }

// .coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-circle-fill,
// .coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-circle-fill {
//     background-color: rgba(117, 235, 80, 0.5);
//     opacity: .75 !important;
// }

// .coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-img-circle,
// .coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-img-circle {
//     background-color: #75eb50;

// }


// @-moz-keyframes coccoc-alo-circle-anim {
//     0% {
//         transform: rotate(0) scale(.5) skew(1deg);
//         opacity: .1
//     }
//     30% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .5
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .1
//     }
// }

// @-webkit-keyframes coccoc-alo-circle-anim {
//     0% {
//         transform: rotate(0) scale(.5) skew(1deg);
//         opacity: .1
//     }
//     30% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .5
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .1
//     }
// }

// @-o-keyframes coccoc-alo-circle-anim {
//     0% {
//         transform: rotate(0) scale(.5) skew(1deg);
//         opacity: .1
//     }
//     30% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .5
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .1
//     }
// }

// @keyframes coccoc-alo-circle-anim {
//     0% {
//         transform: rotate(0) scale(.5) skew(1deg);
//         opacity: .1
//     }
//     30% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .5
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .1
//     }
// }

// @-moz-keyframes coccoc-alo-circle-fill-anim {
//     0% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .2
//     }
//     100% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
// }

// @-webkit-keyframes coccoc-alo-circle-fill-anim {
//     0% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .2
//     }
//     100% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
// }

// @-o-keyframes coccoc-alo-circle-fill-anim {
//     0% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .2
//     }
//     100% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
// }

// @keyframes coccoc-alo-circle-fill-anim {
//     0% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg);
//         opacity: .2
//     }
//     100% {
//         transform: rotate(0) scale(.7) skew(1deg);
//         opacity: .2
//     }
// }

// @-moz-keyframes coccoc-alo-circle-img-anim {
//     0% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     10% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     20% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     30% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     40% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
// }

// @-webkit-keyframes coccoc-alo-circle-img-anim {
//     0% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     10% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     20% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     30% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     40% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
// }

// @-o-keyframes coccoc-alo-circle-img-anim {
//     0% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     10% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     20% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     30% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     40% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
// }

// @keyframes coccoc-alo-circle-img-anim {
//     0% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     10% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     20% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     30% {
//         transform: rotate(-25deg) scale(1) skew(1deg)
//     }
//     40% {
//         transform: rotate(25deg) scale(1) skew(1deg)
//     }
//     50% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
//     100% {
//         transform: rotate(0) scale(1) skew(1deg)
//     }
// }

    

</style> 


