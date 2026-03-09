const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Hàm cập nhật số lượng và số tiền
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    // Dùng toLocaleString để định dạng dấu phẩy cho tiền (ví dụ: 120,000)
    total.innerText = (selectedSeatsCount * ticketPrice).toLocaleString('vi-VN');
}

// Lắng nghe sự kiện thay đổi phim
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Lắng nghe sự kiện click vào ghế
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Nút xác nhận đặt vé
document.getElementById('btn-checkout').addEventListener('click', () => {
    const selectedSeatsCount = document.querySelectorAll('.row .seat.selected').length;
    if(selectedSeatsCount > 0) {
        alert(`Chúc mừng! Bạn đã đặt thành công ${selectedSeatsCount} vé.`);
        location.reload(); // Tải lại trang sau khi đặt thành công
    } else {
        alert('Vui lòng chọn ít nhất một chỗ ngồi!');
    }
});