

var id = null;
var test = null;

function moveLeft() {

    const _signin = document.getElementById("move_form_right");
    const _hi_there = document.getElementById("move_div_left");
    const _welcome_back = document.getElementById("move_div_right");
    const _create_account = document.getElementById("move_form_left");
    var form_pos = 0;
    var pos = 0;
    clearInterval(id);

    _signin.style.display = "none";
    _hi_there.style.display = "none";
    _welcome_back.style.display = "block";
    _create_account.style.display = "block";


    // id = setInterval(frame, 2);

    // function frame() {
    //     if (pos == 600) {
    //         clearInterval(id);
    //     }
    //     else {
    //         form_pos += 20;
    //         pos += 20;
    //         _hi_there.style.right = pos + "px";
    //         _signin.style.left = form_pos + "px";
    //     }
    // }
}

function moveRight() {
    const _signin = document.getElementById("move_form_right");
    const _hi_there = document.getElementById("move_div_left");
    const _welcome_back = document.getElementById("move_div_right");
    const _create_account = document.getElementById("move_form_left");
    var form_pos_2 = 600;
    var pos_2 = 0;
    clearInterval(test);

    _signin.style.display = "block";
    _hi_there.style.display = "block";
    _welcome_back.style.display = "none";
    _create_account.style.display = "none";


    // test = setInterval(frame, 2);

    // function frame() {
    //     if (form_pos_2 == 600 && pos_2 == 0) {
    //         clearInterval(id);
    //     }
    //     else {
    //         form_pos_2 -= 20;
    //         pos_2 += 40;
    //         _welcome_back.style.left = pos_2 + "px";
    //         _create_account.style.right = form_pos_2 + "px";
    //     }
    // }
}
