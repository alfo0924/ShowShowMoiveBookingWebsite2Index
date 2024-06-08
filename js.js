
var colors = ['#f60000', 'blue', 'green', '#ffffff','#090909','#efefa8'];
var currentIndex = 0;
var rgbText = document.getElementById('rgbText');
var navbar = document.getElementById('navbar');
var navbarContent = document.getElementById('navbarContent');
var footer = document.getElementById('footer');
var navbarTitle = document.getElementById('navbarTitle');

rgbText.addEventListener('click', function () {
    // 移除旧的文字颜色类
    document.querySelectorAll('.text-white').forEach(function (item) {
        item.classList.remove('text-white');
    });

    // 改变 navbar 主题的背景色
    navbar.style.backgroundColor = colors[currentIndex];
    // 改变 navbar 内容的背景色
    navbarContent.style.backgroundColor = colors[currentIndex];
    // 改变 footer 背景色
    footer.style.backgroundColor = colors[currentIndex];

    // 根据颜色选择设置不同的字体颜色
    if (colors[currentIndex] === '#ffffff') {
        document.body.style.color = 'black'; // 如果颜色是白色，则设置 body 文字颜色为黑色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.add('text-black'); // 添加白色文字的 class
        });
    }
    else if (colors[currentIndex] === '#efefa8') {
        document.body.style.color = '#efefa8'; //
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.add('text-black'); // 添加白色文字的 class
        });
    }
    else {
        document.body.style.color = 'white'; // 设置 body 文字颜色为白色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.add('text-white'); // 添加白色文字的 class
        });
    }

    // 更新颜色索引
    currentIndex = (currentIndex + 1) % colors.length;
});

function dm() {
    var element = document.body;
    var navbar = document.getElementById('navbar');
    var footer = document.getElementById('footer');

    element.classList.toggle("dark-mode");
    navbar.classList.toggle("navbar-light");


    if (element.classList.contains("dark-mode")) {
        document.body.style.color = 'white'; // 设置 body 文字颜色为白色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.add('text-white'); // 添加白色文字的 class
        });
    } else {
        document.body.style.color = 'black'; // 设置 body 文字颜色为黑色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.remove('text-white'); // 移除白色文字的 class
        });
    }
}

function vintage() {
    var element = document.body;
    var navbar = document.getElementById('navbar');
    var footer = document.getElementById('footer');

    element.classList.toggle("vintage-mode");
    navbar.classList.toggle("navbar-light");
    if (element.classList.contains("vintage-mode")) {
        document.body.style.color = 'black'; // 设置 body 文字颜色为白色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.add('text-black'); // 添加白色文字的 class
        });
    } else {
        document.body.style.color = 'black'; // 设置 body 文字颜色为黑色
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.remove('text-white'); // 移除白色文字的 class
        });
    }
}

function imagebackground() {
    var element = document.body;
    element.classList.toggle("imgbg");
    if (element.classList.contains("imgbg")) {
        document.body.style.color = 'white'; // 设置 body 文字颜色为白色

        document.querySelectorAll('.navbar-nav .nav-link, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.add('text-white'); // 添加白色文字的 class

            document.querySelectorAll('.footer p').forEach(function (item) {
                item.classList.add('text-black'); // 添加白色文字的 class
            });
        });
    } else {
        document.body.style.color = 'black'; // 设置 body 文字颜色为黑色
        document.body.style.background = ''; // 移除背景图像
        document.querySelectorAll('.navbar-nav .nav-link, .footer p, #navbarTitle, #rgbText').forEach(function (item) {
            item.classList.remove('text-white'); // 移除白色文字的 class
        });
    }
}



//booking system
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");
    const bookingInfo = document.getElementById("bookingInfo");
    const seatsContainer = document.querySelector(".seats");

    // Function to generate seats
    function generateSeats() {
        const rows = 10;
        const seatsPerRow = 22; // Add 2 aisles
        const aisleIndex1 = Math.floor(seatsPerRow / 5); // Middle seat index for 1st aisle
        const aisleIndex2 = Math.floor(seatsPerRow / 5) * 4; // Middle seat index for 2nd aisle

        const seatLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Labels for seats

        for (let i = 0; i < rows; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            for (let j = 0; j < seatsPerRow; j++) {
                const seat = document.createElement("div");
                seat.classList.add("seat");
                seat.dataset.row = i + 1;
                seat.dataset.seat = j + 1;
                const labelIndex = j < 26 ? j : j % 26;
                const seatLabel = seatLabels[labelIndex] + (i + 1); // Calculate seat label

                // Add aisle class
                if (j === aisleIndex1 || j === aisleIndex2) {
                    seat.classList.add("aisle");
                }

                seat.textContent = seatLabel; // Set seat label as text content
                rowDiv.appendChild(seat);
            }
            seatsContainer.appendChild(rowDiv);
        }

        // Add aisle spacer
        const aisleSpacer1 = document.createElement("div");
        aisleSpacer1.classList.add("seat", "aisle");
        seatsContainer.appendChild(aisleSpacer1);

        const aisleSpacer2 = document.createElement("div");
        aisleSpacer2.classList.add("seat", "aisle");
        seatsContainer.appendChild(aisleSpacer2);
    }

    generateSeats();

    // Function to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const movie = formData.get("movie");
        const time = formData.get("time");
        const combo = formData.get("combo");
        const selectedSeats = document.querySelectorAll(".seat.selected");
        const selectedSeatLabels = Array.from(selectedSeats).map(seat => seat.textContent); // Extract only seat labels

        let comboPrice = 0;
        if (combo === "small") {
            comboPrice = 50; // Small Combo (1 Drink, 1 Popcorn)
        } else if (combo === "large") {
            comboPrice = 100; // Large Combo (2 Drinks, 1 Popcorn)
        }

        const seatPrice = selectedSeats.length * 220; // Price per seat
        const totalPrice = seatPrice + comboPrice;

        let comboText = "";
        if (combo === "small") {
            comboText = "Small Combo (1 Drink, 1 Popcorn)";
        } else if (combo === "large") {
            comboText = "Large Combo (2 Drinks, 1 Popcorn)";
        } else {
            comboText = "No Combo";
        }

        const bookingDetails = `
                    <h2>Booking Details</h2>
                    <p>Movie: ${movie}</p>
                    <p>Time: ${time}</p>
                    <p>Combo: ${comboText}</p>
                    <p>Selected Seats: ${selectedSeatLabels.join(", ")}</p>
                    <p>Total Price: $${totalPrice}</p>
                `;

        bookingInfo.innerHTML = bookingDetails; // Display selected seat labels only
    });

    // Function to handle seat selection
    seatsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("seat")) {
            if (!event.target.classList.contains("randomly-selected")) {
                event.target.classList.toggle("selected");
            }
        }
    });

    // Function to randomly select some seats
    function randomSeatSelection() {
        const seats = document.querySelectorAll(".seat");

        // Randomly select seats
        for (let i = 0; i < seats.length; i++) {
            if (Math.random() < 0.5 && !seats[i].classList.contains("aisle")) {
                seats[i].classList.add("randomly-selected");
            }
        }
    }

    // Call randomSeatSelection function when the page loads
    randomSeatSelection();

    // Clear Selection button functionality
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", function() {
        const selectedSeats = document.querySelectorAll(".seat.selected");
        selectedSeats.forEach(seat => seat.classList.remove("selected"));
        bookingInfo.innerHTML = ""; // Clear booking info
    });
});
