
// Counter Script
let elements=[];
let query_array=['.number_count','.instructors_count','.courses_count','.placement_counter']
        // Function to increment the number
        function incrementNumber(element) {
            const target = +element.getAttribute('data-target');
            
            const speed = 50; // Adjust the speed of the increment

            const updateCount = () => {
                const current = +element.innerText;
                const increment = target / speed;

                if (current < target) {
                    element.innerText = Math.ceil(current + increment);
                    setTimeout(updateCount, 30); // Adjust the interval
                } else {
                    element.innerText = target;
                }
            };

            updateCount();
        }

        // Intersection Observer callback
        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numberElement = entry.target;
                    // numberElement.classList.add('visible');
                    incrementNumber(numberElement);
                    observer.unobserve(numberElement);
                }
            });
            console.log(target);
        }

        // Creating the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5 // Trigger when 50% of the element is in view
        });

        query_array.forEach(element => {

            elements[query_array.indexOf(element)]=element
            
        });

        for(let i=0;i<=4;i++){
            // observer.observe(numberElement[i].toString());
            numberElement = document.querySelector(elements[i]);
            observer.observe(numberElement);
            console.log(numberElement);
        }

// counter Script End


// responsive script

function responsive(){
    let x=document.getElementById("nav");
    if(x.className==="navbar"){
        x.className+=" responsive";
    }

    else{
        x.className="navbar";
    }
}

// responsive script end


// about_dropdown onclick

function drp_down(){
    let drp_down=document.getElementsByClassName("drp-down")[0];
    let drp_down_content=document.getElementsByClassName("dropdown-content")[0];
    
    drp_down.addEventListener('click', function(event) {
        if (drp_down_content.style.display === "none") {
            drp_down_content.style.display = "block";
        } else {
            drp_down_content.style.display = "none";
        }
       
        event.stopPropagation();
    });
    


    if(drp_down_content.style.display = "block"){
        document.body.addEventListener('click', function(event) {
            drp_down_content.style.display = "none";
        });
    }
    

    
}

