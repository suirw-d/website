// Анімація sidebar: поява при завантаженні + згортання/розгортання по кнопці

document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.getElementById("sidebar");
    var toggleButton = document.getElementById("sidebar-toggle");
    var items = sidebar.querySelectorAll(".nav-item");

    // Показує sidebar, а потім по черзі пункти меню
    function playIntro() {
        sidebar.classList.add("sidebar-visible");

        items.forEach(function (item, index) {
            setTimeout(function () {
                item.classList.add("item-visible");
            }, 300 + index * 150);
        });
    }

    // Ховає пункти меню (щоб інтро можна було відтворити знову)
    function resetItems() {
        items.forEach(function (item) {
            item.classList.remove("item-visible");
        });
    }

    // Згортання / розгортання sidebar
    function toggleSidebar() {
        var isCollapsed = sidebar.classList.toggle("sidebar-collapsed");

        toggleButton.textContent = isCollapsed
            ? "Показати sidebar"
            : "Сховати sidebar";
        toggleButton.setAttribute("aria-expanded", String(!isCollapsed));

        if (isCollapsed) {
            resetItems();
        } else {
            items.forEach(function (item, index) {
                setTimeout(function () {
                    item.classList.add("item-visible");
                }, 250 + index * 120);
            });
        }
    }

    toggleButton.addEventListener("click", toggleSidebar);

    // Невелика затримка, щоб браузер встиг застосувати початкові стилі
    sidebar.classList.add("sidebar-animated");
    setTimeout(playIntro, 100);
});
