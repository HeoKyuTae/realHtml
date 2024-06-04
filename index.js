function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' +this.name;
    }
}

$(document).ready(function () {
    var n = new Person('k');

  $("#change_btn").click(function () {
    changed(n);
  });
});

function changed(name) {
  $("#list li").each(function (index) {
    // index는 0부터 시작하므로 1을 더해줍니다
    $(this).text(name.introduce()  + (index + 1));
  });
}
