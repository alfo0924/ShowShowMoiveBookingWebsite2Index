var colors = ['#f60000', 'blue', 'green', '#ffffff'];
var currentIndex = 0;

var rgbText = document.getElementById('rgbText');
var navbar = document.getElementById('navbar');
var navbarContent = document.getElementById('navbarContent');
var footer = document.getElementById('footer');
var navbarTitle = document.getElementById('navbarTitle');

rgbText.addEventListener('click', function() {
    // 改變文字顏色
    this.style.color = colors[currentIndex];
    // 改變 navbar 主題的背景色
    navbar.style.backgroundColor = colors[currentIndex];
    // 改變 navbar 內容的背景色
    navbarContent.style.backgroundColor = colors[currentIndex];
    // 改變 footer 背景色
    footer.style.backgroundColor = colors[currentIndex];
    // 确保标题文字颜色为白色
    navbarTitle.style.color = 'white';
    // 若顏色是藍色，則將 RGB 文字顏色設置為白色
    rgbText.style.color = colors[currentIndex] === 'blue' ? 'white' : ''; // 如果当前颜色为蓝色，则设置为白色，否则恢复原来的颜色

    // 若顏色是藍色，則將所有文字顏色設置為白色
    if (colors[currentIndex] === 'blue') {
        document.body.style.color = 'white'; // 設置 body 文字顏色為白色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p').forEach(function(item) {
            item.style.color = 'white'; // 設置 navbar 中連結和 footer 文字的顏色為白色
        });
    } else {
        document.body.style.color = ''; // 恢復 body 文字原來的顏色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function(item) {
            item.style.color = ''; // 恢復 navbar 中連結和 footer 文字原來的顏色
        });
    }
    // 更新顏色索引
    currentIndex = (currentIndex + 1) % colors.length;
});
