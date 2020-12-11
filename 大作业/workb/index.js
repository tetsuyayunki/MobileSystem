
//需求1：鼠标放到哪个li上面，span对应移动到该li上。移开后，回到原位置。
//需求2：鼠标点击那个li记录该li标签，移开的时候span回到该记录的li标签上。
//步骤：
//1.老三步
//2.计数器


//需求1：鼠标放到哪个li上面，span对应移动到该li上。移开后，回到原位置。
//1.老三步
var liArr = document.getElementsByClassName(".li");
var liWidth = liArr[0].offsetWidth;
var span = document.getElementsByTagName("span")[0];
//计数器
var count = 0;


//for循环绑定事件
for (var i = 0; i < liArr.length; i++) {
  //自定义属性，然后绑定index属性为索引值
  liArr[i].index = i;
  //鼠标进入事件
  liArr[i].onmouseover = function () {
    //让span运动到该li的索引值位置
    //图片运动需要封装的方法
    animateSelf(span, this.index * liWidth);
  }
  //鼠标移开
  liArr[i].onmouseout = function () {
    //让span运动到该li的索引值位置
    //图片运动需要封装的方法
    animateSelf(span, count * liWidth);
  }
  //点击事件，记录功能
  liArr[i].onclick = function () {
    //需要一个计数器，每次点击以后把所以只记录下来
    //因为onmouseout事件要用到这个计数器，所以应该是一个全局变量
    count = this.index;
    animateSelf(span, count * liWidth);
  }

}

//缓动动画封装
function animateSelf(ele, target) {
  clearInterval(ele.timer);
  ele.timer = setInterval(function () {
    var step = (target - ele.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    ele.style.left = ele.offsetLeft + step + "px";
    if (Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
      ele.style.left = target + "px";
      clearInterval(ele.timer);
    }
  }, 18);
}

/*******************下拉框************************* */
$(document).ready(function () {
  // console.log('----')
  //需求：鼠标放入一级li中，让他里面的ul显示。移开隐藏。
  var jqli = $(".wrap>ul>.second");

  //绑定事件
  jqli.mouseenter(function () {
    $(this).children("ul").stop().slideDown(1000);
    // console.log('----')
  });

  //绑定事件(移开隐藏)
  jqli.mouseleave(function () {
    $(this).children("ul").stop().slideUp(1000);
  });
});

/******轮播图********* */
//1.获取事件源及相关元素。（老三步）
var all = document.getElementById("all");
var screen = document.getElementsByClassName('screen')[0]
var imgWidth = screen.offsetWidth;
var ul = screen.firstElementChild || screen.firstChild;
var ol = screen.children[1];
var div = screen.lastElementChild || screen.lastChild;
var spanArr = div.children;

//2.复制第一张图片所在的li,添加到ul的最后面。
var ulNewLi = ul.children[0].cloneNode(true);
ul.appendChild(ulNewLi);
var ulNewLi1 = ul.children[1].cloneNode(true);
ul.appendChild(ulNewLi1);
var ulNewLi2 = ul.children[2].cloneNode(true);
ul.appendChild(ulNewLi2);
//定时器
var timer = setInterval(autoPlay, 3000);
function autoPlay() {
  //通过控制key的自增来模拟图片的索引值，然后移动ul
  var offsetLeft = ul.offsetLeft
  // var ulLength = $('#ul').css('width') //jq 获取总宽度
  // console.log(offsetLeft)
  if (Math.abs(offsetLeft) > 1800) { //-1940
    //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
    console.log('------')
    ul.style.left = 0;
    animateSelf(ul, 0)
  } else {
    animateSelf(ul, (offsetLeft - 325));
  }

}

function animateSelf(ele, target) {
  clearInterval(ele.timer);
  var speed = 10
  ele.timer = setInterval(function () {
    // 动画效果
    // 移动 320 px -320px
    var val = Math.abs(ele.offsetLeft) // 当前left值正数，递增
    // console.log(target) //-320
    ele.style.left = ele.offsetLeft - speed + "px";
    // console.log(ele.style.left)
    if (val > Math.abs(target)) {
      ele.style.left = target + "px";
      clearInterval(ele.timer);
    }
    // ele.style.left = val + "px";
  }, 10)
}

// 切换主图背景
$('#li1').mouseover(function () {
  $('.main_pic').css('background', 'url(./images/4576de040a2e698bf48eda307ae77d79.jpg)')
})
$('#li2').mouseover(function () {
  $('.main_pic').css('background', 'url(./images/main1.jpeg)')
})
$('#li3').mouseover(function () {
  console.log('--')
  $('.main_pic').css('background', 'url(./images/main2.jpg)')
})

// 放大镜

window.onload = function () {
  //需求：鼠标放到小盒子上，让大盒子里面的图片和我们同步等比例移动。
  //技术点：onmouseenter==onmouseover 第一个不冒泡
  //技术点：onmouseleave==onmouseout  第一个不冒泡
  //步骤：
  //1.鼠标放上去显示盒子，移开隐藏盒子。
  //2.老三步和新五步（黄盒子跟随移动）
  //3.右侧的大图片，等比例移动。

  //0.获取相关元素
  var glass = document.getElementsByClassName("glass")[0];
  var small = glass.firstElementChild || glass.firstChild;
  var big = glass.children[1];
  var mask = small.children[1];
  var bigImg = big.children[0];

  function show(ele) {
    ele.style.display = "block";
  }
  function hide(ele) {
    ele.style.display = "none";
  }
  //1.鼠标放上去显示盒子，移开隐藏盒子。(为小盒子绑定事件)
  small.onmouseenter = function () {
    //封装好方法调用：显示元素
    show(mask);
    show(big);
  }
  small.onmouseleave = function () {
    //封装好方法调用：隐藏元素
    hide(mask);
    hide(big);
  }

  //2.老三步和新五步（黄盒子跟随移动）
  //绑定的事件是onmousemove，而事件源是small(只要在小盒子上移动1像素，黄盒子也要跟随)
  small.onmousemove = function (event) {
    //想移动黄盒子，必须知道鼠标在small中的位置。x作为mask的left值，y作mask的top值。
    //新五步
    event = event || window.event;
    var pagex = event.pageX || scroll().left + event.clientX;
    var pagey = event.pageY || scroll().top + event.clientY;
    //让鼠标在黄盒子最中间，减去黄盒子宽高的一半
    var x = pagex - glass.offsetLeft - mask.offsetWidth / 2;
    var y = pagey - glass.offsetTop - mask.offsetHeight / 2;
    //限制换盒子的范围
    //left取值为大于0，小盒子的宽-mask的宽。
    if (x < 0) {
      x = 0;
    }
    if (x > small.offsetWidth - mask.offsetWidth) {
      x = small.offsetWidth - mask.offsetWidth;
    }
    //top同理。
    if (y < 0) {
      y = 0;
    }
    if (y > small.offsetHeight - mask.offsetHeight) {
      y = small.offsetHeight - mask.offsetHeight;
    }
    //移动黄盒子
    console.log(small.offsetHeight);
    mask.style.left = x + "px";
    mask.style.top = y + "px";

    //3.右侧的大图片，等比例移动。
    //如何移动大图片？等比例移动。
    //    大图片/大盒子 = 小图片/mask盒子
    //    大图片走的距离/mask走的距离 = （大图片-大盒子）/（小图片-黄盒子）
    //                var bili = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);

    //大图片走的距离/mask盒子都的距离 = 大图片/小图片
    var bili = bigImg.offsetWidth / small.offsetWidth;

    var xx = bili * x;
    var yy = bili * y;


    bigImg.style.marginTop = -yy + "px";
    bigImg.style.marginLeft = -xx + "px";
  }





}