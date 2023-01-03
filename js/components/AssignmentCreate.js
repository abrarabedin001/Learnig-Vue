export default{
    template:`
    <form @submit.prevent="add">
        <div>
            <input v-model="newAssignment" placeholder="ki obostha" class="p-2"/>
            <button type="submit" class="bg-white p-2 border-l"> Submit</button>
        </div>
    </form> 
    `,
    data(){
        return{
            newAssignment:""
        }

    }
    ,
    props:{
        assignments:Array
    }
    ,
    methods:{
        add(){
            this.$emit('add',this.newAssignment);
            this.newAssignment=""
        }
        }
    }
