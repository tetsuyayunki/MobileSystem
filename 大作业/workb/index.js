window.onload = function () {
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
      animate(span, this.index * liWidth);
    }
    //鼠标移开
    liArr[i].onmouseout = function () {
      //让span运动到该li的索引值位置
      //图片运动需要封装的方法
      animate(span, count * liWidth);
    }
    //点击事件，记录功能
    liArr[i].onclick = function () {
      //需要一个计数器，每次点击以后把所以只记录下来
      //因为onmouseout事件要用到这个计数器，所以应该是一个全局变量
      count = this.index;
      animate(span, count * liWidth);
    }

  }

  //缓动动画封装
  function animate(ele, target) {
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
}

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