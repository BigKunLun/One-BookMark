$(document).ready(function() {

  function page_list_view(page_list){
    var flag
    for (var i = 0; i < page_list.length; i++) {
      if(i%4==0){
        $("#row-container").append("<div id='row" + i + "' class='row'></div")
        flag = i
      }
      html = "<div class='col-lg-3 col-md-6 col-sm-6'> \
                <a href='"+ page_list[i].href +"'> \
                  <div class='card card-stats'> \
                    <div class='card-header' data-background-color='"+page_list[i].color+"'> \
                      <i class='material-icons'>"+page_list[i].icon+"</i> \
                    </div> \
                    <div class='card-content'> \
                        <p class='category'>" + page_list[i].category + "</p> \
                        <h3 class='title'> \
                            " + page_list[i].title + " \
                        </h3> \
                    </div> \
                    <div class='card-footer'> \
                      <div class='stats'> \
                        <i class='material-icons' style='top:0'>local_offer</i> \
                        <a href='#'>"+page_list[i].note+"</a> \
                    </div> \
                  </div> \
                </a> \
              </div>"
      $("#row"+flag).append(html)
    }
  }

  $("ul.nav").html( _.template($("#nav_list").html(), my_bookmarks));

  page_list_view(my_bookmarks[0].page_list)

  $('ul.nav li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var page_name = $(this).find('p')[0].innerHTML;
    var page_list = _.find(my_bookmarks, function(data){ return data.page_name== page_name}).page_list;
    $("#row-container").html("");
    page_list_view(page_list);
  })

  // 每日一句
  $.ajax({
      url: 'http://open.iciba.com/dsapi/',
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',
      success: function(data){
        $(".navbar-brand").text(data.content)
        $(".navbar-brand").click(function(e){
          $(this).text(data.note)
        });
      }
  });

});
