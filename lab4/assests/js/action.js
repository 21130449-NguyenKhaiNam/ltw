// Chờ trình duyệt tải html
document.addEventListener('DOMContentLoaded', function () {
    var $ = document.querySelector.bind(document)
    var $$ = document.querySelectorAll.bind(document)
    var root = $('#root')

    var callFuntion = {
        addMarginBottom() {
            $$('.container').forEach(e => {
                if (e.classList.length == 1) {
                    e.classList.add('mb-5')
                }
            })
        },
        bai1() {
            $$('.bai1-btn').forEach(btn => {
                btn.onclick = () => {
                    $('#bai1').style.backgroundColor = window.getComputedStyle(btn).backgroundColor
                }
            });
        },
        bai2() {
            $('.bai2-submit').onclick = () => {
                var result = $('.bai2-result')
                var [a, b, c] = [...$$('.bai2-input')]
                a = a.value
                b = b.value
                c = c.value
                if (a == 0) {
                    if (b == 0) {
                        result.innerHTML = 'Phương trình lỗi vì chỉ có c'
                    } else if (c == 0) {
                        result.innerHTML = 'Lỗi chưa nhập dữ liệu'
                    } else {
                        result.innerHTML = 'Phương trình có nghiệm là x = ' + (-c / b)
                    }
                } else {
                    let telta = (b) ** 2 - 4 * a * c
                    if (telta < 0) {
                        result.innerHTML = 'Phương trình vô nghiệm'
                    } else if (telta == 0) {
                        result.innerHTML = 'Phương trình có nghiệm kép: x1 = x2 = ' + (-b / (2 * a))
                    } else {
                        result.innerHTML = 'Phương trình có hai nghiệm phân biệt: x1 = ' + ((-b + Math.sqrt(telta)) / (2 * a)) + ' và x2 = ' + ((-b - Math.sqrt(telta)) / (2 * a))
                    }
                }
            }
        },
        bai3() {
            var greeting = ['Chào 1', 'Chào 2', 'Chào 3', 'Chào 4']
            // alert(greeting[Math.floor(Math.random() * greeting.length)])
            $('.bai3-btn').onclick = () => {
                alert(greeting[Math.floor(Math.random() * greeting.length)])
            }
        },
        bai4() {
            $('.bai4-check').onclick = () => {
                $('.bai4-result').innerHTML = 'Số lần xuất hiện là: ' + ($('#bai4-textarea').value.split($('.bai4-text').value).length - 1)
            }
        }
    }

    for (let key in callFuntion) {
        // Đảm bảo thuộc tính thuộc về đối tượng, không phải từ prototype
        if (callFuntion.hasOwnProperty(key)) {
            callFuntion[key]();
        }
    }
});
