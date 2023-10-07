<template>
    <div>
        <nav class="navbar">
            <router-link to="/" class="navbar-link">Домашняя</router-link>
            <router-link to="/chat" class="navbar-link">Чат</router-link>
            <router-link to="/homeapi" class="navbar-link">
                <div class="dropdown">
                    <a class="dropbtn">Подгрузка API данных</a>
                    <div class="dropdown-content">
                        <router-link to="/team">Team</router-link>
                        <router-link to="/players">Players</router-link>
                    </div>
                </div>
            </router-link>
        </nav>
    </div>
</template>


<script>

    export default {
        name: 'NavComp'
    }

</script>

<style>
/* Dropdown Button */
.dropbtn {
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    text-decoration: none;
    color: #385898;
    font-size: 17px;
    font-weight: 600;
    background: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {color: #7296de;}

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
    color: #7296de;
}


</style>