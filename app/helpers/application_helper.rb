module ApplicationHelper

  def handlebars(name, &block)
    content_tag :script, :type=>"text/x-handlebars-template", :id=>name do
      if block_given?
        yield
      else
        Rails.root.join("app","assets","javascripts","app","templates","#{name}.handlebars").read.html_safe
      end
    end
  end
  
end
