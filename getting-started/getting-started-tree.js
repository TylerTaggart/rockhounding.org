document.addEventListener('DOMContentLoaded', function() {
    const svgContainer = document.getElementById('tree-container');
    const width = svgContainer.clientWidth; // Use container width for responsiveness
    const height = svgContainer.clientWidth; // Set a fixed height or adjust dynamically

    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(40,0)");

    const treeData = {
        "name": "Start Here",
        "children": [
            {
                "name": "What Is Rockhounding?",
                "class": "types-of-rockhounding",
                "children": [
                    { "name": "Introduction" },
                    { "name": "History" },
                    { "name": "Why Rockhound?" },
                    { "name": "What about Crystals?" },
                    { "name": "What about Gold?" }
                ]
            },
            {
                "name": "Essential Gear",
                "class": "essential-gear",
                "children": [
                    { "name": "Rock Picks & Hammers" },
                    { "name": "Chisels" },
                    { "name": "Gloves" },
                    { "name": "Safety Glasses" },
                    { "name": "Bags and Backpacks" },
                    { "name": "Brushes & Spray Bottles" },
                    { "name": "First Aid Kit" }
                ]
            },
            {
                "name": "Finding Locations",
                "class": "finding-locations",
                "children": [
                    { "name": "Use our maps" },
                    { "name": "Verify With Google Search" },
                    { "name": "Local Groups" }
                ]
            },
            {
                "name": "Etiquette",
                "class": "rockhounding-etiquette",
                "children": [
                    { "name": "Leave No Trace" },
                    { "name": "Ethical Collecting" },
                    { "name": "Private Property" }
                ]
            },
            {
                "name": "Tips & Tricks",
                "class": "tips-tricks",
                "children": [
                    { "name": "Knowing What to Look For" },
                    { "name": "Spraying Rocks to See Them Wet" },
                    { "name": "When to Look in Streams" },
                    { "name": "Checking Banks, Gullies, and Hills" }
                ]
            },
            {
                "name": "Lapidary",
                "class": "lapidary",
                "children": [
                    { "name": "For Beginners" },
                    { "name": "Cutting" },
                    { "name": "Shaping" },
                    { "name": "Polishing" },
                    { "name": "Setting or Displaying" },
                    { "name": "Buying & Selling" }
                ]
            }
        ]
    };

    const root = d3.hierarchy(treeData);
    root.x0 = height / 2;
    root.y0 = 0;

    const treeLayout = d3.tree().size([height, width - 160]);

    const update = (source) => {
        const treeData = treeLayout(root);
        const nodes = treeData.descendants();
        const links = treeData.descendants().slice(1);

        nodes.forEach(d => {
            d.y = d.depth * 180;
        });

        const node = svg.selectAll('g.node')
            .data(nodes, d => d.id || (d.id = ++i));

        const nodeEnter = node.enter().append('g')
            .attr('class', d => `node ${d.data.class || ''}`)
            .attr('transform', d => `translate(${source.y0},${source.x0})`)
            .on('click', click);

        nodeEnter.append('circle')
            .attr('r', 10)
            .style('fill', d => d._children ? 'lightsteelblue' : '#fff');

        nodeEnter.append('text')
            .attr('dy', -20)
            .attr('x', 0)
            .attr('text-anchor', 'middle')
            .text(d => d.data.name);

        const nodeUpdate = nodeEnter.merge(node);

        nodeUpdate.transition()
            .duration(200)
            .attr('transform', d => `translate(${d.y},${d.x})`);

        nodeUpdate.select('circle')
            .attr('r', 10)
            .style('fill', d => d._children ? 'lightsteelblue' : '#fff');

        const nodeExit = node.exit().transition()
            .duration(200)
            .attr('transform', d => `translate(${source.y},${source.x})`)
            .remove();

        nodeExit.select('circle')
            .attr('r', 10);

        nodeExit.select('text')
            .style('fill-opacity', 1e-6);

        const link = svg.selectAll('path.link')
            .data(links, d => d.id);

        const linkEnter = link.enter().insert('path', 'g')
            .attr('class', 'link')
            .attr('d', d => {
                const o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });

        const linkUpdate = linkEnter.merge(link);

        linkUpdate.transition()
            .duration(200)
            .attr('d', d => diagonal(d, d.parent));

        const linkExit = link.exit().transition()
            .duration(200)
            .attr('d', d => {
                const o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
            .remove();

        nodes.forEach(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });

        function diagonal(s, d) {
            const path = `M ${s.y} ${s.x}
                          C ${(s.y + d.y) / 2} ${s.x},
                            ${(s.y + d.y) / 2} ${d.x},
                            ${d.y} ${d.x}`;
            return path;
        }

        function click(event, d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                if (d.parent) {
                    d.parent.children.forEach(node => {
                        if (node !== d && node.children) {
                            node._children = node.children;
                            node.children = null;
                        }
                    });
                }
                d.children = d._children;
                d._children = null;

                if (d.depth === 2) {
                    showContent(d);
                }
            }
            update(d);
        }

        function showContent(d) {
            const content = document.getElementById('tree-content');
            let contentHtml = '';
            switch(d.data.name) {
                case 'Introduction':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Rockhounding is the recreational activity of searching for and collecting rocks, minerals, and gemstones in their natural environment. It combines the excitement of exploration with the reward of discovering beautiful and unique natural specimens. Rockhounding can be enjoyed by people of all ages and backgrounds, providing a unique way to connect with nature and learn about the geological processes that shape our planet.</p>
                                   <p>Whether you are exploring your local creek, hiking in the mountains, or visiting a desert landscape, rockhounding offers endless opportunities for discovery. Each outing can yield new and interesting finds, from common quartz crystals to rare gemstones. The key to a successful rockhounding adventure is preparation, patience, and a keen eye for detail.</p>
                                   <a href="https://www.rockhounding.org/getting-started" class="learn-more-button">Learn More</a>`;
                    break;
                case 'History':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Rockhounding has a rich history dating back to ancient civilizations. Early humans collected rocks and minerals for tools, decoration, and trade. Artifacts made from flint, obsidian, and other materials demonstrate the importance of rocks and minerals in early human societies. Over time, the practice evolved, and by the 19th century, amateur geology became a popular hobby among the scientifically curious.</p>
                                   <p>In the modern era, rockhounding has grown into a well-loved pastime, with enthusiasts forming clubs, attending gem and mineral shows, and exploring new techniques for finding and identifying specimens. The history of rockhounding is intertwined with the development of geology as a science, and many rockhounds contribute valuable knowledge and specimens to the scientific community.</p>
                                   <a href="https://www.rockhounding.org/history-of-rockhounding/index.html" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Why Rockhound?':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Rockhounding offers a variety of benefits, making it a rewarding hobby for many people. The sense of adventure and the thrill of discovery are major draws. There's nothing quite like the excitement of finding a unique rock or mineral in its natural setting. Rockhounding also provides educational opportunities, helping enthusiasts learn about geology, mineralogy, and the natural world.</p>
                                   <p>Additionally, rockhounding can be a social activity, bringing together people with shared interests. Many rockhounding clubs organize field trips, workshops, and social events, fostering a sense of community. Finally, rockhounding can be financially rewarding. Some finds, such as gold nuggets or high-quality gemstones, can be quite valuable, and many rockhounds sell or trade their specimens.</p>
                                   <a href="https://www.rockhounding.org/why-rockhounding/index.html" class="learn-more-button">Learn More</a>`;
                    break;
                case 'What about Crystals?':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Crystals are a fascinating aspect of rockhounding. They are formed through various geological processes, including the cooling of molten rock, the evaporation of mineral-rich water, and the high-pressure conditions within the Earth. Crystals are not only beautiful but also hold significant scientific interest, providing insights into the conditions under which they formed.</p>
                                   <p>Common crystals found by rockhounds include quartz, amethyst, garnet, and calcite. Each type of crystal has its own unique properties and formation process. For example, quartz crystals can form in a variety of environments and are known for their clarity and hexagonal shape. Amethyst, a purple variety of quartz, forms in geodes and is prized for its vibrant color.</p>
                                   <a href="https://www.rockhounding.org/top-spots-for-unearthing-gems-in-the-us/index.html" class="learn-more-button">Learn More</a>`;
                    break;
                case 'What about Gold?':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Gold prospecting is a thrilling part of rockhounding. Gold has fascinated humans for centuries due to its beauty, rarity, and value. Prospecting for gold involves searching for gold deposits in their natural settings, typically in streams, rivers, and old mining areas. Techniques such as panning, sluicing, and metal detecting are commonly used to find gold.</p>
                                   <p>Panning is one of the simplest and oldest methods for finding gold. It involves using a pan to separate gold from sand and gravel in a stream. Sluicing is a more advanced technique that uses a sluice box to process larger amounts of material. Metal detecting is another popular method, particularly for finding gold nuggets. Each technique requires practice and patience but can be highly rewarding.</p>
                                   <a href="https://www.rockhounding.org/precious-metals/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Rock Picks & Hammers':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Essential tools for any rockhound, rock picks and hammers are used to extract specimens from the ground. Look for durable, high-quality tools that can withstand heavy use. Rock picks have a pointed end for breaking rocks and a flat end for prying them apart. Hammers, often referred to as geologist's hammers or rock hammers, are used to break rocks and split them open to reveal the minerals inside.</p>
                                   <p>When choosing a rock pick or hammer, consider the type of rock you will be working with and the weight of the tool. Heavier tools are better for breaking tough rocks, while lighter tools are easier to carry and use for extended periods. Safety is also important, so always wear protective gear such as gloves and safety glasses when using these tools.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Chisels':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Chisels are used in conjunction with rock hammers to split rocks and access hidden specimens. They come in various sizes and shapes to suit different tasks. Cold chisels are commonly used for rockhounding because they are designed to be struck with a hammer. Pointed chisels are ideal for creating cracks in rocks, while flat chisels are used to widen those cracks and split the rock apart.</p>
                                   <p>Using chisels effectively requires practice and precision. Always strike the chisel with controlled, steady blows to avoid damaging the rock or the chisel. It's also important to protect your hands and eyes by wearing gloves and safety glasses. Regularly inspect your chisels for signs of wear and replace them as needed to ensure they remain effective and safe to use.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                    case 'Gloves':
                        contentHtml = `<h3>${d.data.name}</h3>
                                       <p>Protective gloves are essential for rockhounding. They protect your hands from sharp edges and rough surfaces while providing a better grip on tools and specimens. Look for gloves that are durable, comfortable, and provide a good range of motion. Leather gloves are a popular choice for their durability, while gloves with reinforced fingertips offer extra protection when handling sharp rocks and tools.</p>
                                       <p>When choosing gloves, consider the types of environments you'll be working in. If you'll be working in wet conditions, waterproof gloves can keep your hands dry and comfortable. For hot environments, breathable gloves can prevent your hands from getting too sweaty. Always ensure your gloves fit well to avoid blisters and discomfort during extended use.</p>
                                       <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                        break;
                    case 'Safety Glasses':
                        contentHtml = `<h3>${d.data.name}</h3>
                                       <p>Safety glasses are crucial to protect your eyes from flying debris when using tools. Always wear them to ensure your safety while rockhounding. Safety glasses should fit snugly and comfortably, providing clear vision without fogging up. Look for glasses with impact-resistant lenses and side shields for extra protection.</p>
                                       <p>For those who wear prescription glasses, consider getting safety glasses that fit over your regular glasses or invest in prescription safety glasses. Anti-scratch and anti-fog coatings can enhance the durability and usability of your safety glasses. Remember, eye protection is one of the most important safety measures you can take while rockhounding.</p>
                                       <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                        break;
                    case 'Bags and Backpacks':
                        contentHtml = `<h3>${d.data.name}</h3>
                                       <p>Having a sturdy bag or backpack is important for carrying your tools and collected specimens. Look for ones with multiple compartments and strong straps. A good rockhounding backpack should be durable, comfortable, and able to carry heavy loads without straining your back. Consider backpacks with padded straps and back panels for added comfort during long outings.</p>
                                       <p>Some backpacks come with built-in hydration systems, which are handy for staying hydrated in the field. Additional features to look for include tool loops, reinforced bottoms, and weather-resistant materials. Choose a backpack that fits your specific needs and the types of environments you'll be exploring.</p>
                                       <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                        break;
                    case 'Brushes & Spray Bottles':
                        contentHtml = `<h3>${d.data.name}</h3>
                                       <p>Brushes and spray bottles are used to clean dirt off rocks and minerals, making it easier to see their features. They are especially useful in the field. Soft-bristle brushes are ideal for gently removing dirt and debris without scratching the specimens. Harder brushes can be used for tougher cleaning tasks, but be careful not to damage delicate specimens.</p>
                                       <p>Spray bottles filled with water can help reveal the true colors and details of rocks and minerals. This can be particularly useful when trying to identify specimens in the field. A small, portable spray bottle is easy to carry and can make a big difference in your rockhounding experience. Make sure to keep your brushes and spray bottles clean to avoid cross-contamination between specimens.</p>
                                       <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                        break;
                    case 'First Aid Kit':
                        contentHtml = `<h3>${d.data.name}</h3>
                                       <p>A first aid kit is a must-have for any outdoor activity, including rockhounding. Ensure it is stocked with essentials like bandages, antiseptics, and pain relievers. Your first aid kit should also include items like tweezers, scissors, adhesive tape, and a first aid manual. Customize your kit based on your personal needs and the environments you plan to explore.</p>
                                       <p>In addition to basic first aid supplies, consider adding items like sunscreen, insect repellent, and blister treatments. It's also a good idea to carry a whistle and an emergency blanket for added safety. Regularly check and restock your first aid kit to ensure all items are in good condition and within their expiration dates.</p>
                                       <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                        break;
                    case 'Use our maps':
                        contentHtml = `<h3>${d.data.name}</h3>
                                       <p>Our maps are a great resource for finding rockhounding locations. They provide detailed information on where to find various types of rocks and minerals. Our maps include GPS coordinates, site descriptions, and tips on what to look for in each location. They are regularly updated to ensure you have the most accurate and useful information available.</p>
                                       <p>Using our maps can save you time and effort in locating promising rockhounding sites. They are designed to be user-friendly and accessible, whether you're a beginner or an experienced rockhound. Don't forget to follow local regulations and obtain any necessary permits before visiting a new site. Always practice responsible rockhounding by respecting the environment and other collectors.</p>
                                       <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                        break;
                    
                        case 'Verify With Google Search':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Using Google Search can help verify the locations you find on our maps and provide additional information about the area. Always double-check to ensure the sites are accessible and legal to collect from. Searching for recent reviews, trip reports, and local regulations can provide valuable insights and help you avoid potential issues.</p>
                                           <p>When planning a rockhounding trip, use Google Search to look up specific sites and find out more about the types of rocks and minerals that can be found there. It's also useful for checking weather conditions, nearby amenities, and any potential hazards in the area. Being well-informed can greatly enhance your rockhounding experience.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Local Groups':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Joining local rockhounding groups can provide valuable insights and tips from experienced rockhounds. It's also a great way to find new locations and make friends with similar interests. Many local groups organize field trips, workshops, and social events, which can enhance your knowledge and skills.</p>
                                           <p>Local groups often have access to private lands and restricted areas that are not available to the general public. By becoming a member, you can gain access to these exclusive sites. Additionally, group members are usually happy to share their experiences and offer advice on the best tools, techniques, and safety practices. Participating in group activities can also be a lot of fun and help you build a network of fellow rockhounds.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Leave No Trace':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Always follow the Leave No Trace principles to protect the environment. This includes packing out all trash, minimizing disturbance to natural areas, and respecting wildlife. Leave No Trace practices help ensure that rockhounding sites remain pristine and available for future generations to enjoy.</p>
                                           <p>Some key principles of Leave No Trace include planning ahead and preparing, traveling and camping on durable surfaces, disposing of waste properly, leaving what you find, minimizing campfire impact, respecting wildlife, and being considerate of other visitors. By following these guidelines, you can help preserve the natural beauty of rockhounding sites and protect the habitats of the creatures that live there.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Ethical Collecting':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Ethical collecting means taking only what you need and ensuring future generations can enjoy rockhounding. Avoid over-collecting and always follow local laws and regulations. Ethical collecting practices help protect rare and sensitive environments from damage and depletion.</p>
                                           <p>When collecting specimens, consider the impact of your actions on the ecosystem. Take care not to disturb plants, animals, or geological features unnecessarily. Collecting responsibly also means sharing your knowledge with others and promoting conservation efforts within the rockhounding community. By practicing ethical collecting, you contribute to the sustainability of the hobby and the preservation of natural resources.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Private Property':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Always get permission before rockhounding on private property. Respect the landowner's rules and leave the area as you found it to maintain good relationships and access for future visits. Building trust with landowners is crucial for gaining access to private lands and can lead to discovering new and promising rockhounding sites.</p>
                                           <p>When seeking permission, be clear about your intentions and respectful of the landowner's concerns. Offer to share your finds or provide information about the local geology in return for access. Remember to follow any specific guidelines the landowner provides and to express your gratitude for their cooperation. Maintaining a positive relationship with landowners can benefit the entire rockhounding community.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Knowing What to Look For':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Knowing what to look for is key to successful rockhounding. Research the types of rocks, minerals, and fossils commonly found in your area before heading out. Understanding the geological history and characteristics of your region can help you identify promising sites and increase your chances of making valuable finds.</p>
                                           <p>Field guides, online resources, and local experts can provide valuable information on identifying and locating specific specimens. Pay attention to the color, texture, hardness, and crystal structure of rocks and minerals, as these features can help you differentiate between common and rare finds. Additionally, learning about the environmental conditions that favor the formation of certain minerals can guide your search efforts.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Spraying Rocks to See Them Wet':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Spraying rocks with water can reveal their true colors and features. This technique is especially useful for identifying specimens in the field. Water enhances the visibility of patterns, colors, and textures that might be hidden under a layer of dust or dirt.</p>
                                           <p>Carry a small spray bottle filled with water when you go rockhounding. When you find a rock or mineral that catches your eye, spray it lightly to see its true appearance. This can help you make more informed decisions about which specimens to collect. Additionally, spraying rocks can aid in the identification process by highlighting features that are characteristic of specific minerals.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'When to Look in Streams':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Streams can be great places to find rocks and minerals, especially after a rainstorm when new specimens may have been uncovered. Always be cautious of water levels and currents. Stream beds often contain a variety of interesting rocks and minerals that have been naturally tumbled and polished by the flowing water.</p>
                                           <p>Look for areas where the water slows down, such as bends or pools, where heavier materials like gold or gemstones are likely to settle. Use a pan or sieve to sift through the gravel and sediment in these areas. Remember to respect the environment and avoid disturbing aquatic habitats. Stream rockhounding can be a refreshing and rewarding experience, offering a chance to discover unique and beautiful specimens.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Checking Banks, Gullies, and Hills':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Banks, gullies, and hillsides are often rich in rockhounding opportunities. Look for exposed rock layers and areas with recent erosion. These features can reveal hidden treasures that have been buried for millions of years. Erosion exposes new surfaces and can unearth rocks and minerals that were previously inaccessible.</p>
                                           <p>When exploring these areas, pay attention to the types of rocks and minerals present. Look for signs of mineralization, such as veins or clusters of crystals, which can indicate the presence of valuable specimens. Be mindful of your safety, as steep or unstable terrain can be hazardous. Always wear appropriate footwear and take precautions to avoid slips and falls. With careful observation and a bit of luck, you can find remarkable specimens in these dynamic environments.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'For Beginners':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Lapidary work for beginners involves learning the basics of cutting, shaping, and polishing rocks and minerals. Start with simple projects to build your skills. Begin by familiarizing yourself with the tools and techniques used in lapidary work, such as saws, grinders, and polishers.</p>
                                           <p>Choose beginner-friendly materials like quartz or agates, which are relatively easy to work with. Practice making basic cuts and shapes before moving on to more complex projects. Many beginners start with tumbling, a process that smooths and polishes stones in a rotating barrel. This is a great way to achieve beautiful results with minimal equipment. As you gain confidence and experience, you can explore more advanced techniques and projects.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Cutting':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Cutting rocks is an essential part of lapidary work. Use a diamond saw to make precise cuts and reveal the beauty inside your specimens. Always follow safety guidelines. Diamond saws are preferred because they can cut through the hardest materials with ease, producing smooth and clean cuts.</p>
                                           <p>When cutting rocks, secure the specimen firmly and use a steady hand to guide the saw. Cutting oil or water is often used to cool the blade and reduce friction, preventing the rock from overheating and breaking. Practice cutting smaller pieces before tackling larger or more valuable specimens. Properly maintaining your saw and blades will ensure consistent and high-quality results. Remember to wear protective gear, such as safety glasses and gloves, to protect yourself from debris and sharp edges.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Shaping':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Shaping involves grinding and sanding rocks into desired forms. Various tools like grinders and sanders are used to achieve smooth surfaces and specific shapes. The shaping process allows you to transform rough rocks into beautiful, polished pieces that highlight their natural beauty.</p>
                                           <p>Start with coarse grinding to remove excess material and create the basic shape. Progress to finer grits for smoothing and refining the surface. Use water or cutting oil to keep the rock cool and reduce dust. Hand tools, such as files and rasps, can also be used for more detailed shaping work. Patience and attention to detail are key to achieving a professional finish. As you gain experience, you can experiment with different techniques to create intricate and unique designs.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Polishing':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Polishing rocks brings out their natural beauty. Use polishing wheels and compounds to achieve a glossy finish on your specimens. Polishing is the final step in the lapidary process, transforming a rough surface into a mirror-like shine that enhances the colors and patterns of the rock.</p>
                                           <p>Begin with coarse polishing compounds to remove minor scratches and imperfections. Progress to finer compounds for a smoother and more reflective surface. Use a polishing wheel or lap, applying light pressure and keeping the rock moving to avoid heat buildup. Polishing can also be done by hand with a cloth and polishing paste, though this method requires more time and effort. Properly maintained polishing equipment will yield the best results. Always wear protective gear, such as safety glasses and gloves, to protect yourself from dust and debris.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Setting or Displaying':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Displaying your rockhounding finds can be as rewarding as finding them. Learn techniques for setting stones in jewelry or creating attractive displays for your collection. There are many ways to showcase your specimens, from simple shelves and cases to elaborate custom displays that highlight their unique features.</p>
                                           <p>For jewelry, consider setting stones in pendants, rings, or earrings. Wire wrapping, bezel setting, and prong setting are popular techniques for securing stones in jewelry. For larger specimens, display stands and mounts can be used to hold them securely and enhance their visual appeal. Grouping similar specimens together can create a cohesive and striking display. Proper lighting is also important to highlight the colors and details of your collection. Whether you choose to display your finds at home or share them with others at rock shows and exhibitions, taking the time to present them well can greatly enhance your appreciation of their beauty.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        case 'Buying & Selling':
                            contentHtml = `<h3>${d.data.name}</h3>
                                           <p>Buying and selling rocks and minerals is a common part of the rockhounding community. Visit shop.rockhounding.org to buy and sell specimens from fellow enthusiasts. The rockhounding market offers a wide range of opportunities to acquire new specimens and share your finds with others.</p>
                                           <p>When buying rocks and minerals, research the seller and the specimen to ensure you are getting a fair deal. Look for reputable dealers and ask for detailed information about the specimen's origin and characteristics. When selling, provide clear descriptions and high-quality photos of your specimens. Transparency and honesty are key to building trust with buyers. Participating in rock shows, online marketplaces, and auctions can help you connect with other collectors and expand your network. Whether you are looking to add to your collection or share your finds with others, the buying and selling aspect of rockhounding can be both profitable and enjoyable.</p>
                                           <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                            break;
                        
                default:
                    contentHtml = `<h3>${d.data.name}</h3><p>More content coming soon...</p>`;
            }
            content.innerHTML = contentHtml;
        }
    };

    let i = 0;
    root.children.forEach(collapse);
    update(root);

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }
});
