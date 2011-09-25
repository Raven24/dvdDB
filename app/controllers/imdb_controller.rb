class ImdbController < ApplicationController
  def fetch
      
    # only allow access via ajax
    if !request.xhr?
      #redirect_to root_url
    end

    @movies = []
    search = Imdb::Search.new(params[:query])
    search.movies[0..3].each do |movie|
      film = Imdb::Movie.new(movie.id);
      @movies.push(film);
    end

    respond_to do |format|
      format.html
      format.js
    end
    
  end

end
