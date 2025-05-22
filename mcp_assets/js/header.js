// -------------------------------------------------
// Handler
// -------------------------------------------------
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
const themeToggleHandler = (tar) => {
  currentTheme = localStorage.getItem("theme") || "dark";
  // tar is the target element
  const ligtIcon = tar.firstElementChild;
  const darkIcon = tar.lastElementChild;
  // toggle theme
  if (currentTheme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

// -------------------------------------------------
// Sticky Header
// -------------------------------------------------
const header = document.querySelector(".header");
const stickyHeaderLogo = document.querySelector(".header-logo");
const handleStickyHeader = () => {
  const stickyHeaderClassList =
    "dark:shadow-sticky-dark fixed z-[9999] bg-[rgba(252,252,252,0.8)] dark:bg-[rgba(30,35,46,0.85)] shadow-sticky backdrop-blur-sm transition shadow-md".split(
      " "
    );

  if (window.scrollY >= 80) {
    // for header
    header.classList.remove("absolute", "bg-transparent");
    header.classList.add(...stickyHeaderClassList);
    // for header logo
    stickyHeaderLogo.classList.add("py-5", "lg:py-3");
    stickyHeaderLogo.classList.remove("py-8");
  } else {
    // for header
    header.classList.add("absolute", "bg-transparent");
    header.classList.remove(...stickyHeaderClassList);
    // for header logo
    stickyHeaderLogo.classList.add("py-8");
    stickyHeaderLogo.classList.remove("py-5", "lg:py-3");
  }
};
window.addEventListener("scroll", handleStickyHeader);

// -------------------------------------------------
// Add navbar elements
// -------------------------------------------------

const navMenuData = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "#home",
  //   newTab: false,
  // },
  {
    id: 2,
    title: "Browse All",
    path: "#server",
    newTab: false,
  },
  {
    id: 33,
    title: "Categories",
    path: "#categories",
    newTab: false,
  },
  {
    id: 3,
    title: "Leaderboard",
    path: "#leaderboard",
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

const mapMenuDataToNavbar = (navbarCollapseUl, curPathName) => {
  navbarCollapseUl.classList.add(
    "block",
    "lg:flex",
    "lg:gap-6",
    "lg:items-center"
  );

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
        // "lg:mr-0",
        "lg:inline-flex",
        "lg:px-0",
        "lg:py-6"
      );

      if (
        curPathName === item.path ||
        (curPathName === "index.html" && item.path === "/")
      ) {
        a.classList.add("text-primary", "dark:text-white");
      } else {
        a.classList.add(
          "text-dark",
          "hover:text-primary",
          "dark:text-[rgba(255,255,255,0.7)]",
          "dark:hover:text-white"
        );
      }
    }
    if (item.newTab) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    // if a is not empty, append it to li

    if (a.innerHTML !== "") {
      li.appendChild(a);
      navbarCollapseUl.appendChild(li);
    }
  });
};
const navbarList = document.getElementById("navbarList");
const curPathName = window.location.pathname.split("/").pop();
mapMenuDataToNavbar(navbarList, curPathName);
