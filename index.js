const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)

        const tabs = $$('.tab-item')
        const panes = $$('.tab-pane')

            // div line chuyển động theo khi click từng Tab-item
        const tabActive = $('.tab-item.pagination-item__active') 

    
        tabs.forEach((tab, index) => {
            const pane = panes[index]

            tab.onclick = function () {

                $('.tab-item.pagination-item__active').classList.remove('pagination-item__active')
                $('.tab-pane.active').classList.remove('active')


                this.classList.add('pagination-item__active')
                pane.classList.add('active')
            }
        })

//  Modal mua hàng

const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')


        // Hàm hiển thị modal mua vé (thêm class open vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }

        // hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        // Lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        // nghe hành vi click vào button close
        modalClose.addEventListener('click', hideBuyTickets)

        modal.addEventListener('click', hideBuyTickets)

        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation( )
        })