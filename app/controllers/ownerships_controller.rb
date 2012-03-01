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
    
    @ownership = Ownership.new
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

    respond_to do |format|
      if @ownership.update_attributes(params)
        format.html { redirect_to genres_url, :notice => 'Genre was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @ownership.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @ownership = Ownership.find(params[:id])
    @ownership.destroy

    respond_to do |format|
      format.html { redirect_to genres_url }
      format.json { head :ok }
    end
  end
end
