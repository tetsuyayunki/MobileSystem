
<html>
<head>
<meta charset='UTF-8'>
<style>
body{
  background: url('./worka/2.jpg');
}
.main_div {
  margin: 0 auto;
  width: 42vw;
  display: flex;
  display: -webkit-flex;
  flex-flow: row wrap;
  justify-content: space-between;
  /* background-color: blueviolet; */
}
.title{
  font-size: larger;
  text-align: center;
  color: white;
}
.div1,
.div2,
.div3,
.div4 {
  width: 21vw;
  height: 21vw;
  color: cadetblue;
  font-weight: bolder;
  font-size: larger;
}

label {
  width: 10vw;
  background-color: rgba(212, 205, 205, 0.8);
  margin-left: 15px;
}

#province, #city {
  font-size: large;

}

.div1 {
  background: url('./worka/1.jpeg');
  background-size: 21vw 21vw;
}

.div2 {
  background: url('./worka/2.jpeg');
  background-size: 21vw 21vw;
}

.div3 {
  background: url('./worka/3.jpeg');
  background-size: 21vw 21vw;
}

.div4 {
  background: url('./worka/4.jpeg');
  background-size: 21vw 21vw;
}

</style>
</head>
<section class='title'>表单信息</section>
<div class='main_div'>
<div class='div1'>
  <p><label>用户名：</label><?php echo $_POST['name'] ?></p>
  <p><label>密码：</label><?php echo $_POST['password'] ?></p>
  <p><label for=''>再次输入密码:</label><?php echo $_POST['passwords']  ?></p>
</div>
<div class='div2'>
  <label for=''>地址:</label>
  <?php echo $_POST['province'] ?>
  <?php echo $_POST['city'] ?>
</div>
<div class='div3'>
  <p><label>爱好</label></p>
  <label><?php echo $_POST['hobbies'] ?></label>
</div>
<div class='div4'>
  <p><label>留言</label></p>
  <textarea name='' id='' cols='30' rows='10'>
    <?php echo $_POST['idea'] ?>
  </textarea>
</div>