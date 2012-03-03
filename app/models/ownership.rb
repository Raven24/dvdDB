class Ownership < ActiveRecord::Base

  belongs_to :medium
  belongs_to :user
  belongs_to :format

  has_and_belongs_to_many :languages
  
end
