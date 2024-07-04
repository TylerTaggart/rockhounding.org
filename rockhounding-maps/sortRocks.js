document.addEventListener("DOMContentLoaded", function () {
  const typeOfRockNavItems = document.querySelectorAll(".type-of-rock .nav-filter");
  const colorOfRockNavItems = document.querySelectorAll(".color-of-rock .nav-filter");
  const fossilTypeNavItems = document.querySelectorAll(".fossil-type .nav-filter");
  const colorOfRockNav = document.querySelector(".color-of-rock");
  const fossilTypeNav = document.querySelector(".fossil-type");
  const metalTypeNavItems = document.querySelectorAll(".metal-type .nav-filter");
  const metalTypeNav = document.querySelector(".metal-type");

  function handleListItemClick() {
    const parentList = this.parentElement;
    parentList.querySelectorAll(".nav-filter").forEach(item => {
      if (item !== this) {
        item.classList.remove("active");
      }
    });
    this.classList.toggle("active");
  
    // Check which category is active
    const activeTypeOfRock = document.querySelector(".type-of-rock .nav-filter.active");
  
    if (activeTypeOfRock && activeTypeOfRock.dataset.category === "fossil") {
      colorOfRockNav.classList.add("hidden");
      fossilTypeNav.classList.remove("hidden");
      metalTypeNav.classList.add("hidden");
  
      // Remove active class from all items in "color-of-rock" and "metal-type"
      colorOfRockNavItems.forEach(item => {
        item.classList.remove("active");
      });
      metalTypeNavItems.forEach(item => {
        item.classList.remove("active");
      });
    } else if (activeTypeOfRock && ["mineral", "crystal"].includes(activeTypeOfRock.dataset.category)) {
      fossilTypeNav.classList.add("hidden");
      colorOfRockNav.classList.remove("hidden");
      metalTypeNav.classList.add("hidden");
  
      // Remove active class from all items in "fossil-type" and "metal-type"
      fossilTypeNavItems.forEach(item => {
        item.classList.remove("active");
      });
      metalTypeNavItems.forEach(item => {
        item.classList.remove("active");
      });
    } else if (activeTypeOfRock && activeTypeOfRock.dataset.category === "metal") {
      fossilTypeNav.classList.add("hidden");
      colorOfRockNav.classList.add("hidden");
      metalTypeNav.classList.remove("hidden");
  
      // Remove active class from all items in "fossil-type" and "color-of-rock"
      fossilTypeNavItems.forEach(item => {
        item.classList.remove("active");
      });
      colorOfRockNavItems.forEach(item => {
        item.classList.remove("active");
      });
    } else {
      fossilTypeNav.classList.add("hidden");
      colorOfRockNav.classList.add("hidden");
      metalTypeNav.classList.add("hidden");
    }
    console.log(getActiveCategories());
    filterRocksFoundHere(getActiveCategories());
    filterPopularAreas(getActiveCategories());
  }
  
  

  typeOfRockNavItems.forEach(navItem => {
    navItem.addEventListener("click", handleListItemClick);
  });

  colorOfRockNavItems.forEach(navItem => {
    navItem.addEventListener("click", handleListItemClick);
  });

  fossilTypeNavItems.forEach(navItem => {
    navItem.addEventListener("click", handleListItemClick);
  });

  // Add this loop to handle clicks on "metal-type" list items
  metalTypeNavItems.forEach(navItem => {
    navItem.addEventListener("click", handleListItemClick);
  });
});

function getActiveCategories() {
  const activeCategories = [];

  // Find active list items in each category
  const activeTypeOfRockItems = document.querySelectorAll(".type-of-rock .nav-filter.active");
  const activeColorOfRockItems = document.querySelectorAll(".color-of-rock .nav-filter.active");
  const activeFossilTypeItems = document.querySelectorAll(".fossil-type .nav-filter.active");
  const activeMetalTypeItems = document.querySelectorAll(".metal-type .nav-filter.active");

  // Helper function to extract 'data-category' attribute and add it to 'activeCategories' array
  function extractDataCategory(item) {
    activeCategories.push(item.dataset.category);
  }

  // Iterate through each active list item and extract 'data-category' attribute
  activeTypeOfRockItems.forEach(extractDataCategory);
  activeColorOfRockItems.forEach(extractDataCategory);
  activeFossilTypeItems.forEach(extractDataCategory);
  activeMetalTypeItems.forEach(extractDataCategory);

  return activeCategories;
}

function filterRocksFoundHere(activeCategories) {
  const rocksFoundHereListItems = document.querySelectorAll(".rocks-found-here li");

  rocksFoundHereListItems.forEach(item => {
    const hasAllCategories = activeCategories.every(category => item.classList.contains(category));

    if (hasAllCategories) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

function filterPopularAreas(activeCategories) {
  const popularAreasListItems = document.querySelectorAll(".list-of-popular-areas li");

  popularAreasListItems.forEach(item => {
    const hasAllCategories = activeCategories.every(category => item.classList.contains(category));

    if (hasAllCategories) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}
