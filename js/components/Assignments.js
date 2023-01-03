import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components:{ AssignmentList , AssignmentCreate},
    template:
    `
    <section class="space-y-6 bg-gray-200" >
        <AssignmentList :assignments = "filter.incomplete" title="Incomplete"></AssignmentList>
        <AssignmentList :assignments = "filter.completed" title="Completed"></AssignmentList>
        <AssignmentCreate :assignments = "assignments" @add="add"></AssignmentCreate>

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
        add(name){
            // e.preventDefault();
            this.assignments.push({
                id: String(this.assignments.length+1),
                name:name,
                completed:false
            })
            this.newAssignment = "hello there."
            // alert('hi there');
        }
    }
    
}