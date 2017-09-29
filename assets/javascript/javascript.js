window.onload=function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5402d346796646b589f8a9853dcee337";
    var searchName=$('#searchName').val();
    var noRecords=$('#noRecords').val();
    var beginDate=$('#beginDate').val();
    var endDate=$('#endDate').val();
    var searchResult='';
    var searchButton = $("#searchButton");

    searchButton.on("click", function() {
        if (beginDate != '') {    

        }

        if (endDate != '') {

        }
        
        searchName = searchName.replace(/\s/g, "+");
        url+='&q=' + searchName;
        url+='&page=' + noRecords;




        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
                searchResult = result;
                  console.log(result);

            }).fail(function(err) {
                  throw err;
                });

    });

}