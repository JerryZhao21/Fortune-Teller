$(".calculate").click(function() {

    let currentTime = new Date();
    
    let year = currentTime.getFullYear();

    let glassesOfWater = $(".glassesofwater").val();

    let futureYears = Number($(".futureyears").val());

    let name = $(".yourname").val();

    let message = `<p>Hello ${name}. In the year ${year+futureYears}, you will have drank ${(glassesOfWater*365)*futureYears} glasses of water.</p> `;
    $(".endmessage").append(message);
});