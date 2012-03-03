class OverviewController < ApplicationController

  before_filter :authenticate_user!
  
  def index
    @media = current_user.media.order(:media=>[:title]).page(params[:page]).per(15)
    @pages = @media.num_pages
  end

end
