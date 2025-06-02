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
        }

];

module.exports = SetRoute;