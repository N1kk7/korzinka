<template>
    <section class="main">
        <div class="title-text">
            <div class="text-wrapper">
                <h1 ref="titleRef">
                <strong>{{ $t('index-page.hero.title-strong') }}</strong>
                <br>
                {{ $t('index-page.hero.title') }}
            </h1>
            <ul class="promo-block" ref="promoBlockRef">
                <li>
                    <SvgIcon name="hero-van" size="large" fill="var(--dark-color)"/>

                    <span>
                        {{ $t('index-page.hero.content1') }}
                    </span>
                </li>
                <li>

                    <SvgIcon name="hero-delivery" size="large" fill="var(--dark-color)"/>
                    
                    <span>
                        {{ $t('index-page.hero.content2') }}

                    </span>
                </li>
                <li>
                    <SvgIcon name="hero-checkbox" size="large" fill="var(--dark-color)"/>
                    <span>
                        <strong ref="number">
                            {{ counter }}
                        </strong>
                        {{ $t('index-page.hero.content3') }}

                    </span>
                </li>
            </ul>
            </div>
          
        </div>

        <div class="gallery">
            <div class="wrapper">
                <div
                    v-for="(images, index) in galleryColumns"
                    :key="index"
                    class="col"
                    :class="{ even: index % 2 === 1, odd: index % 2 === 0 }"
                    >
                    <div
                        v-for="(image, imgIndex) in images"
                        :key="imgIndex"
                        class="col-wrapper"
                    >
                        <img :src="image" alt="img" />
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile-gallery">
            <div class="wrapper">
                <div
                    v-for="(images, index) in galleryColumns"
                    :key="index"
                    class="col"
                    :class="{ even: index % 2 === 1, odd: index % 2 === 0 }"
                    >
                    <div
                        v-for="(image, imgIndex) in images"
                        :key="imgIndex"
                        class="col-wrapper"
                    >
                        <img :src="image" alt="img" />
                    </div>
                </div>
            </div>
        </div>



    </section>

    
</template>

<script setup>



    import { onMounted, nextTick, ref, watch } from "vue";
import gsap from "gsap";

    import img1 from '~/public/img/hero-img/1.png';
    import img2 from '~/public/img/hero-img/2.png';
    import img3 from '~/public/img/hero-img/3.png';
    import img4 from '~/public/img/hero-img/4.png';
    import img5 from '~/public/img/hero-img/5.png';
    import img6 from '~/public/img/hero-img/6.png';
    import img7 from '~/public/img/hero-img/7.png';
    import img8 from '~/public/img/hero-img/8.png';
    import img9 from '~/public/img/hero-img/9.png';
    import img10 from '~/public/img/hero-img/10.png';

    import SvgIcon from "../shared/SvgIcon.vue";



    const images1 = [
        img1,
        img2,
        img3,
        img4,
        img5,
       
    ];
    const images2 = [
        img6,
        img7,
        img8,
        img9,
        img10,

    ]

    const titleRef = ref(null);
    const promoBlockRef = ref(null);
    const number = ref(null);

    let counter = ref(0);

    let shuffledColumns = [];

const galleryColumns = ref([images1, images2, images1, images2, images1, images2]);


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

onMounted(() => {
  const cols = document.querySelectorAll(".col");
  const items = promoBlockRef.value.querySelectorAll('li'); 
  const strongEl = promoBlockRef.value.querySelector('strong');


watch(galleryColumns, (newColumns) => {
    shuffledColumns = newColumns.map(column => {
      const columnCopy = [...column];
      shuffleArray(columnCopy);
      return columnCopy;
    });

  });

  cols.forEach((col, index) => {
    const direction = index % 2 === 0 ? -1 : 1; 

    gsap.to(col, {
      yPercent: 20 * direction, 
      duration: 10,
      repeat: -1,
      ease: "linear",
   
    onRepeat: () => {

  const currentColumn = shuffledColumns[index];

    if (currentColumn && currentColumn.length > 0) {

    if (direction === 1) {

      shuffledColumns[index] = [
        currentColumn[currentColumn.length - 1],
        ...currentColumn.slice(0, currentColumn.length - 1)
      ];
    } else {
      shuffledColumns[index] = [
        ...currentColumn.slice(1),
        currentColumn[0]
      ];
    }

    galleryColumns.value[index] = shuffledColumns[index];
  } else {
    // console.error(`Ошибка: currentColumn на индексе ${index} не найден или не является массивом.`);
  }
}

    });
  });




  gsap.fromTo(
    titleRef.value,
    { y: 50, opacity: 0 }, 
    {
      y: 0, 
      opacity: 1,
      duration: 1, 
      ease: 'power2.out',
    }
  );


  gsap.fromTo(
    items,
    { x: -200, opacity: 0 },
    {
      x: 0, 
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.3, 
      delay: 1.2, 
    }
  );


const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {  
          gsap.to(counter, {
            value: 20,
            duration: 1.5,
            ease: 'power1.out',
            onUpdate: () => {

      counter.value = Math.floor(counter.value); 

            }
          });
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.5 }
  );

 
  if (number.value) {
    observer.observe(number.value);
  }



});



</script>

<style lang="scss"> 

    @use './/styles/mixins.scss' as mixins;

    :root {
    --clip-path-angle: 20%; 
}
@media (max-width: 768px) {
    :root {
        --clip-path-angle: 30%; 
    }
}

.dark .main{
    background: var(--dark-component-color);
    border-bottom: 1px solid var(--dark-border-color);

    .title-text{
        background: var(--dark-component-color);
        h1{
            color: var(--dark-font-color);
        }
        svg{
            fill: var(--dark-font-color);
       
        }
        .promo-block li span{
            color: var(--dark-font-color);

        }
        @media screen and (max-width: 1024px) {
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, rgb(0, 0, 0) 100%);
            
        }
        

    }
    .gallery .wrapper{
        background: var(--main-accent);
        padding: 5px;
        .col-wrapper{
            background: rgb(12 22 31);
            // border: 1px solid var(--main-accent);
        }

    }
    .mobile-gallery .wrapper{
        background: var(--main-accent);
        padding: 5px;
        .col-wrapper{
            background: rgb(12 22 31);
            // border: 1px solid var(--main-accent);
        }
    }
}



    .main{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--light-color);
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        .title-text{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--light-color);
            padding-inline: 2rem;
            gap: 2rem;
            width: 50%;
            height: 100%;
            min-width: 50%;
            flex: 1;
            .text-wrapper{
                margin-bottom: 10vw;

            }
            @media screen and (max-width: 1024px) {
                margin-top: unset;
                justify-content: flex-end;
                padding-bottom: 25px;
                z-index: 10;
                background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0, 0.5) 50%, rgba(0,0,0,1) 100%);
                svg{
                    fill: var(--light-color);
                    width: clamp(20px, 10vw, 50px);
                    height: clamp(20px, 10vw, 50px);
                }
                &{
                    padding-inline: 5vw;
                }
                .text-wrapper{
                    margin-bottom: 2vw;
                }
            }
        
            h1{
                width: 100%;
                white-space: nowrap;
                font-weight: 600;
                @include mixins.titleText(10vw, center, 700);
                font-size: clamp(1.2em, 6vw, 2em);
                white-space: normal;
                text-align: start;

                @media screen and (max-width: 1024px) {
                    font-size: clamp(1.2em, 6vw, 1.9em);
                    line-height: normal;
                    margin-bottom: 5px;
                    position: relative;
                    color: var(--bg-color) !important
                }


                
            }
            .promo-block {
           
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 15px;
                li{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    span{
                        font-size: clamp(0.6em, 3vw, 1.5em);
                        color: var(--dark-color);
                        @media screen and (max-width: 1024px) {
                            color: white;
                            font-size: clamp(0.6rem, 1.7vw, 1.5rem);
                            font-weight: 700;
                            white-space: nowrap;
                        }
                    }
                }
                @media screen and (max-width: 768px) {
                    &{
                        display: flex;
                        justify-content: flex-start;
                        flex-wrap: nowrap;
                        gap: 5vw;
                    }
                    li{
                        display: flex;
                        flex-direction: column;
                        align-items: baseline;
                        position: relative;

                    }
                
                }
            }
            @media screen and (max-width: 1024px) {
                width: 100%;
                height: auto;
            }
        }
        .gallery{
            position: relative;
            width: -webkit-fill-available;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            
            .wrapper{

                position: relative;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                transform: rotate(-8deg);
                height: -webkit-fill-available;
                min-height: 200%;
                top: -10%;
                width: -moz-max-content;
                width: max-content;
                border-collapse: collapse;
                gap: 5px;
                background-color: var(--secondary-color);
                padding: 2rem;
                .col-wrapper{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--dark-color);

                }
                .col{
                    display: grid;
                    gap: 5px; 

                    align-items: center;
                    position: relative;

                }
                
                img{
                    width: clamp(110px, 65%, 200px);
                    // height: auto
                    height: 220px;
                    object-fit: cover;
                    
                }
            }

            @media screen and (max-width: 1024px) {
                display: none;
            }
        }
        @media screen and (max-width: 1024px) {
            flex-direction: column-reverse;
            height: 50vh;
            .title-text, .mobile-gallery{
                flex: 1;
                height: 50vh;
            }
        }

        .mobile-gallery{
            height: 50vh;
            width: -webkit-fill-available;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            display: none;
            @media screen and (max-width: 1024px) {
                display: block;
            }

            .wrapper{
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                transform: rotate(-8deg);
                height: -webkit-fill-available;
                min-height: 200%;
                top: -50%;

                width: 165%;
                left: -20%;
                gap: 5px;

                position: relative;

                margin: 0 auto;
                background-color: var(--secondary-color);
                padding: 2rem;
                .col-wrapper{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--dark-color);
                    gap: 5px;
                    

                }
                .col{
                    display: grid;
                    gap: 5px;

                    align-items: center;
                    position: relative;

                    animation: animate 3s linear infinite;

                }
                
                img{
                    width: clamp(80px, 40%, 150px);
                    height: 70px;
                    object-fit: cover;
                    
                }
            }
        }
    }


</style>


