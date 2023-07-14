import { car1, car2, car3, car4 } from "../assets";
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
export const sectionImageBoxes =[
    {
        section_top_name:"Supercars",
        section_bottom_name:"Discover",
        image_card:car1,
        id:1
    },
    {
        section_top_name:"Sportcars",
        section_bottom_name:"Discover",
        image_card:car2,
        id:2
    },{
        section_top_name:"SUV",
        section_bottom_name:"Discover",
        image_card:car3,
        id:3
    },{
        section_top_name:"Supersuv",
        section_bottom_name:"Discover",
        image_card:car4,
        id:4
    },
]