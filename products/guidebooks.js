const guidebooks = [
    {
        title: "Southeast Treasure Hunter's Gem & Mineral Guide",
        url: "https://amzn.to/3zxvt73",
        image: "1",
        description: "Whether you’re digging for the first time or are an experienced rockhound or “prospector,” with a simple rock hammer and a little luck, you too can strike it rich ... or at the very least, have fun trying.\n\nThis guide offers you easy-to-use information on the ins and outs of “fee dig” mining, complete with locations, costs, tips on technique, entertaining legends and important information on everything from safety kits to the location of the nearest restrooms.",
        states: ["Missouri", "Arkansas", "Louisiana", "Mississippi", "Tennessee", "Kentucky", "West Virginia", "Virginia", "North Carolina", "South Carolina", "Georgia", "Florida"]
    },
    {
        title: "Rockhounding Alaska: A Guide to 80 of the State's Best Rockhounding Sites",
        url: "https://amzn.to/4bCkabf",
        image: "2",
        description: "Rockhounding Alaska is a must-have book for collecting rocks, minerals, and fossils in the Last Frontier. This guidebook features an overview of the state’s geologic history as well as a site-by-site guide to seventy-five collecting locations that stretch from Kodiak Island to the Arctic Circle, with treasures ranging from ancient fossilized sea creatures to precious gems and gold nuggets.",
        states: ["Alaska"]
    },
    {
        title: "Rockhounding Alaska: A Guide to 75 of the State's Best Rockhounding Sites",
        url: "https://amzn.to/3Wgc1Vq",
        image: "3",
        description: "Rockhounding Alaska will be an in-depth guide to the rocks, minerals and fossils legally found and collected within the state. The book will contain a light, informative overview of the geologic history of Alaska as well as a site-by-site guide to approximately 70 collecting locations. Included with every site will be clear concise driving directions, a GPS position and list of major attractions and local amenities. The exciting locations stretch from Kodiak Island to the Arctic Circle and range from ancient fossilized sea creatures to precious gems and gold nuggets.",
        states: ["Alaska"]
    },
    {
        title: "Rockhounding Arizona: A Guide To 75 Of The State's Best Rockhounding Sites",
        url: "https://amzn.to/4bwIzio",
        image: "4",
        description: "Rockhounding Arizona covers popular and commercial sites as well as little-known areas. It describes where to view mineral specimens and prehistoric artifacts at Grand Canyon and Petrified Forest national parks, as well as on tribal lands. Brimming with advice on collecting and preparing gems and minerals, this handy reference also includes maps, and directions to each site as well as to museums, rock shops, and major tracts of public land. For the beginner, it offers a complete introduction to this many-faceted hobby. For the expert, it is an outstanding guide and sourcebook.",
        states: ["Arizona"]
    },
    {
        title: "Rockhounding Arizona: A Guide to the State’s Best Rockhounding Sites",
        url: "https://amzn.to/3S2Zdz7",
        image: "5",
        description: "Explore the mineral-rich region of Arizona with veteran rockhound Robert Beard’s Rockhounding Arizona, 3rd Edition. Fully revised and updated, unearth treasures from the state’s best rockhounding locations, ranging from popular and commercial sites to numerous lesser-known areas. Featuring an overview of the state’s geologic history as well as site-by-site chapters, Rockhounding Arizona is the ideal resource for rock seekers and collectors of all ages and experience levels.",
        states: ["Arizona"]
    },
    {
        title: "Southwest Treasure Hunter's Gem and Mineral Guide",
        url: "https://amzn.to/3RXw5t6",
        image: "6",
        description: "Whether you're digging for the first time or are an experienced rockhound or \"prospector,\" with a simple rock hammer and a little luck, you too can strike it rich ... or at the very least, have fun trying.\n\nThis guide offers you easy-to-use information on the ins and outs of \"fee dig\" mining, complete with locations, costs, tips on technique, entertaining legends and important information on everything from safety kits to the location of the nearest restrooms.",
        states: ["Arizona", "California", "Nevada", "Utah", "Colorado", "Kansas", "Oklahoma", "Texas"]
    },
    {
        title: "Rockhounding California: A Guide To The State's Best Rockhounding Sites",
        url: "https://amzn.to/3XYsdvW",
        image: "7",
        description: "Although known for its gold production, California is a virtual haven for rock and gem collectors. With this fully revised and updated edition, you can explore the mineral-rich desert regions, comb tide-washed beaches for jade, agate, abalone, fossilized whale bone, and prospect in the mountains and hills for gold, copper, and other minerals and gems. It describes 75 of the state's best rockhounding sites and covers popular and commercial sites as well as numerous little-known areas. This handy guide also describes how to collect specimens, includes maps, directions, and GPS coordinates for each site, and lists rockhound clubs around the state. Rockhounding California offers a complete introduction to this many-faceted hobby.",
        states: ["California"]
    },
    {
        title: "Rockhounding Northern California: A Guide to the Region's Best Rockhounding Sites",
        url: "https://amzn.to/4bB1UyW",
        image: "8",
        description: "Explore the mineral-rich region of Northern California with Rockhounding Northern California and unearth the state’s best rockhounding sites, ranging from popular and commercial sites to numerous lesser-known areas. Featuring an overview of the state’s geologic history as well as a site-by-site guide to the best rockhounding locations, Rockhounding Northern California is the ideal resource for rockhounds of all ages and experience levels.",
        states: ["California"]
    },
    {
        title: "Rockhounding Southern California: A Guide to the Area's Best Rockhounding Sites",
        url: "https://amzn.to/4bExkEq",
        image: "9",
        description: "Although known for its gold production, California is a virtual haven for rock and gem collectors. With Rockhounding Southern California, you can explore the mineral-rich desert regions, comb tide-washed beaches for jade, agate, abalone, fossilized whale bone, and prospect in the mountains and hills for gold, copper, and other minerals and gems. It describes the state's best rockhounding sites and covers popular and commercial sites as well as numerous little-known areas. This handy guide also describes how to collect specimens, includes maps, directions, and GPS coordinates for each site, and lists rockhound clubs around the state. Rockhounding Southern California offers a complete introduction to this many-faceted hobby.",
        states: ["California"]
    },
    {
        title: "Rockhounding Colorado: A Guide to the State's Best Rockhounding Sites",
        url: "https://amzn.to/4eXbNK7",
        image: "10",
        description: "Rockhounding Colorado takes you to 100 of the best rockhounding sites in the state. Search for amethyst and quartz at the Crystal Hill Mine, check out the view at Douglas Pass while looking for leaf imprints and insect fossils, or head to Saint Peters Dome to uncover green, white, and purple fluorite.",
        states: ["Colorado"]
    },
    {
        title: "Gem Trails of Colorado",
        url: "https://amzn.to/465xvHR",
        image: "11",
        description: "Indespensible guide for rock, mineral and fossil collectors in Colorado. Features more than 90 locations throughout the state for collecting or exploring. Each site has descriptive text, directions and map. There are numerous site photos and a full-color specimen insert. Also lists of rock and mineral clubs, mineral museums and mine tours, a mineral locator index and glossary. Truly a helpful guidebook for either the amateur or experienced gem and fossil hunter.",
        states: ["Colorado"]
    },
    {
        title: "Rockhounding New England: A Guide to 100 of the Region's Best Rockhounding Sites",
        url: "https://amzn.to/45WOWdI",
        image: "12",
        description: "New England is one of the best regions in the country for rockhounds to hunt for minerals, gems, and fossils. The complex geology of the region hosts a stunning variety of material from gold-bearing placers to fossiliferous limestone; from gem-bearing pegmatites to rocks containing some of the rarest minerals on Earth. This book provides detailed directions and GPS coordinates to the best sites with valuable tips on what to tools to bring and how to conduct your search.",
        states: ["Maine", "Vermont", "New Hampshire", "Massachusetts", "Connecticut", "Rhode Island"]
    },
    {
        title: "Rockhounding Delaware, Maryland, and the Washington, DC Metro Area",
        url: "https://amzn.to/4cEUTi4",
        image: "13",
        description: "With this informative guide, you can explore the mineral-rich areas' of Delaware, Maryland, and Washington D.C., from the beaches to the mountains. It describes the areas' best rockhounding sites and covers popular and commercial sites as well as numerous little-known areas. This handy guide also describes how to collect specimens, includes maps and directions to each site, and lists rockhound clubs. Rockhounding Delaware, Maryland, and Washington D.C. offers a complete introduction to this many-faceted hobby and is an invaluable sourcebook.",
        states: ["Delaware", "Maryland"]
    },
    {
        title: "The Rocks Of Georgia: A full-color photo guide",
        url: "https://amzn.to/4cw8Uyn",
        image: "14",
        description: "The Rocks Of Georgia what they look like, how they formed and where to find them.",
        states: ["Georgia"]
    },
    {
        title: "Rockhounding Idaho: A Guide to 99 of the State's Best Rockhounding Sites",
        url: "https://amzn.to/4eTLvbH",
        image: "15",
        description: "A complete guide to finding, collecting, and preparing the state’s gems & minerals.\nRockhounding Idaho is a must-have book for anyone interested in collecting rocks, minerals, fossils, and gold in the Gem State. Completely up-to-date with over 200 GPS coordinates in ninety-nine collecting locales, it covers popular and widely known fee-dig operations as well as four-wheel-drive adventures into the desert, and long winding drives through the mountains. The result is a complete and accurate guide to the state’s vast riches.",
        states: ["Idaho"]
    },
    {
        title: "Rockhounding Idaho: A Guide to 99 of the State's Best Rockhounding Sites",
        url: "https://amzn.to/3XRS4FJ",
        image: "16",
        description: "A complete guide to finding, collecting, and preparing the state’s gems & minerals.\nRockhounding Idaho is a must-have book for anyone interested in collecting rocks, minerals, fossils, and gold in the Gem State. Completely up-to-date with over 200 GPS coordinates in ninety-nine collecting locales, it covers popular and widely known fee-dig operations as well as four-wheel-drive adventures into the desert, and long winding drives through the mountains. The result is a complete and accurate guide to the state’s vast riches.",
        states: ["Idaho"]
    },
    {
        title: "Northwest Treasure Hunter's Gem and Mineral Guide",
        url: "https://amzn.to/4eXqxZC",
        image: "17",
        description: "Whether you're digging for the first time or are an experienced rockhound or \"prospector,\" with a simple rock hammer and a little luck, you too can strike it rich ... or at the very least, have fun trying.\n\nThis guide offers you easy-to-use information on the ins and outs of “fee dig” mining, complete with locations, costs, tips on technique, entertaining legends and important information on everything from safety kits to the location of the nearest restrooms.\n\nIncluded are resources for use in identifying your finds, exploring the lapidary arts, and further pursuing an exciting―and possibly profitable―hobby.",
        states: ["Alaska", "Washington", "Oregon", "Idaho", "Montana", "Wyoming", "North Dakota", "South Dakota", "Nebraska", "Minnesota", "Iowa"]
    },
    {
        title: "Rocks & Minerals of Wisconsin, Illinois & Iowa",
        url: "https://amzn.to/3VVXcpx",
        image: "18",
        description: "Identify and collect rocks and minerals with the perfect guide to the Heartland. With this famous field guide by Dan R. Lynch and Bob Lynch, field identification is simple and informative. The book features comprehensive entries for 96 rocks and minerals, from common rocks to rare finds. That means you’re more likely to identify what you’ve found. The authors know rocks and took their own full-color photographs to depict the detail needed for identification—no more guessing from line drawings. The field guide’s easy-to-use format helps you to quickly find what you need to know and where to look.",
        states: ["Wisconsin", "Illinois", "Iowa"]
    },
    {
        title: "Indiana Rocks!: A Guide to Geologic Sites in the Hoosier State",
        url: "https://amzn.to/3LhKxIQ",
        image: "19",
        description: "A Story of oceans, uplift, and ice, Indiana's geological history is reflected in the vistas and landscapes you will see as you travel through the state. From the Indiana Dunes of Lake Michigan, one of the world's largest displays of lakeshore dunes, to the historic little town of New Harmony, where American geology had its beginnings, this book is your guide to 50 of the most significant and interesting sites in Indiana. You will find kettle lakes formed by melting glaciers, gorgeous waterfalls carved into the rock, and a world-renowned karst landscape peppered with sinkholes and caves. Explore the Falls of the Ohio, the location of the largest exposed Devonian fossil beds in the world, or wander through the campus of Indiana University and tour the buildings and carvings of Salem Limestone, a building stone treasured by architects. Researched and written by Polly Sturgeon, the Outreach Coordinator of the Indiana Geological and Water Survey, with help from her colleagues, this book is a cross section of the Hoosier state and a treasure of geological and historical surprises.",
        states: ["Indiana"]
    },
    {
        title: "Rockhounding & Prospecting: Upper Midwest",
        url: "https://amzn.to/3LetbfX",
        image: "20",
        description: "Agates, copper, gold—you want to find them! But if you’re searching without a plan, the odds are stacked against you. Whether you’re new to rock hunting or already hold an interest, prospecting is the way to maximize your success. This beginner’s guide by rockhounding expert Jim Magnuson helps you to confidently hunt for a variety of collectible and valuable gems and minerals, including agates, fossils, geodes, and gold.",
        states: ["Michigan", "Kansas", "Minnesota", "Wisconsin"]
    },
    {
        title: "Rockhounding Delaware, Maryland, and the Washington, DC Metro Area",
        url: "https://amzn.to/4cEUTi4",
        image: "21",
        description: "With this informative guide, you can explore the mineral-rich areas' of Delaware, Maryland, and Washington D.C., from the beaches to the mountains. It describes the areas' best rockhounding sites and covers popular and commercial sites as well as numerous little-known areas. This handy guide also describes how to collect specimens, includes maps and directions to each site, and lists rockhound clubs. Rockhounding Delaware, Maryland, and Washington D.C. offers a complete introduction to this many-faceted hobby and is an invaluable sourcebook.",
        states: ["Delaware", "Maryland"]
    },
    {
        title: "Lake Michigan Rock Picker's Guide",
        url: "https://amzn.to/4bHNa1c",
        image: "22",
        description: "An eagerly awaited rock identification guide for Lake Michigan.",
        states: ["Michigan"]
    },
    {
        title: "Michigan Rocks & Minerals: A Field Guide to the Great Lake State",
        url: "https://amzn.to/3VW8Fpa",
        image: "23",
        description: "Identify and collect rocks and minerals with the perfect guide to the Great Lake State! With this famous field guide by Dan R. Lynch and Bob Lynch, field identification is simple and informative. The book features comprehensive entries for 96 rocks and minerals, from common rocks to rare finds. That means you’re more likely to identify what you’ve found. The authors know rocks and took their own full-color photographs to depict the detail needed for identification—no more guessing from line drawings. The field guide’s easy-to-use format helps you to quickly find what you need to know and where to look.",
        states: ["Michigan"]
    },
    {
        title: "Lake Superior Rocks & Minerals Field Guide",
        url: "https://amzn.to/3LijVas",
        image: "24.png",
        description: "Get the perfect guide to rocks and minerals of the Lake Superior region! With the new edition of this famous guide by Bob Lynch and Dan R. Lynch, field identification is simple and informative. This book features comprehensive entries for 75 rocks and minerals, from common rocks to rare finds. That means you’re more likely to identify what you’ve found. The authors know rocks and took their own full-color photographs to depict the detail needed for identification—no more guessing from line drawings. The entries are organized by area, so you can find rocks unique to each state or common to all three. The field guide’s easy-to-use format helps you to quickly find what you need to know and where to look.",
        states: ["Minnesota"]
    },
    {
        title: "Rockhounding Montana: A Guide to 100 of Montana's Best Rockhounding Sites",
        url: "https://amzn.to/4bGOeSW",
        image: "25",
        description: "With this informative, fully updated and revised guide, you can explore the mineral-rich region of Montana. It describes the state's best rockhounding sites and covers popular and commercial sites as well as numerous little-known areas. This handy guide also describes how to collect specimens, includes maps and directions to each site, and lists rockhound clubs around the state. This is truly a complete guide to popular collecting sites in Montana and source-book brimming with advice that can be of use to both the novice and the experienced rockhounder.",
        states: ["Montana"]
    },
    {
        title: "Rockhounding Nevada: A Guide to The State's Best Rockhounding Sites",
        url: "https://amzn.to/4cwYtL3",
        image: "26",
        description: "A complete guide and source-book brimming with advice on collecting and preparing gems and minerals.",
        states: ["Nevada"]
    },
    {
        title: "Rockhounding Nevada: A Guide To The State's Best Rockhounding Sites",
        url: "https://amzn.to/4cQqxIX",
        image: "27",
        description: "A complete guide and source-book brimming with advice on collecting and preparing gems and minerals.",
        states: ["Nevada"]
    },
    {
        title: "Rockhounding New Mexico: A Guide to 140 of the State's Best Rockhounding Sites",
        url: "https://amzn.to/4eTyizH",
        image: "28",
        description: "More than a third of New Mexico is public land that holds untold quantities of mineralogical treasure. With this book anyone can learn where to find unusual mineral displays, fossils, jasper, agate, petrified wood—not to mention more obsidian than one rockhound could possibly collect in a lifetime. The array and quality of such materials just waiting to be found in New Mexico are almost mind-boggling.",
        states: ["New Mexico"]
    },
    {
        title: "New Mexico Rockhounding: A Guide to Minerals, Gemstones, and Fossils",
        url: "https://amzn.to/3WdcI1E",
        image: "29",
        description: "New Mexico ranks among the best mineral and fossil collecting regions in the nation and is a destination for rockhounds the world over. This county-by-county guide describes where to go and what you'll find at more than 150 mineral, rock, gemstone, or fossil collecting sites in the Land of Enchantment. You'll learn where to look for smithsonite at Magdalena's Kelly Mine, quartz \"diamonds\" in the bluffs of the Pecos River, and Pennsylvanian marine fossils in the limestone cliffs of Jemez Canyon. Also included are descriptions of eleven museums and eight national or state parks of geological paleontological, or archaeological interest.",
        states: ["New Mexico"]
    },
    {
        title: "Rockhounding New York: A Guide To The State's Best Rockhounding Sites",
        url: "https://amzn.to/4czuzWv",
        image: "30",
        description: "With this informative guide, you can explore the mineral-rich state of New York, from the beaches to the mountains. It describes the states' best rockhounding sites and covers popular and commercial sites as well as numerous little-known areas. This handy guide also describes how to collect specimens, includes maps and directions to each site, and lists rockhound clubs in the state. Rockhounding New York offers a complete introduction to this many-faceted hobby and is an invaluable sourcebook.",
        states: ["New York"]
    },
    {
        title: "The Rock Hound's Guide to New York State: Minerals, Fossils and Artifacts",
        url: "https://amzn.to/3Wc6zTr",
        image: "31",
        description: "The Rock Hound's Guide to New York State: Minerals, Fossils and Artifacts.",
        states: ["New York"]
    },
    {
        title: "Rock, Gem, and Mineral Collecting Sites in Western North Carolina",
        url: "https://amzn.to/3S1E34i",
        image: "32",
        description: "Describes sites that are open to collecting rocks, minerals, and gems, providing information on GPS coordinates, restrictions, owners, and fees.",
        states: ["North Carolina"]
    },
    {
        title: "A Rockhounding Guide: To North Carolina's Blue Ridge Mountains",
        url: "https://amzn.to/45YltQq",
        image: "33",
        description: "Presents clear, concise directions to rockhounding sites in the Blue Ridge mountains, and includes a list of rocks and minerals found there, recommended tools, and guidelines for safe and responsible collecting.",
        states: ["North Carolina"]
    },
    {
        title: "Rockhounding Oregon: A Guide to the State's Best Rockhounding Sites",
        url: "https://amzn.to/4fa92p9",
        image: "34",
        description: "This book provides detailed directions and GPS coordinates to the best rockhounding sites in Oregon, with valuable tips on what to tools to bring and how to conduct your search. Comprehensive lists of minerals or fossils for each site and excellent color photos will help you know what to look for and to identify what you’ve found. Information on clubs, rock shops, museums, and special attractions are provided. Rockhounding Oregon is a must-have for anyone interested in collecting their own minerals, gems, and fossils in the region.",
        states: ["Oregon"]
    },
    {
        title: "Rockhounding Oregon: A Guide to the State's Best Rockhounding Sites",
        url: "https://amzn.to/45WK6Ns",
        image: "35",
        description: "Fully revised and updated, this book provides detailed directions and GPS coordinates to the best rockhounding sites in Oregon, with valuable tips on what tools to bring and how to conduct your search. Comprehensive lists of minerals or fossils for each site and excellent color photos will help you know what to look for and to identify what you’ve found. Information on clubs, rock shops, museums, and special attractions are provided. Rockhounding Oregon is a must-have for anyone interested in collecting their own minerals, gems, and fossils in the region.",
        states: ["Oregon"]
    },
    {
        title: "Rockhounding Texas: A Guide to the State's Best Rockhounding Sites",
        url: "https://amzn.to/4eUQWqU",
        image: "36",
        description: "Rockhounding Texas is a complete guide to finding, collecting, and preparing Texas' gems & minerals. With this book anyone can learn where to find unusual mineral displays, fossils, jasper, agate, and petrified wood—not to mention more obsidian than one rockhound could possibly collect in a lifetime. An outstanding resource for experts and novices alike, Rockhounding Texas points the way to the state's best rockhounding sites, including popular and commercial areas as well as lesser-known sites on public land.",
        states: ["Texas"]
    },
    {
        title: "Rockhounding Utah: A Guide To The State's Best Rockhounding Sites",
        url: "https://amzn.to/3y26sR0",
        image: "37",
        description: "This completely updated and revised, full-color edition of Rockhounding Utah reveals the grandeur of the state's exposed formations, its canyon walls etched with fossils, and the spires and arches of the Needles District in Canyonlands National Park. Each description of the 86 state's sites includes concise information on the material to be found there, the tools to bring, the best season to visit, the vehicle to drive, or when a remote find suggests it's time to lace up the hiking boots. Readers will glean new insights into the obsidian of the Black Rock sites, jasper at Hell's Backbone, petrified wood at Bullfrog Turnoff, and fossils of sea lillies along the Wasatch Range.",
        states: ["Utah"]
    },
    {
        title: "Rockhounding Utah: A Guide To The State's Best Rockhounding Sites",
        url: "https://amzn.to/45WQ550",
        image: "38",
        description: "This completely updated and revised, full-color edition of Rockhounding Utah reveals the grandeur of the state's exposed formations, its canyon walls etched with fossils, and the spires and arches of the Needles District in Canyonlands National Park. Each description of the 86 state's sites includes concise information on the material to be found there, the tools to bring, the best season to visit, the vehicle to drive, or when a remote find suggests it's time to lace up the hiking boots. Readers will glean new insights into the obsidian of the Black Rock sites, jasper at Hell's Backbone, petrified wood at Bullfrog Turnoff, and fossils of sea lillies along the Wasatch Range.",
        states: ["Utah"]
    },
    {
        title: "Rockhounding Virginia: A Guide to the State’s Best Rockhounding Sites",
        url: "https://amzn.to/3zzSKWh",
        image: "39",
        description: "Explore the mineral-rich region of Virginia with veteran rockhound Robert Beard’s Rockhounding Virginia and unearth the state’s best rockhounding sites, ranging from popular and commercial sites to numerous lesser-known areas. Featuring an overview of the state’s geologic history as well as a site-by-site guide to the best rockhounding locations, Rockhounding Virginia is the ideal resource for rockhounds of all ages and experience levels.",
        states: ["Virginia"]
    },
    {
        title: "Rockhounding Washington: A Guide to the State's Best Sites",
        url: "https://amzn.to/45UmCbX",
        image: "40",
        description: "This book provides detailed directions and GPS coordinates to the best rockhounding sites in Washington, with valuable tips on what to tools to bring and how to conduct your search. Comprehensive lists of minerals or fossils for each site and excellent color photos will help you know what to look for and to identify what you’ve found. Information on clubs, rock shops, museums, and special attractions are provided. Rockhounding Washington is a must-have for anyone interested in collecting their own minerals, gems, and fossils in the region.",
        states: ["Washington"]
    },
    {
        title: "Gem Trails of Washington",
        url: "https://amzn.to/3S2ZzWt",
        image: "41",
        description: "Completely updated and revised, this comprehensive collecting guide covers all four corners of the Evergreen State, from the misty shores of the Olympic peninsula to the dust-dry ghost towns and abandoned mines near Metaline Falls.\nYou'll explore Washington's diverse geology in detail, ranging from fossil-rich Cambrian locales to seams of agate and jasper amid recent basalt flows.",
        states: ["Washington"]
    },
    {
        title: "Rockhounding Wisconsin: A Guide to the State's Best Sites",
        url: "https://amzn.to/3We48jm",
        image: "42",
        description: "Explore the mineral-rich region of Wisconsin with veteran rockhound Robert Beard’s Rockhounding Wisconsin and unearth the state’s best rockhounding sites, ranging from popular and commercial sites to numerous lesser-known areas. Featuring an overview of the state’s geologic history as well as a site-by-site guide to the best rockhounding locations, Rockhounding Wisconsin is the ideal resource for rockhounds of all ages and experience levels.",
        states: ["Wisconsin"]
    },
    {
        title: "Rockhounding Wyoming: A Guide to the State's Best Rockhounding Sites",
        url: "https://amzn.to/45UmEk5",
        image: "43",
        description: "The 75 sites described in this guide take you across the red desert to the high mountain majesty of the Big Horns and Wind Rivers as well as the geologic wonders of Yellowstone National Park. Graham, a former hardrock miner, developed an interest in rocks at an early age, and he shares his enthusiasm for rockhounding and his appreciation for the diverse Wyoming landscape that holds the treasure. Each description provides detailed information complete with maps on how to find the remote as well as popular digs, what will likely be found there, the tools to bring, the best season to visit, the appropriate vehicle to drive, or when to lace up your hiking boots to get to those out-of-the-way places.",
        states: ["Wyoming"]
    },
    {
        title: "Rockhounding Wyoming: A Guide to the State's Best Rockhounding Sites",
        url: "https://amzn.to/4cUUwzy",
        image: "44",
        description: "The 75 sites described in this guide take you across the red desert to the high mountain majesty of the Big Horns and Wind Rivers as well as the geologic wonders of Yellowstone National Park. Graham, a former hardrock miner, developed an interest in rocks at an early age, and he shares his enthusiasm for rockhounding and his appreciation for the diverse Wyoming landscape that holds the treasure. Each description provides detailed information complete with maps on how to find the remote as well as popular digs, what will likely be found there, the tools to bring, the best season to visit, the appropriate vehicle to drive, or when to lace up your hiking boots to get to those out-of-the-way places.",
        states: ["Wyoming"]
    }
];
