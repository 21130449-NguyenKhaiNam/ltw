// Chờ trình duyệt tải html
document.addEventListener('DOMContentLoaded', function () {
    var $ = document.querySelector.bind(document)
    var $$ = document.querySelectorAll.bind(document)
    var root = $('#root4')

    var callFuntion = {
        addMarginBottom() {
            $$('.container4').forEach(e => {
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
        },
        bai5() {
            function rotate() {
                var image = document.querySelector('.bai5-img');
                var angleInDegrees =
                    Math.acos((new DOMMatrix(getComputedStyle(image).getPropertyValue('transform'))).a) * (180 / Math.PI);
                if (angleInDegrees == 180)
                    angleInDegrees = -15
                image.style.transform = `rotate(${angleInDegrees + 15}deg)`
            }

            setInterval(rotate, 2000)
        }, bai6() {
            var forms = [$('#form'), $('#form-2'), $('#form-3')]

            function check(form) {
                var inputs = form.getElementsByTagName('input')
                Array.from(inputs).forEach(e => {
                    var child = document.createElement('span')
                    child.textContent = 'Nhập nội dung bạn ơi'

                    e.addEventListener("focus", function () {
                        var v = e.value
                        if (v === "" || v === undefined) {
                            e.classList.add('check-input')
                            if (!parent.contains(child)) {
                                parent.appendChild(child)
                            }
                        } else {
                            e.classList.remove('check-input') 
                            if (parent.contains(child)) {
                                parent.removeChild(child)
                            }
                        }
                    });

                    e.addEventListener("click", function () {
                        var v = e.value
                        var parent = e.parentNode
                        if (v === "" || v === undefined) {
                            e.classList.add('check-input')
                            if (!parent.contains(child)) {
                                parent.appendChild(child)
                            }
                        } else {
                            e.classList.remove('check-input') 
                            if (parent.contains(child)) {
                                parent.removeChild(child)
                            }
                        }
                    });

                    e.addEventListener("change", function () {
                        var v = e.value
                        if (v === "" || v === undefined) {
                            e.classList.add('check-input')
                            if (!parent.contains(child)) {
                                parent.appendChild(child)
                            }
                        } else {
                            e.classList.remove('check-input') 
                            if (parent.contains(child)) {
                                parent.removeChild(child)
                            }
                        }
                    });
                    
               })
            }

            forms.forEach(e => {
                check(e)
            })
        }, 
        bai7() {
            var btns = $('.bai7-click')
            var num = 1;
            var btnss = [];

            for (let i = 0; i < 64; i++) {
                var btn = document.createElement('button')
                btn.textContent = `button ${(i + 1)}`
                btn.classList.add('btn4')
                btn.name = `${(i + 1)}`
                btn.classList.add('btn-primary')
                btn.style.margin = '5px 10px'
                btns.appendChild(btn)
                btnss.push(btn)
            }

            btnss.forEach(e => {
                e.onclick = () => {
                    if (e.name == num) {
                        e.classList.add('hidden')
                        ++num
                    } else {
                        alert('Click sai thứ tự, click lại đi')
                        btnss.forEach(e => {
                            if (e.classList.contains('hidden')) {
                                num = 1
                                e.classList.remove('hidden')
                            }
                        })
                    }
                }
            })
        }
    }

    for (let key in callFuntion) {
        // Đảm bảo thuộc tính thuộc về đối tượng, không phải từ prototype
        if (callFuntion.hasOwnProperty(key)) {
            callFuntion[key]();
        }
    }
});
