const img_path = `./pictures/projects/`;
export const project_data = {
  react: [
    {
      id: 1,
      name: `Portfolio site`,
      type: `react`,
      url: `https://github.com/pp2903/Portfolio-site`,
      img: [
        `${img_path}portfolio/1.png`,
        `${img_path}portfolio/2.png`,
        `${img_path}portfolio/3.png`,
      ],
      description: `My portfolio website is built using HTML, CSS, JavaScript, and React.js. It's a dynamic showcase of my work, with an inviting homepage, detailed project pages, and a contact section. Thanks to responsive design and interactive features, it effectively presents my skills and projects.`,
      link: `https://pranshupriyam.netlify.app/`,
      technologies: [
        `html`,
        `css`,
        `js`,
        `react`,
        `git`,
        `docker`,
        `material-ui`,
        `redux`,
      ],
    },
    {
      id: 2,
      name: `Stripe clone`,
      type: `react`,
      url: `https://github.com/pp2903/Stripe-Clone`,
      img: [
        `${img_path}stripe-clone/1.png`,
        `${img_path}stripe-clone/2.png`,
        `${img_path}stripe-clone/3.png`,
      ],
      link:"https://stripeclone29.netlify.app/",
      description: `In my React project, I've created a clone of the Stripe website, emphasizing a modular structure with component-based architecture. Utilizing React hooks such as useState, useEffect, and custom hooks ensures streamlined state management and enhances code reusability. The project highlights dynamic data rendering, responsive design,`,

      technologies: [`html`, `css`, `js`, `react`, `git`],
    },

    {
      id: 3,
      name: `Shopping Cart`,
      type: `react`,

      url: `https://github.com/pp2903/CartApp`,
      img: [
        `${img_path}cart/1.png`,
        `${img_path}cart/2.png`,
        `${img_path}cart/3.png`,
      ],
      link: "https://reduxcartapplication29.netlify.app/",
      description: `The React project utilizes useEffect and useReducer hooks to manage a shopping cart. Users can add and remove items, with the total number of items and the overall price dynamically updating. Product data is hardcoded, and the project provides a straightforward example of state management in a React application. `,
      technologies: [`html`, `css`, `js`, `react`, `git`, `redux`],
    },
  ],

  django: [
    {
      id: 1,
      name: `Django CRM`,
      type: `django`,
      url: `https://github.com/pp2903/Django_CRM_project`,
      img: [`${img_path}django-crm/1.png`],
      description: `In my Django CRM project, I've crafted a feature-rich Customer Relationship Management system with user authentication. Admin can add or remove users from the website. `,
      technologies: [
        `html`,
        `css`,
        `js`,
        `python`,
        `django`,
        `bootstrap`,
        `git`,
      ],
    },
    {
      id: 2,
      name: `Mark's Pizzeria`,
      type: `django`,
      url: `https://github.com/pp2903/PizzaSite/tree/master`,
      img: [`${img_path}mp/1.png`,`${img_path}mp/2.png`,`${img_path}mp/3.png`,`${img_path}mp/4.png`,`${img_path}mp/5.png`,`${img_path}mp/6.png`,`${img_path}mp/7.png`,`${img_path}mp/8.png`],
      description: `In Mark's Pizzeria, users experience seamless login/logout functionality while browsing a diverse selection of pizzas. The platform offers an engaging interface for users to explore and order pizzas, ensuring a delightful and personalized experience within the world of Mark's Pizzeria.`,
      link: `http://64.227.154.180/`,
      technologies: [
        `html`,
        `css`,
        `js`,
        `python`,
        `django`,
        `bootstrap`,
        `git`,
        `nginx`,
        `digital-ocean`,
        `razorpay`,
      ],
    },
  ],
};
