//for insert code starts here
function AddStudentDetails(){
    var name = $("#name").val();
    var email = $("#email").val();
    var dept = $("#dept").val();
    
    $.ajax({
        url:"insert.php",
        method:"post",
        data:{
         StName:name,
          StEmail:email,
          StDept:dept  
        } ,
        success:function(data){
            console.log("success");
        }   
    });

}

//for insert code ends here