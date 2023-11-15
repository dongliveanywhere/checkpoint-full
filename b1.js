let menu=JSON.parse(localStorage.getItem("newfood"))

// localStorage.setItem("newfood",JSON.stringify(menu))

var ques=prompt("Nhap C,R,U,D")

if(ques.toUpperCase()=="C"){
    let dish=prompt("moi nguoi dung nhap mon an muon them vao menu")
    menu.push(dish)
    create()
}
else if(ques.toUpperCase()=="R"){
    
}
else if(ques.toUpperCase()=="U"){
    update()
}
else {
    delete_()
}
function create(){
    alert(menu.join())
    localStorage.setItem("newfood",JSON.stringify(menu))
}
function update() {
    var u=prompt("moi nguoi dung nhap vao ten mon an muon update")
    let pos = menu.indexOf(dish.toLowerCase())
    menu[pos]=prompt("mon an moi")
    localStorage.setItem("newfood",JSON.stringify(menu))
}
function delete_() {
    var d=prompt("moi nguoi dung nhap vao ten mon an muon delete")
    let pos = menu.indexOf(dish.toLowerCase())
    menu.splice(pos.pos)
    localStorage.setItem("newfood",JSON.stringify(menu))
}