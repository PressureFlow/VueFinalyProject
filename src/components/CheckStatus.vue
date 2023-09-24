<template>
    <div class="CheckStatus">
        <p v-if="status === 'succues'">Проверка прошла успешно</p>
        <p v-else-if="status === 'error'">К сожалению проверка не пройдена</p>
        <p v-else>Loading...</p>
        <p v-if="status != 'succues' && status != 'error'">Измнените статус !!!</p>
    </div>
    
</template>

<script>
    export default {
        name: "CheckStatus",
        data: function() {
        return {
          status: 'loading'
        }
        },
    }
</script>