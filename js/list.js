// <========================================< DOM Part Starts >==========================================================>
    let doneTask = 0;
let completedTask = document.querySelector('.completedTask');
let totalTask = 0;
let listedTask = document.querySelector('.listedTask');
let farming = document.querySelector('.farming');
let userTaskInp = document.querySelector('.userTaskInp');
let addBtn = document.querySelector('.addBtn');                                             
let motherList = document.querySelector('.motherList');

let turn = true;
// <------------------------------------------<DOM part ends>------------------------------------------------------------>

// ...................................................................... Error removal Function
userTaskInp.addEventListener('click', () => {
    farming.style = "border: none";
});

// ...................................................................... enter key function
let enterKeyFun = (item) => {
    if (item.key == 'Enter') {
        btnClickFun();
    }
};

// ....................................................................... button click function
let btnClickFun = () => {
    if (userTaskInp.value == "") {
        farming.style = "border: 2px solid orangered;";
        userTaskInp.blur();
    } else {
        // ==================================> create element
        let list = document.createElement('div');
        let listBox = document.createElement('div');
        let check = document.createElement('div');
        let checkBox = document.createElement('input');
        let listTaskInp = document.createElement('input');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        // ==============================> showing path
        motherList.appendChild(list);
        list.appendChild(listBox);
        listBox.appendChild(check);
        check.appendChild(checkBox);
        listBox.appendChild(listTaskInp);
        listBox.appendChild(editBtn);
        listBox.appendChild(deleteBtn);

        // ================================> adding class
        list.classList.add('list');
        listBox.classList.add('listBox');
        check.classList.add('check');
        checkBox.classList.add('checkBox');
        listTaskInp.classList.add('listTaskInp');
        editBtn.classList.add('editBtn');
        deleteBtn.classList.add('deleteBtn');

        // =========================> adding attributes
        checkBox.type = "checkbox";
        listTaskInp.setAttribute('readonly', 'readonly');
        editBtn.innerHTML = "Edit";

        // ......................................................... Data transfer function
        listTaskInp.value = userTaskInp.value;
        userTaskInp.value = "";
        totalTask++;
        listedTask.innerHTML = totalTask;

        // .......................................................... CheckBox function
        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                doneTask++;
                completedTask.innerHTML = doneTask;
                editBtn.style = 'display: none';
                listTaskInp.style = "text-decoration: line-through;";

                // Trigger sparkle animation when a task is marked as complete
                sparkleAnimation(listBox);

            } else {
                doneTask--;
                completedTask.innerHTML = doneTask;
                editBtn.style = 'display: block';
                listTaskInp.style = 'text-decoration: none;';
            }
            updateProgress(); // Update progress bar
        });

        // ............................................................. Edit function
        editBtn.addEventListener('click', () => {
            if (turn) {
                editBtn.style = 'background: url(images/save.png); background-position: center; background-repeat: no-repeat; background-size: 56%; border-radius: 50%;';
                listTaskInp.removeAttribute('readonly');
                listTaskInp.style = 'background: transparent';
                turn = false;
            } else {
                editBtn.style = 'background: url(images/edit.png); background-position: center; background-repeat: no-repeat; background-size: 56%; border-radius: 50%;';
                listTaskInp.setAttribute('readonly', 'readonly');
                listTaskInp.style = 'background: var(--secondaryBackground)';
                turn = true;
            }
        });

        //.................................................................. delete function
        deleteBtn.addEventListener('click', () => {
            listBox.remove();
            if (totalTask > 0) {
                totalTask--;
                listedTask.innerHTML = totalTask;
            }
            if (doneTask > 0) {
                doneTask--;
                completedTask.innerHTML = doneTask;
            }
            updateProgress();
        });
    }
};

// ...................................................... Function to update progress and trigger confetti
function updateProgress() {
    let progressPercentage = totalTask ? (doneTask / totalTask) * 100 : 0;
    document.getElementById('progress').style.width = `${progressPercentage}%`;

    // Trigger confetti if all tasks are done
    if (doneTask === totalTask && totalTask > 0) {
        allTasksCompleteAnimation();
    }
}

// .........................Sparkle animation for task actions
const sparkleAnimation = (element) => {
    const sparkleContainer = document.createElement("div");
    sparkleContainer.classList.add("sparkle-container");
    element.appendChild(sparkleContainer); // Attach to the task element

    for (let i = 0; i < 20; i++) { // Reduce number for subtle effect
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
        sparkleContainer.appendChild(sparkle);
    }

    // Remove sparkles after animation completes
    setTimeout(() => {
        sparkleContainer.remove();
    }, 1500);
};

// ...................................................... Special animation for all tasks complete
function allTasksCompleteAnimation() {
    const completeContainer = document.createElement("div");
    completeContainer.classList.add("complete-animation");
    document.body.appendChild(completeContainer);

    const confettiCount = 100; // Number of confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Set the confetti start position (center of the screen)
        confetti.style.left = "50vw";
        confetti.style.top = "50vh";
       
        // Set random color
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        // Add confetti to container
        completeContainer.appendChild(confetti);

        // Set random animation properties for burst effect
        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const distance = Math.random() * 200 + 50; // Random distance to travel
        const duration = Math.random() * 1 + 1.5; // Random duration (1.5 to 2.5s)

        // Apply animation with random directions and distances
        confetti.animate([
            { transform: `translate(0, 0)`, opacity: 1 }, // Start at center
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                opacity: 0 // Move outwards and fade
            }
        ], {
            duration: duration * 1050,
            easing: "ease-out",
            fill: "forwards"
        });
    }

    // Remove confetti after animation completes
    setTimeout(() => {
        completeContainer.remove();
    }, 4000);
}

