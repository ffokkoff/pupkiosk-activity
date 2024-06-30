const map = document.querySelector("image");
const locShapes = document.querySelectorAll("g");

const locDetails = [
    {
        locName: "Amphitheater",
        description: "An outdoor gathering area where students and faculty hold various events and activities.",
        image: "res/locs/pup-amphitheater.jpg"
    },
    {
        locName: "Water Pump Facility",
        description: "A facility responsible for the distribution and management of water resources within the campus.",
        image: "res/locs/pup-waterpump.jpg"
    },
    {
        locName: "Campus Development and Maintenance Building",
        description: "A building dedicated to the planning, development, and maintenance of the campus infrastructure.",
        image: "res/locs/pup-maintenance.jpg"
    },
    {
        locName: "Charlie del Rosario Hall",
        description: "A multi-purpose hall used for various campus events, performances, and gatherings.",
        image: "res/locs/pup-charlie.jpg"
    },
    {
        locName: "Flagpole",
        description: "A prominent location on campus where the national flag is hoisted, symbolizing unity and pride.",
        image: "res/locs/pup-flagpole.jpg"
    },
    {
        locName: "Grandstand",
        description: "A seating area typically used for viewing sports events, ceremonies, and performances.",
        image: "res/locs/pup-grandstand.jpg"
    },
    {
        locName: "Gymnasium and Sports Center",
        description: "A facility equipped for various sports activities, physical education classes, and fitness programs.",
        image: "res/locs/pup-gymnasium.jpg"
    },
    {
        locName: "Interfaith Chapel",
        description: "A place of worship and reflection for people of different faiths within the campus community.",
        image: "res/locs/pup-chapel.jpg"
    },
    {
        locName: "Laboratory High School",
        description: "A high school affiliated with the university, offering specialized laboratory-based education.",
        image: "res/locs/pup-labhs.jpg"
    },
    {
        locName: "Lagoon",
        description: "A scenic water feature that enhances the campus environment and provides a relaxing atmosphere.",
        image: "res/locs/pup-lagoon.jpg"
    },
    {
        locName: "Main Building - Dome",
        description: "The central building on campus, characterized by its dome architecture and housing various university offices.",
        image: "res/locs/pup-dome.JPG"
    },
    {
        locName: "Main Building - North",
        description: "The northern section of the main campus building, serving as a key administrative and academic hub.",
        image: "res/locs/pup-north.jpg"
    },
    {
        locName: "Main Building - South",
        description: "The southern section of the main campus building, housing classrooms, lecture halls, and faculty offices.",
        image: "res/locs/pup-south.jpg"
    },
    {
        locName: "Main Building - West",
        description: "The western section of the main campus building, featuring architectural elements and facilities.",
        image: "res/locs/pup-west.jpg"
    },
    {
        locName: "Main Building - East",
        description: "The eastern section of the main campus building, offering academic and administrative services.",
        image: "res/locs/pup-east.JPG"
    },
    {
        locName: "Freedom Park",
        description: "A spacious area on campus used for outdoor activities, events, and recreational purposes.",
        image: "res/locs/pup-park.jpg"
    },
    {
        locName: "Ninoy Aquino Library and Learning Resources Center",
        description: "The university's main library, providing students and faculty with access to a wide range of resources.",
        image: "res/locs/pup-library.jpg"
    },
    {
        locName: "Outdoor Basketball and Volleyball Court",
        description: "Open-air courts for basketball and volleyball, popular spots for sports enthusiasts and athletes.",
        image: "res/locs/pup-basketball.jpg"
    },
    {
        locName: "Nutrition and Food Science Building",
        description: "A facility dedicated to the study and research of nutrition and food science.",
        image: "res/locs/pup-nutrition.jpg"
    },
    {
        locName: "Track and Football Oval",
        description: "A sports facility featuring a running track and football field, used for athletic events and training.",
        image: "res/locs/pup-oval.jpg"
    },
    {
        locName: "Physical Education Building",
        description: "A building equipped for physical education classes, sports training, and fitness activities.",
        image: "res/locs/pup-printing-property-eme.jpg"
    },
    {
        locName: "Pasig River",
        description: "The river adjacent to the campus, serving as a natural landmark and environmental feature.",
        image: "res/locs/pup-river.jpg"
    },
    {
        locName: "PUP Sta. Mesa Ferry Station",
        description: "The ferry station near the campus, providing transportation along the Pasig River.",
        image: "res/locs/pup-ferry.jpg"
    },
    {
        locName: "Student Canteen",
        description: "A dining facility on campus offering a variety of food options for students, faculty, and visitors.",
        image: "res/locs/pup-canteen.jpg"
    },
    {
        locName: "Linear Park",
        description: "A linear park on campus, providing green space for recreation, relaxation, and environmental conservation.",
        image: "res/locs/pup-linear.jpg"
    },
    {
        locName: "Mabini Monument - PUP Obelisk",
        description: "A monument on campus dedicated to Apolinario Mabini, a key figure in Philippine history.",
        image: "res/locs/pup-obelisk.jpg"
    },
    {
        locName: "Property Building",
        description: "A building used for managing university property, facilities, and real estate.",
        image: "res/locs/pup-printing-property-eme.jpg"
    },
    {
        locName: "Pylon",
        description: "A distinctive structure or landmark on campus, often used for navigation or identification.",
        image: "res/locs/pup-pylon.jpg"
    },
    {
        locName: "University Canteen - Sampaguita Building",
        description: "A canteen located in the Sampaguita Building, offering food and refreshments for the university community.",
        image: "res/locs/pup-sampaguita.jpg"
    },
    {
        locName: "Swimming Pool",
        description: "A pool facility on campus used for swimming classes, recreational swimming, and sports training.",
        image: "res/locs/pup-pool.jpg"
    },
    {
        locName: "Tennis Court",
        description: "A court facility for tennis enthusiasts and athletes to practice and compete.",
        image: "res/locs/pup-tennis.jpg"
    },
    {
        locName: "R.C. Overhead Water Tank",
        description: "An overhead water tank providing water storage and distribution for the campus.",
        image: "res/locs/pup-rc.jpg"
    },
    {
        locName: "Printing Press Building",
        description: "A building housing the university's printing press operations and publishing activities.",
        image: "res/locs/pup-printing-property-eme.jpg"
    },
    {
        locName: "Apolinario Mabini Shrine",
        description: "A shrine dedicated to Apolinario Mabini, a symbol of freedom and independence.",
        image: "res/locs/pup-shrine.jpg"
    },
    {
        locName: "Gazebo",
        description: "A small open-sided shelter or pavilion, often used for outdoor gatherings and events.",
        image: "res/locs/pup-gazebo.jpg"
    },
    {
        locName: "Visitor Information Center",
        description: "A center providing information and assistance to visitors, guests, and newcomers to the campus.",
        image: "res/locs/pup-visitors.JPG"
    },
    {
        locName: "Guard House",
        description: "A security post at the entrance of the campus, ensuring the safety and security of the university.",
        image: "res/locs/pup-guards.JPG"
    },
    {
        locName: "Community Building",
        description: "A building serving as a hub for community activities, meetings, and events.",
        image: "res/locs/pup-gabriela.jpg"
    },
    {
        locName: "Tahanan ng Alumni",
        description: "A place for alumni to gather, connect, and engage with the university and fellow graduates.",
        image: "res/locs/pup-alumni.jpg"
    },
    {
        locName: "Main Gate",
        description: "The main entrance gate of the campus, welcoming students, faculty, and visitors.",
        image: "res/locs/pup-maingate.jpg"
    }
]

const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupImage = document.getElementById("popup-image");
const popup = document.querySelector(".popup");

document.querySelectorAll(".locs-map").forEach((area, index) => {
    area.addEventListener("mouseover", () => {
        popupTitle.textContent = locDetails[index].locName;
        popupDescription.textContent = locDetails[index].description;
        popupImage.src = locDetails[index].image;
        popup.style.display = "block";
    });

    area.addEventListener("mouseout", () => {
        popup.style.display = "none";
    });

    document.addEventListener("mousemove", function(e){
        var x = e.clientX;
        var y = e.clientY;
        const popupWidth = popup.offsetWidth;

        const isSmallScreen = window.matchMedia("(max-width: 710px)").matches;
    
        if (isSmallScreen) {
            const maxX = window.innerWidth - popupWidth - 80;
            let leftPosition = x + 20; 
            if (leftPosition > maxX) {
                leftPosition = x - 130;
            }
            popup.style.left = leftPosition + "px";
        } else {
            const maxX = window.innerWidth - popupWidth - 250; // 250 is the additional offset for larger screens
            let leftPosition = x + 20; // 20 is an offset from the cursor
            if (leftPosition > maxX) {
                leftPosition = x - 300; // Adjust this value based on your requirements
            }
            popup.style.left = leftPosition + "px";
        }

        popup.style.top = y - 50 + "px";
    });
});

