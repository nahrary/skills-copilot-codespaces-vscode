function skillsMember() {
    var member = document.getElementById('member').value;
    var member = member.toLowerCase();
    switch (member) {
        case "ronaldo":
            document.getElementById('skills').innerHTML = "Ronaldo is a good football player";
            break;
        case "messi":
            document.getElementById('skills').innerHTML = "Messi is a good football player";
            break;
        case "neymar":
            document.getElementById('skills').innerHTML = "Neymar is a good football player";
            break;
        default:
            document.getElementById('skills').innerHTML = "Sorry, we don't have information about this player";
    }
}