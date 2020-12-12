const $$ = {
    p: function() {
        //Переменные
        let urlh = document.location.href;
        let url = new URL(urlh);
        //Функции
        function get_param(name) {
            let r = url.searchParams.get(name);
            return r;
        };
        function set_param(name, value) {
            url.searchParams.set(name, value);
            document.location.href = url.href;
        };
        function delete_param(name) {
            url.searchParams.delete(name);
            document.location.href = url.href;
        };
        //Вывод
        let res = {
            get: get_param,
            set: set_param,
            del: delete_param
        };
        return res;
    }
};