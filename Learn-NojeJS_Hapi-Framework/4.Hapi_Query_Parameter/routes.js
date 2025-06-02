const SetRoute = [
        {
            method: "GET",
            path: "/",
            handler: (Request, h) => {
                return "Homepage";
            }
        },

        {
            method: "*",
            path: "/",
            handler: (request, h) => {
                return "Page cannot access with that method";
            }
        },

        {
            method: 'GET',
            path: '/about',
            handler: (request, h) => {
                return 'About page';
            },
        },

        {
            method: "*",
            path: "/about",
            handler: (request, h) => {
                return "Page cannot access with that method";
            }
        },

        {
            method: 'GET',
            path: '/hello/{name?}',
            handler: (request, h) => {
                const { name = "stranger" } = request.params;
                const { lang } = request.query;

                if(lang === 'id') {
                    return `Hai, ${name}!\nBagaimana kabarmu hari ini ?`;
                }

                return `Hello, ${name}!\nHow are you today ?`;
            },
        },

        {
            method: "*",
            path: "/{any*}",
            handler: (request, h) => {
                return "Page not found";
            }
        }

];

module.exports = SetRoute;