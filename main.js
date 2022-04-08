var app = new Vue(
    {
        el: '#root',
        data: {
            email: null,
            emailList: [],
        },
        methods: {
            listPush: function(){
                for ( let i = 0; i < 10; i++){
                    this.emailList.push(this.email)
                    console.log(emailList)
                }
            }
        },
        created(){
            let i = 0;
            const thisVue = this;
            console.log(this.emailList)
            for(i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function (res){
                        thisVue.email = res.data.response
                        thisVue.emailList.push(thisVue.email)
                    }
                        )               
            }
        }
    }
)