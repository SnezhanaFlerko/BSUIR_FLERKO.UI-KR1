$(document).ready(function () {
    // Инициализация выпадающего списка
    $('.dropdown-toggle').dropdown();

    // Обработчик клика по плашке
    $('.email-badge').on('click', function (e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').toggle();
    });

    // Закрытие выпадающего списка при клике вне его
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });
});
