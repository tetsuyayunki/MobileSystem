
//个人网站
//1. 事件委托绑定导航栏
var mya = document.querySelectorAll("a")
var myArticle = document.querySelectorAll('article')
for (let i = 0; i < mya.length; i++) {
  // 清除默认事件
  mya[i].onclick = function (e) { e.preventDefault() }
}
var myUl = document.getElementsByClassName('nav')[0]
myUl.addEventListener('click', function (e) {
  //console.log(e.target.parentNode.id)// 获取列表项id
  let id = e.target.parentNode.id
  let selected = document.getElementsByClassName(id)
  // console.log(selected) // 对应content
  setUnVisible()
  selected[0].style.visibility = 'visible'
})

function setUnVisible() {
  // 设置content为不可见
  for (let i = 0; i < myArticle.length; i++) {
    // console.log(myArticle[i].style.visibility)
    myArticle[i].style.visibility = 'hidden'
    // console.log(myArticle[i].style.visibility)
  }
}

$("form").on("submit", function (event) {
    event.preventDefault();
    alert('提交成功！')
    //return false;  当然这里也可以返回false。
})