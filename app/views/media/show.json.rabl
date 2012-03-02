object @medium

attributes :id, :title, :plot, :runtime, :year

node :show_url do |medium|
  medium_path(medium)
end

node :edit_url do |medium|
  edit_medium_path(medium)
end

node :delete_url do |medium|
  medium_path(medium)
end

node(:thumbnail_url) { |medium|
  medium.cover_url(:thumb)
}

node :poster_medium_url do |medium|
  medium.cover_url(:preview)
end

node :poster_full_url do |medium|
  medium.cover_url
end

child :genres do |genre|
  attributes :name
end

node :owner_count do |medium|
  medium.ownerships.size
end

child :ownerships do |ownership|
  extends "ownerships/show"
end

child :users do |user|
  attributes :name
end

node :user_has_it do |medium|
  current_user.media.exists?(@medium)
end