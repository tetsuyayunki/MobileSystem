var aImg = document.querySelectorAll(".slideimg li img");
// var aImg = document.getElementsByClassName('simg')[0]
var imgData = [
  {
    url: './static/1.jpg'
  },
  {
    url: './static/2.jpg'
  },
  {
    url: './static/3.jpg'
  },
  {
    url: './static/4.jpg'
  },
  {
    url: './static/5.jpg'
  },
  {
    url: './static/6.jpg'
  }
]
for (let i = 0; i < aImg.length; i++) {
  // console.log(imgData[i].url)
  aImg[i].setAttribute("src", imgData[i].url);
}

var index = 0;//定义一个变量指向空间某一个位置
var aSpan = document.querySelectorAll(".slide_btn");
function setBtnColor() {
  for (var i = 0; i < aSpan.length; i++) {
    aSpan[i].style.backgroundColor = "grey";//设置全部颜色为灰色
  }
  aSpan[index].style.backgroundColor = "red";//设置当前对应的为红色
}
setBtnColor();//执行一次
var aLiName = ["list1", "list2", "list3", "list4", "list5", "list6"];//定义数组
var aLi = document.querySelectorAll(".slideimg li");
function nextPic() {
  //把最后一个放在最前
  aLiName.unshift(aLiName[5]);//最后一个复制并放在开头
  aLiName.pop();//删除最后一个值
  for (var i = 0; i < aLi.length; i++) {
    aLi[i].setAttribute("class", aLiName[i]);//重新赋值
  }
  index++;
  if (index > 5) {
    index = 0;
  }
  setBtnColor();
}
var slideNext = document.querySelector(".slide_next");
slideNext.onclick = nextPic;//buyaoyoukuohao
function lastPic() {
  aLiName.push(aLiName[0]);//第一个放到zuihou
  aLiName.shift();//shanchudiyige

  for (var i = 0; i < aLi.length; i++) {
    aLi[i].setAttribute("class", aLiName[i]);
  }
  index--;
  if (index < 0) {
    index = 5;
  }
  setBtnColor();
}
var slideLast = document.querySelector(".slide_last");
slideLast.onclick = lastPic;

var slideImg = document.querySelector(".slideimg");
//事件监听
slideImg.addEventListener("click", function (ev) {

  if (ev.target.parentNode.getAttribute("class") === "list1") {
    lastPic();
  }//点击的元素的父级的类名//getAttribute() 方法返回指定属性名的属性值。
  else
    if (ev.target.parentNode.getAttribute("class") === "list3") {
      nextPic();
    }
})
//定时器
var timer = setInterval(nextPic, 3000);

slideImg.addEventListener("mouseover", function () {

  clearInterval(timer);

})//鼠标悬浮的时候停止轮播
slideImg.addEventListener("mouseout", function () {
  timer = setInterval(nextPic, 3000);
})//移开恢复
//按钮控制
var lineBtnG = document.getElementsByClassName("slide_btngroups");
var lineBtn = document.querySelectorAll(".slide_btngroups span");
for (var i = 0; i < lineBtn.length; i++) {
  lineBtn[i].index = i;
}
lineBtnG[0].addEventListener("mouseover", function (ev) {
  var nowIndex = ev.target.index;
  var offset = nowIndex - index;
  if (offset == 0) {
    return;
  }
  else if (offset > 0) {
    for (var i = 0; i < offset; i++) {
      nextPic();
    }
  }
  else if (offset < 0) {
    for (var i = 0; i > offset; i--) {
      lastPic();
    }
  }

})

/* -----------------------时间---------------------------- */
function getDate() {
  var Dateobj = new Date();
  var timeSelector = document.querySelector('.timeSelector .time')
  timeSelector.innerHTML = Dateobj
}
var DateTimer = setInterval(getDate, 1000)


