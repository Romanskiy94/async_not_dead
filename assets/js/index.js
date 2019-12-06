'use strict';


/*function loadUser(resolve, reject) {
    const request = new XMLHttpRequest();


    request.onload = function () {
       const user = JSON.parse(request.responseText);
        resolve(user)
    };

    request.onerror = function () {
        reject(new Error(`${this.status}: ${this.statusText}`))
    };

    request.open('GET', "./user.json");
    request.send();

}



new Promise(loadUser)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });*/


fetch('./user.json')
    .then(response => response.json())
    .then( appendUsersToList )
    .catch(console.error);

function appendUsersToList(users) {

    const userListElem = document.getElementById('usersList')

    users.forEach(
        user => {
            userListElem.appendChild(createUserCardElem(user))
        }
    )
}

function createUserCardElem(user){

    const userListItem = createUserListItemElem(user);

    userListItem.appendChild(createUserImageElem(user));
    userListItem.appendChild(createUserFullName(user));

    return userListItem;
}

function createUserListItemElem(user){

    const userListItem = document.createElement("li");

    userListItem.setAttribute("id", user.id);
    userListItem.classList.add("userListItem");

    return userListItem;
}

function createUserImageElem(user) {
    const userImage = document.createElement("img");

    userImage.setAttribute("src",user.profilePictureSrc);
    userImage.setAttribute("alt", "profile picture");

    const userImageContainer = document.createElement("div");

    userImageContainer.classList.add("profilePictureContainer");
    userImageContainer.appendChild(userImage);

    return userImageContainer;

}

function createUserFullName({name, surname}) {

    const userFullNameElem = document.createElement('h3')

    userFullNameElem.classList.add('userFullName');
    userFullNameElem.innerText = `${name} ${surname}`;

    return userFullNameElem;

}

function userNotPicture() {

    if (createUserImageElem){

    }

}
























