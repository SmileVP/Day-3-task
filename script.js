//Question 1:

var arr={
    "name":"Vishnupriya",
    "age":"24"
};
for(var key in arr){
    console.log(key,arr[key]);
}


var res=[{"name":"Balaji","age":"21"},{"name":"LathaSampath","age":"22"}];
for(let i=0;i<res.length;i++){
    console.log(res[i].name+" "+res[i].age);
}