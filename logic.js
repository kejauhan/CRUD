// Function Untuk Menambahkan jam di Body Real Time
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
// variabel untuk Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];
var modalEdit = document.getElementById("modalEdit");
var btnEdit = document.getElementById("editBtn");
var span1 = document.getElementsByClassName("close1")[0];

// function untuk modal alert Edit Data
function dataEdit(){
    modalEdit.style.display = "block";
}
span1.onclick = function(){
    modalEdit.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modalEdit.style.display = "none";
    }
}
    
// fungsi menambahkan data ke tabel
function addRow(){
    // Mendapatkan Value Daru User Input
    var numberData = document.getElementById('numberData').value;
    var fname = document.getElementById('fullName').value;
    var address = document.getElementById('addressData').value;
    if(!numberData|| !fname || !address){
        modal.style.display = "block";
        document.querySelector(".modal-header").style.backgroundColor = "yellow"
        document.querySelector(".headerData").innerHTML = 'Warning!' 
        document.querySelector(".bodyData").innerHTML = 'Tidak dapat Menambah Mahasiswa'
        span.onclick = function() {
            modal.style.display = "none";
          }
    }else{
    // get the html table
    // 0 = the first table
    var table = document.getElementsByTagName('table')[0];

    // Menambahkan Row Baru di Tabel
    var newRow = table.insertRow(table.length);
                  
    // add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var data1 = newRow.insertCell(3);
        
    // add values to the cells
    cel1.innerHTML = numberData;
    cel2.innerHTML = fname;
    cel3.innerHTML = address;
    data1.innerHTML = `<button id="editBtn" style="color:white; padding:8px;padding-left:8px ;background-color:#669DB3FF; border-radius:5px; border:#DDD;" onClick="onEdit(this)">&#9998;Edit</button>
                       <button id="deletebtn" style="color:white; padding:8px; padding-left:8px; background-color:#C70039;border-radius:5px; border:#DDD;" onClick="onDelete(this)">&#9003;Delete</button>`;
    modal.style.display = "block";
    document.querySelector(".modal-header").style.backgroundColor = "green"
    document.querySelector(".headerData").innerHTML = 'Added        ~Just Now!'
    document.querySelector(".bodyData").innerHTML = 'Mahasiswa Baru Telah Ditambahkan!'
    span.onclick = function() {
         modal.style.display = "none";
         }
         resetButton();
     }
     
}

// function untuk delete
function onDelete(td) {
    if(confirm("Are you Sure Want To Delete?")){
        modal.style.display = "block";
        document.querySelector(".modal-header").style.backgroundColor = "red"
        document.querySelector(".headerData").innerHTML = 'Deleted      ~Just Now!'
        document.querySelector(".bodyData").innerHTML = 'Data Mahasiswa Telah Dihapus'
        span.onclick = function() {
             modal.style.display = "none";
            }
            row = td.parentElement.parentElement;
            document.getElementById("dataMahasiswa").deleteRow(row.rowIndex);
             resetButton();
            }
    }

    function resetButton() {
        document.getElementById("numberData").value = "";
        document.getElementById("fullName").value = "";
        document.getElementById("addressData").value = "";
        selectedRow = null;
    }


// function edit Data
function onEdit(td) {
    dataEdit()
        selectedRow = td.parentElement.parentElement;
        document.getElementById("numberDataedit").value = selectedRow.cells[0].innerHTML;
        document.getElementById("fullNameedit").value = selectedRow.cells[1].innerHTML;
        document.getElementById("addressDataedit").value = selectedRow.cells[2].innerHTML;
        document.getElementById("save").onclick = 
        function (){             
            selectedRow.cells[0].innerHTML = document.getElementById('numberDataedit').value
            selectedRow.cells[1].innerHTML = document.getElementById('fullNameedit').value
            selectedRow.cells[2].innerHTML = document.getElementById('addressDataedit').value
            modalEdit.style.display = "none";
            modal.style.display = "block";
        document.querySelector(".modal-header").style.backgroundColor = "#23A7DE"
        document.querySelector(".headerData").innerHTML = 'Updated      ~Just Now!'
        document.querySelector(".bodyData").innerHTML = 'Data Mahasiswa Telah Diperbaharui!'
        span.onclick = function(){
             modal.style.display = "none";
             }
        }
        document.getElementById("cancel").onclick = function(){
            modalEdit.style.display = "none";
            }
        }

	
	
	
