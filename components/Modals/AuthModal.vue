<template>

    <section class="modal auth-modal">
        <div class="modal-wrapper" 
            >
            <!-- :style="{'flex-direction': loginWindow ? 'row-reverse' : 'row'}" -->

            <div class="form login">
                <h2>Вход в аккаунт</h2>
                <p>Войдите, чтобы продолжить. Если у вас ещё нет аккаунта, зарегистрируйтесь!</p>
                <form>
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" required />

                    <label for="login-password">Пароль</label>
                    <input type="password" id="login-password" required />

                    <button type="submit">Войти</button>
                    <a href="#" class="forgot-password">Забыли пароль?</a>
                    <p>Нет аккаунта? 
                        <button 
                            class="switch-tab"
                            @click="loginWindow = true"
                        >
                            Создать
                        </button></p>
                </form>

            </div>
            <div class="form auth">
                <h2>Создайте аккаунт</h2>
                <p>Зарегистрируйтесь, чтобы получить доступ ко всем возможностям. Это быстро и просто!</p>
                <form class="flex flex-col gap-2">
                    <label for="register-name">Имя</label>
                    <input type="text" id="register-name" required />

                    <label for="register-email">Email</label>
                    <input type="email" id="register-email" required />

                    <label for="register-password">Пароль</label>
                    <input type="password" id="register-password" required />

                    <label for="register-password-confirm">Повторите пароль</label>
                    <input type="password" id="register-password-confirm" required />

                    <button>Зарегистрироваться</button>
                    <p>Уже есть аккаунт? 
                        <button 
                            class="switch-tab"
                            @click="loginWindow = false"
                        >
                        Войти
                        </button>
                    </p>

                    <small>Регистрируясь, вы соглашаетесь с <a href="#">условиями использования</a> и <a href="#">политикой конфиденциальности</a>.</small>
                </form>

            </div>
            <div class="background" :style="{'left': loginWindow ? '0' : '50%' }">

                <img src="/public/img/only-dog.png" alt="logo">
                <h2>Добро пожаловать в интернет-магазин korzinka.in.ua</h2>

            </div>
      </div>


    </section>


</template>


<script setup>
    import SvgIcon from "../shared/SvgIcon.vue";
    import { ref, onMounted, onUnmounted } from "vue";
    import { useModalStore } from "#imports";

    const mail = ref("");
    const password = ref("");
    const confirmedPass = ref("");
    const loginWindow = ref(false);

    const modalStore = useModalStore();



    const handleInvalid = (e) => {
        e.preventDefault();
    }


    onMounted(() => {
        document.addEventListener("invalid", handleInvalid, true);
    })

    onUnmounted(() => {
        document.removeEventListener("invalid", handleInvalid, true);
    })



</script>


<style lang="scss" scoped>

    .modal-wrapper{

        justify-content: space-between;
        overflow: hidden;
        position: relative;
        gap: 50px;
    }

    .form{
        flex: 1;
    }

    input{
        border: 1px solid var(--dark-color);
        border-radius: 8px;
        padding: 10px 15px;
        width: 100%;
    }

    .background{
        position: absolute;
        width: 50%;
        height: 100%;

        background-color: var(--primary-color);
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        color: var(--bg-color);
        transition: all ease 0.3s;
        padding: 20px;
        z-index: 20;

        img{
            background: var(--bg-color);
            border: 2px solid var(--main-accent);
            border-radius: 50%;
            padding: 5px;
            width: 100px;
            height: 100px;
        }
        h2{
            width: 70%;
            text-align: center;
        }
    }



</style>