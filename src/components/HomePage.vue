<template>

    <div v-if="isAuth">
        <p>Добро пожаловать <b>{{ username }}</b> ! </p>
        <button @click="logout" class="btn">Выйти</button>
    </div>

    <div v-else>
        <label>Введите ваше имя!</label>
        <input v-model="username" @keyup.enter="login">
        <button @click="login" class="btn">Войти</button>
    </div>

</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                isAuth: false,
                username: ''
            }
        },
        created() {
            if(localStorage.getItem('isAuth')) {
                this.isAuth = true;
                this.username = localStorage.getItem('username')
            }
        },
        methods: {
            login() {
                if (this.username !== ""){
                    this.isAuth = true;

                    localStorage.setItem("isAuth", true)
                    localStorage.setItem("username", this.username)

                    this.$router.push({
                        name: 'chat',
                        query: {
                            username: this.username
                        }
                    })
                } else {
                    alert('Введите логин!')
                }
            },
            logout() {
                this.isAuth = false,
                this.username = '',
                localStorage.removeItem('isAuth')
                localStorage.removeItem('username')

            }
        }
    }
</script>

<style scoped>
    div {
        margin: 0 auto;
        padding: 30px;
        font-size: 22px;
        display: flex;
        flex-direction: column;
        width: 20%;  
    }
    input {
        margin-bottom: 20px;
        display: block;
        height: calc(2.25rem + 2px);
        padding: 0.375rem 0.75rem;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #bdbdbd;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    label {
        margin-bottom: 20px;
    }
    .btn {
        display: inline-block;	
        box-sizing: border-box;
        padding: 0 20px;
        outline: none;
        border: none;  
        border-radius: 6px;
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        font-weight: 600;
        text-decoration: none;
        color: #385898;
        background-color: #e7f3ff;
        cursor: pointer;
        user-select: none;
        appearance: none;
        touch-action: manipulation;
    }
    .btn:focus-visible {
	box-shadow: 0 0 0 2px #666;
}
    .btn:hover {
        background-color: #DBE7F2;
    }
    .btn:active {
        transform: scale(0.96);
    }
    .btn:disabled {
        pointer-events: none;
        opacity: 0.65;
    }
</style>