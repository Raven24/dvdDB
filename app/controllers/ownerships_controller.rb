class OwnershipsController < ApplicationController

  respond_to :json
  before_filter :handle_api_post, :only => [:create, :update]

  def index
    @ownerships = Ownership.all
  end

  def show
    @ownership = Ownership.includes(:medium, :user, :format, :languages).find(params[:id])
  end

  def new
    @ownership = Ownership.new
  end

  def edit
    @ownership = Ownership.find(params[:id])
  end

  def create
    @ownership = Ownership.new(params[:ownership])
    @ownership.user = current_user

    if @ownership.save
      render :action => "show"
    else
      render :action => "new"
    end
  end

  def update
    @ownership = Ownership.find(params[:id])
    params[:ownership].delete(:user)

    if @ownership.update_attributes(params[:ownership])
      render :action => "show"
    else
      render :action => "edit"
    end
  end

  def destroy
    @ownership = Ownership.find(params[:id])
    @ownership.destroy
    render :action => "show"
  end
end
