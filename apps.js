//View button
function listAll(){
    for (i=0; i<employeeList.length; i++){
    $('.col-sm-9').append(`<div>${employeeList[i].name}</div>`);
    $('.col-sm-9').append(`<div>${employeeList[i].officeNum}</div>`);
    $('.col-sm-9').append(`<div>${employeeList[i].phoneNum}</div><br/><br/>`);
}
}

//lists all employee elements/objects
$('.view').on('click', listAll);

//Adds a new emplyee and associated elements
$('.add').on('click', function(){
   //event.preventDefault();
    const name = $('.name').val();
    const officeNum = $('.officenum').val();
    const phoneNum = $('.phone').val();
        if (name === '' || officeNum === '' || phoneNum === '') {
            alert('A field is missing input!');
                return;
    }
         else{
            let newEmployee = {
                    name:name,
                    officeNum:officeNum,
                    phoneNum:phoneNum
    }
    employeeList.push(newEmployee);
    listAll();
    }
});

//Updates list with new employee information
$('.update').on('click', function() {
    const officeNum = $('.officenum').val();
    const phoneNum = $('.phone').val();
    const nm = $('.name').val();
    for (i = 0; i < employeeList.length; i++){
        if (employeeList[i][name] === nm){
            employeeList[i] = {
                name:name,
                officeNum:officeNum,
                phoneNum:phoneNum
            }
        }   
    }
    listAll();
} );

//Removes employee information
$('.delete').on('click', function(){
    //rmv.preventDefault();
     const name = $('.name').val();
     //const officeNum = $('.officenum').val();
     //const phoneNum = $('.phone').val();
        for(i = 0; i < employeeList.length; i++){
            if(name === employeeList[i].name){
               delete employeeList[i].name;
               delete employeeList[i].officeNum;
               delete employeeList[i].phoneNum;
                /*employeeList[i] = {
                    name:name = '',
                    officeNum:officeNum = '',
                    phoneNum:phoneNum = ''
     }*/
    
    }
}
listAll();
 });

 $('.verify').on('click', function(){
     const name = $('.name').val();
        if (employeeList.includes(name)){
            $('.col-sm-9').append('yes');
        }
        else{
            $('.col-sm-9').append('no');
        } 
 });

 $('#srchicon').on('click', function(){
    const name = $('.name').val();
    for (i = 0; i < employeeList.length; i++) {
    if(employeeList[i].name.includes(name)){
    $('.col-sm-9').append(`<div>${employeeList[i].name}</div>`);
    $('.col-sm-9').append(`<div>${employeeList[i].officeNum}</div>`);
    $('.col-sm-9').append(`<div>${employeeList[i].phoneNum}</div><br/><br/>`)
    }

    }
 });