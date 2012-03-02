object @ownership

attributes :id, :location, :private

node :format do |ownership|
  ownership.format.name unless ownership.format.nil?
end
  
node :medium_id do |ownership|
  ownership.medium.id
end

node :user_id do |ownership|
  ownership.user.id
end

child :user do |user|
  attributes :name, :email
end
