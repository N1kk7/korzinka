<template>

    <section class="modal auth-modal">
        <div class="modal-wrapper" 
            >
            <!-- :style="{'flex-direction': loginWindow ? 'row-reverse' : 'row'}" -->

            <div class="form login">
                <h2
                    class="mb-2 text-2xl font-bold text-[var(--primary-color)]"
                >Вход в аккаунт</h2>
                <p
                    class="mb-5"
                >Войдите, чтобы продолжить. Если у вас ещё нет аккаунта, зарегистрируйтесь!</p>
                <form>
                    <label for="login-email">Email</label>
                    <input 
                        type="email" 
                        id="login-email" 
                        placeholder="Введіть вашу електронну пошту"
                        maxlength="40"
                        v-model="mail"
                        required 
                    />

                    <label for="login-password">Пароль</label>
                    <input 
                        type="password"
                        id="login-password" 
                        placeholder="Введіть ваш пароль"
                        required
                        v-model="password"
                        maxlength="30"
                    />

                    <div class="button-wrapper flex items-center justify-center gap-5">
                        <button 
                            class="forgot-password"
                        >
                            Забыли пароль?
                        </button>
                        <button 
                            @click="handleLogin"
                            type="button"
                        >
                            Войти
                        </button>
                        
                    </div>
                    
                    <p
                        class="text-center w-full text-[var(--primary-color)]"
                    >
                    Нет аккаунта? 
                        <button 
                            class="switch-tab cursor-pointer"
                            @click="loginWindow = true"
                        >
                            Создать
                        </button></p>
                </form>

            </div>
            <div class="form auth">
                <h2
                    class="mb-2 text-2xl font-bold text-[var(--primary-color)]"
                >
                    Создайте аккаунт
                </h2>
                <p
                    class="mb-5"
                >
                    Зарегистрируйтесь, чтобы получить доступ ко всем возможностям. Это быстро и просто!
                </p>
                <form class="flex flex-col gap-1">
                    <div class="name-wrapper flex justify-center items-center gap-5">
                        <div class="basis-1/2 flex-1">
                            <label for="register-name">Имя</label>
                            <input 
                                type="text" 
                                id="register-name" 
                                v-model="userName"
                                required 
                            />
                        </div>
                        
                        <div class="basis-1/2 flex-1">
                            <label for="register-surname">Отчество</label>
                            <input 
                                type="text" 
                                id="register-surname"
                                v-model="userSurname"
                            />
                        </div>
                       
                        <div class="basis-1/2 flex-1">
                            <label for="register-family">Фамилия</label>
                            <input 
                                type="text" 
                                id="register-family" 
                                v-model="userFamily"
                                required 
                            />
                        </div>
                    
                    </div>
                    

                    <label for="register-email">Email</label>
                    <input 
                        type="email" 
                        id="register-email" 
                        v-model="mail"
                        required 
                    />

                    <div class="pass-wrapper flex justify-center items-center gap-5">
                        <div class="w-full flex flex-col ">
                            <label for="register-password">Пароль</label>
                            <input 
                                type="password" 
                                id="register-password" 
                                v-model="password"
                                required 
                            />
                        </div>
                     

                        <div class="w-full flex flex-col">
                            <label for="register-password-confirm">Повторите пароль</label>
                            <input 
                                type="password" 
                                id="register-password-confirm" 
                                v-model="confirmedPass"
                                required 
                            />
                        </div>
                       
                    </div>

                    

                    <button
                        class="register-btn"
                        @click="handleRegister"  
                        type="button"              
                    >
                        Зарегистрироваться
                    </button>
                    
                    <p>Уже есть аккаунт? 
                        <button 
                            class="switch-tab"
                            @click="loginWindow = false"
                        >
                        Войти
                        </button>
                    </p>

                    <small>Регистрируясь, вы соглашаетесь с <span >условиями использования</span> и <span >политикой конфиденциальности</span>.</small>
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
    import { ref, onMounted, onUnmounted, defineEmits, watch } from "vue";
    import { useModalStore } from "#imports";

    const userName = ref("");
    const userSurname = ref("");
    const userFamily = ref("");
    const mail = ref("");
    const password = ref("");
    const confirmedPass = ref("");
    const loginWindow = ref(false);

    const modalStore = useModalStore();

    const emit = defineEmits();

    watch(loginWindow, () => {
        userName.value = "";
        userSurname.value = "";
        userFamily.value = "";
        mail.value = "";
        password.value = "";
        confirmedPass.value = "";
    })


    class Auth {

        constructor(mail, password, confirmedPass = null) {
            this.mail = mail;
            this.password = password;
            this.confirmedPass = confirmedPass;
        }

        static regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        static regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        validateEmail() {
            console.log(this.mail, 'mail');
            const validMail = Auth.regEmail.test(this.mail.trim());
            console.log(validMail, 'validEmail');
            if (!validMail) {
                emit('tooltip', {
                    status: 'error',    
                    message: 'Невірний формат електронної пошти'
                })
            }
            return validMail;
        }

        validatePassword() {
            const validPath = Auth.regPassword.test(this.password.trim());
            if (!validPath) {
                emit('tooltip', {
                    status: 'error',
                    message: 'Невірний формат паролю'
                })
            }
            return validPath;
        }

        validateConfirmedPassword() {
            return this.password === this.confirmedPass;
        }

        async fetchRequest(link, method, data = {}) {

            console.log(link, 'link', method, 'method', data , 'data');

            const formData = new FormData();

            formData.append('data', JSON.stringify(data));

            const response = await $fetch(`/api/${link}`, {
                method: method,
                body: formData
            })

            if (response.status === 200) {
                emit('tooltip', {
                    status: 'success',
                    message: response.message
                })

                setTimeout(() => {
                    loginWindow.value = false;
                }, 1500);
            }
            // console.log(response);
            // if (response.success) {
            //     // console.log('success');
            //     return response.data[0].filePath
            // } else {
            //     emit('tooltip', {
            //         status: 'error',
            //         message: 'Помилка при реестрації'
            //     })
            // }

            // console.log(formData, 'form data');
            // console.log(link, method, data);


        }

    }










    const handleLogin = () => {

        console.log(mail.value, password.value);

        const loginAuth = new Auth(mail.value, password.value);

        // if (!mail.value && !password.value) {
        //     emit('tooltip', {
        //         status: 'error',
        //         message: 'Заповніть всі поля'
        //     })
        //     return null;
        // }

        // if (!loginAuth.validateEmail()) return null;

        // if (!loginAuth.validatePassword()) return null;

        emit('tooltip', {
            status: 'success',
            message: 'Ви успішно увійшли'
        })
        


    }

    const handleRegister = () => {

        const registerAuth = new Auth(mail.value, password.value, confirmedPass.value);

        if (!userName.value && !mail.value && !password.value && !confirmedPass.value) {
            emit('tooltip', {
                status: 'error',
                message: 'Заповніть всі поля'
            })
            return null;
        }

        if (!registerAuth.validateEmail()) return;

        if (!registerAuth.validatePassword()) return;

        if (!registerAuth.validateConfirmedPassword()) {
            emit('tooltip', {
                status: 'error',
                message: 'Паролі не співпадають'
            })
            return ;
        }

        registerAuth.fetchRequest('auth', 'POST', {
            userName: userName.value,
            userSurname: userSurname.value,
            userFamily: userFamily.value,
            mail: mail.value,
            password: password.value,
        });


    }



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

    .auth-modal{
        color: var(--primary-color)
    }

    .modal-wrapper{
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        flex-direction: row;
        gap: 50px;
    }

    .form{
        flex: 1;
    }

    label{
        position: relative;
        bottom: 5px;
    }

    input{
        border: 1px solid var(--dark-color);
        border-radius: 8px;
        padding: 10px 15px;
        width: 100%;
        margin-bottom: 15px;
        color: black;
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

    .button-wrapper{
        margin: 50px 50px 30px;
        button{
            flex: 1;
            padding: 10px 15px;
            border: 1px solid var(--primary-color);
            border-radius: 8px;
            background: var(--primary-color);
            color: var(--bg-color);
            cursor: pointer;
        }
        .forgot-password{
            background: transparent;
            border-color: red;
            color: red;
        }
    }
    .register-btn{
        flex: 1;
        margin: 0 auto;
        max-width: 300px;
        padding: 10px 15px;
        border: 1px solid var(--primary-color);
        border-radius: 8px;
        background: var(--primary-color);
        color: var(--bg-color);
        cursor: pointer;
    }



</style>