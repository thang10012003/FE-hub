// sticky header
const header = document.querySelector(".header");
const stickyHeaderLogo = document.querySelector(".header-logo");
const handleStickyHeader = () => {
  const stickyClassList =
    "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition shadow-md".split(
      " "
    );

  if (window.scrollY >= 80) {
    // for header
    header.classList.add(...stickyClassList);
    header.classList.remove("absolute", "bg-transparent");
    // for header logo
    stickyHeaderLogo.classList.add("py-5", "lg:py-3");
    stickyHeaderLogo.classList.remove("py-8");
  } else {
    // for header
    header.classList.remove(...stickyClassList);
    header.classList.add("absolute", "bg-transparent");
    // for header logo
    stickyHeaderLogo.classList.add("py-8");
    stickyHeaderLogo.classList.remove("py-5", "lg:py-3");
  }
};
window.addEventListener("scroll", handleStickyHeader);

const navbarToggleHandler = () => {
  const navbarToggler = document.getElementById("navbarToggler");
  const navbarCollapse = document.getElementById("navbarCollapse");

  // navbar toggler transition
  const navbarTogglerFirstChild = navbarToggler.firstElementChild;
  const navbarTogglerSecondChild = navbarToggler.children[1];
  const navbarTogglerThirdChild = navbarToggler.lastElementChild;

  if (navbarToggler.classList.contains("open")) {
    navbarToggler.classList.remove("open");
    // navbar transition
    navbarTogglerFirstChild.classList.remove("top-[7px]", "rotate-45");
    navbarTogglerSecondChild.classList.remove("opacity-0");
    navbarTogglerThirdChild.classList.remove("top-[-8px]", "-rotate-45");
    // navbar collapse
    navbarCollapse.classList.remove("visibility", "top-full", "opacity-100");
    navbarCollapse.classList.add("invisible", "top-[120%]", "opacity-0");
  } else {
    navbarToggler.classList.add("open");
    // navbar toggler transition
    navbarTogglerFirstChild.classList.add("top-[7px]", "rotate-45");
    navbarTogglerSecondChild.classList.add("opacity-0");
    navbarTogglerThirdChild.classList.add("top-[-8px]", "-rotate-45");
    // navbar collapse
    navbarCollapse.classList.add("visibility", "top-full", "opacity-100");
    navbarCollapse.classList.remove("invisible", "top-[120%]", "opacity-0");
  }
};

// on loading
document.addEventListener("DOMContentLoaded", () => {
  const navMenuData = [
    {
      id: 1,
      title: "Home",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: "About",
      path: "/about",
      newTab: false,
    },
    {
      id: 33,
      title: "Blog",
      path: "/blog",
      newTab: false,
    },
    {
      id: 3,
      title: "Support",
      path: "/contact",
      newTab: false,
    },
    {
      id: 4,
      title: "Pages",
      newTab: false,
      submenu: [
        {
          id: 41,
          title: "About Page",
          path: "/about",
          newTab: false,
        },
        {
          id: 42,
          title: "Contact Page",
          path: "/contact",
          newTab: false,
        },
        {
          id: 43,
          title: "Blog Grid Page",
          path: "/blog",
          newTab: false,
        },
        {
          id: 44,
          title: "Blog Sidebar Page",
          path: "/blog-sidebar",
          newTab: false,
        },
        {
          id: 45,
          title: "Blog Details Page",
          path: "/blog-details",
          newTab: false,
        },
        {
          id: 46,
          title: "Sign In Page",
          path: "/signin",
          newTab: false,
        },
        {
          id: 47,
          title: "Sign Up Page",
          path: "/signup",
          newTab: false,
        },
        {
          id: 48,
          title: "Error Page",
          path: "/error",
          newTab: false,
        },
      ],
    },
  ];
  const curPathName = window.location.pathname.split("/").pop();
  const mapMenuDataToNavbar = (navbarCollapse, curPathName) => {
    const navbarCollapseUl = document.createElement("ul");
    navbarCollapseUl.classList.add("block", "lg:flex", "lg:space-x-12");

    navMenuData.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      li.classList.add("group", "relative");
      li.key = item.id;
      if (item.path) {
        a.href = item.path;
        a.textContent = item.title;
        a.classList.add(
          "flex",
          "py-2",
          "text-base",
          "lg:mr-0",
          "lg:inline-flex",
          "lg:px-0",
          "lg:py-6"
        );
        console.log(curPathName);

        if (
          curPathName === item.path ||
          (curPathName === "index.html" && item.path === "/")
        ) {
          a.classList.add("text-primary", "dark:text-white");
        } else {
          a.classList.add(
            "text-dark",
            "hover:text-primary",
            "dark:text-white/70",
            "dark:hover:text-white"
          );
        }
      }
      if (item.newTab) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      li.appendChild(a);
      navbarCollapseUl.appendChild(li);
    });

    navbarCollapse.appendChild(navbarCollapseUl);
  };
  const navbarCollapse = document.getElementById("navbarCollapse");
  mapMenuDataToNavbar(navbarCollapse, curPathName);
});
