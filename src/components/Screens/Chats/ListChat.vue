<template>
  <div class="chat-list">
    <h1>Список чатов</h1>
    <ul>
      <li v-for="(chat, index) in chats" :key="index">
        <router-link :to="`/chat/list/${chat.id}`">{{ chat.name }}</router-link>     
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { id: 1, name: 'Чат 1' },
        { id: 2, name: 'Чат 2' },
        { id: 3, name: 'Чат 3' }
      ]
    };
  }
};
</script>

<style>

.chat-list {
  display: flex;
  flex-direction: column;
  float: right;
  margin-right: 40px;
  text-align: center;
}

.chat-list ul, a {
  text-decoration: none;
  list-style: none;
  color: #385898;
  font-size: 17px;
  font-weight: 600;
}

.chat-list a:hover {
  color: #385898;
}


</style>