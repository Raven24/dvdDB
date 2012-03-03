object @ownership

attributes :id, :location, :private

node :format do |ownership|
  { :id => ownership.format.id,
    :name => ownership.format.name
  } unless ownership.format.nil?
end
  
node :medium_id do |ownership|
  ownership.medium.id
end

node :user_id do |ownership|
  ownership.user.id
end

child :user do |user|
  attributes :id, :name, :email
end

child :languages do |language|
  attributes :id, :name
end
