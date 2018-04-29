var used = [];
var usedResgister = [];
var usedWithdrawn = [];
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
      // function Check used
      if(usedWithdrawn.indexOf($("#WidthdrawnCourseID").val())>-1) {alert("Data already withdrawn");return;}
      alert("Withdrawn course : " + $("#WidthdrawnCourseID").val());
      withdrawnOperation();
        for(var i=0;i<retval.length;i++){
        $("#Grade"+retval[i]).html("W");
        }
        usedWithdrawn.push($("#WidthdrawnCourseID").val());
  // });
});

  $("#WidthdrawnCourseID").on("keyup", function() {
    filterTable("WidthdrawnCourseID","myTable",1);});

  $("#studentIDAssignGrade").on("keyup",function() {filterTable("studentIDAssignGrade","assignGradeTable",1)});
  $("#eduOfStuID").on("keyup",function() {filterTable("eduOfStuID","educationStudentTable",1)});

  genTableEduHeader();
  genTableEduContent();
  genEducationTeacherTable();
  genTranscriptTable("completedTable");
  genTranscriptTable("progressTable");
}); //End document ready



function genTableRegister() {
    event.preventDefault();
    $.post("http://localhost:8080/student/searchbycourseid",{CourseID: $("#validationCourse").val() }, function(data, status){
      console.log($("#validationCourse").val());
      if(data.length<1) {
        alert("404: Found Nothing");
        return;
      }
  var courseNoValue = data[0].CourseID;
  var sectionValue = data[0].Section;
    if(usedResgister.indexOf(courseNoValue)>-1) {alert("Course already register");return;}
    alert("Course No :"+courseNoValue+"  Section :"+sectionValue+" is added");
    var rowCount = $('#tableRegister tr').length;
      $("#tableRegister").append(`<tr><td id="No${rowCount}"></td>`
                             +`<td id="CourseID${rowCount}"></td>`
                             +`<td id="CourseName${rowCount}"></td>`
                             +`<td id="Section${rowCount}"></td>`
                             +`<td id="Credit${rowCount}"></td>`
                             +`<td id="Grade${rowCount}"></td></tr>`);
                  $("#No"+rowCount).html(usedResgister.length+1);
                  $("#CourseID"+rowCount).html(courseNoValue);
                  $("#CourseName"+rowCount).html(data[0].CourseName);
                  $("#Section"+rowCount).html(sectionValue);
                  $("#Credit"+rowCount).html(data[0].Credit);
                  $("#Grade"+rowCount).html("-");
        $("#tableWithdrawn").append(`<tr><td id="No1${rowCount}"></td>`
                              +`<td id="CourseID1${rowCount}"></td>`
                              +`<td id="CourseName1${rowCount}"></td>`
                              +`<td id="Section1${rowCount}"></td>`
                              +`<td id="Credit1${rowCount}"></td></tr>`);
                  $("#No1"+rowCount).html(usedResgister.length+1);
                  $("#CourseID1"+rowCount).html(courseNoValue);
                  $("#CourseName1"+rowCount).html(data[0].CourseName);
                  $("#Section1"+rowCount).html(sectionValue);
                  $("#Credit1"+rowCount).html(data[0].Credit);
        usedResgister.push(courseNoValue);
      });

}

function withdrawnOperation() {
        var value = $("#WidthdrawnCourseID").val().toLowerCase();

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

function genTableEduHeader(){
  var sem = 2;
    for(var i=1;i<4;i++){
      if(sem==1){sem=2}
      else sem=1;
    $("#eduResTable").append('<table id="tableWithdrawn" class="table table-hover"> \
    <h4 class="mt-5" style="text-align:left;">Semester '+sem+' Year 2018<h4> \
      <thead> \
      <tr> \
        <th>Course No</th> \
        <th>Course Name</th>\
        <th>Credit</th>\
        <th>Grade</th>\
      </tr>\
    </thead>\
    <tbody id="eduResultTable'+i+'">\
    </tbody>\
      </table>')
    }
}
function genTableEduContent(){
  var CourseName1 = "Intro to law";
  var CourseName2 = "Intro to database";
  var Credit = "3";
  var Grade = "A";
  for(var i=1;i<4;i++){
    $("#eduResultTable"+i).append(`<tr><td>${i}</td>\
                           <td>${CourseName1}</td>\
                           <td>${Credit}</td>\
                           <td>${Grade}</td></tr>`);
     $("#eduResultTable"+i).after(`<thead>
                                  <tr style=" border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: rgb(221, 221, 221);line-height: 17px;background-color: rgba(237, 159, 40, 0.19);">\
                                     <th scope="col">CA<div style="font-weight:normal;">3</div></th>\
                                     <th scope="col">GPA<div style="font-weight:normal;">3</div></th>\
                                     <th scope="col">CAX<div style="font-weight:normal;">30</div></th>\
                                     <th scope="col">GPAX<div style="font-weight:normal;">3.25</div></th>\
                                   </tr>\
                                   </thead>`);
  }
}

function genTableAssignGrade(){
  event.preventDefault();
  var StudentID= 5831001;
  var Section= 33;
  var Grade= "-";
  for(var i=1;i<4;i++){
  $('#assignGradeTable').append(`<tr><td>${i}</td>\
                         <td>${StudentID}</td>\
                         <td>${Section}</td>\
                         <td>${Grade}</td></tr>
                         <td>${i}</td>\
                        <td>9999999</td>\
                        <td>${Section}</td>\
                        <td>${Grade}</td></tr>`);
  }
}

function genEducationTeacherTable(){
  var no =1;
  var StudentID= 5831001;
  var Section= 33;
  var Grade= "-";

  $('#educationStudentTable').append(`<tr>\
                                  <td>1</td>\
                                  <td>1101201493</td>\
                                  <td>Anna</td>\
                                  <td>Pitt</td>\
                                  <td>4.00</td>\
                                </tr>\
                                <tr>\
                                  <td>2</td>\
                                  <td>1101201123</td>\
                                  <td>mit</td>\
                                  <td>Pitt</td>\
                                  <td>3.00</td>\
                                </tr>\
                                <tr>\
                                  <td>3</td>\
                                  <td>1101201123</td>\
                                  <td>IMBA</td>\
                                  <td>Pitt</td>\
                                  <td>3.10</td>\
                                </tr>`);
}
function genTranscriptTable(table){
    $('#'+table).append(`<tr>\
                          <td>01/01/2018</td>\
                          <td>211001</td>\
                          <td>Intro to database</td>\
                          <td>3</td>\
                        </tr>`);
}

function filterTable(inputVal,tableVal,column) {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById(inputVal);
  filter = input.value.toUpperCase();
  table = document.getElementById(tableVal);
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
