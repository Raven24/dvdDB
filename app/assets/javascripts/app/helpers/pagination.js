
Handlebars.registerHelper('pagination', function(context, opts) {
  var page = context.page || 1;
  var url  = context.baseUrl + '/page/';
  var ret = "<ul>";
  for(var i=0; i<context.pages; i++) {
    var className = (i+1==page) ? "current" : "";
    var p = (i+1);
    ret += '<li class="'+className+'">';
    ret += '<a href="'+url+p+'" data-page="'+p+'">' + p + '</a>';
    ret += '</li>';
  }
  ret += "</ul>";
  return ret;
});
