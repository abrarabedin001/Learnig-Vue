export default{
    template:
       `
        <button class='bg-gray-200 hover:bg-gray-400 rounded px-5 py-5'>
           <slot/>
            </button>
       `
    
    ,
    mounted(){
        // alert('hello');
    }
}