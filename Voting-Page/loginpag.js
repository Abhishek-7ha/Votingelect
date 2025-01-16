
    function checkpassword() {
        const valueofPassword = "123456"
        let password = document.querySelector('.login__input').value;
        let uid = document.querySelector('.login__input').value;
        if (password === valueofPassword && uid === valueofPassword) {
            window.open("index.html")
        }
        else {
            alert("Incorrect Password ! Please Try Again")
        }

    }