class OverviewController < ApplicationController

  before_filter :authenticate_user!
  
  def index
    render :text => "dashboard under construction ...", :layout => true
  end

end
