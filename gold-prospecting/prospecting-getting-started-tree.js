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
                "name": "What Is Gold Prospecting?",
                "class": "types-of-prospecting",
                "children": [
                    { "name": "Introduction" },
                    { "name": "History" },
                    { "name": "Why Prospect?" },
                    { "name": "What about Gold?" }
                ]
            },
            {
                "name": "Essential Gear",
                "class": "essential-gear",
                "children": [
                    { "name": "Gold Pans" },
                    { "name": "Sluice Boxes" },
                    { "name": "Metal Detectors" },
                    { "name": "Dredges" },
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
                "class": "prospecting-etiquette",
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
                                   <p>Gold prospecting is the recreational activity of searching for and collecting gold in its natural environment. It combines the excitement of exploration with the reward of discovering valuable and beautiful natural specimens. Gold prospecting can be enjoyed by people of all ages and backgrounds, providing a unique way to connect with nature and learn about the geological processes that shape our planet.</p>
                                   <p>Whether you are exploring your local creek, hiking in the mountains, or visiting a desert landscape, gold prospecting offers endless opportunities for discovery. Each outing can yield new and interesting finds, from gold flakes to nuggets. The key to a successful gold prospecting adventure is preparation, patience, and a keen eye for detail.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'History':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Gold prospecting has a rich history dating back to ancient civilizations. Early humans collected gold for tools, decoration, and trade. Artifacts made from gold demonstrate the importance of this metal in early human societies. Over time, the practice evolved, and by the 19th century, gold rushes became a significant part of history in many parts of the world.</p>
                                   <p>In the modern era, gold prospecting has grown into a well-loved pastime, with enthusiasts forming clubs, attending gold shows, and exploring new techniques for finding and identifying gold. The history of gold prospecting is intertwined with the development of geology as a science, and many prospectors contribute valuable knowledge and specimens to the scientific community.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Why Prospect?':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Gold prospecting offers a variety of benefits, making it a rewarding hobby for many people. The sense of adventure and the thrill of discovery are major draws. There's nothing quite like the excitement of finding a unique gold nugget in its natural setting. Gold prospecting also provides educational opportunities, helping enthusiasts learn about geology, mineralogy, and the natural world.</p>
                                   <p>Additionally, gold prospecting can be a social activity, bringing together people with shared interests. Many prospecting clubs organize field trips, workshops, and social events, fostering a sense of community. Finally, gold prospecting can be financially rewarding. Some finds, such as gold nuggets or high-quality flakes, can be quite valuable, and many prospectors sell or trade their specimens.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'What about Gold?':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Gold has fascinated humans for centuries due to its beauty, rarity, and value. Prospecting for gold involves searching for gold deposits in their natural settings, typically in streams, rivers, and old mining areas. Techniques such as panning, sluicing, and metal detecting are commonly used to find gold.</p>
                                   <p>Panning is one of the simplest and oldest methods for finding gold. It involves using a pan to separate gold from sand and gravel in a stream. Sluicing is a more advanced technique that uses a sluice box to process larger amounts of material. Metal detecting is another popular method, particularly for finding gold nuggets. Each technique requires practice and patience but can be highly rewarding.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Gold Pans':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Gold pans are essential tools for any gold prospector. They are used to separate gold from sediment in rivers and streams. Look for durable, high-quality pans with riffles to catch gold particles. Panning is a skill that takes practice to master, but it's a simple and effective way to find gold in areas with fine gold deposits.</p>
                                   <p>When choosing a gold pan, consider the size and material. Plastic pans are lightweight and often preferred for their durability and ease of use. Metal pans are also available and are more traditional but can be heavier. Choose a pan that feels comfortable to use and suits your prospecting needs. Always practice safe panning techniques to avoid losing any gold during the process.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Sluice Boxes':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Sluice boxes are used to process larger amounts of material and separate gold from other sediments. They are more efficient than panning and can increase your chances of finding gold. A sluice box uses the flow of water to separate heavier gold particles from lighter materials.</p>
                                   <p>When using a sluice box, position it in a stream with enough water flow to carry the material through the box. Feed material into the sluice box and let the water do the work of separating the gold. Regularly check the riffles for gold and clean out the box when necessary. Proper setup and maintenance of your sluice box are essential for successful gold prospecting.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Metal Detectors':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Metal detectors are valuable tools for finding gold nuggets in areas where panning and sluicing are less effective. Choose a metal detector specifically designed for gold prospecting, as they are more sensitive to small gold particles.</p>
                                   <p>When using a metal detector, learn how to adjust the settings for optimal performance in different conditions. Practice identifying different signals to distinguish between gold and other metals. Metal detecting can be a rewarding activity, providing the thrill of discovering gold nuggets hidden beneath the surface. Always follow local regulations and obtain any necessary permits before using a metal detector in a new area.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Dredges':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Dredges are used to extract gold from underwater deposits. They are more complex and expensive than other gold prospecting tools but can be highly effective in the right conditions. Dredging involves using a suction hose to vacuum up sediment from the riverbed, which is then processed to extract gold.</p>
                                   <p>When using a dredge, ensure you have the necessary permits and follow environmental regulations. Dredging can have a significant impact on the ecosystem, so it's important to minimize your environmental footprint. Regularly maintain and clean your dredge to ensure optimal performance and safety. Dredging can be a highly productive method for finding gold, especially in areas with rich underwater deposits.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Gloves':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Protective gloves are essential for gold prospecting. They protect your hands from sharp edges and rough surfaces while providing a better grip on tools and specimens. Look for gloves that are durable, comfortable, and provide a good range of motion. Leather gloves are a popular choice for their durability, while gloves with reinforced fingertips offer extra protection when handling sharp rocks and tools.</p>
                                   <p>When choosing gloves, consider the types of environments you'll be working in. If you'll be working in wet conditions, waterproof gloves can keep your hands dry and comfortable. For hot environments, breathable gloves can prevent your hands from getting too sweaty. Always ensure your gloves fit well to avoid blisters and discomfort during extended use.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Safety Glasses':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Safety glasses are crucial to protect your eyes from flying debris when using tools. Always wear them to ensure your safety while gold prospecting. Safety glasses should fit snugly and comfortably, providing clear vision without fogging up. Look for glasses with impact-resistant lenses and side shields for extra protection.</p>
                                   <p>For those who wear prescription glasses, consider getting safety glasses that fit over your regular glasses or invest in prescription safety glasses. Anti-scratch and anti-fog coatings can enhance the durability and usability of your safety glasses. Remember, eye protection is one of the most important safety measures you can take while gold prospecting.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Bags and Backpacks':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Having a sturdy bag or backpack is important for carrying your tools and collected specimens. Look for ones with multiple compartments and strong straps. A good prospecting backpack should be durable, comfortable, and able to carry heavy loads without straining your back. Consider backpacks with padded straps and back panels for added comfort during long outings.</p>
                                   <p>Some backpacks come with built-in hydration systems, which are handy for staying hydrated in the field. Additional features to look for include tool loops, reinforced bottoms, and weather-resistant materials. Choose a backpack that fits your specific needs and the types of environments you'll be exploring.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Brushes & Spray Bottles':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Brushes and spray bottles are used to clean dirt off rocks and minerals, making it easier to see their features. They are especially useful in the field. Soft-bristle brushes are ideal for gently removing dirt and debris without scratching the specimens. Harder brushes can be used for tougher cleaning tasks, but be careful not to damage delicate specimens.</p>
                                   <p>Spray bottles filled with water can help reveal the true colors and details of rocks and minerals. This can be particularly useful when trying to identify specimens in the field. A small, portable spray bottle is easy to carry and can make a big difference in your prospecting experience. Make sure to keep your brushes and spray bottles clean to avoid cross-contamination between specimens.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'First Aid Kit':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>A first aid kit is a must-have for any outdoor activity, including gold prospecting. Ensure it is stocked with essentials like bandages, antiseptics, and pain relievers. Your first aid kit should also include items like tweezers, scissors, adhesive tape, and a first aid manual. Customize your kit based on your personal needs and the environments you plan to explore.</p>
                                   <p>In addition to basic first aid supplies, consider adding items like sunscreen, insect repellent, and blister treatments. It's also a good idea to carry a whistle and an emergency blanket for added safety. Regularly check and restock your first aid kit to ensure all items are in good condition and within their expiration dates.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Use our maps':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Our maps are a great resource for finding gold prospecting locations. They provide detailed information on where to find various types of gold deposits. Our maps include GPS coordinates, site descriptions, and tips on what to look for in each location. They are regularly updated to ensure you have the most accurate and useful information available.</p>
                                   <p>Using our maps can save you time and effort in locating promising prospecting sites. They are designed to be user-friendly and accessible, whether you're a beginner or an experienced prospector. Don't forget to follow local regulations and obtain any necessary permits before visiting a new site. Always practice responsible prospecting by respecting the environment and other collectors.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Verify With Google Search':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Using Google Search can help verify the locations you find on our maps and provide additional information about the area. Always double-check to ensure the sites are accessible and legal to collect from. Searching for recent reviews, trip reports, and local regulations can provide valuable insights and help you avoid potential issues.</p>
                                   <p>When planning a prospecting trip, use Google Search to look up specific sites and find out more about the types of gold deposits that can be found there. It's also useful for checking weather conditions, nearby amenities, and any potential hazards in the area. Being well-informed can greatly enhance your prospecting experience.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Local Groups':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Joining local prospecting groups can provide valuable insights and tips from experienced prospectors. It's also a great way to find new locations and make friends with similar interests. Many local groups organize field trips, workshops, and social events, which can enhance your knowledge and skills.</p>
                                   <p>Local groups often have access to private lands and restricted areas that are not available to the general public. By becoming a member, you can gain access to these exclusive sites. Additionally, group members are usually happy to share their experiences and offer advice on the best tools, techniques, and safety practices. Participating in group activities can also be a lot of fun and help you build a network of fellow prospectors.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Leave No Trace':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Always follow the Leave No Trace principles to protect the environment. This includes packing out all trash, minimizing disturbance to natural areas, and respecting wildlife. Leave No Trace practices help ensure that prospecting sites remain pristine and available for future generations to enjoy.</p>
                                   <p>Some key principles of Leave No Trace include planning ahead and preparing, traveling and camping on durable surfaces, disposing of waste properly, leaving what you find, minimizing campfire impact, respecting wildlife, and being considerate of other visitors. By following these guidelines, you can help preserve the natural beauty of prospecting sites and protect the habitats of the creatures that live there.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Ethical Collecting':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Ethical collecting means taking only what you need and ensuring future generations can enjoy prospecting. Avoid over-collecting and always follow local laws and regulations. Ethical collecting practices help protect rare and sensitive environments from damage and depletion.</p>
                                   <p>When collecting gold, consider the impact of your actions on the ecosystem. Take care not to disturb plants, animals, or geological features unnecessarily. Collecting responsibly also means sharing your knowledge with others and promoting conservation efforts within the prospecting community. By practicing ethical collecting, you contribute to the sustainability of the hobby and the preservation of natural resources.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Private Property':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Always get permission before prospecting on private property. Respect the landowner's rules and leave the area as you found it to maintain good relationships and access for future visits. Building trust with landowners is crucial for gaining access to private lands and can lead to discovering new and promising prospecting sites.</p>
                                   <p>When seeking permission, be clear about your intentions and respectful of the landowner's concerns. Offer to share your finds or provide information about the local geology in return for access. Remember to follow any specific guidelines the landowner provides and to express your gratitude for their cooperation. Maintaining a positive relationship with landowners can benefit the entire prospecting community.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Knowing What to Look For':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Knowing what to look for is key to successful gold prospecting. Research the types of gold deposits commonly found in your area before heading out. Understanding the geological history and characteristics of your region can help you identify promising sites and increase your chances of making valuable finds.</p>
                                   <p>Field guides, online resources, and local experts can provide valuable information on identifying and locating specific deposits. Pay attention to the color, texture, and weight of materials, as these features can help you differentiate between gold and other minerals. Additionally, learning about the environmental conditions that favor the formation of gold deposits can guide your search efforts.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Spraying Rocks to See Them Wet':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Spraying rocks with water can reveal their true colors and features. This technique is especially useful for identifying specimens in the field. Water enhances the visibility of patterns, colors, and textures that might be hidden under a layer of dust or dirt.</p>
                                   <p>Carry a small spray bottle filled with water when you go prospecting. When you find a rock or mineral that catches your eye, spray it lightly to see its true appearance. This can help you make more informed decisions about which specimens to collect. Additionally, spraying rocks can aid in the identification process by highlighting features that are characteristic of specific minerals.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'When to Look in Streams':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Streams can be great places to find gold, especially after a rainstorm when new deposits may have been uncovered. Always be cautious of water levels and currents. Stream beds often contain a variety of interesting materials, including gold flakes and nuggets, that have been naturally concentrated by the flowing water.</p>
                                   <p>Look for areas where the water slows down, such as bends or pools, where heavier materials like gold are likely to settle. Use a pan or sluice box to process the gravel and sediment in these areas. Remember to respect the environment and avoid disturbing aquatic habitats. Stream prospecting can be a refreshing and rewarding experience, offering a chance to discover valuable gold deposits.</p>
                                   <a href="https://www.rockhounding.org/" class="learn-more-button">Learn More</a>`;
                    break;
                case 'Checking Banks, Gullies, and Hills':
                    contentHtml = `<h3>${d.data.name}</h3>
                                   <p>Banks, gullies, and hillsides are often rich in gold prospecting opportunities. Look for exposed rock layers and areas with recent erosion. These features can reveal hidden gold deposits that have been buried for millions of years. Erosion exposes new surfaces and can unearth gold that was previously inaccessible.</p>
                                   <p>When exploring these areas, pay attention to the types of materials present. Look for signs of mineralization, such as veins or clusters of gold, which can indicate the presence of valuable deposits. Be mindful of your safety, as steep or unstable terrain can be hazardous. Always wear appropriate footwear and take precautions to avoid slips and falls. With careful observation and a bit of luck, you can find remarkable gold deposits in these dynamic environments.</p>
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
