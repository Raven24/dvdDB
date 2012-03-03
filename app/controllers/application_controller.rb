class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def after_sign_in_path_for(resource)
    return request.env['omniauth.origin'] || stored_location_for(resource) || root_path
  end

  def handle_api_post
    @model_name = self.class.name.sub("Controller", "").singularize.underscore

    newParams = {}
    params[@model_name].each do |key, val|
      if val.is_a?(Hash)
        newParams["#{key}_id"] = val[:id].to_i
      elsif val.is_a?(Array)
        newParams["#{key.singularize}_ids"] = val.map do |elem|
          if elem.is_a? Hash
            elem[:id].to_i
          else
            elem
          end
        end
      else
        newParams[key] = val
      end
    end

    puts newParams
    params[@model_name] = newParams

  end
  
end
