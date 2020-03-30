$(document).ready(function () {

    //make sure JS is loading properly
    console.log("ready");
    // create event handler for when user begins to type in search bar

    $("#searchUser").on("keyup", function (e) {

        //creat variable to store username
        let username = e.target.value

        // Make request to gitHub

        $.ajax({
            url: "https://api.github.com/users/" + username,
            data: {
                //using client id and secret I got from github developer registration as per documentation
                client_id: "e5a11ea03f02fac33c39",
                client_secret: "1ccbb8d2f02b8702bfb88d86d9e33ca31669319e"
            }
            //run function after data comes back, assign data response to var user 
        }).done(function (user) {
console.log(user)
            $("#profile").html(`
            
                            
            <div class="card">
            <div class="card-header">
              ${user.name} 
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="thumbnail" style="height:50%" >

                </div>
                <div class="col-md-9"
                </div>
              </div>
            
            </div>
          </div>

            `);

        });


    });


});



