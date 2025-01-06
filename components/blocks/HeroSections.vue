<template>
    <section class="main">
        <div class="title-text">
            <h1 ref="titleRef">
                <strong>Якісні пакувальні</strong> <br>
                матеріали та пакети <br/>
                в одному магазині.
            </h1>
            <ul class="promo-block" ref="promoBlockRef">
                <li>
                    <SvgIcon name="hero-van" size="large" fill="var(--dark-color)"/>

                    <span>
                        Доставка
                    </span>
                </li>
                <li>

                    <SvgIcon name="hero-delivery" size="large" fill="var(--dark-color)"/>
                    
                    <span>
                        Кращі оптові ціни
                    </span>
                </li>
                <li>
                    <SvgIcon name="hero-checkbox" size="large" fill="var(--dark-color)"/>
                    <span>
                        <strong ref="number">
                            {{ counter }}
                        </strong>
                            років на ринку
                    </span>
                </li>
            </ul>
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


// Функция для случайного перемешивания массива (алгоритм Фишера-Йейтса)
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

// watch(galleryColumns, (newColumns) => {
//   const shuffledColumns = newColumns.map(column => {
//     const columnCopy = [...column];
//     shuffleArray(columnCopy);
//     return columnCopy;
//   });

//   console.log(shuffledColumns);
// });
watch(galleryColumns, (newColumns) => {
    shuffledColumns = newColumns.map(column => {
      const columnCopy = [...column];
      shuffleArray(columnCopy);
      return columnCopy;
    });

    console.log(shuffledColumns);
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

  // if (currentColumn && Array.isArray(currentColumn)) {
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
            justify-content: center;
            margin-top: 10vw;
            background-color: var(--light-color);
            padding-inline: 2rem;
            gap: 2rem;
            width: 50%;
            height: 100%;
            min-width: 50%;
            flex: 1;
            @media screen  and (max-width: 768px){
                justify-content: flex-start;
                margin-top: 20px;

                
            }
            @include mixins.titleText;
            h1{
                width: 100%;
                font-size: clamp(1.2em, 6vw, 2em);
                white-space: nowrap;
                font-weight: 600;
                
            }
            .promo-block {
                // display: flex;
                // align-items: center;
                // justify-content: space-around;
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
                        // font-size: 1.5rem;
                        font-size: clamp(0.6em, 3vw, 1.5em);
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
            .title-text, .mobile-gallery{
                flex: 1;
                height: 50vh;
            }
        }

        .mobile-gallery{
            height: 50vh;
            width: -webkit-fill-available;
            overflow: hidden;
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
                    // height: auto
                    height: 70px;
                    object-fit: cover;
                    
                }
            }
        }
    }


</style>


