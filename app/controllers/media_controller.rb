class MediaController < ApplicationController

  before_filter :authenticate_user!
  
  respond_to :html, :json
  
  def index
    @media = Medium.includes(:genres).order("title").page(params[:page]).per(6)
    @pages = @media.num_pages
  end

  def show
    @medium = Medium.find(params[:id])

    # generate preview version of image, if not exists
    if( !@medium.cover.preview.file.exists? )
      @medium.cover.preview.cache!(@medium.cover.file)
      @medium.cover.preview.store!
    end
  end

  def new
    @medium = Medium.new
    @medium.images.build
  end

  def edit
    @medium = Medium.find(params[:id])
  end

  def create
    @medium = Medium.new(params[:medium])

    respond_to do |format|
      if @medium.save
        format.html { redirect_to @medium, :notice => 'Medium was successfully created.' }
        format.json { render :json => @medium, :status => :created, :location => @medium }
      else
        format.html { render :action => "new" }
        format.json { render :json => @medium.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /media/1
  # PUT /media/1.json
  def update
    @medium = Medium.find(params[:id])

    respond_to do |format|
      if @medium.update_attributes(params[:medium])
        format.html { redirect_to @medium, :notice => 'Medium was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @medium.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /media/1
  # DELETE /media/1.json
  def destroy
    @medium = Medium.find(params[:id])
    @medium.destroy

    respond_to do |format|
      format.html { redirect_to media_url }
      format.json { head :ok }
    end
  end
end
