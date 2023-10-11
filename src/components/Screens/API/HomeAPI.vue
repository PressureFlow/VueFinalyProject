<template>
    <div class="api-home-page-container">
        <div class="ahpc-box">
            <h1 class="ahpc-title">Basketball API</h1> 
            <div class="ahpc-list">
                <ul>
                    <router-link to="/team">Team</router-link>
                    <router-link to="/players">Players</router-link>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'HomeAPI',

}
</script>

<style>
    .ahpc-box {
        display: flex;
        flex-direction: column;
        height: 50%;
        width: 20rem;
        border: 1px solid rgb(255, 255, 255);
        padding: 20px;
        color: aliceblue;
    }

    .ahpc-list ul {
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .ahpc-list a {
        color: rgba(255, 74, 74, 0.729);

    }
    


    .api-home-page-container {
        padding: 5rem 10rem 20px 20px;
        display: flex;
        justify-content: right;
        height: 100%;
        background-image: url(https://blog.nasm.org/hubfs/Training%20Basketball%20Players-1.jpg); background-attachment: fixed; background-position: top center; background-repeat: no-repeat; background-size: cover ;
        
    }

</style>