class OwnershipsController < ApplicationController

  respond_to :json

  def index
    @ownerships = Ownership.all
  end

  def show
    @ownership = Ownership.find(params[:id])
  end

  def new
    @ownership = Ownership.new
  end

  def edit
    @ownership = Ownership.find(params[:id])
  end

  def create
    medium = Medium.find(params[:ownership][:medium_id])
    
    @ownership = Ownership.new(params[:ownership])
    @ownership.medium = medium
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
