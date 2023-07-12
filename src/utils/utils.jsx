import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";
import { TermsPage } from "../pages/TermsPage";

export const NavEl = [
    {
        path: "/home",
        page: <HomePage />,
        pagename: "Home",
        id: 1
    },
    {
        path: "/cars",
        page: <CarsPage />,
        pagename: "Cars",
        id: 2
    },
    {
        path: "/book",
        page: <BookNowPage />,
        pagename: "Book now",
        id: 3
    },
    {
        path: "/terms",
        page: <TermsPage />,
        pagename: "Terms and Conditions",
        id: 4
    },

]
export const footerLi = [
    {
        name: "Company",
        id: 1,
        style:"listTwo-item"
    }, {
        name: "About Us",
        style:"list-item",
        id: 2,
    }, {
        name: "Product",
        style:"list-item",
        id: 2,
    }, {
        name: "Testimonial",
        style:"list-item",
        id: 2,
    }
]
export const footerLiTwo = [
    {
        name: "Support",
        id: 1,
        style:"listTwo-item"
    }, {
        name: "FAQ",
        style:"list-item",
        id: 2,
    }, {
        name: "Privacy Policy",
        style:"list-item",
        id: 2,
    }, {
        name: "Terms of Services",
        style:"list-item",
        id: 2,
    }
]
export const footerLiThree = [
    {
        name: "Category",
        id: 1,
        style:"listTwo-item"
    }, {
        name: "Super Cars",
        style:"list-item",
        id: 2,
    }, {
        name: "Sport Cars",
        style:"list-item",
        id: 2,
    }, {
        name: "More Cars",
        style:"list-item",
        id: 2,
    }
]