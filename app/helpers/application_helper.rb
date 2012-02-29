module ApplicationHelper

  def handlebars name
    content_tag :script, :type=>"text/x-handlebars-template", :id=>name do
      Rails.root.join("app","assets","javascripts","app","templates","#{name}.handlebars").read.html_safe
    end
  end
  
end
