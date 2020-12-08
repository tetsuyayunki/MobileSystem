// 省市二级联动
var arr = new Array(3);
arr[0] = ['广东', '广州', '深圳', '佛山'];
arr[1] = ['湖北', '荆州', '武汉', '赤壁'];
arr[2] = ['四川', '成都市', '自贡市', '攀枝花市', '泸州市', '德阳市', '绵阳市']

function choose(val) {
  var city = document.getElementById('city');
  var cityOp = city.getElementsByTagName('option');
  city.disabled = false;
  for (var i = 0; i < cityOp.length; i++) {
    var op = cityOp[i];
    city.removeChild(op);
    i--;
  }

  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i];
    var firstVal = arr1[0];
    if (firstVal == val) {
      for (var j = 1; j < arr1.length; j++) {
        var value = arr1[j];
        var optionl = document.createElement('option');
        var textl = document.createTextNode(value);
        optionl.appendChild(textl);
        city.appendChild(optionl);
      }
    }
  }
}

function ssubmit() {
  let formData = $("form").serializeArray() // 数组
  // 首先对 option进行处理
  let hobbies = {
    value: [],
    name: 'hobby'
  }
  for (let i = 0; i < formData.length; i++) {
    if (formData[i].name === 'hobby') {
      hobbies.value.push(formData[i].value)
      formData.splice(i, 1)
      i--;
    }
  }
  $("#hobbies").val(hobbies.value.toString())


  // 其次检查数据是否有误
  // 1. 是否有数据为空
  // 2. 省市值是否合法
  // 3. 密码是否相同
  let province = formData[3].value
  let password = formData[1].value
  let passwords = formData[2].value

  // console.log(formData)
  if (formData.length < 7 || province === 0 || password !== passwords) {
    if (password !== passwords) {
      alert('密码不一致！')
    } else {
      alert('请正确输入完整表单数据！')
    }
  } else {
    $("form").submit()
  }

}

