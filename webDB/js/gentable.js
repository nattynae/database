var used = [];
var usedResgister = [];
var retval = [];
$(document).ready(function(){
  $("#button").click(function(){
    event.preventDefault();
    $.post("http://localhost:8080/student/searchbyid",{IDNo: $("#IDNo").val() }, function(data, status){
      var message = "Submitted!";
      if(data.length<1) {
        alert("404: Found Nothing");
        return;
      }
      if(used.indexOf(data[0].IDNo)>-1) {alert("Data already in table");return;}
      alert(message);
      var rowCount = $('#table tr').length;
        $("#table").append(`<tr><td id="IDNo${rowCount}"></td>`
                               +`<td id="Fname${rowCount}"></td>`
                               +`<td id="Lname${rowCount}"></td>`
                               +`<td id="Sex${rowCount}"></td>`
                               +`<td id="BirthDate${rowCount}"></td>`
                               +`<td id="Address${rowCount}"></td>`
                               +`<td id="PhoneNo${rowCount}"></td></tr>`);
        $("#IDNo"+rowCount).html(data[0].IDNo);
        $("#Fname"+rowCount).html(data[0].Fname);
        $("#Lname"+rowCount).html(data[0].Lname);
        $("#Sex"+rowCount).html(data[0].Sex);
        $("#BirthDate"+rowCount).html(data[0].BirthDate);
        $("#Address"+rowCount).html(data[0].Address);
        $("#PhoneNo"+rowCount).html(data[0].PhoneNo);
        used.push(data[0].IDNo);
    });
  });

  $("#withdrawnBtn").click(function(){
    event.preventDefault();
    $.post("http://localhost:8080/student/remove",{courseID: $("#courseID").val() }, function(data, status){
      var message = "Withdrawn!";
      if(data.length<1) {
        alert("404: Found Nothing");
        return;
      }
      // if(retval.indexOf($("#courseID").val().toLowerCase() >-1)) {alert("Course is already withdrawn.");return;}
      alert(message);
      withdrawnOperation();
        for(var i=0;i<retval.length;i++){
        $("#W"+retval[i]).html("W");
        }
  });
});


  $("#courseID").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

});



function genTableRegister() {
  var courseNoValue = document.getElementById("validationCourse").value;
  var sectionValue = document.getElementById("validationSection").value;
    if(usedResgister.indexOf(courseNoValue)>-1) {alert("Course already register");return;}
    alert("Course No :"+courseNoValue+"  Section :"+sectionValue+" is added");
    var rowCount = $('#tableRegister tr').length;
      $("#tableRegister").append(`<tr><td id="No${rowCount}"></td>`
                             +`<td id="CourseID${rowCount}"></td>`
                             +`<td id="CourseName${rowCount}"></td>`
                             +`<td id="Section${rowCount}"></td>`
                             +`<td id="Credit${rowCount}"></td>`
                             +`<td id="W${rowCount}"></td></tr>`);
                  $("#No"+rowCount).html(usedResgister.length+1);
                  $("#CourseID"+rowCount).html(courseNoValue);
                  $("#CourseName"+rowCount).html("Intro to Database");
                  $("#Section"+rowCount).html(sectionValue);
                  $("#Credit"+rowCount).html(3);
                  $("#W"+rowCount).html("-");
        $("#tableWithdrawn").append(`<tr><td id="No1${rowCount}"></td>`
                              +`<td id="CourseID1${rowCount}"></td>`
                              +`<td id="CourseName1${rowCount}"></td>`
                              +`<td id="Section1${rowCount}"></td>`
                              +`<td id="Credit1${rowCount}"></td></tr>`);
                  $("#No1"+rowCount).html(usedResgister.length+1);
                  $("#CourseID1"+rowCount).html(courseNoValue);
                  $("#CourseName1"+rowCount).html("Intro to Database");
                  $("#Section1"+rowCount).html(sectionValue);
                  $("#Credit1"+rowCount).html(3);
        usedResgister.push(courseNoValue);
  }

function withdrawnOperation() {
          var value = $("#courseID").val().toLowerCase();

          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            if($(this).text().toLowerCase().indexOf(value) > -1){
              if(retval.indexOf($(this).text()[0])>-1) {alert("Course : No."+$(this).text()[0]+" is already Withdrawn");return;}
                retval.push($(this).text()[0]);
                $(this).remove();
            }
          });
        return retval;
}
