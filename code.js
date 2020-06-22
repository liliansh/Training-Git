function add(){
    let titlename=document.querySelector('#moviename').value,
    rating=document.querySelector('#movierating').value,
    tbody = document.querySelector('#tbody');
    $("#moviename").val(null);
    $("#movierating").val(null);
    if( rating>10 || rating<0){
        alert("enter number between 0 and 10");
        return;
    }
    tbody.innerHTML = tbody.innerHTML + `<tr><td>${titlename}</td><td>${rating}</td><td><button type="submit" class="DeleteButton" value="Click">Delete Movie</button></td></tr>`;
    $(".table").on("click", ".DeleteButton", function() {
 $(this).closest("tr").remove();
})}
