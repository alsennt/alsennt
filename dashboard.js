var selectedrow = null;

function onformsubmit() {
    if (validate()) {}
        var formdata = readformdata(); 
        if (selectedrow == null)
            insertnewrecord(formdata);
        else 
            updaterecord(formdata);
        resetform();
}

function readformdata() {
    var formdata = {};
    formdata["fullname"] = document.getElementById("fullname").value;
    formdata["empcode"] = document.getElementById("empcode").value;
    formdata["salary"] = document.getElementById("salary").value;
    formdata["city"] = document.getElementById("city").value;
    return formdata;
}

function insertnewrecord(data) {
    var table = document.getElementById("employeelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empcode;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="onedit(this)">edit</a> 
                       <a onclick="ondelete(this)">delete</a>`;
}

function resetform() {
    document.getElementById("fullname").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
}

function onedit(td) {
    selectedrow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedrow.cells[0].innerHTML;
    document.getElementById("empcode").value = selectedrow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedrow.cells[2].innerHTML;
    document.getElementById("city").value = selectedrow.cells[3].innerHTML;

}

function updaterecord(formdata) {
    selectedrow.cells[0].innerHTML = formdata.fullname;
    selectedrow.cells[1].innerHTML = formdata.empcode;
    selectedrow.cells[2].innerHTML = formdata.salary;
    selectedrow.cells[3].innerHTML = formdata.city;
}

function ondelete(td) {
    if (confirm("apakah anda yakin ingin menghapus data ini?")) {
        row = td.parentElement.parentElement;
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        resetform();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullnamevalidationeror").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullnamevalidationeror").classList.contains("hide"))
            document.getElementById("fullnamevalidationeror").classList.add("hide");
    } 
    return isValid;
}