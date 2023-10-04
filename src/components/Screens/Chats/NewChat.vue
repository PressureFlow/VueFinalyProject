<template>
    <div v-if="username"  class="chat">
        <div>
            <h2>Чат</h2>

            <div class="text" v-for="message in messages" :key="message.id">
                {{ message.user }}: {{ message.text }}
            </div>

            <div v-show="emptyMsg" class="empty">Текущих сообщений нет</div>
        </div>

        <input v-model="newMessage" placeholder="Введите ваше сообщение">

        <button @click="sendMessage" @keyup.enter="sendMessage" class="btn">Отправить</button>
        <button v-show="deleteBtn" @click="delMessage" class="btn">Удалить</button>
        
    </div>

    <div v-else class="alert">
        Для авторизации перейдите по <router-link :to="{name: 'home'}">ссылке</router-link>
    </div>
    <router-view></router-view>
</template>


<script>

    export default {
    name: 'ChatPage',
    data() {
        return {
            messages: [],
            newMessage: '',
            emptyMsg: true,
            deleteBtn: false,
            username: localStorage.getItem('username')
        };
    },
    computed() {
        localStorage.setItem('username', this.$route.query.username);
    },
    methods: {
        sendMessage() {
            if (!this.username) {
                this.username = 'Аноним';
            }
            if (this.newMessage !== '') {
                this.emptyMsg = false;
                this.messages.push({ id: new Date().getTime(), text: this.newMessage, user: this.username });
                console.log(this.messages);
                this.newMessage = '';
                this.deleteBtn = true;
            }
            else {
                alert('Пожалуйста, введите сообщение!');
            }
        },
        delMessage() {
            this.messages = [];
            alert('Все сообщения были удалены!');
            this.emptyMsg = true;
        }
    },
    
}
</script>

<style>
    .chat {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;
    }

    input {
        margin: 20px 0px;
        display: block;
        height: calc(4rem + 2px);
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
        margin: 10px auto;
        width: 50%;
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