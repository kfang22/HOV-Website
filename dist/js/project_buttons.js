document.getElementById('btn-1').addEventListener('click', buttonID_1);
document.getElementById('btn-2').addEventListener('click', buttonID_2);
document.getElementById('btn-3').addEventListener('click', buttonID_3);

function buttonID_1() {
    const ID = 0;
    getJson(ID);
}
function buttonID_2() {
    const ID = 1;
    getJson(ID);
}
function buttonID_3() {
    const ID = 2;
    getJson(ID);
}


// Get local json data
function getJson(ID) {
    var image, name, post;

    fetch('js/projects.json')
        //catch the promise
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            if (ID === 0) {
                console.log(data[ID]);
                var button_1 = document.getElementById('btn-1');
                var button_2 = document.getElementById('btn-2');
                var button_3 = document.getElementById('btn-3');
                button_1.classList.remove('btn-main');
                button_1.classList.remove('btn-dark');
                button_2.classList.remove('btn-main');
                button_2.classList.remove('btn-dark');
                button_2.classList.remove('btn-main');
                button_2.classList.remove('btn-dark');
                button_1.classList.add('btn-main');
                button_2.classList.add('btn-dark');
                button_3.classList.add('btn-dark');

                var image = data[ID].img;
                var name = data[ID].name;
                var post = data[ID].post;

                document.getElementById('project123').innerHTML = `<img src="${image}" alt="" class="pic-edit">
                <div class="mission-about">
                    <p class="text-describe-main py-1">${name}</p>
                    <div class="bottom-pad">
                        <p class="text-container">${post}</p>
                    </div>`;

                console.log(data[ID].img);
                console.log(data[ID].name);
                console.log(data[ID].post);
            }

            if (ID === 1) {
                console.log(data[ID]);
                var button_1 = document.getElementById('btn-1');
                var button_2 = document.getElementById('btn-2');
                var button_3 = document.getElementById('btn-3');
                button_1.classList.remove('btn-main');
                button_1.classList.remove('btn-dark');
                button_2.classList.remove('btn-main');
                button_2.classList.remove('btn-dark');
                button_2.classList.remove('btn-main');
                button_2.classList.remove('btn-dark');
                button_2.classList.add('btn-main');
                button_1.classList.add('btn-dark');
                button_3.classList.add('btn-dark');

                var image = data[ID].img;
                var name = data[ID].name;
                var post = data[ID].post;

                document.getElementById('project123').innerHTML = `<img src="${image}" alt="" class="pic-edit">
                <div class="mission-about">
                    <p class="text-describe-main py-1">${name}</p>
                    <div class="bottom-pad">
                        <p class="text-container">${post}</p>
                    </div>`;

                console.log(data[ID].img);
                console.log(data[ID].name);
                console.log(data[ID].post);
            }

            if (ID === 2) {
                console.log(data[ID]);
                var button_1 = document.getElementById('btn-1');
                var button_2 = document.getElementById('btn-2');
                var button_3 = document.getElementById('btn-3');
                button_1.classList.remove('btn-main');
                button_1.classList.remove('btn-dark');
                button_2.classList.remove('btn-main');
                button_2.classList.remove('btn-dark');
                button_2.classList.remove('btn-main');
                button_2.classList.remove('btn-dark');
                button_3.classList.add('btn-main');
                button_1.classList.add('btn-dark');
                button_2.classList.add('btn-dark');

                var image = data[ID].img;
                var name = data[ID].name;
                var post = data[ID].post;

                document.getElementById('project123').innerHTML = `<img src="${image}" alt="" class="pic-edit ">
                <div class="mission-about">
                    <p class="text-describe-main py-1">${name}</p>
                    <div class="bottom-pad">
                        <p class="text-container">${post}</p>
                    </div>`;

                console.log(data[ID].img);
                console.log(data[ID].name);
                console.log(data[ID].post);
            }


        })
        .catch(function (err) {
            console.log(err);
        });
}