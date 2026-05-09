//file: script 
function prosesLogin() {
    //ambil nilai dari input form
    let inputUser = document.getElementById("username").value;
    let inputPass = document.getElementById("password").value;

    //tentukan data statis untuk admin
    let adminUser = "admin";
    let adminPass = "rahasia123"; 

    //logika If-else 
        if (inputUser === adminUser && inputPass === adminPass) {
            alert("Login berhasil mengalihkan ke dashboard");
            //arahkan ke halaman dashboard
            window.location.href = "dashboard.html";
        } else {
            //jika salah satu atau keduanya salah
            alert("Username atau password salah. silakan coba lagi");
        }

}