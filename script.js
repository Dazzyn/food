function getInfo() {
    axios.get('http://37.221.92.138:5000/data')
      .then(function(response) {

        for (var i = 0; i < response.data.length; i++) {
            $("#see").append(`<div class="suggestion">
                <div class="name">${response.data[i][0]}</div>
                <div class="date">${response.data[i][2]}</div>
                <div class="food">${response.data[i][1]}</div>
            </div>`);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
}

function postInfo(data) {

    axios.post('http://37.221.92.138:5000/get', data)
        .then(function (response) {
            console.log("Response: " + response);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}

$("#create-button").click(function () {

    $("#see").hide();
    $("#create").show();
    $("#see").empty();

})

$("#see-button").click(function () {

    $("#see").show();
    $("#create").hide();
    $("#see").empty();

    getInfo();

})

$("#submit").click(function () {

    var name = $("#name").val();
    var food = $("#food").val();
    var date = $("#date").val();

    var data = {
        "name": name,
        "food": food,
        "date": date,
    };    
    
    postInfo(data);

})