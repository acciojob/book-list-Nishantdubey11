//your JS code here. If required.
$(document).ready(function(){
      $("#submit").click(function(){
        var title = $("#title").val();
        var author = $("#author").val();
        var isbn = $("#isbn").val();
        var row = "<tr><td>" + title + "</td><td>" + author + "</td><td>" + isbn + "</td><td><button type='button' class='btn btn-danger delete'>X</button></td></tr>";
        $("#book-list").append(row);
        $("#title").val("");
        $("#author").val("");
        $("#isbn").val("");
      });

      $(document).on("click", ".delete", function(){
        $(this).closest("tr").remove();
      });
    });