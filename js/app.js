function saveUsername(username) {
    localStorage.setItem('username', username);
}

function deploy(w, s, p) {
    $.LoadingOverlay("show");

    // Hide it after 3 seconds
    setTimeout(function () {
        $.LoadingOverlay("hide");
        $.notify("Successfully deployed the Guest portal.", "success");

        var dep = {
            "w": document.getElementById(w).value,
            "s": document.getElementById(s).value,
            "p": document.getElementById(p).value
        };
        localStorage.setItem('deploy', JSON.stringify(dep));
    }, 3000);
}

function logout() {
    $.notify("Successfully logged out.", "success");
    localStorage.removeItem("deploy");
}
