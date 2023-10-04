<template>
    <div>
        <nav class="navbar">
            <router-link to="/" class="navbar-link">Домашняя</router-link>
            <router-link to="/chat" class="navbar-link">Чат</router-link>
            <router-link to="/test" class="navbar-link">Подрузка API данных</router-link>
        </nav>
    </div>
</template>


<script>

    export default {
        name: 'NavComp'
    }

</script>

<style>

.navbar  {
    background-color: #e7f3ff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    width: 100%;
    margin-bottom: 20px;
}

.navbar-link {
    text-decoration: none;
    color: #385898;
    font-size: 17px;
    font-weight: 600;
}
.navbar-link:hover {
    border-bottom: 1px solid #385898;
}


</style>