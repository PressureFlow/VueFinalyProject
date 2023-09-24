<template>
    <main>
        <section>
            <button @click="counter += 1">+1</button>
            <button @click="counter -= 1">-1</button>
            <p>{{ counter }}</p>
        </section>

        <section>
            <button @click="showPopup">Показать counter</button>
            <div v-if="showCounterPopup" class="popup">
                <p>Значение counter: {{ counter }}</p>
                <button @click="closePopup">Закрыть</button>
            </div>
            
        </section>
    </main>
</template>

<script>

export default {
    name: 'ButtonCounter', 
    data: function() {
        return {
            counter: 0,
            showCounterPopup: false
        }
    },
    methods: {
        showPopup() {
            this.showCounterPopup = true;
        },
        closePopup() {
            this.showCounterPopup = false;
        }
    }
    
    
}

</script>