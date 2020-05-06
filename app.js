Vue.component('check')


const app = new Vue({
    el:'#app',
    methods:{ 
    },
    data:{
        
        addList:'',
        category:'',
        checks:[
            {categoryGroup:'Bakery',
            text:'bread', done:false},
            {category: 'Fruits',
            text:'apple', done: false},
            {category:'Dairy',
            text:'chease', done: false}

        ]
    }
}) 

