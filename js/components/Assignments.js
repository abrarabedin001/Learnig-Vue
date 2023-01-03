import AssignmentList from "./AssignmentList.js";
export default {
    components:{ AssignmentList },
    template:
    `
    <section class="space-y-6 bg-gray-200" >
        <AssignmentList :assignments = "filter.incomplete" title="Incomplete"></AssignmentList>
        <AssignmentList :assignments = "filter.completed" title="Completed"></AssignmentList>
        <form @submit.prevent="add">
            <div>
                <input v-model="filler" class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l"> Submit</button>
            </div>
        </form>    

    </section>
    
       
        
    `,
    data(){
        return{
            filler:"hello there.",
            assignments:[
              {id:'1',name:'work 1',completed: false},  
              {id:'2',name:'work 2',completed: false},  
              {id:'3',name:'work 3',completed: false},  
              {id:'4',name:'work 4',completed: false},  
            ]
        }
    },   
    computed:{
        filter(){
            return{
                completed:  this.assignments.filter(a=>a.completed),
                incomplete:  this.assignments.filter(a=>!a.completed)
             }
            
        }
    
    },
    methods:{
        add(e){
            e.preventDefault();
            this.assignments.push({
                id: String(this.assignments.length+1),
                name:this.filler,
                completed:false
            })
            this.filler = "hello there."
            // alert('hi there');
        }
    }
    
}