interface IRoute {
    path: string,
    exact: boolean
}
const Routes: IRoute[] = [
    {
        path: "/",
        exact: true
    },
    {
        path: "/products",
        exact: false
    },
];

export default Routes;