<template>
    <div class="API-container">
            <div v-if="isLoad" class="loading">Loading...</div>

            <div v-else class="data">
                <div class="title">Players</div>
                <div v-for="( el ) in playersData" :key="el.id">{{ el.id }} {{ el.first_name }} {{ el.last_name }} 
                    <img src="https://cdn-icons-png.flaticon.com/512/542/542724.png" style="width: 15px; height: 15px" @click="removeTeam(el.id)" >
                </div>            
            </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                playersData: [],
                isLoad: true
            }
        },
        mounted() {
            const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '41b720a6f3msheddb55513a5eff4p1ed684jsn2c5955b3b8a0',
                    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
                }
            };
            fetch(url, options)
                .then((res) => res.json())
                .then((res) => {
                    this.playersData = res.data;
                    this.isLoad = false;
                });
        },
        methods: {
            removeTeam(id) {
                this.teamData = this.teamData.filter((el) => el.id !== id)
            }
        }
    }

</script>

<style>
.title {
    font-size: 24px;
    font-weight: 600;
}



.API-container div {
    line-height: 30px;
}
</style>