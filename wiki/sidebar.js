document.addEventListener("DOMContentLoaded", function () {
    const sidebarContent = `
        <button class="close-btn">✖</button>
        <nav>
          <h3>Contents</h3>
          <ul>
            <li>
              <a href="https://www.rockhounding.org/wiki/crystallography/index.html">Crystallography</a>
              <ul>
                <li><a href="https://www.rockhounding.org/wiki/crystallography/crystal-growth/index.html">Crystal Growth</a></li>
                <li><a href="https://www.rockhounding.org/wiki/crystallography/crystal-systems/index.html">Crystal Systems</a></li>
                <li><a href="https://www.rockhounding.org/wiki/crystallography/optical-crystallography/index.html">Optical Crystallography</a></li>
                <li><a href="https://www.rockhounding.org/wiki/crystallography/symmetry-operations/index.html">Symmetry Operations</a></li>
                <li><a href="https://www.rockhounding.org/wiki/crystallography/xray-crystallography/index.html">X-ray Crystallography</a></li>
              </ul>
            </li>
            <li>
              <a href="https://www.rockhounding.org/wiki/gemology/index.html">Gemology</a>
              <ul>
                <li><a href="https://www.rockhounding.org/wiki/gemology/gem-identification/index.html">Gem Identification</a></li>
                <li><a href="https://www.rockhounding.org/wiki/gemology/gem-grading/index.html">Gem Grading</a></li>
                <li><a href="https://www.rockhounding.org/wiki/gemology/synthetic-gems/index.html">Synthetic Gems</a></li>
                <li><a href="https://www.rockhounding.org/wiki/gemology/gem-cutting/index.html">Gem Cutting</a></li>
                <li><a href="https://www.rockhounding.org/wiki/gemology/gem-trading/index.html">Gem Trading</a></li>
              </ul>
            </li>
            <li>
              <a href="https://www.rockhounding.org/wiki/geology/index.html">Geology</a>
              <ul>
                <li><a href="https://www.rockhounding.org/wiki/geology/geological-processes/index.html">Geological Processes</a></li>
                <li><a href="https://www.rockhounding.org/wiki/geology/earth-structure/index.html">Earth's Structure</a></li>
                <li><a href="https://www.rockhounding.org/wiki/geology/geological-time/index.html">Geological Time Scales</a></li>
                <li><a href="https://www.rockhounding.org/wiki/geology/earth-materials/index.html">Earth Materials</a></li>
                <li><a href="https://www.rockhounding.org/wiki/geology/geological-mapping/index.html">Geological Mapping</a></li>
              </ul>
            </li>
            <li>
              <a href="https://www.rockhounding.org/wiki/lapidary/index.html">Lapidary</a>
              <ul>
                <li><a href="https://www.rockhounding.org/wiki/lapidary/cutting-techniques/index.html">Cutting Techniques</a></li>
                <li><a href="https://www.rockhounding.org/wiki/lapidary/polishing/index.html">Polishing</a></li>
                <li><a href="https://www.rockhounding.org/wiki/lapidary/jewelry-making/index.html">Jewelry Making</a></li>
                <li><a href="https://www.rockhounding.org/wiki/lapidary/lapidary-equipment/index.html">Lapidary Equipment</a></li>
                <li><a href="https://www.rockhounding.org/wiki/lapidary/gemstone-treatment/index.html">Gemstone Treatment</a></li>
              </ul>
            </li>
            <li>
              <a href="https://www.rockhounding.org/wiki/mineralogy/index.html">Mineralogy</a>
              <ul>
                <li><a href="https://www.rockhounding.org/wiki/mineralogy/mineral-classes/index.html">Mineral Classes</a></li>
                <li><a href="https://www.rockhounding.org/wiki/mineralogy/crystal-chemistry/index.html">Crystal Chemistry</a></li>
                <li><a href="https://www.rockhounding.org/wiki/mineralogy/physical-properties/index.html">Physical Properties of Minerals</a></li>
                <li><a href="https://www.rockhounding.org/wiki/mineralogy/mineral-formation/index.html">Mineral Formation</a></li>
              </ul>
            </li>
            <li>
              <a href="https://www.rockhounding.org/wiki/petrology/index.html">Petrology</a>
              <ul>
                <li><a href="https://www.rockhounding.org/wiki/petrology/igneous-rocks/index.html">Igneous Rocks</a></li>
                <li><a href="https://www.rockhounding.org/wiki/petrology/sedimentary-rocks/index.html">Sedimentary Rocks</a></li>
                <li><a href="https://www.rockhounding.org/wiki/petrology/metamorphic-rocks/index.html">Metamorphic Rocks</a></li>
                <li><a href="https://www.rockhounding.org/wiki/petrology/rock-cycling/index.html">Rock Cycling</a></li>
              </ul>
            </li>
            <li>
              <a href="https://www.rockhounding.org/wiki/rocks-metals-minerals-crystals-and-gemstones/index.html">Rocks, Metals, Minerals, Crystals, & Gemstones</a>
              <ul>
                <li><a href="https://www.rockhounding.org/wiki/rocks-metals-minerals-crystals-and-gemstones/rocks/index.html">Rocks</a></li>
                <li><a href="https://www.rockhounding.org/wiki/rocks-metals-minerals-crystals-and-gemstones/metals/index.html">Metals</a></li>
                <li><a href="https://www.rockhounding.org/wiki/rocks-metals-minerals-crystals-and-gemstones/minerals/index.html">Minerals</a></li>
                <li><a href="https://www.rockhounding.org/wiki/rocks-metals-minerals-crystals-and-gemstones/crystals/index.html">Crystals</a></li>
                <li><a href="https://www.rockhounding.org/wiki/rocks-metals-minerals-crystals-and-gemstones/gemstones/index.html">Gemstones</a></li>
              </ul>
            </li>
          </ul>
        </nav>
    `;

    // Insert the content into the sidebar
    const sidebar = document.querySelector(".wiki-sidebar");
    sidebar.innerHTML = sidebarContent;

    // Create the floating button
    const floatingButton = document.createElement('div');
    floatingButton.classList.add('floating-btn');
    floatingButton.textContent = 'Wiki Menu'; // Text-based button
    document.body.appendChild(floatingButton);

    // Add click event to the floating button to toggle the sidebar
    floatingButton.addEventListener('click', function () {
        sidebar.classList.toggle('show'); // Toggles the 'show' class to display the sidebar
    });

    // Add click event to the close icon inside the sidebar
    const closeButton = sidebar.querySelector('.close-btn');
    closeButton.addEventListener('click', function () {
        sidebar.classList.remove('show'); // Hide the sidebar
    });

    if (activeLink) {
        activeLink.style.fontWeight = "bold";
        activeLink.style.backgroundColor = "#FFD700";
        activeLink.style.color = "#8B4513";
        activeLink.style.padding = "5px 10px";
        activeLink.style.borderRadius = "5px";
    }
});
