import AssignmentList from "./AssignmentList.js";
export default {
    components:{ AssignmentList },
    template:
    `
    <section class="space-y-6" >
        <AssignmentList :assignments = "filter.incomplete" title="Incomplete"></AssignmentList>
        <AssignmentList :assignments = "filter.completed" title="Completed"></AssignmentList>
    </section>
    
       
        
    `,
    data(){
        return{
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
    
    }
    
}