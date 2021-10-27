

// export const Validate = (values)=>{
//     var checkname = /^[a-z][a-z\s]*$/;


//     if(values?.name?.length == 0 || values?.name == undefined){
//         return {message:"Enter name", status:"error", val : 'name'}
//     }else if(! checkname.test(values.name)){
//         return {message:"Enter Only Alpha and Space", status:"error", val : 'name'}
//     }

//     var  emailcheck =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if(values?.email?.length == 0 || values?.email == undefined){
//         return {message:"Enter Email", status:"error", val : 'email'}
//     }else if(! emailcheck.test(values.email)){
//         return {message:"Email is Not Valid", status:"error", val : 'email'}
//     }

//     if(values?.phoneno?.length == 0 || values?.phoneno === undefined){
//         return {message:"Enter Phone number", status:"error", val : 'phone'}
//     }else if( values?.phoneno?.length != 10){
//         return {message:"Phone number is greater than 10", status:"error", val : 'phone'}
//     }

//     if(values?.gender?.length == 0 || values?.gender === undefined){
//         return {message:"Enter Gender!", status:"error", val : 'gender'}
//     }
    
//     if(values?.password?.length == 0 || values?.password === undefined){
//         return {message:"Enter Password!", status:"error", val : 'gender'}
//     }
//     else{
//         return {message:"Success!", status:"success", val : 'success'}
//     }
// } 



export const Validate = (values)=>{

    if(values?.name === undefined || values?.email === undefined || values?.phoneno === undefined || values?.gender === undefined || values?.password === undefined){
        return {message:"Please Fill all the fields", status:"error", val : 'all'}
    }

}
export const Validatename = (values)=>{
    var checkname = /^[a-z][a-z\s]*$/;

    if(values == 0 || values == undefined){
        return {message:"Enter name", status:"error", val : 'name'}
    }else if(! checkname.test(values)){
        return {message:"Enter Only Alpha and Space", status:"error", val : 'name'}
    }else {
        return {message:"Sucess", status:"success", val : 'name'}
    }
} 

export const Validatemail = (values)=>{
    var  emailcheck =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(values?.length == 0 || values == undefined){
        return {message:"Enter Email", status:"error", val : 'email'}
    }else if(! emailcheck.test(values)){
        return {message:"Email is Not Valid", status:"error", val : 'email'}
    }
}

export const Validatephone = (values)=>{
    if(values?.length == 0 || values === undefined){
        return {message:"Enter Phone number", status:"error", val : 'phone'}
    }else if( values?.length != 10){
        return {message:"Phone number is greater than 10", status:"error", val : 'phone'}
    }
}

export const Validategender = (values)=>{
    if(values?.length == 0 || values === undefined){
        return {message:"Enter Gender!", status:"error", val : 'gender'}
    }
}
export const Validatepassword = (values)=>{
    if(values?.length == 0 || values === undefined){
        return {message:"Enter Password!", status:"error", val : 'gender'}
    }
}