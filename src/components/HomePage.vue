<template>

    

    <div v-if="!isLoggedIn">
        <template v-if="showLogin">
            <login-form @loggedIn="isLoggedIn = true"/>
            <p>No account yet? <span @click="showLogin=false">SignUp</span> instead.</p>
        </template>

        <template v-else>
            <signup-form @loggedIn="isLoggedIn = true"/>
            <p>Already registered? <span @click="showLogin=true" >Login</span> instead.</p>
        </template>
    </div>

    <div v-else>
            <h1>Welcome {{ displayName }}</h1>
            <button @click="logOut" class="btn btn-logout">Log out</button>

            <router-link :to="{ name: 'chat'}">Go to chat</router-link>
        </div>  

</template>

<script>
    import LoginForm from './RegForm/LoginForm.vue'
    import SignupForm from './RegForm/SignupForm.vue'
    import { auth } from './RegForm/firebase'
    import { signOut } from 'firebase/auth'


    

    export default {
        name: 'HomePage',
        components: { SignupForm, LoginForm },
        
        data() {
            return {
                isLoggedIn: false,
                showLogin: true,
                displayName: '',
                
                
            }
            
        },
        computed: {
             
        },
        
        beforeUpdate() {
            if (auth.currentUser) {
                this.displayName = auth.currentUser.displayName
                localStorage.getItem('isLoggedIn') === 'true'
            }
            

        },
        methods: {
            logOut() {
                signOut(auth)
                    .then(() => {
                        this.isLoggedIn = false
                        
                    })
                    
            }
            
            
            
            
        },
        
    
};
    
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px;
        font-size: 22px;
       
    }
    span {
        color: #0055ff;
    }
    span:hover {
        color: #5d93ff;
        border-bottom: 1px solid #0055ff;
        cursor: pointer;
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

    .btn-logout{
        margin-bottom: 20px;
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